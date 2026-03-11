import { useState, useMemo, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import type { PageTab } from "../components/PageHeader";
import Badge from "../components/Badge";
import Button from "../components/Button";
import ActivityFeed from "../components/ActivityFeed";
import RelatieDetailSidebar from "../components/RelatieDetailSidebar";
import RelatieOverzichtTab from "../components/RelatieOverzichtTab";
import RelatieFormDialog from "../components/RelatieFormDialog";
import { mockRelaties, mockContactPersonen, mockRelatieLadingen, mockRelatieVaartuigen, mockMailConversaties, mockGespreksverslagen, VAARTUIG_STATUS_MAP } from "../data/mock-relatie-data";
import type { Gespreksverslag } from "../data/mock-relatie-data";
import { mockContracten, CONTRACT_STATUS_LABELS, CONTRACT_STATUS_VARIANT_MAP } from "../data/mock-contract-data";
import MailConversaties from "../components/MailConversaties";
import Gespreksverslagen from "../components/Gespreksverslagen";
import type { Relatie } from "../data/api";

const statusVariantMap: Record<string, "success" | "grey" | "brand"> = {
  actief: "success",
  inactief: "grey",
  prospect: "brand",
};

const ladingStatusMap: Record<string, { label: string; variant: "success" | "warning" | "brand" | "grey" }> = {
  intake: { label: "Intake", variant: "brand" },
  werklijst: { label: "Werklijst", variant: "warning" },
  markt: { label: "In de markt", variant: "success" },
  gesloten: { label: "Gesloten", variant: "grey" },
};

const vaartuigStatusMap: Record<string, { label: string; variant: "success" | "warning" | "brand" | "grey" }> = {
  beschikbaar: { label: "Beschikbaar", variant: "success" },
  onderweg: { label: "Onderweg", variant: "brand" },
  beladen: { label: "Beladen", variant: "warning" },
  in_onderhoud: { label: "In onderhoud", variant: "grey" },
};

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

const chevronSvg = (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
    <path d="M0.666664 8.66667L4.66666 4.66667L0.666664 0.666668" stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);

export default function RelatieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overzicht" | "ladingen" | "vaartuigen" | "spot" | "contracten" | "mail" | "gesprekken" | "activiteit">("overzicht");
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [relaties, setRelaties] = useState<Relatie[]>(mockRelaties);

  const relatie = useMemo(() => relaties.find((r) => r.id === id), [relaties, id]);
  const contactPersonen = useMemo(
    () => mockContactPersonen.filter((cp) => cp.relatieId === id),
    [id]
  );
  const relatieContracten = useMemo(
    () => mockContracten.filter((c) => c.relatieId === id && c.type === "contract"),
    [id]
  );
  const relatieSpot = useMemo(
    () => mockContracten.filter((c) => c.relatieId === id && c.type === "spot"),
    [id]
  );
  const relatieLadingen = useMemo(
    () => mockRelatieLadingen.filter((l) => l.relatieId === id),
    [id]
  );
  const relatieVaartuigen = useMemo(
    () => mockRelatieVaartuigen.filter((v) => v.relatieId === id),
    [id]
  );
  const [mailConversaties, setMailConversaties] = useState(mockMailConversaties);
  const relatieMail = useMemo(
    () => mailConversaties.filter((m) => m.relatieId === id),
    [mailConversaties, id]
  );
  const relatieDeals = useMemo(
    () => mockContracten.filter((c) => c.relatieId === id),
    [id]
  );
  const handleLinkDeal = useCallback((mailId: string, dealId: string | undefined) => {
    setMailConversaties((prev) => {
      const updated = prev.map((m) => m.id === mailId ? { ...m, contractId: dealId } : m);
      // Also update the mock source so other pages see the change
      mockMailConversaties.splice(0, mockMailConversaties.length, ...updated);
      return updated;
    });
  }, []);

  const [verslagen, setVerslagen] = useState(
    () => mockGespreksverslagen.filter((v) => v.relatieId === id)
  );
  const handleAddVerslag = useCallback((data: Omit<Gespreksverslag, "id" | "aanmaakDatum">) => {
    const newVerslag: Gespreksverslag = {
      ...data,
      id: `gv-${Date.now()}`,
      aanmaakDatum: new Date().toISOString(),
    };
    mockGespreksverslagen.push(newVerslag);
    setVerslagen((prev) => [...prev, newVerslag]);
  }, []);

  if (!relatie) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-sans font-bold text-[20px] text-rdj-text-primary">Relatie niet gevonden</p>
            <Link to="/crm/relaties" className="font-sans text-[14px] text-rdj-text-brand hover:underline mt-2 block">
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
            <Link to="/crm/relaties" className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">CRM</p>
            </Link>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                <div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div>
              </div>
            </div>
            <Link to="/crm/relaties" className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Relaties</p>
            </Link>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                <div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div>
              </div>
            </div>
            <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">
                {relatie.naam}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full bg-rdj-border-secondary" />
    </div>
  );

  const titleBadge = relatie.status ? (
    <Badge
      label={relatie.status.charAt(0).toUpperCase() + relatie.status.slice(1)}
      variant={statusVariantMap[relatie.status] || "grey"}
      size="lg"
      dot
    />
  ) : null;

  const subtitle = [relatie.adres, [relatie.postcode, relatie.plaats].filter(Boolean).join(" "), relatie.land]
    .filter(Boolean)
    .join(", ");

  const tabs: PageTab[] = [
    { label: "Overzicht", path: "#overzicht", isActive: activeTab === "overzicht" },
    { label: "Ladingen", path: "#ladingen", isActive: activeTab === "ladingen", badge: String(relatieLadingen.length) },
    { label: "Vaartuigen", path: "#vaartuigen", isActive: activeTab === "vaartuigen", badge: String(relatieVaartuigen.length) },
    { label: "Mail", path: "#mail", isActive: activeTab === "mail", badge: String(relatieMail.length) },
    { label: "Gesprekken", path: "#gesprekken", isActive: activeTab === "gesprekken", badge: String(verslagen.length) },
    { label: "Spot", path: "#spot", isActive: activeTab === "spot", badge: String(relatieSpot.length) },
    { label: "Contracten", path: "#contracten", isActive: activeTab === "contracten", badge: String(relatieContracten.length) },
    { label: "Activiteit", path: "#activiteit", isActive: activeTab === "activiteit" },
  ];

  const actions = (
    <>
      <Button variant="secondary" label="Archiveren" />
      <Button variant="primary" label="Bewerken" onClick={() => setShowEditDialog(true)} />
    </>
  );

  const handleSaveRelatie = (data: Partial<Relatie>) => {
    setRelaties((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...data } : r))
    );
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
                    title={relatie.naam}
                    titleBadge={titleBadge}
                    subtitle={subtitle}
                    actions={actions}
                    tabs={tabs}
                    onTabClick={(tab: PageTab) => {
                      const tabKey = tab.path.replace("#", "") as typeof activeTab;
                      setActiveTab(tabKey);
                    }}
                  />

                  <div className="w-full pt-[20px]">
                    {activeTab === "overzicht" && (
                      <RelatieOverzichtTab
                        relatie={relatie}
                        contactPersonen={contactPersonen}
                      />
                    )}

                    {activeTab === "ladingen" && (
                      <div className="w-full px-[24px] pb-[32px]">
                        {relatieLadingen.length === 0 ? (
                          <div className="py-[48px] text-center">
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
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Tonnage</th>
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Laaddatum</th>
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Matches</th>
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {relatieLadingen.map((l) => {
                                  const s = ladingStatusMap[l.status] || { label: l.status, variant: "grey" as const };
                                  return (
                                    <tr
                                      key={l.id}
                                      className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-[#f9fafb] cursor-pointer transition-colors"
                                      onClick={() => navigate(`/crm/relatie/${id}/lading/${l.id}`)}
                                    >
                                      <td className="px-[12px] py-[10px]">
                                        <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{l.titel}</p>
                                        <p className="font-sans font-normal text-[12px] text-rdj-text-secondary">{l.product}</p>
                                      </td>
                                      <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{l.laadhaven} → {l.loshaven}</td>
                                      <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{l.tonnage}</td>
                                      <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{formatDate(l.laaddatum)}</td>
                                      <td className="px-[12px] py-[10px]">
                                        {l.matches > 0 ? (
                                          <span className="inline-flex items-center gap-[4px] font-sans font-bold text-[13px] text-rdj-text-brand">
                                            {l.matches} match{l.matches !== 1 ? "es" : ""}
                                          </span>
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
                    )}

                    {activeTab === "vaartuigen" && (
                      <div className="w-full px-[24px] pb-[32px]">
                        {relatieVaartuigen.length === 0 ? (
                          <div className="py-[48px] text-center">
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
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Locatie</th>
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Matches</th>
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {relatieVaartuigen.map((v) => {
                                  const s = vaartuigStatusMap[v.status] || { label: v.status, variant: "grey" as const };
                                  return (
                                    <tr
                                      key={v.id}
                                      className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-[#f9fafb] cursor-pointer transition-colors"
                                      onClick={() => navigate(`/crm/relatie/${id}/vaartuig/${v.id}`)}
                                    >
                                      <td className="px-[12px] py-[10px] font-sans font-bold text-[14px] text-rdj-text-primary">{v.naam}</td>
                                      <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-secondary">{v.type}</td>
                                      <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{v.capaciteit}</td>
                                      <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">{v.locatie}</td>
                                      <td className="px-[12px] py-[10px]">
                                        {v.matches > 0 ? (
                                          <span className="inline-flex items-center gap-[4px] font-sans font-bold text-[13px] text-rdj-text-brand">
                                            {v.matches} match{v.matches !== 1 ? "es" : ""}
                                          </span>
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
                    )}

                    {activeTab === "spot" && (
                      <div className="w-full px-[24px] pb-[32px]">
                        {relatieSpot.length === 0 ? (
                          <div className="py-[48px] text-center">
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
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Tonnage</th>
                                  <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Status</th>
                                  <th className="text-right px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Waarde</th>
                                </tr>
                              </thead>
                              <tbody>
                                {relatieSpot.map((c) => (
                                  <tr
                                    key={c.id}
                                    className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-[#f9fafb] cursor-pointer transition-colors"
                                    onClick={() => navigate(`/crm/deal/${c.id}`)}
                                  >
                                    <td className="px-[12px] py-[10px]">
                                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{c.titel}</p>
                                    </td>
                                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">
                                      {[c.laadhavenNaam, c.loshavenNaam].filter(Boolean).join(" → ") || "—"}
                                    </td>
                                    <td className="px-[12px] py-[10px] font-sans font-normal text-[14px] text-rdj-text-primary">
                                      {c.tonnage ? `${c.tonnage.toLocaleString("nl-NL")} ton` : "—"}
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
                    )}

                    {activeTab === "contracten" && (
                      <div className="w-full px-[24px] pb-[32px]">
                        {relatieContracten.length === 0 ? (
                          <div className="py-[48px] text-center">
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
                                {relatieContracten.map((c) => (
                                  <tr
                                    key={c.id}
                                    className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-[#f9fafb] cursor-pointer transition-colors"
                                    onClick={() => navigate(`/crm/deal/${c.id}`)}
                                  >
                                    <td className="px-[12px] py-[10px]">
                                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{c.titel}</p>
                                      <p className="font-sans font-normal text-[12px] text-rdj-text-secondary">
                                        {c.routes && c.routes.length > 0 ? `${c.routes.length} route${c.routes.length > 1 ? "s" : ""}` : "—"}
                                      </p>
                                    </td>
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
                    )}

                    {activeTab === "mail" && (
                      <MailConversaties conversaties={relatieMail} deals={relatieDeals} onLinkDeal={handleLinkDeal} />
                    )}

                    {activeTab === "gesprekken" && (
                      <Gespreksverslagen verslagen={verslagen} contactPersonen={contactPersonen} onAdd={handleAddVerslag} />
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

          <RelatieDetailSidebar relatie={relatie} contactPersonen={contactPersonen} />
        </div>
      </div>

      {showEditDialog && (
        <RelatieFormDialog
          relatie={relatie}
          onSave={handleSaveRelatie}
          onClose={() => setShowEditDialog(false)}
        />
      )}
    </div>
  );
}
