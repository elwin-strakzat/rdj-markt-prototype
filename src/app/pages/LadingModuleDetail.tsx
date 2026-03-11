import { useState, useMemo } from "react";
import { useParams, Link } from "react-router";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import ActivityFeed from "../components/ActivityFeed";
import { mockRelaties, mockContactPersonen, mockRelatieLadingen } from "../data/mock-relatie-data";
import { mockContracten, mockLadingSoorten, mockLadingSubsoorten, mockBijzonderheden } from "../data/mock-contract-data";

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

const chevronSvg = (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
    <path d="M0.666664 8.66667L4.66666 4.66667L0.666664 0.666668" stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);

export default function LadingModuleDetail() {
  const { id } = useParams();
  const [sidebarTab, setSidebarTab] = useState<"details" | "logistiek" | "tijden">("details");

  const lading = useMemo(() => mockRelatieLadingen.find((l) => l.id === id), [id]);
  const relatie = useMemo(() => lading ? mockRelaties.find((r) => r.id === lading.relatieId) : undefined, [lading]);
  const contract = useMemo(() => lading?.contractId ? mockContracten.find((c) => c.id === lading.contractId) : undefined, [lading]);
  const ladingSoort = useMemo(() => lading?.ladingSoortId ? mockLadingSoorten.find((ls) => ls.id === lading.ladingSoortId) : undefined, [lading]);
  const subsoort = useMemo(() => lading?.subsoortId ? mockLadingSubsoorten.find((s) => s.id === lading.subsoortId) : undefined, [lading]);
  const contactPersoon = useMemo(() => {
    if (!lading?.contactPersoonId) {
      // Fall back to first contact person of the relatie
      return relatie ? mockContactPersonen.find((cp) => cp.relatieId === relatie.id) : undefined;
    }
    return mockContactPersonen.find((cp) => cp.id === lading.contactPersoonId);
  }, [lading, relatie]);

  const tonnageNumber = useMemo(() => {
    if (!lading) return 0;
    const num = parseFloat(lading.tonnage.replace(/[^\d.,]/g, "").replace(".", "").replace(",", "."));
    return isNaN(num) ? 0 : num;
  }, [lading]);

  const sg = lading?.soortelijkGewicht || ladingSoort?.soortelijkGewicht || 0;
  const inhoud = tonnageNumber && sg ? Math.round(tonnageNumber / sg) : 0;

  if (!lading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-sans font-bold text-[20px] text-rdj-text-primary">Lading niet gevonden</p>
            <Link to="/lading" className="font-sans text-[14px] text-rdj-text-brand hover:underline mt-2 block">
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtitle = `Vanuit ${lading.laadhaven}${lading.aankomst ? ` · Verwachte start op ${formatDate(lading.aankomst)}` : lading.laaddatum ? ` · Verwachte start op ${formatDate(lading.laaddatum)}` : ""}`;

  const bijzonderheden = (lading.bijzonderheidIds || [])
    .map((id) => mockBijzonderheden.find((b) => b.id === id))
    .filter(Boolean);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {/* Breadcrumb */}
        <div className="flex flex-col gap-[20px] items-start pt-[24px] w-full">
          <div className="flex items-center gap-[8px] pl-[24px]">
            <Link to="/lading" className="flex items-center justify-center p-[4px] rounded-[6px] hover:bg-rdj-bg-primary-hover">
              <p className="font-sans font-bold leading-[20px] text-[#475467] text-[14px] whitespace-nowrap">Lading</p>
            </Link>
            <div className="overflow-clip shrink-0 size-[16px]"><div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4 relative"><div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div></div></div>
            <div className="flex items-center justify-center p-[4px] rounded-[6px]">
              <p className="font-sans font-bold leading-[20px] text-[#475467] text-[14px] whitespace-nowrap">Partijen</p>
            </div>
            <div className="overflow-clip shrink-0 size-[16px]"><div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4 relative"><div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div></div></div>
            <div className="bg-[#f9fafb] flex items-center justify-center px-[8px] py-[4px] rounded-[6px]">
              <p className="font-sans font-bold leading-[20px] text-[#344054] text-[14px] whitespace-nowrap">{lading.titel}</p>
            </div>
            {/* Prev/next arrows */}
            <div className="flex items-center gap-[4px] ml-[8px]">
              <button className="size-[24px] flex items-center justify-center rounded-[4px] border border-rdj-border-primary text-rdj-text-secondary hover:bg-rdj-bg-primary-hover">
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d="M7.5 9L4.5 6L7.5 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
              </button>
              <button className="size-[24px] flex items-center justify-center rounded-[4px] border border-rdj-border-primary text-rdj-text-secondary hover:bg-rdj-bg-primary-hover">
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
              </button>
            </div>
          </div>
          <div className="h-px w-full bg-rdj-border-secondary" />
        </div>

        <div className="flex items-stretch min-h-[calc(100vh-65px)]">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="max-w-[900px] mx-auto px-[24px] py-[32px]">
              {/* Header */}
              <div className="flex items-start justify-between mb-[32px]">
                <div>
                  <h1 className="font-sans font-bold text-[24px] leading-[32px] text-rdj-text-primary">{lading.titel}</h1>
                  <p className="font-sans font-normal text-[14px] leading-[20px] text-rdj-text-secondary mt-[4px]">{subtitle}</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <Button variant="secondary" label="Acties" trailingIcon={
                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                  } />
                  <Button variant="primary" label="Bewerken" />
                </div>
              </div>

              {/* Verdeling */}
              <div className="mb-[32px]">
                <h2 className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[16px]">Verdeling</h2>

                <div className="flex items-baseline justify-between mb-[8px]">
                  <div>
                    <span className="font-sans font-normal text-[12px] text-rdj-text-secondary">Verdeeld</span>
                    <p className="font-sans font-bold text-[24px] leading-[32px] text-rdj-text-primary">0 t</p>
                  </div>
                  <div className="text-right">
                    <span className="font-sans font-normal text-[12px] text-rdj-text-secondary">Te verdelen</span>
                    <p className="font-sans font-bold text-[24px] leading-[32px] text-rdj-text-primary">{tonnageNumber > 0 ? `${tonnageNumber.toLocaleString("nl-NL")} t` : lading.tonnage}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-[8px] bg-[#eaecf0] rounded-full overflow-hidden mb-[8px]">
                  <div className="h-full bg-[#1567a4] rounded-full" style={{ width: "0%" }} />
                </div>

                {/* Regie legend */}
                <div className="flex items-center gap-[16px]">
                  <div className="flex items-center gap-[6px]">
                    <div className="size-[8px] rounded-full bg-[#F79009]" />
                    <span className="font-sans text-[13px] text-rdj-text-secondary">Duwvaart</span>
                    <span className="font-sans font-bold text-[13px] text-rdj-text-primary">0 t</span>
                    <span className="font-sans text-[13px] text-rdj-text-tertiary">0%</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div className="size-[8px] rounded-full bg-[#F04438]" />
                    <span className="font-sans text-[13px] text-rdj-text-secondary">Binnenvaart</span>
                    <span className="font-sans font-bold text-[13px] text-rdj-text-primary">0 t</span>
                    <span className="font-sans text-[13px] text-rdj-text-tertiary">0%</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div className="size-[8px] rounded-full bg-[#1567a4]" />
                    <span className="font-sans text-[13px] text-rdj-text-secondary">Flex</span>
                    <span className="font-sans font-bold text-[13px] text-rdj-text-primary">0 t</span>
                    <span className="font-sans text-[13px] text-rdj-text-tertiary">0%</span>
                  </div>
                </div>
              </div>

              {/* Subpartijen */}
              <div className="mb-[32px]">
                <div className="flex items-center justify-between mb-[16px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">Subpartijen</h2>
                  <Button variant="secondary" label="Plannen" leadingIcon={
                    <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 8H11M8 5V11" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                    </svg>
                  } />
                </div>

                {/* Table header */}
                <div className="border-b border-rdj-border-secondary">
                  <div className="grid grid-cols-[1fr_80px_100px_80px_100px_100px_120px_100px] gap-[8px] px-[12px] py-[10px]">
                    {["Subpartij", "Gepland", "Laadgewicht", "Regie", "Start laden", "Einde laden", "Loshaven", "Bijz. locatie"].map((h) => (
                      <p key={h} className="font-sans font-bold text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">{h}</p>
                    ))}
                  </div>
                </div>

                {/* Empty state + add button */}
                <div className="py-[16px] px-[12px]">
                  <button className="flex items-center gap-[6px] text-rdj-text-brand font-sans font-bold text-[14px] hover:underline">
                    <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                      <path d="M8 3V13M3 8H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                    Subpartij toevoegen
                  </button>
                </div>
              </div>

              {/* Activiteit */}
              <div>
                <div className="flex items-center justify-between mb-[16px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">Activiteit</h2>
                  <button className="flex items-center gap-[4px] font-sans font-bold text-[14px] text-rdj-text-brand hover:underline">
                    Alle activiteit
                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                  </button>
                </div>
                <ActivityFeed />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[320px] shrink-0 border-l border-rdj-border-secondary bg-white">
            {/* Sidebar tabs */}
            <div className="flex border-b border-rdj-border-secondary">
              {(["details", "logistiek", "tijden"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSidebarTab(tab)}
                  className={`flex-1 py-[12px] font-sans font-bold text-[13px] text-center border-b-2 transition-colors ${
                    sidebarTab === tab
                      ? "text-rdj-text-brand border-[#1567a4]"
                      : "text-rdj-text-secondary border-transparent hover:text-rdj-text-primary"
                  }`}
                >
                  {tab === "details" ? "Details" : tab === "logistiek" ? "Logistiek" : "Tijden"}
                </button>
              ))}
            </div>

            <div className="p-[24px] flex flex-col gap-[20px]">
              {sidebarTab === "details" && (
                <>
                  {/* Notitie / info */}
                  {lading.notitie && (
                    <p className="font-sans font-normal text-[13px] leading-[20px] text-rdj-text-secondary italic">
                      {lading.notitie}
                    </p>
                  )}

                  {/* Details rows */}
                  <div className="flex flex-col gap-[12px]">
                    <DetailRow label="Tonnage" value={lading.tonnage} />
                    <DetailRow label="Lading" value={ladingSoort ? `${ladingSoort.naam}${ladingSoort.subsoortIds.length > 0 ? ` (${ladingSoort.id.replace("ls-", "0")})` : ""}` : lading.product} />
                    {subsoort && (
                      <DetailRow label="Soort" value={subsoort.naam} />
                    )}
                    <DetailRow label="Soortelijk gewicht" value={sg ? `${String(sg).replace(".", ",")} t/m³` : "—"} />
                    {inhoud > 0 && (
                      <DetailRow label="Inhoud" value={`${inhoud.toLocaleString("nl-NL")} m³`} />
                    )}

                    {/* Bijzonderheden */}
                    {bijzonderheden.length > 0 && (
                      <div className="flex items-start gap-[16px]">
                        <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Bijzonderheden</p>
                        <div className="flex flex-wrap gap-[4px]">
                          {bijzonderheden.map((b) => b && (
                            <span key={b.id} className="inline-flex items-center bg-[#f2f4f7] rounded-[4px] px-[8px] py-[2px] font-sans font-bold text-[12px] text-rdj-text-primary">
                              {b.naam}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="h-px w-full bg-rdj-border-secondary" />

                  {/* Relatie */}
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex items-start gap-[16px]">
                      <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Relatie</p>
                      {relatie ? (
                        <Link to={`/crm/relatie/${relatie.id}`} className="font-sans font-bold text-[14px] text-rdj-text-brand hover:underline">
                          {relatie.naam}
                        </Link>
                      ) : (
                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary">—</p>
                      )}
                    </div>

                    {/* Contactgegevens */}
                    {contactPersoon && (
                      <div className="flex items-start gap-[16px]">
                        <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Contactgegevens</p>
                        <div className="flex flex-col gap-[2px]">
                          <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{contactPersoon.naam}</p>
                          <a href={`mailto:${contactPersoon.email}`} className="font-sans font-normal text-[13px] text-rdj-text-brand hover:underline">{contactPersoon.email}</a>
                          <p className="font-sans font-normal text-[13px] text-rdj-text-secondary">{contactPersoon.telefoon}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contract blok */}
                  {contract && (
                    <>
                      <div className="h-px w-full bg-rdj-border-secondary" />
                      <div className="flex flex-col gap-[8px]">
                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary">Gekoppelde deal</p>
                        <Link
                          to={`/crm/deal/${contract.id}`}
                          className="flex items-center justify-between bg-[#f9fafb] border border-rdj-border-primary rounded-[8px] p-[12px] hover:bg-[#f2f4f7] transition-colors group"
                        >
                          <div className="flex flex-col gap-[2px]">
                            <p className="font-sans font-bold text-[14px] text-rdj-text-primary group-hover:text-rdj-text-brand">{contract.titel}</p>
                            <p className="font-sans font-normal text-[12px] text-rdj-text-secondary">
                              {contract.type === "contract" ? "Contract" : "Spot"}{contract.soort ? ` · ${contract.soort}` : ""}
                            </p>
                          </div>
                          <svg className="size-[16px] text-rdj-text-tertiary group-hover:text-rdj-text-brand shrink-0" fill="none" viewBox="0 0 16 16">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </Link>
                      </div>
                    </>
                  )}
                </>
              )}

              {sidebarTab === "logistiek" && (
                <div className="flex flex-col gap-[12px]">
                  <DetailRow label="Laadhaven" value={lading.laadhaven || "—"} />
                  {lading.laadterminal && <DetailRow label="Laadterminal" value={lading.laadterminal} />}
                  <DetailRow label="Loshaven" value={lading.loshaven || "—"} />
                  {lading.losterminal && <DetailRow label="Losterminal" value={lading.losterminal} />}
                  {lading.lostermijn && <DetailRow label="Lostermijn" value={lading.lostermijn} />}
                  <DetailRow label="Regie" value={lading.regie ? (lading.regie === "flex" ? "Flex" : lading.regie === "duwvaart" ? "Duwvaart" : "Binnenvaart") : "Flex"} />
                  {lading.exType && (
                    <DetailRow label="Ex." value={`${lading.exType === "zeeboot" ? "Zeeboot" : lading.exType === "opslag" ? "Opslag" : "Vloot"}${lading.exNaam ? ` — ${lading.exNaam}` : ""}`} />
                  )}
                  {lading.controleOrganisatie && <DetailRow label="Controleorganisatie" value={lading.controleOrganisatie} />}
                </div>
              )}

              {sidebarTab === "tijden" && (
                <div className="flex flex-col gap-[12px]">
                  <DetailRow label="Aankomst" value={lading.aankomst ? formatDate(lading.aankomst) : formatDate(lading.laaddatum)} />
                  {lading.startLaden && <DetailRow label="Start laden" value={formatDate(lading.startLaden)} />}
                  {lading.startLossen && <DetailRow label="Start lossen" value={formatDate(lading.startLossen)} />}
                  {lading.eindeLossen && <DetailRow label="Einde lossen" value={formatDate(lading.eindeLossen)} />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-[16px]">
      <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">{label}</p>
      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{value}</p>
    </div>
  );
}
