import { useState, useMemo } from "react";
import { useParams, Link } from "react-router";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import type { PageTab } from "../components/PageHeader";
import Badge from "../components/Badge";
import Button from "../components/Button";
import ActivityFeed from "../components/ActivityFeed";
import ContractFormDialog from "../components/ContractFormDialog";
import { mockRelaties, mockContactPersonen, mockGebruikers, mockMailConversaties } from "../data/mock-relatie-data";
import { mockContracten, mockLadingSoorten, CONTRACT_SOORT_LABELS, CONTRACT_STATUS_LABELS, CONTRACT_STATUS_VARIANT_MAP } from "../data/mock-contract-data";
import MailConversaties from "../components/MailConversaties";
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
  const [activeTab, setActiveTab] = useState<"overzicht" | "mail" | "activiteit">("overzicht");
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [contracten, setContracten] = useState<Contract[]>(mockContracten);

  const contract = useMemo(() => contracten.find((c) => c.id === id), [contracten, id]);
  const relatie = useMemo(() => contract ? mockRelaties.find((r) => r.id === contract.relatieId) : undefined, [contract]);
  const contactPersoon = useMemo(() => contract?.contactPersoonId ? mockContactPersonen.find((cp) => cp.id === contract.contactPersoonId) : undefined, [contract]);
  const eigenaar = useMemo(() => contract?.eigenaarId ? mockGebruikers.find((g) => g.id === contract.eigenaarId) : undefined, [contract]);
  const ladingSoort = useMemo(() => contract?.ladingSoortId ? mockLadingSoorten.find((ls) => ls.id === contract.ladingSoortId) : undefined, [contract]);
  const dealMail = useMemo(() => mockMailConversaties.filter((m) => m.contractId === id), [id]);

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
    { label: "Mail", path: "#mail", isActive: activeTab === "mail", badge: dealMail.length > 0 ? String(dealMail.length) : undefined },
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

                        {/* Lading & route card */}
                        {contract.type === "spot" && (
                          <div>
                            <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[12px]">Lading & route</p>
                            <div className="border border-rdj-border-secondary rounded-[8px] p-[16px]">
                              {/* Titel + ladingsoort */}
                              <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px] mb-[2px]">
                                {contract.titel}
                              </p>
                              {ladingSoort && (
                                <p className="font-sans font-normal leading-[18px] text-rdj-text-secondary text-[12px] mb-[12px]">
                                  {ladingSoort.naam}
                                </p>
                              )}
                              {!ladingSoort && <div className="mb-[12px]" />}

                              {/* Route met locatie dots */}
                              <div className="space-y-[6px] mb-[10px]">
                                <div className="flex items-center gap-[6px]">
                                  <div className="shrink-0 w-[14px] flex items-center justify-center">
                                    <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-[#667085]" />
                                  </div>
                                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px] flex-1 min-w-0">
                                    {contract.laadhavenNaam || "—"}
                                  </p>
                                  <p className="font-sans font-normal leading-[18px] text-rdj-text-tertiary text-[12px] shrink-0">
                                    {formatDate(contract.laaddatum)}
                                  </p>
                                </div>
                                <div className="flex items-center gap-[6px]">
                                  <div className="shrink-0 w-[14px] flex items-center justify-center">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#667085]" />
                                  </div>
                                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px] flex-1 min-w-0">
                                    {contract.loshavenNaam || "—"}
                                  </p>
                                  <p className="font-sans font-normal leading-[18px] text-rdj-text-tertiary text-[12px] shrink-0">
                                    {formatDate(contract.losdatum)}
                                  </p>
                                </div>
                              </div>

                              {/* Tonnage */}
                              {contract.tonnage && (
                                <div className="flex items-center gap-[6px] mb-[2px]">
                                  <div className="shrink-0 w-[14px] flex items-center justify-center">
                                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                                      <path d="M6 1.5V3M3.75 4.5H8.25M2.625 10.5H9.375C9.75 10.5 10.125 10.125 10.125 9.75L8.625 4.5H3.375L1.875 9.75C1.875 10.125 2.25 10.5 2.625 10.5Z" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                    </svg>
                                  </div>
                                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px]">
                                    {contract.tonnage.toLocaleString("nl-NL")} ton
                                  </p>
                                </div>
                              )}

                              {/* Vrachtprijs */}
                              {contract.vrachtprijs && (
                                <div className="flex items-center gap-[6px]">
                                  <div className="shrink-0 w-[14px] flex items-center justify-center">
                                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                                      <path d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                    </svg>
                                  </div>
                                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px]">
                                    € {contract.vrachtprijs.toFixed(2)}/ton
                                  </p>
                                </div>
                              )}

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

                    {activeTab === "mail" && (
                      <MailConversaties conversaties={dealMail} />
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
            <div className="p-[24px] flex flex-col">
              {/* Details rows — label left, value right but left-aligned */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-baseline gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Type</p>
                  <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{contract.type === "contract" ? "Contract" : "Spot"}</p>
                </div>
                <div className="flex items-baseline gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Soort</p>
                  <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{CONTRACT_SOORT_LABELS[contract.soort] || "—"}</p>
                </div>
                <div className="flex items-baseline gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Waarde</p>
                  <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{formatCurrency(contract.waarde)}</p>
                </div>
                {contract.type === "contract" && (
                  <>
                    <div className="flex items-baseline gap-[16px]">
                      <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Startdatum</p>
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{formatDate(contract.startDatum)}</p>
                    </div>
                    <div className="flex items-baseline gap-[16px]">
                      <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Einddatum</p>
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{formatDate(contract.eindDatum)}</p>
                    </div>
                  </>
                )}
                <div className="flex items-baseline gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Aangemaakt</p>
                  <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{formatDate(contract.aanmaakDatum)}</p>
                </div>
                <div className="flex items-baseline gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Laatste update</p>
                  <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{formatDate(contract.laatsteUpdate)}</p>
                </div>
                <div className="flex items-start gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0 pt-[2px]">Relatie</p>
                  <div>
                    {relatie ? (
                      <Link to={`/crm/relatie/${relatie.id}`} className="font-sans font-bold text-[14px] text-rdj-text-brand hover:underline">
                        {relatie.naam}
                      </Link>
                    ) : (
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">—</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0 pt-[2px]">Contactpersoon</p>
                  <div>
                    {contactPersoon ? (
                      <>
                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{contactPersoon.naam}</p>
                        <p className="font-sans font-normal text-[13px] text-rdj-text-brand">{contactPersoon.email}</p>
                        <p className="font-sans font-normal text-[13px] text-rdj-text-secondary">{contactPersoon.telefoon}</p>
                      </>
                    ) : (
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">—</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider + Eigenaar & Deadline */}
              <div className="h-px w-full bg-rdj-border-secondary mt-[24px] mb-[20px]" />

              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Eigenaar</p>
                  {eigenaar ? (
                    <div className="flex items-center gap-[8px]">
                      <div className="shrink-0 size-[28px] rounded-full bg-[#f2f4f7] flex items-center justify-center">
                        <span className="font-sans font-bold text-[10px] text-rdj-text-secondary">{getInitials(eigenaar.naam)}</span>
                      </div>
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{eigenaar.naam}</p>
                    </div>
                  ) : (
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary">—</p>
                  )}
                </div>
                <div className="flex items-baseline gap-[16px]">
                  <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Deadline</p>
                  {(() => {
                    const deadline = contract.type === "spot" ? contract.laaddatum : contract.startDatum;
                    const expired = isExpired(deadline);
                    return (
                      <p className={`font-sans font-bold text-[14px] ${expired ? "text-[#F04438]" : "text-rdj-text-primary"}`}>
                        {formatDate(deadline)}
                      </p>
                    );
                  })()}
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
