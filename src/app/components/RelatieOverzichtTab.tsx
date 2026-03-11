import { useNavigate } from "react-router";
import type { Relatie, ContactPersoon } from "../data/api";
import { mockContracten, CONTRACT_STATUS_LABELS, CONTRACT_STATUS_VARIANT_MAP } from "../data/mock-contract-data";
import { mockRelatieLadingen, mockRelatieVaartuigen } from "../data/mock-relatie-data";
import Badge from "./Badge";

interface RelatieOverzichtTabProps {
  relatie: Relatie;
  contactPersonen: ContactPersoon[];
  onTabChange: (tab: "overzicht" | "ladingen" | "vaartuigen" | "spot" | "contracten" | "activiteit") => void;
}

function SectionHeader({ title, count, onViewAll }: { title: string; count?: number; onViewAll?: () => void }) {
  return (
    <div className="flex items-center justify-between mb-[12px]">
      <div className="flex items-center gap-[8px]">
        <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">{title}</p>
        {count !== undefined && (
          <span className="inline-flex items-center justify-center min-w-[20px] h-[20px] rounded-full px-[6px] bg-[#f2f4f7] font-sans font-bold text-[12px] leading-[16px] text-rdj-text-secondary">
            {count}
          </span>
        )}
      </div>
      {onViewAll && (
        <button onClick={onViewAll} className="font-sans font-bold text-[14px] leading-[20px] text-rdj-text-brand hover:underline">
          Alles bekijken
        </button>
      )}
    </div>
  );
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

const ladingStatusMap: Record<string, { label: string; variant: "success" | "warning" | "brand" | "grey" }> = {
  intake: { label: "Intake", variant: "brand" },
  werklijst: { label: "Werklijst", variant: "warning" },
  markt: { label: "In de markt", variant: "success" },
  gesloten: { label: "Gesloten", variant: "grey" },
};

export default function RelatieOverzichtTab({ relatie, contactPersonen, onTabChange }: RelatieOverzichtTabProps) {
  const navigate = useNavigate();
  const relatieSpot = mockContracten.filter((c) => c.relatieId === relatie.id && c.type === "spot");
  const relatieContracten = mockContracten.filter((c) => c.relatieId === relatie.id && c.type === "contract");
  const relatieLadingen = mockRelatieLadingen.filter((l) => l.relatieId === relatie.id);
  const relatieVaartuigen = mockRelatieVaartuigen.filter((v) => v.relatieId === relatie.id);

  return (
    <div className="w-full px-[24px] flex flex-col gap-[32px] pb-[32px]">
      {/* Contactpersonen */}
      <div>
        <SectionHeader title="Contactpersonen" count={contactPersonen.length} />
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

      {/* Ladingen */}
      <div>
        <SectionHeader title="Ladingen" count={relatieLadingen.length} onViewAll={() => onTabChange("ladingen")} />
        {relatieLadingen.length === 0 ? (
          <div className="border border-rdj-border-secondary rounded-[8px] p-[24px] text-center">
            <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
              Nog geen ladingen gekoppeld aan deze relatie.
            </p>
          </div>
        ) : (
          <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Lading</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Route</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Laaddatum</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Matches</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Status</th>
                </tr>
              </thead>
              <tbody>
                {relatieLadingen.slice(0, 3).map((l) => {
                  const s = ladingStatusMap[l.status] || { label: l.status, variant: "grey" as const };
                  return (
                    <tr
                      key={l.id}
                      className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-[#f9fafb] cursor-pointer transition-colors"
                      onClick={() => navigate(`/crm/relatie/${relatie.id}/lading/${l.id}`)}
                    >
                      <td className="px-[12px] py-[10px]">
                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{l.titel}</p>
                        <p className="font-sans font-normal text-[12px] text-rdj-text-secondary">{l.tonnage} {l.product}</p>
                      </td>
                      <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{l.laadhaven} → {l.loshaven}</td>
                      <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{formatDate(l.laaddatum)}</td>
                      <td className="px-[12px] py-[10px]">
                        {l.matches > 0 ? (
                          <span className="font-sans font-bold text-[13px] text-rdj-text-brand">{l.matches}</span>
                        ) : (
                          <span className="font-sans font-normal text-[13px] text-rdj-text-tertiary">—</span>
                        )}
                      </td>
                      <td className="px-[12px] py-[10px]">
                        <Badge label={s.label} variant={s.variant} dot />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Vaartuigen */}
      <div>
        <SectionHeader title="Vaartuigen" count={relatieVaartuigen.length} onViewAll={() => onTabChange("vaartuigen")} />
        {relatieVaartuigen.length === 0 ? (
          <div className="border border-rdj-border-secondary rounded-[8px] p-[24px] text-center">
            <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
              Nog geen vaartuigen gekoppeld aan deze relatie.
            </p>
          </div>
        ) : (
          <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Vaartuig</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Type</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Capaciteit</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Matches</th>
                </tr>
              </thead>
              <tbody>
                {relatieVaartuigen.slice(0, 3).map((v) => (
                  <tr
                    key={v.id}
                    className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-[#f9fafb] cursor-pointer transition-colors"
                    onClick={() => navigate(`/crm/relatie/${relatie.id}/vaartuig/${v.id}`)}
                  >
                    <td className="px-[12px] py-[10px] font-sans font-bold text-[14px] text-rdj-text-primary">{v.naam}</td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-secondary">{v.type}</td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{v.capaciteit}</td>
                    <td className="px-[12px] py-[10px]">
                      {v.matches > 0 ? (
                        <span className="font-sans font-bold text-[13px] text-rdj-text-brand">{v.matches}</span>
                      ) : (
                        <span className="font-sans font-normal text-[13px] text-rdj-text-tertiary">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Spot */}
      <div>
        <SectionHeader title="Spot" count={relatieSpot.length} onViewAll={() => onTabChange("spot")} />
        {relatieSpot.length === 0 ? (
          <div className="border border-rdj-border-secondary rounded-[8px] p-[24px] text-center">
            <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
              Nog geen spot deals voor deze relatie.
            </p>
          </div>
        ) : (
          <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Titel</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Route</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Status</th>
                  <th className="text-right px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Waarde</th>
                </tr>
              </thead>
              <tbody>
                {relatieSpot.slice(0, 3).map((c) => (
                  <tr key={c.id} className="border-b border-rdj-border-secondary last:border-b-0">
                    <td className="px-[12px] py-[10px] font-sans font-bold text-[14px] text-rdj-text-primary">{c.titel}</td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-secondary">
                      {[c.laadhavenNaam, c.loshavenNaam].filter(Boolean).join(" → ") || "—"}
                    </td>
                    <td className="px-[12px] py-[10px]">
                      <Badge
                        label={CONTRACT_STATUS_LABELS[c.status] || "—"}
                        variant={(CONTRACT_STATUS_VARIANT_MAP[c.status] || "grey") as "success" | "warning" | "error" | "brand" | "grey"}
                        dot
                      />
                    </td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary text-right">
                      {c.waarde ? new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(c.waarde) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Contracten */}
      <div>
        <SectionHeader title="Contracten" count={relatieContracten.length} onViewAll={() => onTabChange("contracten")} />
        {relatieContracten.length === 0 ? (
          <div className="border border-rdj-border-secondary rounded-[8px] p-[24px] text-center">
            <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
              Nog geen contracten voor deze relatie.
            </p>
          </div>
        ) : (
          <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Titel</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Status</th>
                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Periode</th>
                  <th className="text-right px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Waarde</th>
                </tr>
              </thead>
              <tbody>
                {relatieContracten.slice(0, 3).map((c) => (
                  <tr key={c.id} className="border-b border-rdj-border-secondary last:border-b-0">
                    <td className="px-[12px] py-[10px] font-sans font-bold text-[14px] text-rdj-text-primary">{c.titel}</td>
                    <td className="px-[12px] py-[10px]">
                      <Badge
                        label={CONTRACT_STATUS_LABELS[c.status] || "—"}
                        variant={(CONTRACT_STATUS_VARIANT_MAP[c.status] || "grey") as "success" | "warning" | "error" | "brand" | "grey"}
                        dot
                      />
                    </td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">
                      {c.startDatum && c.eindDatum ? `${formatDate(c.startDatum)} – ${formatDate(c.eindDatum)}` : "—"}
                    </td>
                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary text-right">
                      {c.waarde ? new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(c.waarde) : "—"}
                    </td>
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
