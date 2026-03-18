import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast, Toaster } from "sonner";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Button from "../components/Button";
import VaartuigMarktSidebar from "../components/VaartuigMarktSidebar";
import ConversationDialog from "../components/ConversationDialog";
import ActivityFeed from "../components/ActivityFeed";
import { useInboxVaartuigSummary } from "../data/useDetailData";
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

export default function InboxVesselDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: summary, loading: summaryLoading } = useInboxVaartuigSummary(id);
  const [conversationDialog, setConversationDialog] = useState<{ relatieId: string; relatieName: string } | null>(null);

  const handleArchive = () => {
    toast.success("Vaartuig gearchiveerd", { description: "Het vaartuig is verwijderd uit de inbox.", duration: 3000 });
    navigate("/markt/inbox/vaartuigen");
  };

  // Table columns for cargo matches (ladingen die passen bij dit vaartuig)
  const matchColumns: Column[] = [
    { key: "lading", header: "Lading", type: "leading-text", subtextKey: "ladingSubtext", actionLabel: "Onderhandeling" },
    { key: "relatie", header: "Relatie", type: "text", subtextKey: "relatieContact", textColor: "text-rdj-text-brand", width: "w-[180px]", onClickKey: "onRelatieClick" },
    { key: "laden", header: "Laden", type: "text", subtextKey: "ladenDatum", width: "w-[140px]" },
    { key: "lossen", header: "Lossen", type: "text", subtextKey: "lossenDatum", width: "w-[140px]" },
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

  // Mock match data for vessel
  const matchRows: RowData[] = [
    { id: "1", lading: "3.000 ton Houtpellets (0571)", ladingSubtext: "Eigen", relatie: "Rederij de Jong", relatieContact: undefined, laden: "Rotterdam Botlek", ladenDatum: "Mrt 2025", lossen: "Deventer IJssel", lossenDatum: "Mrt 2025", matchPct: 90, onRelatieClick: () => { const rel = mockRelaties.find(r => r.naam === "Rederij de Jong"); if (rel) navigate(`/crm/relatie/${rel.id}`); } },
    { id: "2", lading: "1.000 - 2.000 ton Hout", ladingSubtext: "Openen (1)", relatie: "Markel Freight B.V.", relatieContact: "H.Q. Duivenvoorde", laden: "Moerdijk Industriehaven", ladenDatum: "Jan 2024", lossen: "Amsterdam Westhaven", lossenDatum: "Jan 2024", matchPct: 75, onRelatieClick: () => { const rel = mockRelaties.find(r => r.naam === "Markel Freight B.V."); if (rel) navigate(`/crm/relatie/${rel.id}`); } },
    { id: "3", lading: "Af te stemmen ton Houtpellets", ladingSubtext: undefined, relatie: "Buiten Onszelf N.V.", relatieContact: "Lisa Aelbrechtse", laden: "Antwerpen", ladenDatum: "Do 10 Jan: 10:00", lossen: "Rotterdam Europoort", lossenDatum: "Mrt 2025", matchPct: 60, onRelatieClick: () => { const rel = mockRelaties.find(r => r.naam === "Buiten Onszelf N.V."); if (rel) navigate(`/crm/relatie/${rel.id}`); } },
  ];

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
              <button onClick={() => navigate("/markt/inbox/vaartuigen")} className="flex items-center justify-center p-[4px] rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
                <p className="font-sans font-bold leading-[20px] text-rdj-text-secondary text-[14px] whitespace-nowrap">Markt</p>
              </button>
              <BreadcrumbChevron />
              <button onClick={() => navigate("/markt/inbox/vaartuigen")} className="flex items-center justify-center px-[8px] py-[4px] rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover">
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
                    <Button variant="secondary" label="Archiveren" onClick={handleArchive}
                      leadingIcon={<svg fill="none" viewBox="0 0 14 14"><path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg>}
                    />
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
                        const relatie = mockRelaties.find(r => r.naam === row.relatie);
                        setConversationDialog({
                          relatieId: relatie?.id || "rel-001",
                          relatieName: (row.relatie as string) || "Onbekend",
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
          <VaartuigMarktSidebar id={id!} />
        </div>
      </div>

      {/* Conversation dialog */}
      {conversationDialog && (
        <ConversationDialog
          relatieId={conversationDialog.relatieId}
          relatieName={conversationDialog.relatieName}
          preSelectedItemId={id}
          preSelectedItemType="vaartuig"
          onClose={() => setConversationDialog(null)}
        />
      )}
    </>
  );
}
