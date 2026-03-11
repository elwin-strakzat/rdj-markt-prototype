import { useState, useMemo, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import Button from "./Button";
import type { RelatieLading } from "../data/mock-relatie-data";
import { mockRelaties, mockContactPersonen } from "../data/mock-relatie-data";
import { mockContracten, mockLadingSoorten, mockLadingSubsoorten, mockBijzonderheden } from "../data/mock-contract-data";

interface LadingFormDialogProps {
  onSave: (data: Partial<RelatieLading>) => void;
  onClose: () => void;
}

const selectClass = "bg-white border border-rdj-border-primary rounded-[6px] px-[12px] py-[8px] font-sans font-normal text-[14px] text-rdj-text-primary focus:outline-none focus:border-[#1567a4] focus:ring-1 focus:ring-[#1567a4] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]";

export default function LadingFormDialog({ onSave, onClose }: LadingFormDialogProps) {
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1 fields
  const [relatieId, setRelatieId] = useState("");
  const [contactPersoonId, setContactPersoonId] = useState("");
  const [contractId, setContractId] = useState("");
  const [tonnage, setTonnage] = useState("");
  const [ladingSoortId, setLadingSoortId] = useState("");
  const [ladingSoortSearch, setLadingSoortSearch] = useState("");
  const [ladingSoortOpen, setLadingSoortOpen] = useState(false);
  const ladingSoortRef = useRef<HTMLDivElement>(null);
  const [subsoortId, setSubsoortId] = useState("");
  const [subsoortSearch, setSubsoortSearch] = useState("");
  const [subsoortOpen, setSubsoortOpen] = useState(false);
  const subsoortRef = useRef<HTMLDivElement>(null);
  const [soortelijkGewicht, setSoortelijkGewicht] = useState("");
  const [bijzonderheidIds, setBijzonderheidIds] = useState<string[]>([]);
  const [bijzonderheidSearch, setBijzonderheidSearch] = useState("");
  const [bijzonderheidOpen, setBijzonderheidOpen] = useState(false);
  const bijzonderheidRef = useRef<HTMLDivElement>(null);
  const [exType, setExType] = useState<"zeeboot" | "opslag" | "vloot">("zeeboot");
  const [exNaam, setExNaam] = useState("");
  const [controleOrganisatie, setControleOrganisatie] = useState("");
  const [notitie, setNotitie] = useState("");

  // Step 2 fields
  const [laadhaven, setLaadhaven] = useState("");
  const [laadterminal, setLaadterminal] = useState("");
  const [aankomst, setAankomst] = useState("");
  const [startLaden, setStartLaden] = useState("");
  const [enkeleBestemming, setEnkeleBestemming] = useState(true);
  const [loshaven, setLoshaven] = useState("");
  const [losterminal, setLosterminal] = useState("");
  const [lostermijn, setLostermijn] = useState("");
  const [startLossen, setStartLossen] = useState("");
  const [eindeLossen, setEindeLossen] = useState("");
  const [regie, setRegie] = useState<"flex" | "duwvaart" | "binnenvaart">("flex");

  const filteredContactPersonen = useMemo(
    () => mockContactPersonen.filter((cp) => cp.relatieId === relatieId),
    [relatieId]
  );

  const filteredContracten = useMemo(
    () => mockContracten.filter((c) => c.relatieId === relatieId),
    [relatieId]
  );

  const filteredLadingSoorten = useMemo(() => {
    const q = ladingSoortSearch.trim().toLowerCase();
    if (!q) return mockLadingSoorten;
    return mockLadingSoorten.filter((ls) => ls.naam.toLowerCase().includes(q));
  }, [ladingSoortSearch]);

  const showCreateOption = useMemo(() => {
    const q = ladingSoortSearch.trim().toLowerCase();
    if (!q) return false;
    return !mockLadingSoorten.some((ls) => ls.naam.toLowerCase() === q);
  }, [ladingSoortSearch]);

  const filteredSubsoorten = useMemo(() => {
    const all = mockLadingSubsoorten.filter((s) => s.ladingSoortId === ladingSoortId);
    const q = subsoortSearch.trim().toLowerCase();
    if (!q) return all;
    return all.filter((s) => s.naam.toLowerCase().includes(q));
  }, [ladingSoortId, subsoortSearch]);

  const filteredBijzonderheden = useMemo(() => {
    const q = bijzonderheidSearch.trim().toLowerCase();
    const available = mockBijzonderheden.filter((b) => !bijzonderheidIds.includes(b.id));
    if (!q) return available;
    return available.filter((b) => b.naam.toLowerCase().includes(q));
  }, [bijzonderheidSearch, bijzonderheidIds]);

  const benodigdeInhoud = useMemo(() => {
    const t = parseFloat(tonnage.replace(/\./g, "").replace(",", "."));
    const sg = parseFloat(soortelijkGewicht.replace(",", "."));
    if (!t || !sg || sg === 0) return null;
    return Math.round(t / sg);
  }, [tonnage, soortelijkGewicht]);

  // Auto-fill ladingsoort when contract is selected
  useEffect(() => {
    if (contractId) {
      const contract = mockContracten.find((c) => c.id === contractId);
      if (contract?.ladingSoortId) {
        const ls = mockLadingSoorten.find((l) => l.id === contract.ladingSoortId);
        if (ls) {
          setLadingSoortId(ls.id);
          setLadingSoortSearch(ls.naam);
          setSoortelijkGewicht(ls.soortelijkGewicht ? String(ls.soortelijkGewicht).replace(".", ",") : "");
        }
      }
    }
  }, [contractId]);

  // Auto-fill soortelijk gewicht when ladingsoort or subsoort changes
  useEffect(() => {
    if (subsoortId) {
      const sub = mockLadingSubsoorten.find((s) => s.id === subsoortId);
      if (sub) setSoortelijkGewicht(String(sub.soortelijkGewicht).replace(".", ","));
    } else if (ladingSoortId) {
      const ls = mockLadingSoorten.find((l) => l.id === ladingSoortId);
      if (ls && ls.soortelijkGewicht) setSoortelijkGewicht(String(ls.soortelijkGewicht).replace(".", ","));
    }
  }, [ladingSoortId, subsoortId]);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ladingSoortRef.current && !ladingSoortRef.current.contains(e.target as Node)) setLadingSoortOpen(false);
      if (subsoortRef.current && !subsoortRef.current.contains(e.target as Node)) setSubsoortOpen(false);
      if (bijzonderheidRef.current && !bijzonderheidRef.current.contains(e.target as Node)) setBijzonderheidOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLadingSoort = (id: string, naam: string) => {
    setLadingSoortId(id);
    setLadingSoortSearch(naam);
    setLadingSoortOpen(false);
    // Reset subsoort when ladingsoort changes
    setSubsoortId("");
    setSubsoortSearch("");
  };

  const createLadingSoort = () => {
    const naam = ladingSoortSearch.trim();
    if (!naam) return;
    const newId = `ls-new-${Date.now()}`;
    mockLadingSoorten.push({ id: newId, naam, soortelijkGewicht: 0, subsoortIds: [] });
    selectLadingSoort(newId, naam);
  };

  const selectSubsoort = (id: string, naam: string) => {
    setSubsoortId(id);
    setSubsoortSearch(naam);
    setSubsoortOpen(false);
  };

  const addBijzonderheid = (id: string) => {
    setBijzonderheidIds((prev) => [...prev, id]);
    setBijzonderheidSearch("");
    setBijzonderheidOpen(false);
  };

  const removeBijzonderheid = (id: string) => {
    setBijzonderheidIds((prev) => prev.filter((b) => b !== id));
  };

  const canGoToStep2 = !!relatieId;

  const handleNext = () => {
    if (!canGoToStep2) return;
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ls = mockLadingSoorten.find((l) => l.id === ladingSoortId);
    const relatie = mockRelaties.find((r) => r.id === relatieId);
    const titel = ls && relatie ? `${ls.naam} ${relatie.naam}` : `Lading ${relatie?.naam || ""}`;

    onSave({
      relatieId,
      contactPersoonId: contactPersoonId || undefined,
      contractId: contractId || undefined,
      ladingSoortId: ladingSoortId || undefined,
      subsoortId: subsoortId || undefined,
      titel,
      laadhaven: laadhaven.trim() || "—",
      loshaven: loshaven.trim() || "—",
      tonnage: tonnage.trim() || "—",
      product: ls?.naam || "—",
      laaddatum: aankomst ? aankomst.split("T")[0] : new Date().toISOString().split("T")[0],
      status: "intake",
      matches: 0,
      onderhandelingen: 0,
      soortelijkGewicht: parseFloat(soortelijkGewicht.replace(",", ".")) || undefined,
      bijzonderheidIds: bijzonderheidIds.length > 0 ? bijzonderheidIds : undefined,
      exType,
      exNaam: exNaam.trim() || undefined,
      controleOrganisatie: controleOrganisatie.trim() || undefined,
      notitie: notitie.trim() || undefined,
      laadterminal: laadterminal.trim() || undefined,
      aankomst: aankomst || undefined,
      startLaden: startLaden || undefined,
      enkeleBestemming,
      losterminal: losterminal.trim() || undefined,
      lostermijn: lostermijn.trim() || undefined,
      startLossen: startLossen || undefined,
      eindeLossen: eindeLossen || undefined,
      regie,
    });
  };

  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[560px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{step === 1 ? "Vul de algemene gegevens in" : "Vul de laad- en los gegevens in"}</DialogTitle>
        </DialogHeader>

        {/* Step indicator */}
        <div className="flex items-center gap-[8px] pt-[4px] pb-[8px]">
          <div className={`flex items-center justify-center size-[24px] rounded-full text-[12px] font-bold ${step === 1 ? "bg-[#1567a4] text-white" : "bg-[#f2f4f7] text-rdj-text-secondary"}`}>1</div>
          <p className={`font-sans text-[13px] ${step === 1 ? "font-bold text-rdj-text-primary" : "font-normal text-rdj-text-secondary"}`}>Stap 1 van 2</p>
          <div className="w-[24px] h-px bg-rdj-border-secondary" />
          <div className={`flex items-center justify-center size-[24px] rounded-full text-[12px] font-bold ${step === 2 ? "bg-[#1567a4] text-white" : "bg-[#f2f4f7] text-rdj-text-secondary"}`}>2</div>
          <p className={`font-sans text-[13px] ${step === 2 ? "font-bold text-rdj-text-primary" : "font-normal text-rdj-text-secondary"}`}>Stap 2 van 2</p>
        </div>

        {step === 1 && (
          <div className="flex flex-col gap-[20px] pt-[8px]">
            {/* Relatie */}
            <div className="flex flex-col gap-[6px]">
              <Label className="font-sans font-bold text-[14px] text-[#344054]">Relatie *</Label>
              <select
                value={relatieId}
                onChange={(e) => { setRelatieId(e.target.value); setContactPersoonId(""); setContractId(""); }}
                className={selectClass}
              >
                <option value="">Selecteer relatie</option>
                {mockRelaties.map((r) => (
                  <option key={r.id} value={r.id}>{r.naam}</option>
                ))}
              </select>
            </div>

            {/* Contactpersoon */}
            {relatieId && (
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">Contactpersoon</Label>
                <select
                  value={contactPersoonId}
                  onChange={(e) => setContactPersoonId(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Selecteer contactpersoon</option>
                  {filteredContactPersonen.map((cp) => (
                    <option key={cp.id} value={cp.id}>{cp.naam}{cp.functie ? ` — ${cp.functie}` : ""}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Contract - optional */}
            {relatieId && (
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">
                  Contract <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
                </Label>
                <select
                  value={contractId}
                  onChange={(e) => setContractId(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Geen contract gekoppeld</option>
                  {filteredContracten.map((c) => (
                    <option key={c.id} value={c.id}>{c.titel}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Tonnage + Ladingsoort */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">Tonnage</Label>
                <div className="relative">
                  <Input
                    value={tonnage}
                    onChange={(e) => setTonnage(e.target.value)}
                    placeholder="5000"
                  />
                  <span className="absolute right-[12px] top-1/2 -translate-y-1/2 font-sans text-[14px] text-rdj-text-tertiary">ton</span>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">Ladingsoort</Label>
                <div className="relative" ref={ladingSoortRef}>
                  <Input
                    value={ladingSoortSearch}
                    onChange={(e) => {
                      setLadingSoortSearch(e.target.value);
                      setLadingSoortId("");
                      setLadingSoortOpen(true);
                    }}
                    onFocus={() => setLadingSoortOpen(true)}
                    placeholder="Zoek ladingsoort..."
                    autoComplete="off"
                  />
                  {ladingSoortId && (
                    <button
                      type="button"
                      onClick={() => { setLadingSoortId(""); setLadingSoortSearch(""); setSubsoortId(""); setSubsoortSearch(""); }}
                      className="absolute right-[8px] top-1/2 -translate-y-1/2 p-[2px] text-rdj-text-tertiary hover:text-rdj-text-primary"
                    >
                      <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </button>
                  )}
                  {ladingSoortOpen && (filteredLadingSoorten.length > 0 || showCreateOption) && (
                    <div className="absolute z-50 top-full left-0 right-0 mt-[4px] bg-white border border-rdj-border-primary rounded-[6px] shadow-lg max-h-[200px] overflow-y-auto">
                      {filteredLadingSoorten.map((ls) => (
                        <button
                          key={ls.id}
                          type="button"
                          onClick={() => selectLadingSoort(ls.id, ls.naam)}
                          className={`w-full text-left px-[12px] py-[8px] font-sans text-[14px] hover:bg-[#f9fafb] transition-colors ${ls.id === ladingSoortId ? "bg-[#f0f7ff] text-rdj-text-brand font-bold" : "text-rdj-text-primary"}`}
                        >
                          {ls.naam}
                        </button>
                      ))}
                      {showCreateOption && (
                        <button
                          type="button"
                          onClick={createLadingSoort}
                          className="w-full text-left px-[12px] py-[8px] font-sans text-[14px] text-rdj-text-brand font-bold hover:bg-[#f0f7ff] transition-colors border-t border-rdj-border-secondary"
                        >
                          + &ldquo;{ladingSoortSearch.trim()}&rdquo; toevoegen als nieuwe ladingsoort
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Subsoort + Soortelijk gewicht */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">
                  Subsoort <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
                </Label>
                <div className="relative" ref={subsoortRef}>
                  <Input
                    value={subsoortSearch}
                    onChange={(e) => {
                      setSubsoortSearch(e.target.value);
                      setSubsoortId("");
                      setSubsoortOpen(true);
                    }}
                    onFocus={() => setSubsoortOpen(true)}
                    placeholder={ladingSoortId ? "Zoek subsoort..." : "Selecteer eerst ladingsoort"}
                    autoComplete="off"
                    disabled={!ladingSoortId}
                  />
                  {subsoortId && (
                    <button
                      type="button"
                      onClick={() => { setSubsoortId(""); setSubsoortSearch(""); }}
                      className="absolute right-[8px] top-1/2 -translate-y-1/2 p-[2px] text-rdj-text-tertiary hover:text-rdj-text-primary"
                    >
                      <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </button>
                  )}
                  {subsoortOpen && filteredSubsoorten.length > 0 && (
                    <div className="absolute z-50 top-full left-0 right-0 mt-[4px] bg-white border border-rdj-border-primary rounded-[6px] shadow-lg max-h-[200px] overflow-y-auto">
                      {filteredSubsoorten.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => selectSubsoort(s.id, s.naam)}
                          className={`w-full text-left px-[12px] py-[8px] font-sans text-[14px] hover:bg-[#f9fafb] transition-colors ${s.id === subsoortId ? "bg-[#f0f7ff] text-rdj-text-brand font-bold" : "text-rdj-text-primary"}`}
                        >
                          {s.naam}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">Soortelijk gewicht</Label>
                <div className="relative">
                  <Input
                    value={soortelijkGewicht}
                    onChange={(e) => setSoortelijkGewicht(e.target.value)}
                    placeholder="0,65"
                  />
                  <span className="absolute right-[12px] top-1/2 -translate-y-1/2 font-sans text-[14px] text-rdj-text-tertiary">ton/m³</span>
                </div>
              </div>
            </div>

            {/* Benodigde inhoud info line */}
            {benodigdeInhoud && (
              <div className="flex items-center gap-[6px] -mt-[12px]">
                <svg className="size-[16px] text-[#1567a4]" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 7V11M8 5.5V5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
                <p className="font-sans text-[13px] text-[#1567a4]">
                  Benodigde inhoud: {benodigdeInhoud.toLocaleString("nl-NL")} m³
                </p>
              </div>
            )}

            {/* Bijzonderheden lading */}
            <div className="flex flex-col gap-[6px]">
              <Label className="font-sans font-bold text-[14px] text-[#344054]">
                Bijzonderheden lading <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
              </Label>
              <div className="relative" ref={bijzonderheidRef}>
                <div className="flex flex-wrap items-center gap-[6px] bg-white border border-rdj-border-primary rounded-[6px] px-[12px] py-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#1567a4] focus-within:ring-1 focus-within:ring-[#1567a4]">
                  {bijzonderheidIds.map((id) => {
                    const bh = mockBijzonderheden.find((b) => b.id === id);
                    if (!bh) return null;
                    return (
                      <span key={id} className="inline-flex items-center gap-[4px] bg-[#f2f4f7] rounded-[4px] px-[8px] py-[2px] font-sans text-[13px] text-rdj-text-primary">
                        {bh.naam}
                        <button type="button" onClick={() => removeBijzonderheid(id)} className="text-rdj-text-tertiary hover:text-rdj-text-primary">
                          <svg className="size-[12px]" fill="none" viewBox="0 0 16 16">
                            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </button>
                      </span>
                    );
                  })}
                  <input
                    value={bijzonderheidSearch}
                    onChange={(e) => { setBijzonderheidSearch(e.target.value); setBijzonderheidOpen(true); }}
                    onFocus={() => setBijzonderheidOpen(true)}
                    placeholder={bijzonderheidIds.length === 0 ? "Zoek bijzonderheden..." : ""}
                    className="flex-1 min-w-[80px] outline-none border-none bg-transparent font-sans text-[14px] text-rdj-text-primary placeholder:text-rdj-text-tertiary py-[2px]"
                    autoComplete="off"
                  />
                </div>
                {bijzonderheidOpen && filteredBijzonderheden.length > 0 && (
                  <div className="absolute z-50 top-full left-0 right-0 mt-[4px] bg-white border border-rdj-border-primary rounded-[6px] shadow-lg max-h-[200px] overflow-y-auto">
                    {filteredBijzonderheden.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => addBijzonderheid(b.id)}
                        className="w-full text-left px-[12px] py-[8px] font-sans text-[14px] text-rdj-text-primary hover:bg-[#f9fafb] transition-colors"
                      >
                        {b.naam}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Ex. type + Ex. naam */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">Ex.</Label>
                <div className="flex items-center gap-[16px] h-[38px]">
                  {(["zeeboot", "opslag", "vloot"] as const).map((type) => (
                    <label key={type} className="flex items-center gap-[6px] cursor-pointer">
                      <input
                        type="radio"
                        name="exType"
                        value={type}
                        checked={exType === type}
                        onChange={() => setExType(type)}
                        className="accent-[#1567a4]"
                      />
                      <span className="font-sans text-[14px] text-rdj-text-primary capitalize">{type === "zeeboot" ? "Zeeboot" : type === "opslag" ? "Opslag" : "Vloot"}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">Ex. naam</Label>
                <Input
                  value={exNaam}
                  onChange={(e) => setExNaam(e.target.value)}
                  placeholder="Bijv. Merganser"
                />
              </div>
            </div>

            {/* Controleorganisatie */}
            <div className="flex flex-col gap-[6px]">
              <Label className="font-sans font-bold text-[14px] text-[#344054]">
                Controleorganisatie <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
              </Label>
              <Input
                value={controleOrganisatie}
                onChange={(e) => setControleOrganisatie(e.target.value)}
                placeholder="Bijv. Controle B.V."
              />
            </div>

            {/* Notitie */}
            <div className="flex flex-col gap-[6px]">
              <Label className="font-sans font-bold text-[14px] text-[#344054]">
                Notitie <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
              </Label>
              <Textarea
                value={notitie}
                onChange={(e) => setNotitie(e.target.value)}
                placeholder="Maak een notitie..."
                rows={3}
              />
            </div>

            <div className="flex justify-end gap-[8px] pt-[8px]">
              <Button variant="secondary" label="Annuleren" onClick={onClose} type="button" />
              <Button variant="primary" label="Volgende" onClick={handleNext} type="button" disabled={!canGoToStep2} />
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] pt-[8px]">
            {/* Laadhaven + Laadterminal */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">Laadhaven</Label>
                <Input
                  value={laadhaven}
                  onChange={(e) => setLaadhaven(e.target.value)}
                  placeholder="Bijv. IJmuiden Buitenspuikanaal"
                  autoFocus
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">
                  Laadterminal <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
                </Label>
                <Input
                  value={laadterminal}
                  onChange={(e) => setLaadterminal(e.target.value)}
                  placeholder="Bijv. AA Terminal"
                />
              </div>
            </div>

            {/* Aankomst + Start laden */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">Aankomst</Label>
                <Input
                  type="datetime-local"
                  value={aankomst}
                  onChange={(e) => setAankomst(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">
                  Start laden <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
                </Label>
                <Input
                  type="date"
                  value={startLaden}
                  onChange={(e) => setStartLaden(e.target.value)}
                />
              </div>
            </div>

            {/* Enkele bestemming checkbox */}
            <label className="flex items-center gap-[8px] cursor-pointer">
              <input
                type="checkbox"
                checked={!enkeleBestemming}
                onChange={(e) => setEnkeleBestemming(!e.target.checked)}
                className="accent-[#1567a4] size-[16px]"
              />
              <span className="font-sans text-[14px] text-rdj-text-primary">Partij heeft maar 1 bestemming</span>
            </label>

            {/* Loshaven + Losterminal — shown when NOT enkelebestemming or always? In the design it expands. Let's show when checkbox is checked (has 1 destination) */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">
                  Loshaven <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
                </Label>
                <Input
                  value={loshaven}
                  onChange={(e) => setLoshaven(e.target.value)}
                  placeholder="Bijv. IJmuiden Buitenspuikanaal"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">
                  Losterminal <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
                </Label>
                <Input
                  value={losterminal}
                  onChange={(e) => setLosterminal(e.target.value)}
                  placeholder="Bijv. AA Terminal"
                />
              </div>
            </div>

            {/* Lostermijn */}
            <div className="flex flex-col gap-[6px]">
              <Label className="font-sans font-bold text-[14px] text-[#344054]">
                Lostermijn <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
              </Label>
              <Input
                value={lostermijn}
                onChange={(e) => setLostermijn(e.target.value)}
                placeholder="Bijv. Melden bij aankomst"
              />
            </div>

            {/* Start lossen + Einde lossen */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">
                  Start lossen <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
                </Label>
                <Input
                  type="datetime-local"
                  value={startLossen}
                  onChange={(e) => setStartLossen(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <Label className="font-sans font-bold text-[14px] text-[#344054]">
                  Einde lossen <span className="font-normal text-rdj-text-tertiary">(optioneel)</span>
                </Label>
                <Input
                  type="datetime-local"
                  value={eindeLossen}
                  onChange={(e) => setEindeLossen(e.target.value)}
                />
              </div>
            </div>

            {/* Regie */}
            <div className="flex flex-col gap-[6px]">
              <Label className="font-sans font-bold text-[14px] text-[#344054]">Regie</Label>
              <div className="flex items-center gap-[16px]">
                {(["flex", "duwvaart", "binnenvaart"] as const).map((type) => (
                  <label key={type} className="flex items-center gap-[6px] cursor-pointer">
                    <input
                      type="radio"
                      name="regie"
                      value={type}
                      checked={regie === type}
                      onChange={() => setRegie(type)}
                      className="accent-[#1567a4]"
                    />
                    <span className="font-sans text-[14px] text-rdj-text-primary capitalize">{type === "flex" ? "Flex" : type === "duwvaart" ? "Duwvaart" : "Binnenvaart"}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-[8px]">
              <Button variant="secondary" label="Terug" onClick={() => setStep(1)} type="button" />
              <div className="flex gap-[8px]">
                <Button variant="secondary" label="Annuleren" onClick={onClose} type="button" />
                <Button variant="primary" label="Partij toevoegen" type="submit" />
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
