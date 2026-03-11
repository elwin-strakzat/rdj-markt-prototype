import { useState } from "react";
import ContactPersoonDialog from "./ContactPersoonDialog";
import type { ContactPersoon } from "../data/api";

interface ContactPersonenSectionProps {
  relatieId: string;
  contactPersonen: ContactPersoon[];
}

export default function ContactPersonenSection({ relatieId, contactPersonen }: ContactPersonenSectionProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [editingContact, setEditingContact] = useState<ContactPersoon | null>(null);
  const [contacts, setContacts] = useState<ContactPersoon[]>(contactPersonen);

  const handleSave = (data: Partial<ContactPersoon>) => {
    if (editingContact) {
      setContacts((prev) =>
        prev.map((cp) => (cp.id === editingContact.id ? { ...cp, ...data } : cp))
      );
    } else {
      const newContact: ContactPersoon = {
        id: `cp-${Date.now()}`,
        naam: data.naam || "",
        email: data.email || "",
        telefoon: data.telefoon || "",
        relatieId,
        functie: data.functie,
        eigenaarId: data.eigenaarId,
      };
      setContacts((prev) => [...prev, newContact]);
    }
    setShowDialog(false);
    setEditingContact(null);
  };

  const handleDelete = (id: string) => {
    setContacts((prev) => prev.filter((cp) => cp.id !== id));
  };

  return (
    <div className="flex flex-col gap-[8px]">
      {contacts.length === 0 ? (
        <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary py-[16px]">
          Nog geen contactpersonen toegevoegd.
        </p>
      ) : (
        contacts.map((cp) => (
          <div
            key={cp.id}
            className="group/contact border border-rdj-border-secondary rounded-[8px] p-[12px] hover:border-[#98a2b3] transition-colors"
          >
            <div className="flex items-start justify-between gap-[8px]">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-[8px]">
                  {/* Avatar */}
                  <div className="relative rounded-full shrink-0 size-[32px] bg-[#f2f4f7] flex items-center justify-center">
                    <p className="font-sans font-bold text-[11px] text-rdj-text-secondary leading-none">
                      {cp.naam
                        .split(" ")
                        .map((w) => w[0])
                        .filter(Boolean)
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans font-bold text-[14px] leading-[20px] text-rdj-text-primary truncate">
                      {cp.naam}
                    </p>
                    {cp.functie && (
                      <p className="font-sans font-normal text-[13px] leading-[18px] text-rdj-text-secondary truncate">
                        {cp.functie}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-[8px] flex flex-col gap-[2px] pl-[40px]">
                  {cp.email && (
                    <div className="flex items-center gap-[6px]">
                      <div className="shrink-0 size-[14px] text-rdj-text-tertiary">
                        <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                          <path d="M1.16667 3.5L5.70866 6.53277C6.49177 7.05589 7.50823 7.05589 8.29134 6.53277L12.8333 3.5M2.33333 11.6667H11.6667C12.311 11.6667 12.8333 11.1443 12.8333 10.5V3.5C12.8333 2.85567 12.311 2.33333 11.6667 2.33333H2.33333C1.689 2.33333 1.16667 2.85567 1.16667 3.5V10.5C1.16667 11.1443 1.689 11.6667 2.33333 11.6667Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </div>
                      <p className="font-sans font-normal text-[13px] leading-[18px] text-rdj-text-brand truncate">
                        {cp.email}
                      </p>
                    </div>
                  )}
                  {cp.telefoon && (
                    <div className="flex items-center gap-[6px]">
                      <div className="shrink-0 size-[14px] text-rdj-text-tertiary">
                        <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                          <path d="M12.8333 9.88V11.5467C12.8333 11.9267 12.5267 12.2333 12.1467 12.2333C6.16 12.2333 1.16667 7.24 1.16667 1.25333C1.16667 0.873333 1.47333 0.566667 1.85333 0.566667H3.52L5.25333 4.03333L3.99 5.06C4.89 6.89333 6.50667 8.51 8.34 9.41L9.36667 8.14667L12.8333 9.88Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </div>
                      <p className="font-sans font-normal text-[13px] leading-[18px] text-rdj-text-primary">
                        {cp.telefoon}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-[4px] opacity-0 group-hover/contact:opacity-100 transition-opacity">
                <button
                  onClick={() => { setEditingContact(cp); setShowDialog(true); }}
                  className="p-[4px] rounded-[4px] hover:bg-[#f2f4f7] text-rdj-text-tertiary hover:text-rdj-text-secondary transition-colors"
                  title="Bewerken"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d="M11.3333 2.00004C11.5084 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.617 1.68605 13.825 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61181C14.5035 2.84062 14.5523 3.08581 14.5523 3.33337C14.5523 3.58094 14.5035 3.82613 14.4088 4.05494C14.314 4.28375 14.1751 4.49162 14 4.66671L5 13.6667L1.33333 14.6667L2.33333 11L11.3333 2.00004Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(cp.id)}
                  className="p-[4px] rounded-[4px] hover:bg-[#fef3f2] text-rdj-text-tertiary hover:text-[#b42318] transition-colors"
                  title="Verwijderen"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d="M2 4H14M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4M5.33333 4V2.66667C5.33333 2 6 1.33333 6.66667 1.33333H9.33333C10 1.33333 10.6667 2 10.6667 2.66667V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Add button */}
      <button
        onClick={() => { setEditingContact(null); setShowDialog(true); }}
        className="w-full flex items-center gap-[8px] px-[12px] py-[10px] rounded-[8px] border border-dashed border-rdj-border-primary hover:border-[#1567a4] hover:bg-[#f9fafb] transition-colors"
      >
        <div className="shrink-0 size-[20px] text-[#145990]">
          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
            <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
        <p className="font-sans font-bold text-[14px] leading-[20px] text-[#145990]">
          Contactpersoon toevoegen
        </p>
      </button>

      {showDialog && (
        <ContactPersoonDialog
          contact={editingContact}
          onSave={handleSave}
          onClose={() => { setShowDialog(false); setEditingContact(null); }}
        />
      )}
    </div>
  );
}
