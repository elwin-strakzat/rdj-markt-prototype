import { useState, useMemo } from "react";
import DetailRow from "./DetailRow";
import ContactPersonenSection from "./ContactPersonenSection";
import TakenList from "./TakenList";
import type { Relatie, ContactPersoon } from "../data/api";
import { mockGebruikers } from "../data/mock-relatie-data";
import { mockTaken } from "../data/mock-taken-data";

interface RelatieDetailSidebarProps {
  relatie: Relatie;
  contactPersonen: ContactPersoon[];
}

const frequentieLabels: Record<string, string> = {
  wekelijks: "Wekelijks",
  maandelijks: "Maandelijks",
  kwartaal: "Per kwartaal",
  geen: "Geen",
};

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export default function RelatieDetailSidebar({ relatie, contactPersonen }: RelatieDetailSidebarProps) {
  const [activeTab, setActiveTab] = useState<"details" | "contactpersonen" | "taken">("details");
  const eigenaar = mockGebruikers.find((g) => g.id === relatie.eigenaarId);
  const openTakenCount = useMemo(
    () => mockTaken.filter((t) => t.relatieId === relatie.id && t.status === "open").length,
    [relatie.id]
  );

  return (
    <div className="shrink-0 w-[380px] border-l border-rdj-border-secondary bg-white sticky top-0 h-screen overflow-y-auto">
      {/* Tabs */}
      <div className="border-b border-rdj-border-secondary px-[20px] pt-[24px]">
        <div className="flex gap-[12px]">
          <button
            onClick={() => setActiveTab("details")}
            className={`pb-[12px] px-[4px] font-sans font-bold text-[14px] leading-[20px] ${
              activeTab === "details"
                ? "text-rdj-text-brand border-b-2 border-[#1567a4]"
                : "text-rdj-text-tertiary"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab("contactpersonen")}
            className={`pb-[12px] px-[4px] font-sans font-bold text-[14px] leading-[20px] flex items-center gap-[6px] ${
              activeTab === "contactpersonen"
                ? "text-rdj-text-brand border-b-2 border-[#1567a4]"
                : "text-rdj-text-tertiary"
            }`}
          >
            Contactpersonen
            <span className={`inline-flex items-center justify-center min-w-[20px] h-[20px] rounded-full px-[6px] font-sans font-bold text-[12px] leading-[16px] ${
              activeTab === "contactpersonen" ? "bg-[#e3effb] text-rdj-text-brand" : "bg-[#f2f4f7] text-rdj-text-tertiary"
            }`}>
              {contactPersonen.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("taken")}
            className={`pb-[12px] px-[4px] font-sans font-bold text-[14px] leading-[20px] flex items-center gap-[6px] ${
              activeTab === "taken"
                ? "text-rdj-text-brand border-b-2 border-[#1567a4]"
                : "text-rdj-text-tertiary"
            }`}
          >
            Taken
            {openTakenCount > 0 && (
              <span className={`inline-flex items-center justify-center min-w-[20px] h-[20px] rounded-full px-[6px] font-sans font-bold text-[12px] leading-[16px] ${
                activeTab === "taken" ? "bg-[#e3effb] text-rdj-text-brand" : "bg-[#f2f4f7] text-rdj-text-tertiary"
              }`}>
                {openTakenCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Tab content */}
      <div className="p-[20px]">
        {activeTab === "details" && (
          <div className="flex flex-col gap-[4px]">
            {/* Adresgegevens */}
            <div className="pb-[12px]">
              <p className="font-sans font-bold text-[12px] leading-[18px] text-rdj-text-secondary uppercase tracking-[0.04em] mb-[8px]">
                Adresgegevens
              </p>
              <DetailRow label="Adres" value={relatie.adres} labelWidth="w-[120px]" />
              <DetailRow label="Postcode" value={[relatie.postcode, relatie.plaats].filter(Boolean).join(" ") || undefined} labelWidth="w-[120px]" />
              <DetailRow label="Land" value={relatie.land} labelWidth="w-[120px]" />
            </div>

            <div className="h-px w-full bg-rdj-border-secondary" />

            {/* Contactgegevens */}
            <div className="py-[12px]">
              <p className="font-sans font-bold text-[12px] leading-[18px] text-rdj-text-secondary uppercase tracking-[0.04em] mb-[8px]">
                Contactgegevens
              </p>
              <DetailRow label="Telefoon" value={relatie.telefoon} labelWidth="w-[120px]" />
              <DetailRow label="E-mail" type="linked" value={relatie.email} labelWidth="w-[120px]" />
              {relatie.website && (
                <DetailRow label="Website" type="linked" value={relatie.website} labelWidth="w-[120px]" />
              )}
            </div>

            <div className="h-px w-full bg-rdj-border-secondary" />

            {/* Bedrijfsinformatie */}
            <div className="py-[12px]">
              <p className="font-sans font-bold text-[12px] leading-[18px] text-rdj-text-secondary uppercase tracking-[0.04em] mb-[8px]">
                Bedrijfsinformatie
              </p>
              <DetailRow label="Ladinggroepen" type="badges" badges={relatie.ladingGroepen} labelWidth="w-[120px]" />
              <DetailRow label="Status" value={relatie.status ? relatie.status.charAt(0).toUpperCase() + relatie.status.slice(1) : undefined} labelWidth="w-[120px]" />
              <DetailRow label="Eigenaar" type="user" value={eigenaar?.naam} labelWidth="w-[120px]" />
              <DetailRow label="Frequentie" value={frequentieLabels[relatie.contactFrequentie || ""] || "—"} labelWidth="w-[120px]" />
              <DetailRow label="Laatste contact" value={formatDate(relatie.laatsteContact)} labelWidth="w-[120px]" />
            </div>

            {relatie.opmerkingen && (
              <>
                <div className="h-px w-full bg-rdj-border-secondary" />
                <div className="py-[12px]">
                  <p className="font-sans font-bold text-[12px] leading-[18px] text-rdj-text-secondary uppercase tracking-[0.04em] mb-[8px]">
                    Opmerkingen
                  </p>
                  <p className="font-sans font-normal text-[14px] leading-[20px] text-rdj-text-primary">
                    {relatie.opmerkingen}
                  </p>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === "contactpersonen" && (
          <ContactPersonenSection relatieId={relatie.id} contactPersonen={contactPersonen} />
        )}

        {activeTab === "taken" && (
          <TakenList relatieId={relatie.id} showDeal compact />
        )}
      </div>
    </div>
  );
}
