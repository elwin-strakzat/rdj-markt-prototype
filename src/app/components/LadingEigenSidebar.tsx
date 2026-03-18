import { useState } from "react";
import { useNavigate } from "react-router";
import DetailsSidebar, { DetailsSidebarSection } from "./DetailsSidebar";
import DetailRow from "./DetailRow";
import { useLadingEigenDetail } from "../data/useDetailData";

/**
 * LadingEigenSidebar — detail sidebar for an eigen-lading.
 * Flow: Laadplanning → Bevrachting → Pijplijn
 *
 * Details tab: partij, subpartij, tonnage, ex, lading, subsoort,
 * soortelijk gewicht, inhoud, bijzonderheden, laad/loshaven + datum,
 * relatie, contactpersoon.
 * Separated by divider: eigenaar, deadline.
 *
 * Condities tab: shows BOTH eigen AND markt values side-by-side
 * for prijs, laadtijd, liggeld laden, lostijd, liggeld lossen.
 */

interface LadingEigenSidebarProps {
  id: string;
  onEdit?: (field: string) => void;
}

export default function LadingEigenSidebar({ id, onEdit }: LadingEigenSidebarProps) {
  const navigate = useNavigate();
  const { data, loading, error } = useLadingEigenDetail(id);
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
            <DetailRow label="Partij" type="linked" value={data.partij} />
            <DetailRow label="Subpartij" type="linked" value={data.subpartij} />
            <DetailRow label="Tonnage" value={data.tonnage} editable onEdit={() => onEdit?.("tonnage")} />
            <DetailRow label="Ex." value={data.ex} subtext={data.exType} />
            <DetailRow label="Lading" value={data.lading} editable onEdit={() => onEdit?.("lading")} />
            <DetailRow label="Subsoort" value={data.subsoort} editable onEdit={() => onEdit?.("subsoort")} />
            <DetailRow label="Soortelijk gewicht" value={data.soortelijkGewicht} editable onEdit={() => onEdit?.("soortelijkGewicht")} />
            <DetailRow label="Inhoud" value={data.inhoud} editable onEdit={() => onEdit?.("inhoud")} />
            <DetailRow label="Bijzonderheden" type="badges" badges={data.bijzonderheden} editable onEdit={() => onEdit?.("bijzonderheden")} />
            <DetailRow label="Laadhaven" value={data.laadhaven} editable onEdit={() => onEdit?.("laadhaven")} />
            <DetailRow label="Laaddatum" value={data.laaddatum} editable onEdit={() => onEdit?.("laaddatum")} />
            <DetailRow label="Loshaven" value={data.loshaven} editable onEdit={() => onEdit?.("loshaven")} />
            <DetailRow label="Losdatum" value={data.losdatum} editable onEdit={() => onEdit?.("losdatum")} />
            <DetailRow label="Relatie" type="linked" value={data.relatie} onClick={() => navigate(`/crm/relatie/${data.relatieId}`)} />
            <DetailRow label="Contactpersoon" value={data.contactpersoon} />
          </DetailsSidebarSection>

          {/* Divider */}
          <div className="w-full h-px bg-rdj-border-secondary shrink-0 -mt-[8px]" />

          <DetailsSidebarSection>
            <DetailRow label="Eigenaar" type="user" value={data.eigenaar} avatarInitials={data.eigenaarInitials} />
            <DetailRow label="Deadline" value={data.deadline} editable onEdit={() => onEdit?.("deadline")} />
          </DetailsSidebarSection>
        </>
      )}

      {activeTab === "condities" && (
        <>
          {/* Eigen condities */}
          <DetailsSidebarSection title="Eigen">
            <DetailRow label="Prijs" value={data.eigenPrijs} editable onEdit={() => onEdit?.("eigenPrijs")} />
            <DetailRow label="Laadtijd" value={data.eigenLaadtijd} editable onEdit={() => onEdit?.("eigenLaadtijd")} />
            <DetailRow label="Liggeld laden" value={data.eigenLiggeldLaden} editable onEdit={() => onEdit?.("eigenLiggeldLaden")} />
            <DetailRow label="Lostijd" value={data.eigenLostijd} editable onEdit={() => onEdit?.("eigenLostijd")} />
            <DetailRow label="Liggeld lossen" value={data.eigenLiggeldLossen} editable onEdit={() => onEdit?.("eigenLiggeldLossen")} />
          </DetailsSidebarSection>

          {/* Markt condities */}
          <DetailsSidebarSection title="Markt">
            <DetailRow label="Prijs" value={data.marktPrijs} />
            <DetailRow label="Laadtijd" value={data.marktLaadtijd} />
            <DetailRow label="Liggeld laden" value={data.marktLiggeldLaden} />
            <DetailRow label="Lostijd" value={data.marktLostijd} />
            <DetailRow label="Liggeld lossen" value={data.marktLiggeldLossen} />
          </DetailsSidebarSection>
        </>
      )}
    </DetailsSidebar>
  );
}
