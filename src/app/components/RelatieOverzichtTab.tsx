import type { Relatie, ContactPersoon, Contract } from "../data/api";
import { mockContracten } from "../data/mock-contract-data";
import { mockRelatieLadingen, mockRelatieVaartuigen, mockMailConversaties, mockGespreksverslagen } from "../data/mock-relatie-data";
import type { RelatieLading, MailConversatie, Gespreksverslag } from "../data/mock-relatie-data";
import type { RelatieVaartuig } from "../data/mock-relatie-data";

interface RelatieOverzichtTabProps {
  relatie: Relatie;
  contactPersonen: ContactPersoon[];
}

interface SummaryItem {
  icon: "warning" | "ship" | "mail" | "contract" | "info" | "gesprek";
  text: string;
}

function dagenGeleden(dateStr: string): number {
  return Math.floor((Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
}

function generateAiSummary(
  _relatie: Relatie,
  ctx: {
    activeLadingen: number;
    activeSpot: number;
    activeContracten: number;
    relatieLadingen: RelatieLading[];
    relatieSpot: Contract[];
    relatieContracten: Contract[];
    relatieVaartuigen: RelatieVaartuig[];
    relatieMail: MailConversatie[];
    relatieGesprekken: Gespreksverslag[];
    contactPersonen: ContactPersoon[];
  }
): SummaryItem[] {
  const items: SummaryItem[] = [];

  // Deals die aandacht nodig hebben — concreet benoemen
  for (const deal of [...ctx.relatieSpot, ...ctx.relatieContracten]) {
    if (deal.status === "aandacht_nodig") {
      items.push({ icon: "warning", text: `"${deal.titel}" vraagt aandacht` });
    }
    if (deal.status === "in_onderhandeling") {
      const dagen = dagenGeleden(deal.laatsteUpdate);
      const contact = ctx.contactPersonen.find((cp) => cp.id === deal.contactPersoonId);
      const naam = contact?.naam.split(" ")[0] || "de klant";
      if (dagen > 0) {
        items.push({ icon: "warning", text: `Ons bod op "${deal.titel}" ligt al ${dagen} dagen bij ${naam}` });
      } else {
        items.push({ icon: "ship", text: `"${deal.titel}" is vandaag bijgewerkt — in onderhandeling met ${naam}` });
      }
    }
  }

  // Ladingen met matches op eigen vaartuigen
  const marktLadingen = ctx.relatieLadingen.filter((l) => l.status === "markt");
  for (const lading of marktLadingen) {
    if (lading.matches && lading.matches > 0) {
      items.push({ icon: "ship", text: `"${lading.titel}" staat in de markt met ${lading.matches} match${lading.matches > 1 ? "es" : ""}` });
    }
  }

  // Laatste mail — focus op inhoud, niet op metadata
  if (ctx.relatieMail.length > 0) {
    const sorted = [...ctx.relatieMail].sort((a, b) => new Date(b.laatsteDatum).getTime() - new Date(a.laatsteDatum).getTime());
    const laatste = sorted[0];
    const laatsteBericht = laatste.berichten[laatste.berichten.length - 1];
    const naam = laatsteBericht.van.naam.split(" ")[0];
    const inhoud = extractInsight(laatsteBericht.inhoud);
    items.push({ icon: "mail", text: `In laatste mail gaf ${naam} aan: "${inhoud}"` });
  }

  // Laatste gesprek — samengevat in eigen woorden
  if (ctx.relatieGesprekken.length > 0) {
    const sorted = [...ctx.relatieGesprekken].sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
    const laatste = sorted[0];
    const cp = ctx.contactPersonen.find((c) => c.id === laatste.contactPersoonId);
    const naam = cp?.naam.split(" ")[0] || "contactpersoon";
    const dagen = dagenGeleden(laatste.datum);
    const datumLabel = dagen === 0 ? "vandaag" : dagen === 1 ? "gisteren" : `${dagen}d geleden`;
    const samenvatting = summarizeGesprek(laatste.inhoud, naam);
    items.push({ icon: "gesprek", text: `Gesprek met ${naam} (${datumLabel}): ${samenvatting}` });
  }

  if (items.length === 0) {
    items.push({ icon: "info", text: "Geen openstaande zaken" });
  }

  return items;
}

function summarizeGesprek(text: string, naam: string): string {
  const clean = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
  // Extract key actions: look for patterns like "wij gaan", "ik heb", "hij/zij wil", etc.
  const actionPatterns = [
    /(?:wij|we) gaan ([^.]+)/i,
    /(?:hij|zij|ze) (?:wil|vraagt|zoekt|heeft|geeft aan) ([^.]+)/i,
    /(?:ik heb|ik ga) ([^.]+)/i,
    /(?:belt|bellen) (?:over|voor) ([^.]+)/i,
  ];
  const actions: string[] = [];
  for (const pattern of actionPatterns) {
    const match = clean.match(pattern);
    if (match) actions.push(match[0].toLowerCase());
  }
  if (actions.length > 0) {
    // Take first meaningful action, capitalize first letter
    const action = actions[0];
    return action.charAt(0).toUpperCase() + action.slice(1);
  }
  // Fallback: first meaningful sentence chunk
  const stripped = clean.replace(/^besproken:\s*/i, "");
  const sentence = stripped.match(/^.{15,90}[.!?]/);
  if (sentence) return sentence[0];
  return stripped.length > 80 ? stripped.slice(0, 80) + "..." : stripped;
}

function extractInsight(text: string): string {
  const clean = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
  // Strip greeting lines
  const stripped = clean
    .replace(/^(Hoi|Beste|Hallo|Dear|Geachte)[^,.]*[,.]\s*/i, "")
    .replace(/^(Bedankt voor[^.]*\.\s*)/i, "");
  // Get first meaningful sentence
  const match = stripped.match(/^.{15,100}[.!?]/);
  if (match) return match[0];
  return stripped.length > 80 ? stripped.slice(0, 80) + "..." : stripped;
}

export default function RelatieOverzichtTab({ relatie, contactPersonen }: RelatieOverzichtTabProps) {
  const relatieSpot = mockContracten.filter((c) => c.relatieId === relatie.id && c.type === "spot");
  const relatieContracten = mockContracten.filter((c) => c.relatieId === relatie.id && c.type === "contract");
  const relatieLadingen = mockRelatieLadingen.filter((l) => l.relatieId === relatie.id);
  const relatieVaartuigen = mockRelatieVaartuigen.filter((v) => v.relatieId === relatie.id);
  const relatieMail = mockMailConversaties.filter((m) => m.relatieId === relatie.id);
  const relatieGesprekken = mockGespreksverslagen.filter((g) => g.relatieId === relatie.id);

  const activeLadingen = relatieLadingen.filter((l) => l.status !== "gesloten").length;
  const activeSpot = relatieSpot.filter((c) => c.status !== "verloren" && c.status !== "gewonnen").length;
  const activeContracten = relatieContracten.filter((c) => c.status !== "verloren").length;

  return (
    <div className="w-full px-[24px] flex flex-col gap-[32px] pb-[32px]">
      {/* AI Summary */}
      <div>
        <div className="flex items-center gap-[8px] mb-[12px]">
          <div className="size-[20px] text-[#1567a4]">
            <svg className="size-full" fill="none" viewBox="0 0 20 20">
              <path d="M10 2L12.09 7.26L18 8.27L13.82 12.14L14.94 18.02L10 15.27L5.06 18.02L6.18 12.14L2 8.27L7.91 7.26L10 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">AI Samenvatting</p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
          {generateAiSummary(relatie, { activeLadingen, activeSpot, activeContracten, relatieLadingen, relatieSpot, relatieContracten, relatieVaartuigen, relatieMail, relatieGesprekken, contactPersonen }).map((item, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <span className="shrink-0 mt-[3px]">
                {item.icon === "warning" ? (
                  <svg className="size-[14px] text-[#dc6803]" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M8 5.5V8.5M8 10.5H8.005" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></svg>
                ) : item.icon === "mail" ? (
                  <svg className="size-[14px] text-[#1567a4]" fill="none" viewBox="0 0 16 16"><rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M2.5 4.5L8 8.5L13.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                ) : item.icon === "ship" ? (
                  <svg className="size-[14px] text-[#1567a4]" fill="none" viewBox="0 0 16 16"><path d="M3 10L4.5 6H11.5L13 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M8 3.5V6M6 6V5H10V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M2 12.5C3.5 11.5 5.5 11.5 8 12.5C10.5 11.5 12.5 11.5 14 12.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></svg>
                ) : item.icon === "gesprek" ? (
                  <svg className="size-[14px] text-[#667085]" fill="none" viewBox="0 0 16 16"><path d="M2 3.5C2 2.67 2.67 2 3.5 2H12.5C13.33 2 14 2.67 14 3.5V9.5C14 10.33 13.33 11 12.5 11H5L2 14V3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                ) : item.icon === "contract" ? (
                  <svg className="size-[14px] text-[#667085]" fill="none" viewBox="0 0 16 16"><rect x="3.5" y="2" width="9" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M6 5.5H10M6 8H10M6 10.5H8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></svg>
                ) : (
                  <svg className="size-[14px] text-[#667085]" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M8 5.5V8.5M8 10.5H8.005" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></svg>
                )}
              </span>
              <p className="font-sans font-normal text-[14px] leading-[20px] text-rdj-text-primary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Taken (placeholder) */}
      <div>
        <div className="flex items-center justify-between mb-[12px]">
          <div className="flex items-center gap-[8px]">
            <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">Taken</p>
            <span className="inline-flex items-center justify-center min-w-[20px] h-[20px] rounded-full px-[6px] bg-[#f2f4f7] font-sans font-bold text-[12px] leading-[16px] text-rdj-text-secondary">
              0
            </span>
          </div>
          <button className="font-sans font-bold text-[14px] leading-[20px] text-rdj-text-brand hover:underline">
            + Taak toevoegen
          </button>
        </div>
        <div className="border border-rdj-border-secondary rounded-[8px] p-[24px] text-center">
          <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
            Nog geen openstaande taken voor deze relatie.
          </p>
        </div>
      </div>

      {/* Contactpersonen */}
      <div>
        <div className="flex items-center justify-between mb-[12px]">
          <div className="flex items-center gap-[8px]">
            <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">Contactpersonen</p>
            <span className="inline-flex items-center justify-center min-w-[20px] h-[20px] rounded-full px-[6px] bg-[#f2f4f7] font-sans font-bold text-[12px] leading-[16px] text-rdj-text-secondary">
              {contactPersonen.length}
            </span>
          </div>
        </div>
        {contactPersonen.length === 0 ? (
          <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">Geen contactpersonen.</p>
        ) : (
          <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Naam</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Functie</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">E-mail</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Telefoon</th>
                </tr>
              </thead>
              <tbody>
                {contactPersonen.slice(0, 5).map((cp) => (
                  <tr key={cp.id} className="border-b border-rdj-border-secondary last:border-b-0">
                    <td className="px-[12px] py-[10px] font-sans font-bold text-[14px] text-rdj-text-primary">{cp.naam}</td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-secondary">{cp.functie || "—"}</td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-brand">{cp.email || "—"}</td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{cp.telefoon || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
