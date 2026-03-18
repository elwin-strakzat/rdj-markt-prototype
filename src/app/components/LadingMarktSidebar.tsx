import { useState } from "react";
import { useNavigate } from "react-router";
import DetailsSidebar, { DetailsSidebarSection } from "./DetailsSidebar";
import DetailRow from "./DetailRow";
import { useLadingMarktDetail } from "../data/useDetailData";

/**
 * LadingMarktSidebar — detail sidebar for a markt-lading.
 * Flow: Inbox → Pijplijn
 *
 * Details tab: tonnage, lading, subsoort, soortelijk gewicht, inhoud,
 * bijzonderheden, laad/loshaven + datum, bron, relatie, contactpersoon.
 * Separated by divider: eigenaar, prioriteit.
 *
 * Condities tab: prijs, laadtijd, liggeld laden, lostijd, liggeld lossen.
 */

interface LadingMarktSidebarProps {
  id: string;
  onEdit?: (field: string) => void;
}

export default function LadingMarktSidebar({ id, onEdit }: LadingMarktSidebarProps) {
  const navigate = useNavigate();
  const { data, loading, error } = useLadingMarktDetail(id);
  const [activeTab, setActiveTab] = useState<string>("details");

  if (loading) {
    return (
      <DetailsSidebar
        tabs={[
          { id: "details", label: "Details" },
          { id: "condities", label: "Condities" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      >
        <div className="flex items-center justify-center py-[40px] w-full">
          <p className="font-sans font-normal leading-[20px] text-rdj-text-tertiary text-[14px]">
            Laden...
          </p>
        </div>
      </DetailsSidebar>
    );
  }

  if (error || !data) {
    return (
      <DetailsSidebar
        tabs={[
          { id: "details", label: "Details" },
          { id: "condities", label: "Condities" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      >
        <div className="flex items-center justify-center py-[40px] w-full">
          <p className="font-sans font-normal leading-[20px] text-rdj-text-tertiary text-[14px]">
            {error || "Geen data gevonden"}
          </p>
        </div>
      </DetailsSidebar>
    );
  }

  const stars = Array.from({ length: 5 }, (_, i) => i < data.prioriteit);

  return (
    <DetailsSidebar
      tabs={[
        { id: "details", label: "Details" },
        { id: "condities", label: "Condities" },
      ]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === "details" && (
        <>
          <DetailsSidebarSection>
            <DetailRow label="Tonnage" value={data.tonnage} editable onEdit={() => onEdit?.("tonnage")} />
            <DetailRow label="Lading" value={data.lading} editable onEdit={() => onEdit?.("lading")} />
            <DetailRow label="Subsoort" value={data.subsoort} editable onEdit={() => onEdit?.("subsoort")} />
            <DetailRow label="Soortelijk gewicht" value={data.soortelijkGewicht} editable onEdit={() => onEdit?.("soortelijkGewicht")} />
            <DetailRow label="Inhoud" value={data.inhoud} editable onEdit={() => onEdit?.("inhoud")} />
            <DetailRow label="Bijzonderheden" type="badges" badges={data.bijzonderheden} editable onEdit={() => onEdit?.("bijzonderheden")} />
            <DetailRow label="Laadhaven" value={data.laadhaven} editable onEdit={() => onEdit?.("laadhaven")} />
            <DetailRow label="Laaddatum" value={data.laaddatum} editable onEdit={() => onEdit?.("laaddatum")} />
            <DetailRow label="Loshaven" value={data.loshaven} editable onEdit={() => onEdit?.("loshaven")} />
            <DetailRow label="Losdatum" value={data.losdatum} editable onEdit={() => onEdit?.("losdatum")} />
            <DetailRow label="Bron" type="linked" value={data.bron} subtext={data.bronDatum} />
            <DetailRow label="Relatie" type="linked" value={data.relatie} onClick={() => navigate(`/crm/relatie/${data.relatieId}`)} />
            <DetailRow label="Contactpersoon" value={data.contactpersoon} />
          </DetailsSidebarSection>

          {/* Divider */}
          <div className="w-full h-px bg-rdj-border-secondary shrink-0 -mt-[8px]" />

          <DetailsSidebarSection>
            <DetailRow label="Eigenaar" type="user" value={data.eigenaar} avatarInitials={data.eigenaarInitials} />
            <DetailRow
              label="Prioriteit"
              value={
                stars.map((filled, i) => filled ? "★" : "☆").join("")
              }
              editable
              onEdit={() => onEdit?.("prioriteit")}
            />
          </DetailsSidebarSection>
        </>
      )}

      {activeTab === "condities" && (
        <DetailsSidebarSection>
          <DetailRow label="Prijs" value={data.prijs} editable onEdit={() => onEdit?.("prijs")} />
          <DetailRow label="Laadtijd" value={data.laadtijd} editable onEdit={() => onEdit?.("laadtijd")} />
          <DetailRow label="Liggeld laden" value={data.liggeldLaden} editable onEdit={() => onEdit?.("liggeldLaden")} />
          <DetailRow label="Lostijd" value={data.lostijd} editable onEdit={() => onEdit?.("lostijd")} />
          <DetailRow label="Liggeld lossen" value={data.liggeldLossen} editable onEdit={() => onEdit?.("liggeldLossen")} />
        </DetailsSidebarSection>
      )}
    </DetailsSidebar>
  );
}
