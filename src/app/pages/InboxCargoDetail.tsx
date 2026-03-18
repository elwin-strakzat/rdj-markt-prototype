import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast, Toaster } from "sonner";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Button from "../components/Button";
import LadingMarktSidebar from "../components/LadingMarktSidebar";
import StartNegotiationSidebar from "../components/StartNegotiationSidebar";
import ConversationDialog from "../components/ConversationDialog";
import ActivityFeed from "../components/ActivityFeed";
import { useInboxLadingSummary } from "../data/useDetailData";
import { mockRelaties } from "../data/mock-relatie-data";

/* ── Match percentage donut ── */
function MatchDonut({ percentage, color }: { percentage: number; color: string }) {
  const r = 6;
  const circ = 2 * Math.PI * r;
  const filled = (percentage / 100) * circ;
  return (
    <svg className="block size-[16px]" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r={r} stroke="#EAECF0" strokeWidth="2.5" fill="none" />
      <circle cx="8" cy="8" r={r} stroke={color} strokeWidth="2.5" fill="none"
        strokeDasharray={`${filled} ${circ - filled}`} strokeDashoffset={circ * 0.25} strokeLinecap="round" />
    </svg>
  );
}

function getMatchColor(pct: number): string {
  if (pct >= 80) return "#17B26A";
  if (pct >= 60) return "#F79009";
  return "#D92D20";
}

/* ── Breadcrumb chevron ── */
function BreadcrumbChevron() {
  return (
    <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
      <path d="M6 4L10 8L6 12" stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
    </svg>
  );
}

export default function InboxCargoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [offeredMatches, setOfferedMatches] = useState<Set<string>>(new Set());
  const [conversationDialog, setConversationDialog] = useState<{ relatieId: string; relatieName: string } | null>(null);
  const { data: summary, loading: summaryLoading } = useInboxLadingSummary(id);

  useEffect(() => {
    const stored = localStorage.getItem(`offered-matches-${id}`);
    if (stored) setOfferedMatches(new Set(JSON.parse(stored)));
  }, [id]);

  // Table columns for vessel matches
  const matchColumns: Column[] = [
    { key: "name", header: "Naam", type: "leading-text", subtextKey: "subtype", badgeKey: "statusBadge", actionLabel: "Onderhandeling" },
    { key: "company", header: "Relatie", type: "text", subtextKey: "contact", textColor: "text-rdj-text-brand", width: "w-[180px]", onClickKey: "onRelatieClick" },
    { key: "location", header: "Locatie", type: "text", subtextKey: "locationDate", width: "w-[200px]" },
    { key: "capacity", header: "Groottonnage", type: "text", width: "w-[140px]" },
    { key: "content", header: "Inhoud", type: "text", width: "w-[100px]" },
    {
      key: "matchPct", header: "Match", type: "custom", width: "w-[80px]",
      sortActive: true, sortDirection: "desc",
      render: (row: RowData) => {
        const pct = row.matchPct as number;
        const color = getMatchColor(pct);
        return (
          <div className="flex items-center justify-end gap-[6px]">
            <MatchDonut percentage={pct} color={color} />
            <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px]">{pct}%</p>
          </div>
        );
      },
    },
  ];

  // Mock match data
  const matchRows: RowData[] = [
    { id: "1", name: "Aar", subtype: "Motorschip", statusBadge: offeredMatches.has("1") ? "Aangeboden" : undefined, company: "Andermans B.V.", contact: "Cees Andoormans", location: "Europahafen (Maassluis)", locationDate: "Vanaf Ma 13 Jan, 2025", capacity: "3.519 mt", content: "4.200 m³", matchPct: 90, onRelatieClick: () => { const rel = mockRelaties.find(r => r.naam === "Andermans B.V."); if (rel) navigate(`/crm/relatie/${rel.id}`); } },
    { id: "2", name: "Agaat", subtype: "Motorschip", statusBadge: offeredMatches.has("2") ? "Aangeboden" : undefined, company: "Markel Freight B.V.", contact: "H.Q. Duivenvoorde", location: "Maasvlakte", locationDate: "Vanaf Di 14 Jan, 2025", capacity: "2.085 mt", content: "2.500 m³", matchPct: 85, onRelatieClick: () => { const rel = mockRelaties.find(r => r.naam === "Markel Freight B.V."); if (rel) navigate(`/crm/relatie/${rel.id}`); } },
  ];

  const handleMatchClick = (row: RowData) => {
    setSelectedMatch({ id: row.id, name: row.name as string, company: row.company as string, contact: row.contact as string, location: row.location as string, locationDate: row.locationDate as string, capacity: row.capacity as string, content: row.content as string, matchPercentage: `${row.matchPct}%` });
  };

  const handleArchive = () => {
    toast.success("Lading gearchiveerd", { description: "De lading is verwijderd uit de inbox.", duration: 3000 });
    navigate("/markt/inbox/ladingen");
  };

  const handleMoveToPipeline = () => {
    toast.success("Lading naar pijplijn verplaatst", { description: "De lading is nu zichtbaar in het Pijplijn scherm.", duration: 3000 });
    navigate("/markt/inbox/ladingen");
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="flex min-h-screen bg-white">
        <Sidebar />

        <div className="flex-1 overflow-auto flex">
          {/* Main content area */}
          <div className="flex-1 overflow-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-[8px] px-[24px] pt-[24px] pb-[20px] border-b border-rdj-border-secondary">
              <button onClick={() => navigate("/markt/inbox/ladingen")} className="flex items-center justify-center p-[4px] rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
                <p className="font-sans font-bold leading-[20px] text-rdj-text-secondary text-[14px] whitespace-nowrap">Markt</p>
              </button>
              <BreadcrumbChevron />
              <button onClick={() => navigate("/markt/inbox/ladingen")} className="flex items-center justify-center px-[8px] py-[4px] rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
                <p className="font-sans font-bold leading-[20px] text-rdj-text-secondary text-[14px] whitespace-nowrap">Inbox</p>
              </button>
              <BreadcrumbChevron />
              <div className="bg-rdj-bg-secondary flex items-center justify-center px-[8px] py-[4px] rounded-[6px] shrink-0">
                <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px] whitespace-nowrap">
                  {summaryLoading ? "..." : (summary?.breadcrumbLabel || id)}
                </p>
              </div>
            </div>

            {/* Page content with max width */}
            <div className="flex flex-col items-center size-full">
              <div className="flex flex-col gap-[32px] items-start max-w-[1116px] w-full py-[32px]">
                {/* Page Header */}
                <PageHeader
                  title={summaryLoading ? "Laden..." : (summary?.title || "—")}
                  subtitle={
                    summaryLoading ? undefined : (
                      <p className="font-sans font-normal leading-[24px] text-rdj-text-secondary text-[16px]">
                        {summary?.subtitle || ""}
                      </p>
                    )
                  }
                  actions={
                    <>
                      <Button variant="secondary" label="Archiveren" onClick={handleArchive}
                        leadingIcon={<svg fill="none" viewBox="0 0 14 14"><path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg>}
                      />
                      <Button variant="primary" label="Naar pijplijn sturen" onClick={handleMoveToPipeline} />
                    </>
                  }
                />

                {/* Matches section */}
                <div className="w-full px-[24px]">
                  <SectionHeader title="Matches" />
                  <div className="border-t border-rdj-border-secondary">
                    <Table
                      columns={matchColumns}
                      data={matchRows}
                      onRowClick={(row) => {
                        const relatie = mockRelaties.find(r => r.naam === row.company);
                        setConversationDialog({
                          relatieId: relatie?.id || "rel-001",
                          relatieName: (row.company as string) || "Onbekend",
                        });
                      }}
                    />
                  </div>
                </div>

                {/* Activity section */}
                <div className="w-full px-[24px]">
                  <SectionHeader title="Activiteit" />
                  <ActivityFeed compact />
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <LadingMarktSidebar id={id!} />
        </div>
      </div>

      {/* Start Negotiation Sidebar */}
      {selectedMatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/20">
          <StartNegotiationSidebar match={selectedMatch} onClose={() => setSelectedMatch(null)} offeredMatches={offeredMatches} setOfferedMatches={setOfferedMatches} />
        </div>
      )}

      {/* Conversation dialog */}
      {conversationDialog && (
        <ConversationDialog
          relatieId={conversationDialog.relatieId}
          relatieName={conversationDialog.relatieName}
          preSelectedItemId={id}
          preSelectedItemType="lading"
          onClose={() => setConversationDialog(null)}
        />
      )}
    </>
  );
}
