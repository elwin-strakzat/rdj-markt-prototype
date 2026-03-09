import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Send, MailOpen, Check, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import type { PageTab } from "../components/PageHeader";
import Badge from "../components/Badge";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Pagination from "../components/Pagination";
import Button from "../components/Button";
import ActivityFeed from "../components/ActivityFeed";
import LadingEigenSidebar from "../components/LadingEigenSidebar";
import NegotiationDialog from "../components/NegotiationDialog";
import { useBevrachtingLadingSummary } from "../data/useDetailData";
import { mockMatches, mockNegotiations } from "../data/mock-data";
import svgPaths from "../../imports/svg-62fj7rjvas";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";
// import imgAvatar1 from "figma:asset/3627de284acb374a4d9313b3c2dbaeeb87a48224.png";
const imgAvatar1 = "";
// import imgAvatar2 from "figma:asset/e7809035038b3816de2a1d67c5de86ebeed325d0.png";
const imgAvatar2 = "";
// import imgAvatar3 from "figma:asset/bf485cb6f98c12534c69bc81459ce34f2e24e4a8.png";
const imgAvatar3 = "";
// import imgAvatar4 from "figma:asset/9e45f45f537bea4bf653bc0307471e5ff5545f63.png";
const imgAvatar4 = "";

/* ── Status variant map ── */
const negotiationStatusVariantMap: Record<string, string> = {
  "Via werklijst": "brand",
  "Bod verstuurd": "brand",
  "Bod ontvangen": "brand",
  "Goedgekeurd": "success",
  "Afgewezen": "error",
  "Afgekeurd": "error",
};

const negotiationStatusIconMap: Record<string, React.ReactNode | null> = {
  "Via werklijst": null,
  "Bod verstuurd": <Send strokeWidth={2.5} />,
  "Bod ontvangen": <MailOpen strokeWidth={2.5} />,
  "Goedgekeurd": <Check strokeWidth={2.5} />,
  "Afgewezen": <X strokeWidth={2.5} />,
  "Afgekeurd": <X strokeWidth={2.5} />,
};

const negotiationStatusTypeMap: Record<string, "default" | "color"> = {
  "Via werklijst": "default",
  "Bod verstuurd": "color",
  "Bod ontvangen": "color",
  "Goedgekeurd": "color",
  "Afgewezen": "color",
  "Afgekeurd": "color",
};

export default function LadingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'matches' | 'onderhandelingen' | 'activiteit'>('matches');
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [selectedNegotiationId, setSelectedNegotiationId] = useState<string | null>(null);

  /* Pagination state per tab */
  const [matchPage, setMatchPage] = useState(1);
  const [matchRowsPerPage, setMatchRowsPerPage] = useState(50);
  const [negPage, setNegPage] = useState(1);
  const [negRowsPerPage, setNegRowsPerPage] = useState(50);

  const { data: summary, loading: summaryLoading } = useBevrachtingLadingSummary(id);
  const avatars = [imgAvatar, imgAvatar1, imgAvatar2, imgAvatar3, imgAvatar4];

  /* ── Breadcrumb ── */
  const breadcrumb = (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center pl-[24px] relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Link to="/markt/bevrachting" className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Markt</p>
            </Link>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                <div className="absolute inset-[-8.33%_-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
                    <path d={svgPaths.p3ec8f700} stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <Link to="/markt/bevrachting" className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Bevrachting</p>
            </Link>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                <div className="absolute inset-[-8.33%_-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
                    <path d={svgPaths.p3ec8f700} stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">
                {summaryLoading ? "..." : (summary?.breadcrumbLabel || id)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full bg-rdj-border-secondary" />
    </div>
  );

  /* ── Subtitle ── */
  const subtitle = summaryLoading ? undefined : (
    <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[24px] text-rdj-text-secondary text-[16px]">
      {summary?.subtitle || ""}
    </p>
  );

  /* ── Title badge (status) ── */
  const titleBadge = summary ? (
    <Badge label={summary.status} variant={summary.statusVariant} size="lg" dot />
  ) : null;

  /* ── Tabs ── */
  const tabs: PageTab[] = [
    { label: 'Matches', path: '#matches', isActive: activeTab === 'matches', badge: String(mockMatches.length) },
    { label: 'Onderhandelingen', path: '#onderhandelingen', isActive: activeTab === 'onderhandelingen', badge: String(mockNegotiations.length) },
    { label: 'Activiteit', path: '#activiteit', isActive: activeTab === 'activiteit' },
  ];

  /* ── Matches table ── */
  const matchColumns: Column[] = [
    { key: 'name', header: 'Vaartuig', type: 'leading-text', subtextKey: 'type', badgeKey: 'eigenBadge', actionLabel: '+ Onderhandeling' },
    { key: 'company', header: 'Relatie', type: 'text', subtextKey: 'contactPersoon', textColor: 'text-rdj-text-brand', width: 'w-[180px]' },
    { key: 'location', header: 'Locatie', type: 'text', subtextKey: 'locationDate', width: 'w-[200px]' },
    { key: 'distance', header: 'Groottonnage', type: 'text', align: 'right', width: 'w-[120px]' },
    { key: 'inhoud', header: 'Inhoud', type: 'text', align: 'right', width: 'w-[100px]' },
    { key: 'source', header: 'Bron', type: 'text', subtextKey: 'sourceDate', featuredIconKey: 'sourceIcon', featuredIconVariantKey: 'sourceIconVariant', width: 'w-[180px]' },
    { key: 'matchPercentage', header: 'Match', type: 'progress', align: 'right', width: 'w-[100px]' },
  ];

  const sourceIcon = (
    <svg fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="8" cy="8" r="2" fill="currentColor"/>
    </svg>
  );

  const matchTableData: RowData[] = mockMatches.map((match) => ({
    id: match.id,
    name: match.name,
    type: match.type,
    eigenBadge: match.isEigen ? undefined : 'Markt',
    company: match.company,
    contactPersoon: match.contactPersoon || match.companyLocation,
    location: match.location,
    locationDate: match.locationDate || '',
    distance: match.distance,
    inhoud: match.inhoud || '',
    source: match.source || match.cargoType,
    sourceDate: match.sourceDate || match.cargoDate,
    sourceIcon: sourceIcon,
    sourceIconVariant: 'grey',
    matchPercentage: match.matchPercentage,
  }));

  /* ── Negotiations table ── */
  const negColumns: Column[] = [
    { key: 'company', header: 'Relatie', type: 'leading-text', actionLabel: 'Openen' },
    { key: 'freightPrice', header: 'Vrachtprijs', type: 'text', subtextKey: 'freightPriceDiff', align: 'right', width: 'w-[160px]' },
    { key: 'tonnage', header: 'Tonnage', type: 'text', align: 'right', width: 'w-[120px]' },
    { key: 'deadline', header: 'Deadline', type: 'deadline', expiredKey: 'deadlineExpired', editable: true, width: 'w-[160px]' },
    { key: 'status', header: 'Status', type: 'status', variantKey: 'statusVariant', iconKey: 'statusIcon', typeKey: 'statusType', width: 'w-[160px]' },
    { key: 'contactName', header: 'Laatste update', type: 'text', subtextKey: 'contactDate', avatarSrcKey: 'contactAvatar', width: 'w-[200px]' },
  ];

  const negTableData: RowData[] = mockNegotiations.map((neg, idx) => ({
    id: neg.id,
    company: neg.company,
    freightPrice: neg.freightPrice || '—',
    freightPriceDiff: neg.freightPriceDiff || '',
    tonnage: neg.tonnage,
    deadline: neg.deadline,
    deadlineExpired: neg.deadlineExpired,
    status: neg.status,
    statusVariant: negotiationStatusVariantMap[neg.status] || 'grey',
    statusIcon: negotiationStatusIconMap[neg.status] || null,
    statusType: negotiationStatusTypeMap[neg.status] || 'default',
    contactName: neg.contact.name,
    contactDate: neg.contact.date,
    contactAvatar: avatars[idx % avatars.length],
  }));

  /* ── Actions ── */
  const actions = (
    <>
      <Button
        variant="secondary"
        label="Uit markt halen"
        leadingIcon={
          <svg fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3f40eb80} stroke="#B42318" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        }
        className="[&_p]:!text-[#b42318]"
      />
      <Button variant="primary" label="Bewerken" />
    </>
  );

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {breadcrumb}

        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center py-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[0px] items-start max-w-[1116px] pt-[24px] relative shrink-0 w-full">
                  <PageHeader
                    title={summaryLoading ? "Laden..." : (summary?.title || "—")}
                    titleBadge={titleBadge}
                    subtitle={subtitle}
                    actions={actions}
                    tabs={tabs}
                    onTabClick={(tab: PageTab) => {
                      const tabKey = tab.path.replace('#', '') as 'matches' | 'onderhandelingen' | 'activiteit';
                      setActiveTab(tabKey);
                    }}
                  />

                  {/* Tab Content */}
                  <div className="w-full pt-[20px]">
                    {activeTab === 'matches' && (
                      <>
                        <Pagination
                          currentPage={matchPage}
                          totalItems={mockMatches.length}
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

                    {activeTab === 'onderhandelingen' && (
                      <>
                        <Pagination
                          currentPage={negPage}
                          totalItems={mockNegotiations.length}
                          rowsPerPage={negRowsPerPage}
                          onPageChange={setNegPage}
                          onRowsPerPageChange={setNegRowsPerPage}
                        />
                        <Table
                          columns={negColumns}
                          data={negTableData}
                          hoveredRowId={hoveredRow}
                          onRowHover={setHoveredRow}
                          onRowClick={(row) => setSelectedNegotiationId(row.id)}
                        />
                      </>
                    )}

                    {activeTab === 'activiteit' && (
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
          <LadingEigenSidebar id={id!} />
        </div>
      </div>

      {/* Negotiation Sidebar */}
      {selectedNegotiationId && (
        <NegotiationDialog
          negotiationId={selectedNegotiationId}
          onClose={() => setSelectedNegotiationId(null)}
        />
      )}
    </div>
  );
}