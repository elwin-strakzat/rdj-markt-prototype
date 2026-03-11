import { useState, useMemo, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import Button from "./Button";
import type { Contract, ContractRoute, ContractType, ContractSoort, ContractStatus } from "../data/api";
import { mockRelaties, mockContactPersonen, mockGebruikers } from "../data/mock-relatie-data";
import { CONTRACT_SOORT_LABELS, CONTRACT_STATUS_LABELS, VERLOREN_REDENEN, mockLadingSoorten } from "../data/mock-contract-data";

interface ContractFormDialogProps {
  contract?: Contract;
  onSave: (data: Partial<Contract>) => void;
  onClose: () => void;
}

const selectClass = "bg-white border border-rdj-border-primary rounded-[6px] px-[12px] py-[8px] font-sans font-normal text-[14px] text-rdj-text-primary focus:outline-none focus:border-[#1567a4] focus:ring-1 focus:ring-[#1567a4] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]";

export default function ContractFormDialog({ contract, onSave, onClose }: ContractFormDialogProps) {
  const isEdit = !!contract;

  const [titel, setTitel] = useState(contract?.titel || "");
  const [relatieId, setRelatieId] = useState(contract?.relatieId || "");
  const [contactPersoonId, setContactPersoonId] = useState(contract?.contactPersoonId || "");
  const [eigenaarId, setEigenaarId] = useState(contract?.eigenaarId || "");
  const [ladingSoortId, setLadingSoortId] = useState(contract?.ladingSoortId || "");
  const [ladingSoortSearch, setLadingSoortSearch] = useState(() => {
    if (contract?.ladingSoortId) {
      const found = mockLadingSoorten.find((ls) => ls.id === contract.ladingSoortId);
      return found?.naam || "";
    }
    return "";
  });
  const [ladingSoortOpen, setLadingSoortOpen] = useState(false);
  const ladingSoortRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState<ContractType>(contract?.type || "spot");
  const [soort, setSoort] = useState<ContractSoort>(contract?.soort || "bevrachting");
  const [status, setStatus] = useState<ContractStatus>(contract?.status || "aandacht_nodig");
  const [verlorenReden, setVerlorenReden] = useState(contract?.verlorenReden || "");
  const [waarde, setWaarde] = useState(contract?.waarde?.toString() || "");
  const [opmerkingen, setOpmerkingen] = useState(contract?.opmerkingen || "");

  // Spot fields
  const [laadhavenNaam, setLaadhavenNaam] = useState(contract?.laadhavenNaam || "");
  const [loshavenNaam, setLoshavenNaam] = useState(contract?.loshavenNaam || "");
  const [tonnage, setTonnage] = useState(contract?.tonnage?.toString() || "");
  const [vrachtprijs, setVrachtprijs] = useState(contract?.vrachtprijs?.toString() || "");
  const [laaddatum, setLaaddatum] = useState(contract?.laaddatum || "");
  const [losdatum, setLosdatum] = useState(contract?.losdatum || "");

  // Contract fields
  const [startDatum, setStartDatum] = useState(contract?.startDatum || "");
  const [eindDatum, setEindDatum] = useState(contract?.eindDatum || "");
  const [routes, setRoutes] = useState<ContractRoute[]>(contract?.routes || []);

  const filteredContactPersonen = useMemo(
    () => mockContactPersonen.filter((cp) => cp.relatieId === relatieId),
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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ladingSoortRef.current && !ladingSoortRef.current.contains(e.target as Node)) {
        setLadingSoortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLadingSoort = (id: string, naam: string) => {
    setLadingSoortId(id);
    setLadingSoortSearch(naam);
    setLadingSoortOpen(false);
  };

  const createLadingSoort = () => {
    const naam = ladingSoortSearch.trim();
    if (!naam) return;
    const newId = `ls-new-${Date.now()}`;
    mockLadingSoorten.push({ id: newId, naam, soortelijkGewicht: 0, subsoortIds: [] });
    selectLadingSoort(newId, naam);
  };

  const addRoute = () => {
    setRoutes((prev) => [
      ...prev,
      { id: `r-new-${Date.now()}`, laadhavenNaam: "", loshavenNaam: "" },
    ]);
  };

  const removeRoute = (id: string) => {
    setRoutes((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRoute = (id: string, field: keyof ContractRoute, value: string | number) => {
    setRoutes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titel.trim()) return;

    const data: Partial<Contract> = {
      titel: titel.trim(),
      relatieId: relatieId || undefined,
      contactPersoonId: contactPersoonId || undefined,
      eigenaarId: eigenaarId || undefined,
      ladingSoortId: ladingSoortId || undefined,
      type,
      soort,
      status,
      verlorenReden: status === "verloren" ? verlorenReden : undefined,
      waarde: waarde ? parseFloat(waarde) : undefined,
      opmerkingen: opmerkingen.trim() || undefined,
      laatsteUpdate: new Date().toISOString().split("T")[0],
    };

    if (type === "spot") {
      Object.assign(data, {
        laadhavenNaam: laadhavenNaam.trim() || undefined,
        loshavenNaam: loshavenNaam.trim() || undefined,
        tonnage: tonnage ? parseFloat(tonnage) : undefined,
        vrachtprijs: vrachtprijs ? parseFloat(vrachtprijs) : undefined,
        laaddatum: laaddatum || undefined,
        losdatum: losdatum || undefined,
      });
    } else {
      Object.assign(data, {
        startDatum: startDatum || undefined,
        eindDatum: eindDatum || undefined,
        routes: routes.filter((r) => r.laadhavenNaam.trim() || r.loshavenNaam.trim()),
      });
    }

    if (!isEdit) {
      data.aanmaakDatum = new Date().toISOString().split("T")[0];
    }

    onSave(data);
  };

  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[640px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Deal bewerken" : "Nieuwe deal"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] pt-[8px]">
          {/* Titel */}
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="ctr-titel" className="font-sans font-bold text-[14px] text-[#344054]">
              Titel *
            </Label>
            <Input
              id="ctr-titel"
              value={titel}
              onChange={(e) => setTitel(e.target.value)}
              placeholder="Bijv. Graan Rotterdam → Duisburg"
              required
              autoFocus
            />
          </div>

          {/* Relatie + Contactpersoon */}
          <div className="grid grid-cols-2 gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="ctr-relatie" className="font-sans font-bold text-[14px] text-[#344054]">Relatie</Label>
              <select
                id="ctr-relatie"
                value={relatieId}
                onChange={(e) => { setRelatieId(e.target.value); setContactPersoonId(""); }}
                className={selectClass}
              >
                <option value="">Selecteer relatie</option>
                {mockRelaties.map((r) => (
                  <option key={r.id} value={r.id}>{r.naam}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="ctr-contact" className="font-sans font-bold text-[14px] text-[#344054]">Contactpersoon</Label>
              <select
                id="ctr-contact"
                value={contactPersoonId}
                onChange={(e) => setContactPersoonId(e.target.value)}
                className={selectClass}
                disabled={!relatieId}
              >
                <option value="">Selecteer contactpersoon</option>
                {filteredContactPersonen.map((cp) => (
                  <option key={cp.id} value={cp.id}>{cp.naam}{cp.functie ? ` — ${cp.functie}` : ""}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Ladingsoort */}
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="ctr-ladingsoort" className="font-sans font-bold text-[14px] text-[#344054]">Ladingsoort</Label>
            <div className="relative" ref={ladingSoortRef}>
              <Input
                id="ctr-ladingsoort"
                value={ladingSoortSearch}
                onChange={(e) => {
                  setLadingSoortSearch(e.target.value);
                  setLadingSoortId("");
                  setLadingSoortOpen(true);
                }}
                onFocus={() => setLadingSoortOpen(true)}
                placeholder="Zoek of typ een ladingsoort..."
                autoComplete="off"
              />
              {ladingSoortId && (
                <button
                  type="button"
                  onClick={() => { setLadingSoortId(""); setLadingSoortSearch(""); }}
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
                      + "{ladingSoortSearch.trim()}" toevoegen als nieuwe ladingsoort
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Type + Soort */}
          <div className="grid grid-cols-3 gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="ctr-type" className="font-sans font-bold text-[14px] text-[#344054]">Type</Label>
              <select id="ctr-type" value={type} onChange={(e) => setType(e.target.value as ContractType)} className={selectClass}>
                <option value="spot">Spot</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="ctr-soort" className="font-sans font-bold text-[14px] text-[#344054]">Soort</Label>
              <select id="ctr-soort" value={soort} onChange={(e) => setSoort(e.target.value as ContractSoort)} className={selectClass}>
                {Object.entries(CONTRACT_SOORT_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="ctr-eigenaar" className="font-sans font-bold text-[14px] text-[#344054]">Eigenaar</Label>
              <select id="ctr-eigenaar" value={eigenaarId} onChange={(e) => setEigenaarId(e.target.value)} className={selectClass}>
                <option value="">Geen eigenaar</option>
                {mockGebruikers.map((g) => (
                  <option key={g.id} value={g.id}>{g.naam}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Status + Waarde */}
          <div className="grid grid-cols-2 gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="ctr-status" className="font-sans font-bold text-[14px] text-[#344054]">Status</Label>
              <select id="ctr-status" value={status} onChange={(e) => setStatus(e.target.value as ContractStatus)} className={selectClass}>
                {Object.entries(CONTRACT_STATUS_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="ctr-waarde" className="font-sans font-bold text-[14px] text-[#344054]">Waarde (€)</Label>
              <Input id="ctr-waarde" type="number" value={waarde} onChange={(e) => setWaarde(e.target.value)} placeholder="0" />
            </div>
          </div>

          {/* Verloren reden */}
          {status === "verloren" && (
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="ctr-reden" className="font-sans font-bold text-[14px] text-[#344054]">Reden verloren</Label>
              <select id="ctr-reden" value={verlorenReden} onChange={(e) => setVerlorenReden(e.target.value)} className={selectClass}>
                <option value="">Selecteer reden</option>
                {VERLOREN_REDENEN.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          )}

          {/* Spot fields */}
          {type === "spot" && (
            <>
              <div className="grid grid-cols-2 gap-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <Label htmlFor="ctr-laadhaven" className="font-sans font-bold text-[14px] text-[#344054]">Laadhaven</Label>
                  <Input id="ctr-laadhaven" value={laadhavenNaam} onChange={(e) => setLaadhavenNaam(e.target.value)} placeholder="Rotterdam" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Label htmlFor="ctr-loshaven" className="font-sans font-bold text-[14px] text-[#344054]">Loshaven</Label>
                  <Input id="ctr-loshaven" value={loshavenNaam} onChange={(e) => setLoshavenNaam(e.target.value)} placeholder="Duisburg" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <Label htmlFor="ctr-tonnage" className="font-sans font-bold text-[14px] text-[#344054]">Tonnage</Label>
                  <Input id="ctr-tonnage" type="number" value={tonnage} onChange={(e) => setTonnage(e.target.value)} placeholder="0" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Label htmlFor="ctr-vrachtprijs" className="font-sans font-bold text-[14px] text-[#344054]">Vrachtprijs (€/ton)</Label>
                  <Input id="ctr-vrachtprijs" type="number" step="0.01" value={vrachtprijs} onChange={(e) => setVrachtprijs(e.target.value)} placeholder="0.00" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <Label htmlFor="ctr-laaddatum" className="font-sans font-bold text-[14px] text-[#344054]">Laaddatum</Label>
                  <Input id="ctr-laaddatum" type="date" value={laaddatum} onChange={(e) => setLaaddatum(e.target.value)} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Label htmlFor="ctr-losdatum" className="font-sans font-bold text-[14px] text-[#344054]">Losdatum</Label>
                  <Input id="ctr-losdatum" type="date" value={losdatum} onChange={(e) => setLosdatum(e.target.value)} />
                </div>
              </div>
            </>
          )}

          {/* Contract fields */}
          {type === "contract" && (
            <>
              <div className="grid grid-cols-2 gap-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <Label htmlFor="ctr-start" className="font-sans font-bold text-[14px] text-[#344054]">Startdatum</Label>
                  <Input id="ctr-start" type="date" value={startDatum} onChange={(e) => setStartDatum(e.target.value)} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Label htmlFor="ctr-eind" className="font-sans font-bold text-[14px] text-[#344054]">Einddatum</Label>
                  <Input id="ctr-eind" type="date" value={eindDatum} onChange={(e) => setEindDatum(e.target.value)} />
                </div>
              </div>

              {/* Routes */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <Label className="font-sans font-bold text-[14px] text-[#344054]">Routes</Label>
                  <button
                    type="button"
                    onClick={addRoute}
                    className="font-sans font-bold text-[13px] text-rdj-text-brand hover:underline"
                  >
                    + Route toevoegen
                  </button>
                </div>
                {routes.length === 0 && (
                  <p className="font-sans font-normal text-[13px] text-rdj-text-tertiary">Nog geen routes toegevoegd.</p>
                )}
                {routes.map((route, idx) => (
                  <div key={route.id} className="border border-rdj-border-secondary rounded-[8px] p-[12px] flex flex-col gap-[10px]">
                    <div className="flex items-center justify-between">
                      <p className="font-sans font-bold text-[13px] text-rdj-text-secondary">Route {idx + 1}</p>
                      <button
                        type="button"
                        onClick={() => removeRoute(route.id)}
                        className="p-[4px] text-rdj-text-tertiary hover:text-[#b42318] transition-colors"
                      >
                        <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-end gap-[8px]">
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <Label className="font-sans font-normal text-[12px] text-rdj-text-secondary">Laadhaven</Label>
                        <Input
                          value={route.laadhavenNaam}
                          onChange={(e) => updateRoute(route.id, "laadhavenNaam", e.target.value)}
                          placeholder="Bijv. Rotterdam"
                        />
                      </div>
                      <div className="shrink-0 pb-[10px]">
                        <svg className="size-[16px] text-rdj-text-tertiary" fill="none" viewBox="0 0 16 16">
                          <path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <Label className="font-sans font-normal text-[12px] text-rdj-text-secondary">Loshaven</Label>
                        <Input
                          value={route.loshavenNaam}
                          onChange={(e) => updateRoute(route.id, "loshavenNaam", e.target.value)}
                          placeholder="Bijv. Duisburg"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[8px]">
                      <div className="flex flex-col gap-[4px]">
                        <Label className="font-sans font-normal text-[12px] text-rdj-text-secondary">Tonnage <span className="text-rdj-text-tertiary">(optioneel)</span></Label>
                        <Input
                          type="number"
                          value={route.tonnage?.toString() || ""}
                          onChange={(e) => updateRoute(route.id, "tonnage", e.target.value ? parseFloat(e.target.value) : "")}
                          placeholder="0"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <Label className="font-sans font-normal text-[12px] text-rdj-text-secondary">Vrachtprijs <span className="text-rdj-text-tertiary">(optioneel)</span></Label>
                        <Input
                          type="number"
                          step="0.01"
                          value={route.vrachtprijs?.toString() || ""}
                          onChange={(e) => updateRoute(route.id, "vrachtprijs", e.target.value ? parseFloat(e.target.value) : "")}
                          placeholder="€/ton"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Opmerkingen */}
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="ctr-opmerkingen" className="font-sans font-bold text-[14px] text-[#344054]">Opmerkingen</Label>
            <Textarea
              id="ctr-opmerkingen"
              value={opmerkingen}
              onChange={(e) => setOpmerkingen(e.target.value)}
              placeholder="Eventuele opmerkingen..."
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-[8px] pt-[8px]">
            <Button variant="secondary" label="Annuleren" onClick={onClose} type="button" />
            <Button variant="primary" label={isEdit ? "Opslaan" : "Aanmaken"} type="submit" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
