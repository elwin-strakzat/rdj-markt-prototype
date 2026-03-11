import { useState, useMemo } from "react";
import { useParams, Link } from "react-router";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import type { PageTab } from "../components/PageHeader";
import Badge from "../components/Badge";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Pagination from "../components/Pagination";
import Button from "../components/Button";
import ActivityFeed from "../components/ActivityFeed";
import { mockRelaties, mockRelatieVaartuigen, mockRelatieVaartuigMatches } from "../data/mock-relatie-data";

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

export default function CrmVaartuigDetail() {
  const { id, relatieId } = useParams();
  const [activeTab, setActiveTab] = useState<"matches" | "onderhandelingen" | "activiteit">("matches");
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [matchPage, setMatchPage] = useState(1);
  const [matchRowsPerPage, setMatchRowsPerPage] = useState(50);

  const vaartuig = useMemo(() => mockRelatieVaartuigen.find((v) => v.id === id), [id]);
  const relatie = useMemo(() => mockRelaties.find((r) => r.id === (relatieId || vaartuig?.relatieId)), [relatieId, vaartuig]);
  const matches = useMemo(() => mockRelatieVaartuigMatches.filter((m) => m.vaartuigId === id), [id]);

  if (!vaartuig) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-sans font-bold text-[20px] text-rdj-text-primary">Vaartuig niet gevonden</p>
            <Link to={relatie ? `/crm/relatie/${relatie.id}` : "/crm/relaties"} className="font-sans text-[14px] text-rdj-text-brand hover:underline mt-2 block">
              Terug
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const statusInfo = vaartuigStatusMap[vaartuig.status] || { label: vaartuig.status, variant: "grey" as const };

  const breadcrumb = (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center pl-[24px] relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Link to="/crm/relaties" className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">CRM</p>
            </Link>
            <div className="overflow-clip relative shrink-0 size-[16px]"><div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"><div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div></div></div>
            {relatie && (
              <>
                <Link to={`/crm/relatie/${relatie.id}`} className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
                  <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">{relatie.naam}</p>
                </Link>
                <div className="overflow-clip relative shrink-0 size-[16px]"><div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"><div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div></div></div>
              </>
            )}
            <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">{vaartuig.naam}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full bg-rdj-border-secondary" />
    </div>
  );

  const titleBadge = <Badge label={statusInfo.label} variant={statusInfo.variant} size="lg" dot />;
  const subtitle = `${vaartuig.type} · ${vaartuig.capaciteit} · ${vaartuig.locatie}`;

  const tabs: PageTab[] = [
    { label: "Matches", path: "#matches", isActive: activeTab === "matches", badge: String(matches.length) },
    { label: "Onderhandelingen", path: "#onderhandelingen", isActive: activeTab === "onderhandelingen", badge: String(vaartuig.onderhandelingen) },
    { label: "Activiteit", path: "#activiteit", isActive: activeTab === "activiteit" },
  ];

  const sourceIcon = (
    <svg fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="8" cy="8" r="2" fill="currentColor"/>
    </svg>
  );

  const matchColumns: Column[] = [
    { key: "cargo", header: "Lading", type: "leading-text", badgeKey: "eigenBadge", actionLabel: "+ Onderhandeling" },
    { key: "company", header: "Relatie", type: "text", subtextKey: "contactPersoon", textColor: "text-rdj-text-brand", width: "w-[180px]" },
    { key: "laadHaven", header: "Laden", type: "text", subtextKey: "laadDatum", width: "w-[180px]" },
    { key: "losHaven", header: "Lossen", type: "text", subtextKey: "losDatum", width: "w-[180px]" },
    { key: "source", header: "Bron", type: "text", subtextKey: "sourceDate", featuredIconKey: "sourceIcon", featuredIconVariantKey: "sourceIconVariant", width: "w-[180px]" },
    { key: "matchPercentage", header: "Match", type: "progress", align: "right", width: "w-[100px]" },
  ];

  const matchTableData: RowData[] = matches.map((m) => ({
    id: m.id,
    cargo: m.ladingTitel,
    eigenBadge: m.isEigen ? undefined : "Markt",
    company: m.relatie,
    contactPersoon: m.contactPersoon,
    laadHaven: m.laadHaven,
    laadDatum: m.laadDatum,
    losHaven: m.losHaven,
    losDatum: m.losDatum,
    source: m.bron,
    sourceDate: m.bronDatum,
    sourceIcon: sourceIcon,
    sourceIconVariant: "grey",
    matchPercentage: m.matchPercentage,
  }));

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
                    title={vaartuig.naam}
                    titleBadge={titleBadge}
                    subtitle={subtitle}
                    actions={<Button variant="primary" label="Bewerken" />}
                    tabs={tabs}
                    onTabClick={(tab: PageTab) => {
                      const tabKey = tab.path.replace("#", "") as typeof activeTab;
                      setActiveTab(tabKey);
                    }}
                  />

                  <div className="w-full pt-[20px]">
                    {activeTab === "matches" && (
                      <>
                        <Pagination
                          currentPage={matchPage}
                          totalItems={matches.length}
                          rowsPerPage={matchRowsPerPage}
                          onPageChange={setMatchPage}
                          onRowsPerPageChange={setMatchRowsPerPage}
                        />
                        <Table
                          columns={matchColumns}
                          data={matchTableData}
                          hoveredRowId={hoveredRow}
                          onRowHover={setHoveredRow}
                          onRowClick={() => {}}
                        />
                      </>
                    )}

                    {activeTab === "onderhandelingen" && (
                      <div className="w-full px-[24px] py-[48px] text-center">
                        <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
                          Nog geen onderhandelingen gestart voor dit vaartuig.
                        </p>
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

          {/* Right Sidebar */}
          <div className="w-[320px] shrink-0 border-l border-rdj-border-secondary bg-white">
            <div className="p-[24px] flex flex-col gap-[24px]">
              <div>
                <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary mb-[16px]">Details</p>
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Type</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{vaartuig.type}</p>
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Capaciteit</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{vaartuig.capaciteit}</p>
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Huidige locatie</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{vaartuig.locatie}</p>
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[12px] text-rdj-text-secondary uppercase tracking-[0.04em]">Beschikbaar vanaf</p>
                    <p className="font-sans font-bold text-[14px] text-rdj-text-primary mt-[2px]">{formatDate(vaartuig.beschikbaarVanaf)}</p>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
