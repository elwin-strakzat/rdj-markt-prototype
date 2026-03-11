import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Button from "./Button";
import type { ContactPersoon } from "../data/api";
import { FUNCTIE_SUGGESTIES } from "../data/mock-relatie-data";

interface ContactPersoonDialogProps {
  contact?: ContactPersoon | null;
  onSave: (data: Partial<ContactPersoon>) => void;
  onClose: () => void;
}

export default function ContactPersoonDialog({ contact, onSave, onClose }: ContactPersoonDialogProps) {
  const [naam, setNaam] = useState(contact?.naam || "");
  const [functie, setFunctie] = useState(contact?.functie || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [telefoon, setTelefoon] = useState(contact?.telefoon || "");

  const isEdit = !!contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!naam.trim()) return;
    onSave({ naam: naam.trim(), functie: functie.trim() || undefined, email: email.trim(), telefoon: telefoon.trim() });
  };

  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[440px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Contactpersoon bewerken" : "Contactpersoon toevoegen"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] pt-[8px]">
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="cp-naam" className="font-sans font-bold text-[14px] text-[#344054]">
              Naam *
            </Label>
            <Input
              id="cp-naam"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              placeholder="Volledige naam"
              required
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="cp-functie" className="font-sans font-bold text-[14px] text-[#344054]">
              Functie
            </Label>
            <div className="relative">
              <Input
                id="cp-functie"
                value={functie}
                onChange={(e) => setFunctie(e.target.value)}
                placeholder="Bijv. Bevrachter, Directeur..."
                list="functie-suggesties"
              />
              <datalist id="functie-suggesties">
                {FUNCTIE_SUGGESTIES.map((s) => (
                  <option key={s} value={s} />
                ))}
              </datalist>
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="cp-email" className="font-sans font-bold text-[14px] text-[#344054]">
              E-mail
            </Label>
            <Input
              id="cp-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@voorbeeld.nl"
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="cp-telefoon" className="font-sans font-bold text-[14px] text-[#344054]">
              Telefoon
            </Label>
            <Input
              id="cp-telefoon"
              type="tel"
              value={telefoon}
              onChange={(e) => setTelefoon(e.target.value)}
              placeholder="+31 6 1234 5678"
            />
          </div>

          <div className="flex justify-end gap-[8px] pt-[8px]">
            <Button variant="secondary" label="Annuleren" onClick={onClose} type="button" />
            <Button variant="primary" label={isEdit ? "Opslaan" : "Toevoegen"} type="submit" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
