import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { useDetailPanel } from "../components/DetailPanelContext";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import type { PageTab } from "../components/PageHeader";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { mockVlootData } from "../data/mock-vloot-data";

const TABS: PageTab[] = [
  { label: "Alle", path: "alle", isActive: true },
  { label: "Duwbak", path: "duwbak", isActive: false },
  { label: "Motorschip", path: "motorschip", isActive: false },
];

const BINDING_OPTIONS = ["Alle bindingen", "Vast", "Regio", "Markt", "Bevracht"];
const STATUS_OPTIONS = ["Alle statussen", "Beschikbaar", "Werf", "Inactief"];

export default function Vloot() {
  const navigate = useNavigate();
  const { openDetail } = useDetailPanel();
  const [activeTab, setActiveTab] = useState("alle");
  const [search, setSearch] = useState("");
  const [bindingFilter, setBindingFilter] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const tabs: PageTab[] = TABS.map((t) => ({
    ...t,
    isActive: t.path === activeTab,
  }));

  const handleTabClick = (tab: PageTab) => {
    setActiveTab(tab.path);
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    return mockVlootData.filter((v) => {
      // Tab filter
      if (activeTab === "duwbak" && v.type !== "Duwbak") return false;
      if (activeTab === "motorschip" && v.type !== "Motorschip") return false;

      // Binding filter
      if (bindingFilter.length > 0 && !bindingFilter.includes(v.binding)) return false;

      // Search
      if (search) {
        const q = search.toLowerCase();
        if (
          !v.naam.toLowerCase().includes(q) &&
          !v.type.toLowerCase().includes(q) &&
          !v.huidigeLocatie.toLowerCase().includes(q)
        )
          return false;
      }

      return true;
    });
  }, [activeTab, bindingFilter, search]);

  // Use a larger mock total to match the design's "2.000" display
  const mockTotal = 2000;

  const paged = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, currentPage, rowsPerPage]);

  const columns: Column[] = [
    {
      key: "naam",
      header: "Naam",
      type: "leading-text",
      subtextKey: "type",
      sortActive: true,
      sortDirection: "asc",
      actionLabel: "Openen",
    },
    {
      key: "reinigingVorigeLading",
      header: "Reiniging en vorige lading",
      type: "custom",
      width: "w-[180px]",
      render: (row: RowData) => {
        if (!row.reinigingVorigeLading) return <span className="text-rdj-text-tertiary">—</span>;
        return <Badge label={row.reinigingVorigeLading} variant="grey" />;
      },
    },
    {
      key: "huidigeLocatie",
      header: "Huidige locatie",
      type: "text",
      subtextKey: "huidigeLocatieSub",
      width: "w-[180px]",
    },
    {
      key: "huidigeReis",
      header: "Huidige reis",
      type: "custom",
      width: "w-[180px]",
      render: (row: RowData) => {
        if (!row.huidigeReis) return <span className="font-sans text-[14px] text-rdj-text-tertiary">—</span>;
        return (
          <div>
            <p className="font-sans font-normal leading-[20px] text-rdj-text-primary text-[14px] truncate">
              {row.huidigeReis}
            </p>
            {row.huidigeReisSub && (
              <p className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px] truncate">
                {row.huidigeReisSub}
              </p>
            )}
          </div>
        );
      },
    },
    {
      key: "volgendeReis",
      header: "Volgende geplande reis",
      type: "custom",
      width: "w-[240px]",
      render: (row: RowData) => {
        if (!row.volgendeReis) return <span className="font-sans text-[14px] text-rdj-text-tertiary">—</span>;
        return (
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[6px]">
              {row.volgendeReisDate && (
                <Badge
                  label={row.volgendeReisDate}
                  variant={row.volgendeReisDateVariant || "grey"}
                  type="color"
                />
              )}
              <span className="font-sans font-normal leading-[20px] text-rdj-text-primary text-[14px] truncate">
                {row.volgendeReis}
              </span>
            </div>
            {row.volgendeReisSub && (
              <p className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px] truncate">
                {row.volgendeReisSub}
              </p>
            )}
          </div>
        );
      },
    },
    {
      key: "status",
      header: "Status",
      type: "status",
      variantKey: "statusVariant",
      dot: true,
      width: "w-[120px]",
    },
    {
      key: "bijzonderheden",
      header: "Bijzonderheden",
      type: "badges",
      defaultVariant: "grey",
      maxVisible: 4,
      width: "w-[160px]",
    },
    {
      key: "binding",
      header: "Binding",
      type: "text",
      width: "w-[100px]",
    },
    {
      key: "grootteklasse",
      header: "Grootteklasse",
      type: "text",
      width: "w-[110px]",
    },
    {
      key: "inhoud",
      header: "Inhoud",
      type: "text",
      width: "w-[100px]",
    },
    {
      key: "lengte",
      header: "Lengte",
      type: "text",
      width: "w-[90px]",
    },
    {
      key: "breedte",
      header: "Breedte",
      type: "text",
      width: "w-[90px]",
    },
  ];

  const tableData: RowData[] = paged.map((v) => ({
    id: v.id,
    naam: v.naam,
    type: v.type,
    reinigingVorigeLading: v.reinigingVorigeLading,
    huidigeLocatie: v.huidigeLocatie,
    huidigeLocatieSub: v.huidigeLocatieSub,
    huidigeReis: v.huidigeReis,
    huidigeReisSub: v.huidigeReisSub,
    volgendeReis: v.volgendeReis,
    volgendeReisSub: v.volgendeReisSub,
    volgendeReisDate: v.volgendeReisDate,
    volgendeReisDateVariant: v.volgendeReisDateVariant,
    status: v.status,
    statusVariant: v.statusVariant,
    bijzonderheden: v.bijzonderheden,
    binding: v.binding || "—",
    grootteklasse: v.grootteklasse,
    inhoud: v.inhoud,
    lengte: v.lengte,
    breedte: v.breedte,
  }));

  return (
    <div className="flex min-h-screen bg-rdj-bg-primary">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <div className="pt-[32px] pb-[8px]">
          <PageHeader
            title="Vaartuigen"
            tabs={tabs}
            onTabClick={handleTabClick}
            actions={
              <div className="flex gap-[12px] items-center">
                <Button variant="secondary" label="Plannen" />
                <Button
                  variant="primary"
                  label="Toevoegen"
                  leadingIcon={
                    <svg fill="none" viewBox="0 0 12 12">
                      <path
                        d="M6 1V11M1 6H11"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.67"
                      />
                    </svg>
                  }
                />
              </div>
            }
            filtersLeft={
              <>
                <FilterDropdown
                  label="Binding"
                  options={BINDING_OPTIONS}
                  allLabel="Alle bindingen"
                  selectedValues={bindingFilter}
                  onMultiSelect={(v) => {
                    setBindingFilter(v);
                    setCurrentPage(1);
                  }}
                />
                <Button
                  variant="secondary"
                  size="sm"
                  label="Filter"
                  leadingIcon={
                    <svg fill="none" viewBox="0 0 16 16">
                      <path
                        d="M2 4H14M4 8H12M6 12H10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  }
                />
              </>
            }
            filtersRight={
              <div className="flex items-center gap-[16px]">
                <label className="flex items-center gap-[8px] cursor-pointer select-none">
                  <span className="font-sans font-normal text-[14px] leading-[20px] text-rdj-text-secondary whitespace-nowrap">
                    Groeperen op regio
                  </span>
                  <div className="relative inline-flex items-center">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-[36px] h-[20px] bg-[#f2f4f7] peer-checked:bg-[#1567a4] rounded-full transition-colors" />
                    <div className="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-[16px]" />
                  </div>
                </label>
                <div className="relative">
                  <div className="absolute left-[12px] top-1/2 -translate-y-1/2 size-[16px] text-[#667085]">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <path
                        d="M14 14L10.0667 10.0667M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Zoeken"
                    className="bg-rdj-bg-primary border border-rdj-border-primary rounded-[6px] pl-[36px] pr-[12px] py-[8px] font-sans font-normal text-[14px] leading-[20px] text-rdj-text-primary placeholder:text-rdj-text-tertiary focus:outline-none focus:border-[#1567a4] focus:ring-1 focus:ring-[#1567a4] w-[200px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                  />
                </div>
              </div>
            }
          />
        </div>

        <Pagination
          currentPage={currentPage}
          totalItems={mockTotal}
          rowsPerPage={rowsPerPage}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={setRowsPerPage}
        />

        <Table
          columns={columns}
          data={tableData}
          selectable
          selectedIds={[]}
          onSelectAll={() => {}}
          onSelectItem={() => {}}
          hoveredRowId={hoveredRow}
          onRowHover={setHoveredRow}
          onRowClick={(row) => {
            openDetail('vaartuig', row.id);
          }}
        />

        <Pagination
          currentPage={currentPage}
          totalItems={mockTotal}
          rowsPerPage={rowsPerPage}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={setRowsPerPage}
        />
      </div>
    </div>
  );
}
