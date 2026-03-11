import { useState, useMemo } from "react";
import { Link } from "react-router";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import Badge from "../components/Badge";
import TaakFormDialog from "../components/TaakFormDialog";
import { mockTaken, TAAK_TYPE_LABELS, TAAK_TYPE_VARIANT_MAP } from "../data/mock-taken-data";
import type { Taak } from "../data/mock-taken-data";
import { mockRelaties } from "../data/mock-relatie-data";
import { mockContracten } from "../data/mock-contract-data";

const CURRENT_USER_ID = "usr-001";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

function isOverdue(dateStr: string): boolean {
  return new Date(dateStr) < new Date(new Date().toDateString());
}

const chevronSvg = (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
    <path d="M0.666664 8.66667L4.66666 4.66667L0.666664 0.666668" stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);

type FilterType = "alle" | "handmatig" | "contactfrequentie" | "contractafloop";

export default function Taken() {
  const [taken, setTaken] = useState<Taak[]>(mockTaken);
  const [showForm, setShowForm] = useState(false);
  const [showVoltooid, setShowVoltooid] = useState(false);
  const [filterType, setFilterType] = useState<FilterType>("alle");

  const myTaken = useMemo(() => taken.filter((t) => t.eigenaarId === CURRENT_USER_ID), [taken]);

  const openTaken = useMemo(() => {
    let list = myTaken.filter((t) => t.status === "open");
    if (filterType !== "alle") list = list.filter((t) => t.type === filterType);
    return list.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  }, [myTaken, filterType]);

  const voltooide = useMemo(() => {
    let list = myTaken.filter((t) => t.status === "voltooid");
    if (filterType !== "alle") list = list.filter((t) => t.type === filterType);
    return list;
  }, [myTaken, filterType]);

  const handleToggleStatus = (taakId: string) => {
    setTaken((prev) => {
      const updated = prev.map((t) => {
        if (t.id !== taakId) return t;
        if (t.status === "open") {
          return { ...t, status: "voltooid" as const, voltooiDatum: new Date().toISOString().split("T")[0] };
        }
        return { ...t, status: "open" as const, voltooiDatum: undefined };
      });
      mockTaken.splice(0, mockTaken.length, ...updated);
      return updated;
    });
  };

  const handleAddTaak = (data: Omit<Taak, "id" | "aanmaakDatum" | "status" | "type">) => {
    const newTaak: Taak = {
      ...data,
      id: `taak-${Date.now()}`,
      status: "open",
      type: "handmatig",
      aanmaakDatum: new Date().toISOString().split("T")[0],
    };
    mockTaken.push(newTaak);
    setTaken([...mockTaken]);
    setShowForm(false);
  };

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
            <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Taken</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full bg-rdj-border-secondary" />
    </div>
  );

  const renderRow = (taak: Taak) => {
    const relatie = mockRelaties.find((r) => r.id === taak.relatieId);
    const contract = taak.contractId ? mockContracten.find((c) => c.id === taak.contractId) : undefined;
    const overdue = taak.status === "open" && isOverdue(taak.deadline);

    return (
      <tr key={taak.id} className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-[#f9fafb] transition-colors">
        <td className="px-[12px] py-[10px] w-[40px]">
          <button
            onClick={() => handleToggleStatus(taak.id)}
            className={`size-[18px] rounded-[4px] border-[1.5px] flex items-center justify-center transition-colors ${
              taak.status === "voltooid"
                ? "bg-[#1567A4] border-[#1567A4]"
                : "border-[#d0d5dd] hover:border-[#1567A4]"
            }`}
          >
            {taak.status === "voltooid" && (
              <svg className="size-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </td>
        <td className="px-[12px] py-[10px]">
          <p className={`font-sans font-bold text-[14px] ${taak.status === "voltooid" ? "text-rdj-text-tertiary line-through" : "text-rdj-text-primary"}`}>
            {taak.omschrijving}
          </p>
          {(relatie || contract) && (
            <div className="flex items-center gap-[4px] mt-[4px] flex-wrap">
              {relatie && (
                <Link
                  to={`/crm/relatie/${relatie.id}`}
                  className="inline-flex items-center gap-[4px] px-[6px] py-[2px] rounded-[4px] bg-[#f2f4f7] hover:bg-[#e3effb] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="size-[10px] text-rdj-text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                  <span className="font-sans font-bold text-[11px] text-rdj-text-secondary leading-[16px]">{relatie.naam}</span>
                </Link>
              )}
              {contract && (
                <Link
                  to={`/crm/deal/${contract.id}`}
                  className="inline-flex items-center gap-[4px] px-[6px] py-[2px] rounded-[4px] bg-[#f2f4f7] hover:bg-[#e3effb] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="size-[10px] text-rdj-text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.813a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
                  </svg>
                  <span className="font-sans font-bold text-[11px] text-rdj-text-secondary leading-[16px]">{contract.titel}</span>
                </Link>
              )}
            </div>
          )}
        </td>
        <td className="px-[12px] py-[10px]">
          <Badge
            label={TAAK_TYPE_LABELS[taak.type]}
            variant={(TAAK_TYPE_VARIANT_MAP[taak.type] || "grey") as "success" | "warning" | "brand" | "grey"}
          />
        </td>
        <td className="px-[12px] py-[10px]">
          <p className={`font-sans font-normal text-[14px] ${overdue ? "text-[#F04438] font-bold" : "text-rdj-text-primary"}`}>
            {formatDate(taak.deadline)}
          </p>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {breadcrumb}

        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[0px] items-start max-w-[1116px] pt-[24px] relative shrink-0 w-full">
              <PageHeader
                title="Taken"
                subtitle="Mijn openstaande taken en opvolgtaken"
                actions={
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-[16px] py-[10px] rounded-[8px] bg-[#1567A4] font-sans font-bold text-[14px] text-white hover:bg-[#125a8e] transition-colors flex items-center gap-[6px]"
                  >
                    <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Taak toevoegen
                  </button>
                }
              />

              <div className="w-full pt-[20px] px-[24px]">
                {/* Filters */}
                <div className="flex items-center gap-[12px] mb-[16px]">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as FilterType)}
                    className="border border-rdj-border-secondary rounded-[8px] px-[12px] py-[8px] font-sans text-[14px] text-rdj-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-[#1567A4]"
                  >
                    <option value="alle">Alle types</option>
                    <option value="handmatig">Handmatig</option>
                    <option value="contactfrequentie">Contactfrequentie</option>
                    <option value="contractafloop">Contractafloop</option>
                  </select>
                </div>

                {/* Table */}
                {openTaken.length === 0 && voltooide.length === 0 ? (
                  <div className="border border-rdj-border-secondary rounded-[8px] p-[48px] text-center">
                    <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
                      Geen taken gevonden voor de geselecteerde filters.
                    </p>
                  </div>
                ) : (
                  <>
                    {openTaken.length > 0 && (
                      <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                              <th className="w-[40px]" />
                              <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Taak</th>
                              <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Type</th>
                              <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Deadline</th>
                            </tr>
                          </thead>
                          <tbody>
                            {openTaken.map(renderRow)}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Voltooide taken */}
                    {voltooide.length > 0 && (
                      <div className="mt-[16px]">
                        <button
                          onClick={() => setShowVoltooid(!showVoltooid)}
                          className="flex items-center gap-[6px] font-sans font-normal text-[13px] text-rdj-text-secondary hover:text-rdj-text-primary transition-colors"
                        >
                          <svg className={`size-[14px] transition-transform ${showVoltooid ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          {voltooide.length} voltooide {voltooide.length === 1 ? "taak" : "taken"}
                        </button>
                        {showVoltooid && (
                          <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden mt-[8px]">
                            <table className="w-full">
                              <tbody>
                                {voltooide.map(renderRow)}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <TaakFormDialog
          onSave={handleAddTaak}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
