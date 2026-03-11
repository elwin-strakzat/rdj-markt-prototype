import { useState } from "react";
import { Link } from "react-router";
import Badge from "./Badge";
import TaakFormDialog from "./TaakFormDialog";
import { mockTaken, TAAK_TYPE_LABELS, TAAK_TYPE_VARIANT_MAP } from "../data/mock-taken-data";
import type { Taak } from "../data/mock-taken-data";
import { mockRelaties, mockGebruikers } from "../data/mock-relatie-data";
import { mockContracten } from "../data/mock-contract-data";

interface TakenListProps {
  relatieId?: string;
  contractId?: string;
  showRelatie?: boolean;
  showDeal?: boolean;
  compact?: boolean;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

function isOverdue(dateStr: string): boolean {
  return new Date(dateStr) < new Date(new Date().toDateString());
}

function getInitials(name: string): string {
  return name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

export default function TakenList({ relatieId, contractId, showRelatie = false, showDeal = false, compact = false }: TakenListProps) {
  const [taken, setTaken] = useState<Taak[]>(mockTaken);
  const [showForm, setShowForm] = useState(false);
  const [showVoltooid, setShowVoltooid] = useState(false);

  const filtered = taken.filter((t) => {
    if (relatieId && t.relatieId !== relatieId) return false;
    if (contractId && t.contractId !== contractId) return false;
    return true;
  });

  const openTaken = filtered.filter((t) => t.status === "open").sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  const voltooide = filtered.filter((t) => t.status === "voltooid");

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

  const renderRow = (taak: Taak) => {
    const relatie = mockRelaties.find((r) => r.id === taak.relatieId);
    const contract = taak.contractId ? mockContracten.find((c) => c.id === taak.contractId) : undefined;
    const eigenaar = mockGebruikers.find((g) => g.id === taak.eigenaarId);
    const overdue = taak.status === "open" && isOverdue(taak.deadline);

    return (
      <tr key={taak.id} className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-[#f9fafb] transition-colors">
        {/* Checkbox */}
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
        {/* Omschrijving */}
        <td className="px-[12px] py-[10px]">
          <p className={`font-sans font-bold text-[14px] ${taak.status === "voltooid" ? "text-rdj-text-tertiary line-through" : "text-rdj-text-primary"}`}>
            {taak.omschrijving}
          </p>
          {!compact && (showRelatie || showDeal) && (
            <div className="flex items-center gap-[8px] mt-[2px]">
              {showRelatie && relatie && (
                <Link to={`/crm/relatie/${relatie.id}`} className="font-sans font-normal text-[12px] text-rdj-text-brand hover:underline">
                  {relatie.naam}
                </Link>
              )}
              {showRelatie && showDeal && relatie && contract && (
                <span className="font-sans text-[12px] text-rdj-text-tertiary">·</span>
              )}
              {showDeal && contract && (
                <Link to={`/crm/deal/${contract.id}`} className="font-sans font-normal text-[12px] text-rdj-text-brand hover:underline">
                  {contract.titel}
                </Link>
              )}
            </div>
          )}
          {compact && showDeal && contract && (
            <Link
              to={`/crm/deal/${contract.id}`}
              className="inline-flex items-center gap-[4px] mt-[4px] px-[6px] py-[2px] rounded-[4px] bg-[#f2f4f7] hover:bg-[#e3effb] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="size-[10px] text-rdj-text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.813a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
              </svg>
              <span className="font-sans font-bold text-[11px] text-rdj-text-secondary leading-[16px]">{contract.titel}</span>
            </Link>
          )}
        </td>
        {/* Type */}
        {!compact && (
          <td className="px-[12px] py-[10px]">
            <Badge
              label={TAAK_TYPE_LABELS[taak.type]}
              variant={(TAAK_TYPE_VARIANT_MAP[taak.type] || "grey") as "success" | "warning" | "brand" | "grey"}
            />
          </td>
        )}
        {/* Deadline */}
        <td className="px-[12px] py-[10px]">
          <p className={`font-sans font-normal text-[14px] ${overdue ? "text-[#F04438] font-bold" : "text-rdj-text-primary"}`}>
            {formatDate(taak.deadline)}
          </p>
        </td>
        {/* Eigenaar */}
        {!compact && (
          <td className="px-[12px] py-[10px]">
            {eigenaar && (
              <div className="flex items-center gap-[6px]">
                <div className="shrink-0 size-[24px] rounded-full bg-[#f2f4f7] flex items-center justify-center">
                  <span className="font-sans font-bold text-[9px] text-rdj-text-secondary">{getInitials(eigenaar.naam)}</span>
                </div>
                <p className="font-sans font-normal text-[13px] text-rdj-text-primary">{eigenaar.naam}</p>
              </div>
            )}
          </td>
        )}
      </tr>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-[12px]">
        <div className="flex items-center gap-[8px]">
          <p className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">Taken</p>
          <span className="inline-flex items-center justify-center min-w-[20px] h-[20px] rounded-full px-[6px] bg-[#f2f4f7] font-sans font-bold text-[12px] leading-[16px] text-rdj-text-secondary">
            {openTaken.length}
          </span>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="font-sans font-bold text-[14px] leading-[20px] text-rdj-text-brand hover:underline"
        >
          + Taak toevoegen
        </button>
      </div>

      {/* Open taken */}
      {openTaken.length === 0 && voltooide.length === 0 ? (
        <div className="border border-rdj-border-secondary rounded-[8px] p-[24px] text-center">
          <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
            Nog geen openstaande taken{relatieId ? " voor deze relatie" : ""}.
          </p>
        </div>
      ) : (
        <div className="border border-rdj-border-secondary rounded-[8px] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                <th className="w-[40px]" />
                <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Taak</th>
                {!compact && <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Type</th>}
                <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Deadline</th>
                {!compact && <th className="text-left px-[12px] py-[8px] font-sans font-bold text-[12px] text-rdj-text-secondary">Eigenaar</th>}
              </tr>
            </thead>
            <tbody>
              {openTaken.map(renderRow)}
            </tbody>
          </table>
        </div>
      )}

      {/* Voltooide taken toggle */}
      {voltooide.length > 0 && (
        <div className="mt-[12px]">
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

      {showForm && (
        <TaakFormDialog
          defaultRelatieId={relatieId}
          defaultContractId={contractId}
          onSave={handleAddTaak}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
