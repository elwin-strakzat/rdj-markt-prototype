import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import type { PageTab } from "../components/PageHeader";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown";
import SegmentedButtonGroup from "../components/SegmentedButtonGroup";
import Button from "../components/Button";
import DealCard from "../components/DealCard";
import ContractFormDialog from "../components/ContractFormDialog";
import { mockRelaties, mockGebruikers } from "../data/mock-relatie-data";
import { mockContracten, CONTRACT_SOORT_LABELS, CONTRACT_STATUS_LABELS, CONTRACT_STATUS_VARIANT_MAP } from "../data/mock-contract-data";
import type { Contract, ContractStatus } from "../data/api";

function getInitials(name: string): string {
  return name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

function formatCurrency(value?: number): string {
  if (value === undefined || value === null) return "—";
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function isDateExpired(dateStr?: string, daysThreshold = 14): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const diff = Date.now() - d.getTime();
  return diff > daysThreshold * 24 * 60 * 60 * 1000;
}

function getRouteSummary(contract: Contract): string {
  if (contract.type === "spot") {
    return [contract.laadhavenNaam, contract.loshavenNaam].filter(Boolean).join(" → ") || "—";
  }
  if (contract.routes && contract.routes.length > 0) {
    const first = contract.routes[0];
    const label = [first.laadhavenNaam, first.loshavenNaam].filter(Boolean).join(" → ");
    return contract.routes.length > 1 ? `${label} +${contract.routes.length - 1}` : label;
  }
  return "—";
}

const KANBAN_COLUMNS: { status: ContractStatus; title: string; color: string }[] = [
  { status: "aandacht_nodig", title: "Aandacht nodig", color: "#F79009" },
  { status: "in_onderhandeling", title: "In onderhandeling", color: "#1567a4" },
  { status: "gewonnen", title: "Gewonnen", color: "#12B76A" },
  { status: "verloren", title: "Verloren", color: "#667085" },
];

function DealDropColumn({
  title,
  status,
  color,
  items,
  onDrop,
}: {
  title: string;
  status: ContractStatus;
  color: string;
  items: Contract[];
  onDrop: (dealId: string, newStatus: ContractStatus) => void;
}) {
  const [{ isOver }, drop] = useDrop({
    accept: "DEAL",
    drop: (item: { id: string }) => {
      onDrop(item.id, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`flex flex-col bg-[#f9fafb] rounded-[12px] p-[12px] transition-colors ${isOver ? "bg-[#f0f4f8]" : ""}`}
    >
      <div className="flex items-center gap-[8px] mb-[12px] px-[4px]">
        <div className="shrink-0 size-[8px] rounded-full" style={{ backgroundColor: color }} />
        <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px]">{title}</p>
        <span className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px]">{items.length}</span>
      </div>
      <div className="flex flex-col gap-[12px] flex-1">
        {items.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
}

export default function Contracten() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [soortFilter, setSoortFilter] = useState<string[]>([]);
  const [eigenaarFilter, setEigenaarFilter] = useState<string[]>([]);
  const [typeTab, setTypeTab] = useState<"alle" | "spot" | "contract">("alle");
  const [viewMode, setViewMode] = useState<"kanban" | "table">("kanban");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [contracten, setContracten] = useState<Contract[]>(mockContracten);

  const eigenaarOptions = useMemo(() => ["Alle eigenaren", ...mockGebruikers.map((g) => g.naam)], []);
  const soortOptions = useMemo(() => ["Alle soorten", ...Object.values(CONTRACT_SOORT_LABELS)], []);
  const statusOptions = useMemo(() => ["Alle statussen", ...Object.values(CONTRACT_STATUS_LABELS)], []);

  const tabs: PageTab[] = [
    { label: "Alle", path: "#alle", isActive: typeTab === "alle" },
    { label: "Spot", path: "#spot", isActive: typeTab === "spot" },
    { label: "Contract", path: "#contract", isActive: typeTab === "contract" },
  ];

  const filtered = useMemo(() => {
    return contracten.filter((c) => {
      if (typeTab !== "alle" && c.type !== typeTab) return false;
      if (search && !c.titel.toLowerCase().includes(search.toLowerCase())) return false;
      if (statusFilter.length > 0) {
        const selectedKeys = statusFilter.map((v) => Object.entries(CONTRACT_STATUS_LABELS).find(([, label]) => label === v)?.[0]).filter(Boolean);
        if (!selectedKeys.includes(c.status)) return false;
      }
      if (soortFilter.length > 0) {
        const selectedKeys = soortFilter.map((v) => Object.entries(CONTRACT_SOORT_LABELS).find(([, label]) => label === v)?.[0]).filter(Boolean);
        if (!selectedKeys.includes(c.soort)) return false;
      }
      if (eigenaarFilter.length > 0) {
        const eigenaar = mockGebruikers.find((g) => g.id === c.eigenaarId);
        if (!eigenaar || !eigenaarFilter.includes(eigenaar.naam)) return false;
      }
      return true;
    });
  }, [contracten, search, statusFilter, soortFilter, eigenaarFilter, typeTab]);

  const paged = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, currentPage, rowsPerPage]);

  const columns: Column[] = [
    {
      key: "titel",
      header: "Titel",
      type: "leading-text",
      subtextKey: "routeSummary",
      badgeKey: "typeBadge",
      actionLabel: "Openen",
    },
    {
      key: "statusLabel",
      header: "Status",
      type: "status",
      variantKey: "statusVariant",
      defaultVariant: "grey",
      dotKey: "statusDot",
      width: "w-[160px]",
    },
    {
      key: "soortLabel",
      header: "Soort",
      type: "text",
      width: "w-[140px]",
    },
    {
      key: "relatieNaam",
      header: "Relatie",
      type: "text",
      width: "w-[180px]",
    },
    {
      key: "waardeLabel",
      header: "Waarde",
      type: "text",
      align: "right",
      width: "w-[120px]",
    },
    {
      key: "eigenaarNaam",
      header: "Eigenaar",
      type: "text",
      avatarInitialsKey: "eigenaarInitials",
      width: "w-[160px]",
    },
    {
      key: "laatsteUpdateLabel",
      header: "Laatste update",
      type: "deadline",
      expiredKey: "updateExpired",
      width: "w-[140px]",
    },
  ];

  const tableData: RowData[] = paged.map((c) => {
    const relatie = mockRelaties.find((r) => r.id === c.relatieId);
    const eigenaar = mockGebruikers.find((g) => g.id === c.eigenaarId);
    return {
      id: c.id,
      titel: c.titel,
      routeSummary: getRouteSummary(c),
      typeBadge: c.type === "contract" ? "Contract" : "Spot",
      statusLabel: CONTRACT_STATUS_LABELS[c.status] || "—",
      statusVariant: CONTRACT_STATUS_VARIANT_MAP[c.status] || "grey",
      statusDot: true,
      soortLabel: CONTRACT_SOORT_LABELS[c.soort] || "—",
      relatieNaam: relatie?.naam || "—",
      waardeLabel: formatCurrency(c.waarde),
      eigenaarNaam: eigenaar?.naam || "—",
      eigenaarInitials: eigenaar ? getInitials(eigenaar.naam) : undefined,
      laatsteUpdateLabel: formatDate(c.laatsteUpdate),
      updateExpired: isDateExpired(c.laatsteUpdate),
    };
  });

  const handleCreate = (data: Partial<Contract>) => {
    const newContract: Contract = {
      id: `ctr-${Date.now()}`,
      titel: data.titel || "Nieuwe deal",
      relatieId: data.relatieId || "",
      type: data.type || "spot",
      soort: data.soort || "bevrachting",
      status: data.status || "aandacht_nodig",
      aanmaakDatum: new Date().toISOString().split("T")[0],
      laatsteUpdate: new Date().toISOString().split("T")[0],
      ...data,
    };
    setContracten((prev) => [newContract, ...prev]);
    setShowCreateDialog(false);
  };

  const handleDrop = (dealId: string, newStatus: ContractStatus) => {
    setContracten((prev) =>
      prev.map((c) => (c.id === dealId ? { ...c, status: newStatus, laatsteUpdate: new Date().toISOString().split("T")[0] } : c))
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex min-h-screen bg-rdj-bg-primary">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-auto">
          <div className="pt-[32px] pb-[8px]">
            <PageHeader
              title="Deals"
              actions={
                <Button
                  variant="primary"
                  label="Nieuwe deal"
                  leadingIcon={
                    <svg fill="none" viewBox="0 0 12 12">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                    </svg>
                  }
                  onClick={() => setShowCreateDialog(true)}
                />
              }
              tabs={tabs}
              onTabClick={(tab: PageTab) => {
                const key = tab.path.replace("#", "") as typeof typeTab;
                setTypeTab(key);
                setCurrentPage(1);
              }}
              filtersLeft={
                <>
                  {viewMode === "table" && (
                    <FilterDropdown
                      label="Status"
                      options={statusOptions}
                      allLabel="Alle statussen"
                      selectedValues={statusFilter}
                      onMultiSelect={(v) => { setStatusFilter(v); setCurrentPage(1); }}
                    />
                  )}
                  <FilterDropdown
                    label="Soort"
                    options={soortOptions}
                    allLabel="Alle soorten"
                    selectedValues={soortFilter}
                    onMultiSelect={(v) => { setSoortFilter(v); setCurrentPage(1); }}
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
                <div className="flex items-center gap-[12px]">
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
                  <SegmentedButtonGroup
                    items={[
                      { value: "kanban", icon: (<svg fill="none" viewBox="0 0 20 20"><rect x="2.5" y="2.5" width="6" height="15" rx="1" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" /><rect x="11.5" y="2.5" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
                      { value: "table", icon: (<svg fill="none" viewBox="0 0 20 20"><path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" /></svg>) },
                    ]}
                    value={viewMode}
                    onChange={(val) => setViewMode(val as "kanban" | "table")}
                  />
                </div>
              }
            />
          </div>

          {viewMode === "kanban" ? (
            <div className="px-[24px] py-[24px] flex-1">
              <div className="grid grid-cols-4 gap-[16px] items-start">
                {KANBAN_COLUMNS.map((col) => (
                  <DealDropColumn
                    key={col.status}
                    title={col.title}
                    status={col.status}
                    color={col.color}
                    items={filtered.filter((c) => c.status === col.status)}
                    onDrop={handleDrop}
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
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
                onRowClick={(row) => navigate(`/crm/deal/${row.id}`)}
              />
            </>
          )}
        </div>

        {showCreateDialog && (
          <ContractFormDialog
            onSave={handleCreate}
            onClose={() => setShowCreateDialog(false)}
          />
        )}
      </div>
    </DndProvider>
  );
}
