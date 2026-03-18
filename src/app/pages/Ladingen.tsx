import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { useDetailPanel } from "../components/DetailPanelContext";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown";
import Button from "../components/Button";
import LadingFormDialog from "../components/LadingFormDialog";
import { mockRelaties, mockRelatieLadingen, type RelatieLading } from "../data/mock-relatie-data";
import { mockContracten, mockLadingSoorten } from "../data/mock-contract-data";

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

export default function Ladingen() {
  const navigate = useNavigate();
  const { openDetail, activeDetail } = useDetailPanel();
  const [search, setSearch] = useState("");
  const [relatieFilter, setRelatieFilter] = useState<string[]>([]);
  const [ladingSoortFilter, setLadingSoortFilter] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [ladingen, setLadingen] = useState<RelatieLading[]>(mockRelatieLadingen);

  const relatieOptions = useMemo(() => ["Alle relaties", ...mockRelaties.map((r) => r.naam)], []);
  const ladingSoortOptions = useMemo(() => ["Alle ladingsoorten", ...mockLadingSoorten.map((ls) => ls.naam)], []);

  const filtered = useMemo(() => {
    return ladingen.filter((l) => {
      if (search && !l.titel.toLowerCase().includes(search.toLowerCase())) return false;
      if (relatieFilter.length > 0) {
        const relatie = mockRelaties.find((r) => r.id === l.relatieId);
        if (!relatie || !relatieFilter.includes(relatie.naam)) return false;
      }
      if (ladingSoortFilter.length > 0) {
        const ls = l.ladingSoortId ? mockLadingSoorten.find((s) => s.id === l.ladingSoortId) : undefined;
        if (!ls || !ladingSoortFilter.includes(ls.naam)) return false;
      }
      return true;
    });
  }, [ladingen, search, relatieFilter, ladingSoortFilter]);

  const paged = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, currentPage, rowsPerPage]);

  const columns: Column[] = [
    {
      key: "titel",
      header: "Lading",
      type: "leading-text",
      subtextKey: "ladingSoortLabel",
      actionLabel: "Openen",
    },
    {
      key: "routeLabel",
      header: "Route",
      type: "text",
      width: "w-[220px]",
    },
    {
      key: "tonnageLabel",
      header: "Tonnage",
      type: "text",
      width: "w-[120px]",
    },
    {
      key: "relatieNaam",
      header: "Relatie",
      type: "text",
      width: "w-[180px]",
    },
    {
      key: "contractLabel",
      header: "Deal",
      type: "text",
      width: "w-[200px]",
    },
    {
      key: "laaddatumLabel",
      header: "Laaddatum",
      type: "deadline",
      expiredKey: "laaddatumExpired",
      width: "w-[140px]",
    },
  ];

  const tableData: RowData[] = paged.map((l) => {
    const relatie = mockRelaties.find((r) => r.id === l.relatieId);
    const ls = l.ladingSoortId ? mockLadingSoorten.find((s) => s.id === l.ladingSoortId) : undefined;
    const contract = l.contractId ? mockContracten.find((c) => c.id === l.contractId) : undefined;
    return {
      id: l.id,
      relatieId: l.relatieId,
      titel: l.titel,
      ladingSoortLabel: ls?.naam || l.product,
      routeLabel: [l.laadhaven, l.loshaven].filter(Boolean).join(" → "),
      tonnageLabel: l.tonnage,
      relatieNaam: relatie?.naam || "—",
      contractLabel: contract?.titel || "—",
      laaddatumLabel: formatDate(l.laaddatum),
      laaddatumExpired: new Date(l.laaddatum) < new Date(),
    };
  });

  const handleCreate = (data: Partial<RelatieLading>) => {
    const newLading: RelatieLading = {
      id: `rl-${Date.now()}`,
      relatieId: data.relatieId || "",
      titel: data.titel || "Nieuwe lading",
      laadhaven: data.laadhaven || "—",
      loshaven: data.loshaven || "—",
      tonnage: data.tonnage || "—",
      product: data.product || "—",
      laaddatum: data.laaddatum || new Date().toISOString().split("T")[0],
      status: "intake",
      matches: 0,
      onderhandelingen: 0,
      ...data,
    };
    setLadingen((prev) => [newLading, ...prev]);
    setShowCreateDialog(false);
  };

  return (
    <div className="flex min-h-screen bg-rdj-bg-primary">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <div className="pt-[32px] pb-[8px]">
          <PageHeader
            title="Ladingen"
            actions={
              <Button
                variant="primary"
                label="Nieuwe lading"
                leadingIcon={
                  <svg fill="none" viewBox="0 0 12 12">
                    <path d="M6 1V11M1 6H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                  </svg>
                }
                onClick={() => setShowCreateDialog(true)}
              />
            }
            filtersLeft={
              <>
                <FilterDropdown
                  label="Relatie"
                  options={relatieOptions}
                  allLabel="Alle relaties"
                  selectedValues={relatieFilter}
                  onMultiSelect={(v) => { setRelatieFilter(v); setCurrentPage(1); }}
                />
                <FilterDropdown
                  label="Ladingsoort"
                  options={ladingSoortOptions}
                  allLabel="Alle ladingsoorten"
                  selectedValues={ladingSoortFilter}
                  onMultiSelect={(v) => { setLadingSoortFilter(v); setCurrentPage(1); }}
                />
              </>
            }
            filtersRight={
              <div className="relative">
                <div className="absolute left-[12px] top-1/2 -translate-y-1/2 size-[16px] text-[#667085]">
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <path d="M14 14L10.0667 10.0667M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                  placeholder="Zoek op titel..."
                  className="bg-rdj-bg-primary border border-rdj-border-primary rounded-[6px] pl-[36px] pr-[12px] py-[8px] font-sans font-normal text-[14px] leading-[20px] text-rdj-text-primary placeholder:text-rdj-text-tertiary focus:outline-none focus:border-[#1567a4] focus:ring-1 focus:ring-[#1567a4] w-[240px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>
            }
          />
        </div>

        <Pagination
          currentPage={currentPage}
          totalItems={filtered.length}
          rowsPerPage={rowsPerPage}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={setRowsPerPage}
        />

        <Table
          columns={columns}
          data={tableData}
          hoveredRowId={hoveredRow}
          onRowHover={setHoveredRow}
          activeRowId={activeDetail?.type === 'lading' ? activeDetail.id : null}
          onRowClick={(row) => {
            openDetail('lading', row.id);
          }}
        />
      </div>

      {showCreateDialog && (
        <LadingFormDialog
          onSave={handleCreate}
          onClose={() => setShowCreateDialog(false)}
        />
      )}
    </div>
  );
}
