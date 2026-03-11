import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown";
import Button from "../components/Button";
import Badge from "../components/Badge";
import RelatieFormDialog from "../components/RelatieFormDialog";
import { mockRelaties, mockContactPersonen, mockGebruikers, LADINGGROEP_SUGGESTIES, mockRelatieCounts } from "../data/mock-relatie-data";
import type { Relatie } from "../data/api";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

function isDateExpired(dateStr?: string, daysThreshold = 30): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const diff = Date.now() - d.getTime();
  return diff > daysThreshold * 24 * 60 * 60 * 1000;
}

const statusVariantMap: Record<string, string> = {
  actief: "success",
  inactief: "grey",
  prospect: "brand",
};

export default function Relaties() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [ladingGroepFilter, setLadingGroepFilter] = useState<string[]>([]);
  const [eigenaarFilter, setEigenaarFilter] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [relaties, setRelaties] = useState<Relatie[]>(mockRelaties);

  const eigenaarOptions = useMemo(
    () => ["Alle eigenaren", ...mockGebruikers.map((g) => g.naam)],
    []
  );
  const ladingGroepOptions = useMemo(
    () => ["Alle ladinggroepen", ...LADINGGROEP_SUGGESTIES],
    []
  );

  const filtered = useMemo(() => {
    return relaties.filter((r) => {
      if (search && !r.naam.toLowerCase().includes(search.toLowerCase())) return false;
      if (statusFilter.length > 0 && r.status && !statusFilter.map((s) => s.toLowerCase()).includes(r.status)) return false;
      if (ladingGroepFilter.length > 0 && !(r.ladingGroepen || []).some((g) => ladingGroepFilter.includes(g))) return false;
      if (eigenaarFilter.length > 0) {
        const eigenaar = mockGebruikers.find((g) => g.id === r.eigenaarId);
        if (!eigenaar || !eigenaarFilter.includes(eigenaar.naam)) return false;
      }
      return true;
    });
  }, [relaties, search, statusFilter, ladingGroepFilter, eigenaarFilter]);

  const paged = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, currentPage, rowsPerPage]);

  const columns: Column[] = [
    {
      key: "naam",
      header: "Bedrijfsnaam",
      type: "leading-text",
      subtextKey: "plaatsLabel",
      actionLabel: "Openen",
    },
    {
      key: "statusLabel",
      header: "Status",
      type: "status",
      variantKey: "statusVariant",
      defaultVariant: "grey",
      width: "w-[120px]",
    },
    {
      key: "ladingGroepen",
      header: "Ladinggroepen",
      type: "badges",
      defaultVariant: "grey",
      width: "w-[200px]",
    },
    {
      key: "contactCount",
      header: "Contacten",
      type: "text",
      width: "w-[100px]",
    },
    {
      key: "ladingenCount",
      header: "Ladingen",
      type: "text",
      width: "w-[100px]",
    },
    {
      key: "vaartuigenCount",
      header: "Vaartuigen",
      type: "text",
      width: "w-[100px]",
    },
    {
      key: "onderhandelingenCount",
      header: "Onderhandelingen",
      type: "text",
      width: "w-[130px]",
    },
    {
      key: "eigenaarNaam",
      header: "Eigenaar",
      type: "text",
      avatarInitialsKey: "eigenaarInitials",
      width: "w-[160px]",
    },
    {
      key: "laatsteContactLabel",
      header: "Laatste contact",
      type: "deadline",
      expiredKey: "contactExpired",
      width: "w-[140px]",
    },
  ];

  const tableData: RowData[] = paged.map((r) => {
    const eigenaar = mockGebruikers.find((g) => g.id === r.eigenaarId);
    const contactCount = mockContactPersonen.filter((cp) => cp.relatieId === r.id).length;
    const counts = mockRelatieCounts[r.id] || { ladingen: 0, vaartuigen: 0, onderhandelingen: 0 };
    return {
      id: r.id,
      naam: r.naam,
      plaatsLabel: [r.plaats, r.land].filter(Boolean).join(", ") || "—",
      statusLabel: r.status ? r.status.charAt(0).toUpperCase() + r.status.slice(1) : "—",
      statusVariant: statusVariantMap[r.status || ""] || "grey",
      ladingGroepen: r.ladingGroepen || [],
      contactCount: String(contactCount),
      ladingenCount: String(counts.ladingen),
      vaartuigenCount: String(counts.vaartuigen),
      onderhandelingenCount: String(counts.onderhandelingen),
      eigenaarNaam: eigenaar?.naam || "—",
      eigenaarInitials: eigenaar ? getInitials(eigenaar.naam) : undefined,
      laatsteContactLabel: formatDate(r.laatsteContact),
      contactExpired: isDateExpired(r.laatsteContact),
    };
  });

  const handleCreateRelatie = (data: Partial<Relatie>) => {
    const newRelatie: Relatie = {
      id: `rel-${Date.now()}`,
      naam: data.naam || "Nieuwe relatie",
      contactPersoonIds: [],
      ...data,
    };
    setRelaties((prev) => [newRelatie, ...prev]);
    setShowCreateDialog(false);
  };

  return (
    <div className="flex min-h-screen bg-rdj-bg-primary">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <div className="pt-[32px] pb-[8px]">
          <PageHeader
            title="Relaties"
            actions={
              <Button
                variant="primary"
                label="Nieuwe relatie"
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
                  label="Status"
                  options={["Alle statussen", "Actief", "Inactief", "Prospect"]}
                  allLabel="Alle statussen"
                  selectedValues={statusFilter}
                  onMultiSelect={(v) => { setStatusFilter(v); setCurrentPage(1); }}
                />
                <FilterDropdown
                  label="Ladinggroep"
                  options={ladingGroepOptions}
                  allLabel="Alle ladinggroepen"
                  selectedValues={ladingGroepFilter}
                  onMultiSelect={(v) => { setLadingGroepFilter(v); setCurrentPage(1); }}
                />
                <FilterDropdown
                  label="Eigenaar"
                  options={eigenaarOptions}
                  allLabel="Alle eigenaren"
                  selectedValues={eigenaarFilter}
                  onMultiSelect={(v) => { setEigenaarFilter(v); setCurrentPage(1); }}
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
                  placeholder="Zoek op bedrijfsnaam..."
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
          onRowClick={(row) => navigate(`/crm/relatie/${row.id}`)}
        />
      </div>

      {showCreateDialog && (
        <RelatieFormDialog
          onSave={handleCreateRelatie}
          onClose={() => setShowCreateDialog(false)}
        />
      )}
    </div>
  );
}
