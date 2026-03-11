import { useState, useMemo } from "react";
import { useParams, Link } from "react-router";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import type { PageTab } from "../components/PageHeader";
import Badge from "../components/Badge";
import Button from "../components/Button";
import ActivityFeed from "../components/ActivityFeed";
import ContractFormDialog from "../components/ContractFormDialog";
import { mockRelaties, mockContactPersonen, mockGebruikers } from "../data/mock-relatie-data";
import { mockContracten, CONTRACT_SOORT_LABELS, CONTRACT_STATUS_LABELS, CONTRACT_STATUS_VARIANT_MAP } from "../data/mock-contract-data";
import type { Contract } from "../data/api";

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

function formatCurrency(value?: number): string {
  if (value === undefined || value === null) return "—";
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function getInitials(name: string): string {
  return name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function isExpired(dateStr?: string): boolean {
  if (!dateStr) return false;
  return new Date(dateStr) < new Date();
}

const chevronSvg = (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
    <path d="M0.666664 8.66667L4.66666 4.66667L0.666664 0.666668" stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);

export default function ContractDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"overzicht" | "activiteit">("overzicht");
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [contracten, setContracten] = useState<Contract[]>(mockContracten);

  const contract = useMemo(() => contracten.find((c) => c.id === id), [contracten, id]);
  const relatie = useMemo(() => contract ? mockRelaties.find((r) => r.id === contract.relatieId) : undefined, [contract]);
  const contactPersoon = useMemo(() => contract?.contactPersoonId ? mockContactPersonen.find((cp) => cp.id === contract.contactPersoonId) : undefined, [contract]);
  const eigenaar = useMemo(() => contract?.eigenaarId ? mockGebruikers.find((g) => g.id === contract.eigenaarId) : undefined, [contract]);

  if (!contract) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-sans font-bold text-[20px] text-rdj-text-primary">Deal niet gevonden</p>
            <Link to="/crm/deals" className="font-sans text-[14px] text-rdj-text-brand hover:underline mt-2 block">
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumb = (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center pl-[24px] relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Link to="/crm/deals" className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">CRM</p>
            </Link>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                <div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div>
              </div>
            </div>
            <Link to="/crm/deals" className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Deals</p>
            </Link>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                <div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div>
              </div>
            </div>
            <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">
                {contract.titel}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full bg-rdj-border-secondary" />
    </div>
  );

  const titleBadge = (
    <Badge
      label={CONTRACT_STATUS_LABELS[contract.status] || "—"}
      variant={(CONTRACT_STATUS_VARIANT_MAP[contract.status] || "grey") as "success" | "warning" | "error" | "brand" | "grey"}
      size="lg"
      dot
    />
  );

  const subtitle = [
    relatie?.naam,
    contract.type === "contract" ? "Contract" : "Spot",
    CONTRACT_SOORT_LABELS[contract.soort],
  ].filter(Boolean).join(" · ");

  const tabs: PageTab[] = [
    { label: "Overzicht", path: "#overzicht", isActive: activeTab === "overzicht" },
    { label: "Activiteit", path: "#activiteit", isActive: activeTab === "activiteit" },
  ];

  const handleSave = (data: Partial<Contract>) => {
    setContracten((prev) => prev.map((c) => (c.id === id ? { ...c, ...data } : c)));
    setShowEditDialog(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {breadcrumb}

        <div className="content-stretch flex items-stretch justify-center relative shrink-0 w-full min-h-[calc(100vh-65px)]">
          <div className="flex-[1_0_0] min-h-px min-w-px relative">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center py-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[0px] items-start max-w-[1116px] pt-[24px] relative shrink-0 w-full">
                  <PageHeader
                    title={contract.titel}
                    titleBadge={titleBadge}
                    subtitle={subtitle}
                    actions={
                      <>
                        <Button variant="secondary" label="Archiveren" />
                        <Button variant="primary" label="Bewerken" onClick={() => setShowEditDialog(true)} />
                      </>
                    }
                    tabs={tabs}
                    onTabClick={(tab: PageTab) => {
                      const tabKey = tab.path.replace("#", "") as typeof activeTab;
                      setActiveTab(tabKey);
                    }}
                  />

                  <div className="w-full pt-[20px]">
                    {activeTab === "overzicht" && (
                      <div className="w-full px-[24px] flex flex-col gap-[32px] pb-[32px]">
                        {/* Verloren reden */}
                        {contract.status === "verloren" && contract.verlorenReden && (
                          <div className="bg-[#fef3f2] border border-[#fecdca] rounded-[8px] p-[16px]">
                            <p className="font-sans font-bold text-[14px] text-[#b42318] mb-[4px]">Reden verloren</p>
                            <p className="font-sans font-normal text-[14px] text-[#912018]">{contract.verlorenReden}</p>
                          </div>
                        )}

                        {/* Route/condities */}
                        {contract.type === "spot" && (
                          <div>
                            <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[12px]">Route & condities</p>
                            <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
                              <table className="w-full">
                                <tbody>
                                  <tr className="border-b border-rdj-border-secondary">
                                    <td className="px-[12px] py-[10px] font-sans font-bold text-[13px] text-rdj-text-secondary w-[160px]">Laadhaven</td>
                                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{contract.laadhavenNaam || "—"}</td>
                                  </tr>
                                  <tr className="border-b border-rdj-border-secondary">
                                    <td className="px-[12px] py-[10px] font-sans font-bold text-[13px] text-rdj-text-secondary">Loshaven</td>
                                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{contract.loshavenNaam || "—"}</td>
                                  </tr>
                                  <tr className="border-b border-rdj-border-secondary">
                                    <td className="px-[12px] py-[10px] font-sans font-bold text-[13px] text-rdj-text-secondary">Tonnage</td>
                                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{contract.tonnage ? `${contract.tonnage.toLocaleString("nl-NL")} ton` : "—"}</td>
                                  </tr>
                                  <tr className="border-b border-rdj-border-secondary">
                                    <td className="px-[12px] py-[10px] font-sans font-bold text-[13px] text-rdj-text-secondary">Vrachtprijs</td>
                                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{contract.vrachtprijs ? `€ ${contract.vrachtprijs.toFixed(2)}/ton` : "—"}</td>
                                  </tr>
                                  <tr className="border-b border-rdj-border-secondary last:border-b-0">
                                    <td className="px-[12px] py-[10px] font-sans font-bold text-[13px] text-rdj-text-secondary">Laaddatum</td>
                                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{formatDate(contract.laaddatum)}</td>
                                  </tr>
                                  <tr>
                                    <td className="px-[12px] py-[10px] font-sans font-bold text-[13px] text-rdj-text-secondary">Losdatum</td>
                                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{formatDate(contract.losdatum)}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {contract.type === "contract" && (
                          <div>
                            <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[12px]">Periode & routes</p>
                            {contract.routes && contract.routes.length > 0 && (
                              <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
                                <table className="w-full">
                                  <thead>
                                    <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                                      <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Laadhaven</th>
                                      <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Loshaven</th>
                                      <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Tonnage</th>
                                      <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Vrachtprijs</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {contract.routes.map((route) => (
                                      <tr key={route.id} className="border-b border-rdj-border-secondary last:border-b-0">
                                        <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{route.laadhavenNaam}</td>
                                        <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{route.loshavenNaam}</td>
                                        <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{route.tonnage ? `${route.tonnage.toLocaleString("nl-NL")} ton` : "—"}</td>
                                        <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{route.vrachtprijs ? `€ ${route.vrachtprijs.toFixed(2)}/ton` : "—"}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Markt koppeling — alleen voor spot */}
                        {contract.type === "spot" && (
                          <div>
                            <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[12px]">Markt</p>
                            <Link
                              to="/markt/pijplijn"
                              className="flex items-center justify-between border border-rdj-border-secondary rounded-[8px] p-[16px] hover:bg-[#f9fafb] transition-colors group"
                            >
                              <div>
                                <p className="font-sans font-bold text-[14px] text-rdj-text-primary">Bekijk onderhandelingen in Markt</p>
                                <p className="font-sans font-normal text-[13px] text-rdj-text-secondary mt-[2px]">
                                  Biedingen, lading-matching en vaartuigtoewijzing voor deze deal
                                </p>
                              </div>
                              <svg className="w-[20px] h-[20px] text-rdj-text-secondary group-hover:text-rdj-text-primary shrink-0 ml-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        )}

                        {/* Opmerkingen */}
                        {contract.opmerkingen && (
                          <div>
                            <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[8px]">Opmerkingen</p>
                            <p className="font-sans font-normal text-[14px] leading-[20px] text-rdj-text-secondary">{contract.opmerkingen}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "activiteit" && (
                      <div className="w-full px-[24px]">
                        <ActivityFeed />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-[320px] shrink-0 border-l border-rdj-border-secondary bg-white">
            <div className="p-[24px] flex flex-col gap-[24px]">
              <div>
                <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[16px]">Details</p>
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Eigenaar</p>
                    {eigenaar ? (
                      <div className="flex items-center gap-[8px] mt-[4px]">
                        <div className="shrink-0 size-[28px] rounded-full bg-[#f2f4f7] flex items-center justify-center">
                          <span className="font-sans font-bold text-[10px] text-rdj-text-secondary">{getInitials(eigenaar.naam)}</span>
                        </div>
                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{eigenaar.naam}</p>
                      </div>
                    ) : (
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">—</p>
                    )}
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Deadline</p>
                    {(() => {
                      const deadline = contract.type === "spot" ? contract.laaddatum : contract.startDatum;
                      const expired = isExpired(deadline);
                      return (
                        <p className={`font-sans font-bold text-[14px] mt-[2px] ${expired ? "text-[#F04438]" : "text-rdj-text-primary"}`}>
                          {formatDate(deadline)}
                        </p>
                      );
                    })()}
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Aangemaakt</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{formatDate(contract.aanmaakDatum)}</p>
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Laatste update</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{formatDate(contract.laatsteUpdate)}</p>
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Type</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{contract.type === "contract" ? "Contract" : "Spot"}</p>
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Soort</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{CONTRACT_SOORT_LABELS[contract.soort] || "—"}</p>
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Waarde</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{formatCurrency(contract.waarde)}</p>
                  </div>
                  {contract.type === "contract" && (
                    <>
                      <div>
                        <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Startdatum</p>
                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{formatDate(contract.startDatum)}</p>
                      </div>
                      <div>
                        <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Einddatum</p>
                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{formatDate(contract.eindDatum)}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="h-px w-full bg-rdj-border-secondary" />

              <div>
                <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[16px]">Relatie</p>
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Bedrijf</p>
                    {relatie ? (
                      <Link to={`/crm/relatie/${relatie.id}`} className="font-sans font-bold text-[14px] text-rdj-text-brand hover:underline mt-[2px] block">
                        {relatie.naam}
                      </Link>
                    ) : (
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">—</p>
                    )}
                  </div>
                  {contactPersoon && (
                    <>
                      <div>
                        <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Contactpersoon</p>
                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{contactPersoon.naam}</p>
                        {contactPersoon.functie && (
                          <p className="font-sans font-normal text-[13px] text-rdj-text-secondary">{contactPersoon.functie}</p>
                        )}
                      </div>
                      <div>
                        <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">E-mail</p>
                        <p className="font-sans font-normal text-[14px] text-rdj-text-brand mt-[2px]">{contactPersoon.email}</p>
                      </div>
                      <div>
                        <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Telefoon</p>
                        <p className="font-sans font-normal text-[14px] text-rdj-text-primary mt-[2px]">{contactPersoon.telefoon}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEditDialog && (
        <ContractFormDialog
          contract={contract}
          onSave={handleSave}
          onClose={() => setShowEditDialog(false)}
        />
      )}
    </div>
  );
}
