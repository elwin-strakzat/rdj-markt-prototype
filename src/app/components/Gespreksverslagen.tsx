import { useState, useRef, useEffect } from "react";
import type { ContactPersoon } from "../data/api";
import type { Gespreksverslag } from "../data/mock-relatie-data";
import { mockGebruikers } from "../data/mock-relatie-data";

interface GespreksverslagenProps {
  verslagen: Gespreksverslag[];
  contactPersonen: ContactPersoon[];
  onAdd: (verslag: Omit<Gespreksverslag, "id" | "aanmaakDatum">) => void;
}

function formatDatum(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return `Vandaag, ${d.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}`;
  if (diffDays === 1) return `Gisteren, ${d.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}`;
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function getInitials(naam: string): string {
  return naam.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function toDatetimeLocal(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

const noteIcon = (
  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
    <rect x="2.5" y="1.5" width="11" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 5H11M5 8H11M5 11H8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
  </svg>
);

export default function Gespreksverslagen({ verslagen, contactPersonen, onAdd }: GespreksverslagenProps) {
  const [showForm, setShowForm] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sorted = [...verslagen].sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());

  return (
    <div className="w-full px-[24px] pb-[32px]">
      {/* Add button */}
      <div className="mb-[16px]">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-[8px] px-[12px] py-[8px] rounded-[8px] border border-dashed border-rdj-border-primary hover:border-[#1567a4] hover:bg-[#f9fafb] transition-colors"
          >
            <svg className="size-[16px] text-[#145990]" fill="none" viewBox="0 0 16 16">
              <path d="M8 3.33V12.67M3.33 8H12.67" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span className="font-sans font-bold text-[14px] text-[#145990]">Verslag toevoegen</span>
          </button>
        ) : (
          <QuickAddForm
            contactPersonen={contactPersonen}
            onSubmit={(verslag) => { onAdd(verslag); setShowForm(false); }}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>

      {/* List */}
      {sorted.length === 0 && !showForm ? (
        <div className="py-[48px] text-center">
          <div className="flex justify-center mb-[12px] text-rdj-text-tertiary">
            {noteIcon}
          </div>
          <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
            Nog geen gespreksverslagen.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-[1px]">
          {sorted.map((v) => {
            const cp = contactPersonen.find((c) => c.id === v.contactPersoonId);
            const isExpanded = expandedId === v.id;

            return (
              <div key={v.id} className="border border-rdj-border-secondary rounded-[8px] overflow-hidden mb-[8px]">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : v.id)}
                  className="w-full text-left px-[16px] py-[12px] flex items-start gap-[12px] hover:bg-[#f9fafb] transition-colors bg-white"
                >
                  {/* Avatar */}
                  <div className="shrink-0 size-[36px] rounded-full bg-[#f2f4f7] flex items-center justify-center mt-[2px]">
                    <span className="font-sans font-bold text-[12px] text-rdj-text-secondary">
                      {cp ? getInitials(cp.naam) : "?"}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[8px] mb-[2px]">
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary truncate">
                        {cp?.naam || "Onbekend"}
                      </p>
                      {cp?.functie && (
                        <span className="font-sans font-normal text-[12px] text-rdj-text-tertiary truncate">
                          {cp.functie}
                        </span>
                      )}
                    </div>
                    {!isExpanded && (
                      <p className="font-sans font-normal text-[13px] leading-[18px] text-rdj-text-secondary truncate">
                        {v.inhoud.replace(/\n/g, " ").slice(0, 120)}{v.inhoud.length > 120 ? "..." : ""}
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 flex flex-col items-end gap-[2px]">
                    <p className="font-sans font-normal text-[12px] text-rdj-text-tertiary whitespace-nowrap">
                      {formatDatum(v.datum)}
                    </p>
                    <p className="font-sans font-normal text-[11px] text-rdj-text-tertiary whitespace-nowrap">
                      {mockGebruikers.find((g) => g.id === v.gebruikerId)?.naam || "Onbekend"}
                    </p>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-rdj-border-secondary bg-[#fafbfc] px-[16px] py-[12px] ml-[48px]">
                    <div className="font-sans font-normal text-[14px] leading-[22px] text-rdj-text-primary whitespace-pre-line">
                      {v.inhoud}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function QuickAddForm({
  contactPersonen,
  onSubmit,
  onCancel,
}: {
  contactPersonen: ContactPersoon[];
  onSubmit: (verslag: Omit<Gespreksverslag, "id" | "aanmaakDatum">) => void;
  onCancel: () => void;
}) {
  const [contactPersoonId, setContactPersoonId] = useState(contactPersonen[0]?.id || "");
  const [datum, setDatum] = useState(toDatetimeLocal(new Date()));
  const [inhoud, setInhoud] = useState("");
  const [showCpDropdown, setShowCpDropdown] = useState(false);
  const cpRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedCp = contactPersonen.find((cp) => cp.id === contactPersoonId);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!showCpDropdown) return;
    function handleClick(e: MouseEvent) {
      if (cpRef.current && !cpRef.current.contains(e.target as Node)) {
        setShowCpDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showCpDropdown]);

  const relatieId = contactPersonen[0]?.relatieId || "";
  const canSubmit = contactPersoonId && inhoud.trim();

  return (
    <div className="border border-rdj-border-secondary rounded-[8px] bg-white overflow-hidden">
      {/* Header met contactpersoon + datum */}
      <div className="px-[16px] py-[12px] flex items-center gap-[12px] border-b border-rdj-border-secondary bg-[#f9fafb]">
        {/* Contactpersoon picker */}
        <div className="relative" ref={cpRef}>
          <button
            onClick={() => setShowCpDropdown(!showCpDropdown)}
            className="flex items-center gap-[8px] px-[10px] py-[6px] rounded-[6px] border border-rdj-border-primary hover:border-[#98a2b3] transition-colors bg-white"
          >
            <div className="size-[24px] rounded-full bg-[#f2f4f7] flex items-center justify-center">
              <span className="font-sans font-bold text-[9px] text-rdj-text-secondary">
                {selectedCp ? getInitials(selectedCp.naam) : "?"}
              </span>
            </div>
            <span className="font-sans font-bold text-[13px] text-rdj-text-primary">
              {selectedCp?.naam || "Kies contactpersoon"}
            </span>
            <svg className="size-[12px] text-rdj-text-tertiary" fill="none" viewBox="0 0 12 12">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
          {showCpDropdown && (
            <div className="absolute top-full left-0 mt-[4px] z-50 bg-white border border-rdj-border-secondary rounded-[8px] shadow-lg py-[4px] min-w-[220px]">
              {contactPersonen.map((cp) => (
                <button
                  key={cp.id}
                  onClick={() => { setContactPersoonId(cp.id); setShowCpDropdown(false); }}
                  className={`w-full text-left px-[12px] py-[8px] hover:bg-[#f9fafb] transition-colors flex items-center gap-[8px] ${cp.id === contactPersoonId ? "bg-[#f0f7ff]" : ""}`}
                >
                  <div className="size-[24px] rounded-full bg-[#f2f4f7] flex items-center justify-center">
                    <span className="font-sans font-bold text-[9px] text-rdj-text-secondary">{getInitials(cp.naam)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans font-bold text-[13px] text-rdj-text-primary truncate">{cp.naam}</p>
                    {cp.functie && <p className="font-sans font-normal text-[11px] text-rdj-text-tertiary">{cp.functie}</p>}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Datum/tijd */}
        <input
          type="datetime-local"
          value={datum}
          onChange={(e) => setDatum(e.target.value)}
          className="font-sans font-normal text-[13px] text-rdj-text-secondary border border-rdj-border-primary rounded-[6px] px-[10px] py-[6px] bg-white"
        />
      </div>

      {/* Tekstveld */}
      <div className="px-[16px] py-[12px]">
        <textarea
          ref={textareaRef}
          value={inhoud}
          onChange={(e) => setInhoud(e.target.value)}
          placeholder="Schrijf je verslag hier..."
          rows={4}
          className="w-full font-sans font-normal text-[14px] leading-[22px] text-rdj-text-primary placeholder:text-rdj-text-tertiary border-0 outline-none resize-none bg-transparent"
        />
      </div>

      {/* Acties */}
      <div className="px-[16px] py-[10px] border-t border-rdj-border-secondary flex items-center justify-end gap-[8px]">
        <button
          onClick={onCancel}
          className="px-[12px] py-[6px] rounded-[6px] font-sans font-bold text-[13px] text-rdj-text-secondary hover:bg-[#f2f4f7] transition-colors"
        >
          Annuleren
        </button>
        <button
          onClick={() => {
            if (!canSubmit) return;
            onSubmit({ relatieId, contactPersoonId, gebruikerId: "usr-001", datum, inhoud: inhoud.trim() });
          }}
          disabled={!canSubmit}
          className={`px-[12px] py-[6px] rounded-[6px] font-sans font-bold text-[13px] transition-colors ${
            canSubmit
              ? "bg-[#1567a4] text-white hover:bg-[#125a8f]"
              : "bg-[#e2e8f0] text-rdj-text-tertiary cursor-not-allowed"
          }`}
        >
          Opslaan
        </button>
      </div>
    </div>
  );
}
