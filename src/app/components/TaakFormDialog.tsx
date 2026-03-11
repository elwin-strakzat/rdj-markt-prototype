import { useState } from "react";
import { mockRelaties, mockGebruikers } from "../data/mock-relatie-data";
import { mockContracten } from "../data/mock-contract-data";
import type { Taak } from "../data/mock-taken-data";

interface TaakFormDialogProps {
  taak?: Taak;
  defaultRelatieId?: string;
  defaultContractId?: string;
  onSave: (data: Omit<Taak, "id" | "aanmaakDatum" | "status" | "type">) => void;
  onClose: () => void;
}

export default function TaakFormDialog({ taak, defaultRelatieId, defaultContractId, onSave, onClose }: TaakFormDialogProps) {
  const [omschrijving, setOmschrijving] = useState(taak?.omschrijving || "");
  const [deadline, setDeadline] = useState(taak?.deadline || "");
  const [relatieId, setRelatieId] = useState(taak?.relatieId || defaultRelatieId || "");
  const [contractId, setContractId] = useState(taak?.contractId || defaultContractId || "");
  const [eigenaarId, setEigenaarId] = useState(taak?.eigenaarId || "usr-001");

  const relatieContracten = mockContracten.filter((c) => c.relatieId === relatieId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!omschrijving.trim() || !deadline || !relatieId) return;
    onSave({
      omschrijving: omschrijving.trim(),
      deadline,
      relatieId,
      contractId: contractId || undefined,
      eigenaarId,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-[12px] shadow-xl w-full max-w-[520px] mx-[16px]">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[16px] border-b border-rdj-border-secondary">
            <p className="font-sans font-bold text-[18px] text-rdj-text-primary">
              {taak ? "Taak bewerken" : "Taak toevoegen"}
            </p>
            <button type="button" onClick={onClose} className="text-rdj-text-secondary hover:text-rdj-text-primary">
              <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-[24px] py-[20px] flex flex-col gap-[16px]">
            {/* Omschrijving */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-sans font-bold text-[14px] text-rdj-text-primary">
                Omschrijving <span className="text-[#F04438]">*</span>
              </label>
              <textarea
                value={omschrijving}
                onChange={(e) => setOmschrijving(e.target.value)}
                className="w-full border border-rdj-border-secondary rounded-[8px] px-[12px] py-[10px] font-sans text-[14px] text-rdj-text-primary resize-none focus:outline-none focus:ring-2 focus:ring-[#1567A4] focus:border-transparent"
                rows={3}
                placeholder="Wat moet er gebeuren?"
                required
              />
            </div>

            {/* Deadline */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-sans font-bold text-[14px] text-rdj-text-primary">
                Deadline <span className="text-[#F04438]">*</span>
              </label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full border border-rdj-border-secondary rounded-[8px] px-[12px] py-[10px] font-sans text-[14px] text-rdj-text-primary focus:outline-none focus:ring-2 focus:ring-[#1567A4] focus:border-transparent"
                required
              />
            </div>

            {/* Relatie */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-sans font-bold text-[14px] text-rdj-text-primary">
                Relatie <span className="text-[#F04438]">*</span>
              </label>
              <select
                value={relatieId}
                onChange={(e) => {
                  setRelatieId(e.target.value);
                  setContractId("");
                }}
                className="w-full border border-rdj-border-secondary rounded-[8px] px-[12px] py-[10px] font-sans text-[14px] text-rdj-text-primary focus:outline-none focus:ring-2 focus:ring-[#1567A4] focus:border-transparent bg-white"
                required
              >
                <option value="">Selecteer relatie...</option>
                {mockRelaties.map((r) => (
                  <option key={r.id} value={r.id}>{r.naam}</option>
                ))}
              </select>
            </div>

            {/* Deal (optioneel) */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-sans font-bold text-[14px] text-rdj-text-primary">Deal (optioneel)</label>
              <select
                value={contractId}
                onChange={(e) => setContractId(e.target.value)}
                className="w-full border border-rdj-border-secondary rounded-[8px] px-[12px] py-[10px] font-sans text-[14px] text-rdj-text-primary focus:outline-none focus:ring-2 focus:ring-[#1567A4] focus:border-transparent bg-white"
                disabled={!relatieId}
              >
                <option value="">Geen deal gekoppeld</option>
                {relatieContracten.map((c) => (
                  <option key={c.id} value={c.id}>{c.titel}</option>
                ))}
              </select>
            </div>

            {/* Eigenaar */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-sans font-bold text-[14px] text-rdj-text-primary">Eigenaar</label>
              <select
                value={eigenaarId}
                onChange={(e) => setEigenaarId(e.target.value)}
                className="w-full border border-rdj-border-secondary rounded-[8px] px-[12px] py-[10px] font-sans text-[14px] text-rdj-text-primary focus:outline-none focus:ring-2 focus:ring-[#1567A4] focus:border-transparent bg-white"
              >
                {mockGebruikers.map((g) => (
                  <option key={g.id} value={g.id}>{g.naam}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-[12px] px-[24px] py-[16px] border-t border-rdj-border-secondary">
            <button
              type="button"
              onClick={onClose}
              className="px-[16px] py-[10px] rounded-[8px] border border-rdj-border-secondary font-sans font-bold text-[14px] text-rdj-text-primary hover:bg-[#f9fafb] transition-colors"
            >
              Annuleren
            </button>
            <button
              type="submit"
              disabled={!omschrijving.trim() || !deadline || !relatieId}
              className="px-[16px] py-[10px] rounded-[8px] bg-[#1567A4] font-sans font-bold text-[14px] text-white hover:bg-[#125a8e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {taak ? "Opslaan" : "Toevoegen"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
