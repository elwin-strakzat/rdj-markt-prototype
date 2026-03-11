import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import Button from "./Button";
import type { Relatie } from "../data/api";
import { LADINGGROEP_SUGGESTIES, mockGebruikers } from "../data/mock-relatie-data";

interface RelatieFormDialogProps {
  relatie?: Relatie;
  onSave: (data: Partial<Relatie>) => void;
  onClose: () => void;
}

export default function RelatieFormDialog({ relatie, onSave, onClose }: RelatieFormDialogProps) {
  const isEdit = !!relatie;

  const [naam, setNaam] = useState(relatie?.naam || "");
  const [adres, setAdres] = useState(relatie?.adres || "");
  const [postcode, setPostcode] = useState(relatie?.postcode || "");
  const [plaats, setPlaats] = useState(relatie?.plaats || "");
  const [land, setLand] = useState(relatie?.land || "Nederland");
  const [telefoon, setTelefoon] = useState(relatie?.telefoon || "");
  const [email, setEmail] = useState(relatie?.email || "");
  const [website, setWebsite] = useState(relatie?.website || "");
  const [status, setStatus] = useState<Relatie["status"]>(relatie?.status || "actief");
  const [eigenaarId, setEigenaarId] = useState(relatie?.eigenaarId || "");
  const [contactFrequentie, setContactFrequentie] = useState<Relatie["contactFrequentie"]>(relatie?.contactFrequentie || "geen");
  const [ladingGroepen, setLadingGroepen] = useState<string[]>(relatie?.ladingGroepen || []);
  const [ladingGroepInput, setLadingGroepInput] = useState("");
  const [opmerkingen, setOpmerkingen] = useState(relatie?.opmerkingen || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!naam.trim()) return;

    onSave({
      naam: naam.trim(),
      adres: adres.trim() || undefined,
      postcode: postcode.trim() || undefined,
      plaats: plaats.trim() || undefined,
      land: land.trim() || undefined,
      telefoon: telefoon.trim() || undefined,
      email: email.trim() || undefined,
      website: website.trim() || undefined,
      status,
      eigenaarId: eigenaarId || undefined,
      contactFrequentie,
      ladingGroepen: ladingGroepen.length > 0 ? ladingGroepen : undefined,
      opmerkingen: opmerkingen.trim() || undefined,
    });
  };

  const addLadingGroep = (groep: string) => {
    const trimmed = groep.trim();
    if (trimmed && !ladingGroepen.includes(trimmed)) {
      setLadingGroepen((prev) => [...prev, trimmed]);
    }
    setLadingGroepInput("");
  };

  const removeLadingGroep = (groep: string) => {
    setLadingGroepen((prev) => prev.filter((g) => g !== groep));
  };

  const handleLadingGroepKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addLadingGroep(ladingGroepInput);
    }
  };

  const filteredSuggesties = LADINGGROEP_SUGGESTIES.filter(
    (s) => !ladingGroepen.includes(s) && s.toLowerCase().includes(ladingGroepInput.toLowerCase())
  );

  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[640px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Relatie bewerken" : "Nieuwe relatie"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] pt-[8px]">
          {/* Naam */}
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="rel-naam" className="font-sans font-bold text-[14px] text-[#344054]">
              Bedrijfsnaam *
            </Label>
            <Input
              id="rel-naam"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              placeholder="Bedrijfsnaam"
              required
              autoFocus
            />
          </div>

          {/* Adres rij */}
          <div className="grid grid-cols-2 gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-adres" className="font-sans font-bold text-[14px] text-[#344054]">Adres</Label>
              <Input id="rel-adres" value={adres} onChange={(e) => setAdres(e.target.value)} placeholder="Straat + nummer" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-postcode" className="font-sans font-bold text-[14px] text-[#344054]">Postcode</Label>
              <Input id="rel-postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="1234 AB" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-plaats" className="font-sans font-bold text-[14px] text-[#344054]">Plaats</Label>
              <Input id="rel-plaats" value={plaats} onChange={(e) => setPlaats(e.target.value)} placeholder="Stad" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-land" className="font-sans font-bold text-[14px] text-[#344054]">Land</Label>
              <Input id="rel-land" value={land} onChange={(e) => setLand(e.target.value)} placeholder="Nederland" />
            </div>
          </div>

          {/* Contact rij */}
          <div className="grid grid-cols-2 gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-telefoon" className="font-sans font-bold text-[14px] text-[#344054]">Telefoon</Label>
              <Input id="rel-telefoon" type="tel" value={telefoon} onChange={(e) => setTelefoon(e.target.value)} placeholder="+31 10 234 5678" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-email" className="font-sans font-bold text-[14px] text-[#344054]">E-mail</Label>
              <Input id="rel-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="info@bedrijf.nl" />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="rel-website" className="font-sans font-bold text-[14px] text-[#344054]">Website</Label>
            <Input id="rel-website" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="www.bedrijf.nl" />
          </div>

          {/* Ladinggroepen */}
          <div className="flex flex-col gap-[6px]">
            <Label className="font-sans font-bold text-[14px] text-[#344054]">Ladinggroepen</Label>
            {ladingGroepen.length > 0 && (
              <div className="flex flex-wrap gap-[4px] mb-[4px]">
                {ladingGroepen.map((groep) => (
                  <span
                    key={groep}
                    className="inline-flex items-center gap-[4px] bg-[#f2f4f7] border border-rdj-border-primary rounded-[4px] px-[8px] py-[2px] font-sans font-bold text-[12px] text-rdj-text-primary"
                  >
                    {groep}
                    <button
                      type="button"
                      onClick={() => removeLadingGroep(groep)}
                      className="text-rdj-text-tertiary hover:text-[#b42318] transition-colors"
                    >
                      <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                        <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            )}
            <div className="relative">
              <Input
                value={ladingGroepInput}
                onChange={(e) => setLadingGroepInput(e.target.value)}
                onKeyDown={handleLadingGroepKeyDown}
                placeholder="Typ om toe te voegen..."
              />
              {ladingGroepInput.trim() && filteredSuggesties.length > 0 && (
                <div className="absolute z-50 top-full left-0 right-0 mt-[4px] bg-white border border-[#eaecf0] rounded-[8px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] overflow-hidden max-h-[160px] overflow-y-auto">
                  {filteredSuggesties.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => addLadingGroep(s)}
                      className="w-full text-left px-[12px] py-[8px] font-sans font-normal text-[14px] text-[#344054] hover:bg-[#f9fafb] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Status, Eigenaar, Frequentie */}
          <div className="grid grid-cols-3 gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-status" className="font-sans font-bold text-[14px] text-[#344054]">Status</Label>
              <select
                id="rel-status"
                value={status}
                onChange={(e) => setStatus(e.target.value as Relatie["status"])}
                className="bg-white border border-rdj-border-primary rounded-[6px] px-[12px] py-[8px] font-sans font-normal text-[14px] text-rdj-text-primary focus:outline-none focus:border-[#1567a4] focus:ring-1 focus:ring-[#1567a4] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              >
                <option value="actief">Actief</option>
                <option value="inactief">Inactief</option>
                <option value="prospect">Prospect</option>
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-eigenaar" className="font-sans font-bold text-[14px] text-[#344054]">Eigenaar</Label>
              <select
                id="rel-eigenaar"
                value={eigenaarId}
                onChange={(e) => setEigenaarId(e.target.value)}
                className="bg-white border border-rdj-border-primary rounded-[6px] px-[12px] py-[8px] font-sans font-normal text-[14px] text-rdj-text-primary focus:outline-none focus:border-[#1567a4] focus:ring-1 focus:ring-[#1567a4] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              >
                <option value="">Geen eigenaar</option>
                {mockGebruikers.map((g) => (
                  <option key={g.id} value={g.id}>{g.naam}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="rel-freq" className="font-sans font-bold text-[14px] text-[#344054]">Contactfrequentie</Label>
              <select
                id="rel-freq"
                value={contactFrequentie}
                onChange={(e) => setContactFrequentie(e.target.value as Relatie["contactFrequentie"])}
                className="bg-white border border-rdj-border-primary rounded-[6px] px-[12px] py-[8px] font-sans font-normal text-[14px] text-rdj-text-primary focus:outline-none focus:border-[#1567a4] focus:ring-1 focus:ring-[#1567a4] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              >
                <option value="geen">Geen</option>
                <option value="wekelijks">Wekelijks</option>
                <option value="maandelijks">Maandelijks</option>
                <option value="kwartaal">Per kwartaal</option>
              </select>
            </div>
          </div>

          {/* Opmerkingen */}
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="rel-opmerkingen" className="font-sans font-bold text-[14px] text-[#344054]">Opmerkingen</Label>
            <Textarea
              id="rel-opmerkingen"
              value={opmerkingen}
              onChange={(e) => setOpmerkingen(e.target.value)}
              placeholder="Eventuele opmerkingen over deze relatie..."
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
