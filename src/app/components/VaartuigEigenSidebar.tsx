import { useState } from "react";
import { useNavigate } from "react-router";
import DetailsSidebar, { DetailsSidebarSection } from "./DetailsSidebar";
import DetailRow from "./DetailRow";
import { useVaartuigEigenDetail } from "../data/useDetailData";

/**
 * VaartuigEigenSidebar — detail sidebar for an eigen-vaartuig.
 * Flow: Laadplanning → Bevrachting → Pijplijn
 *
 * No "Reset naar bron" button (unlike markt variant).
 *
 * Details: beschikbaar vanaf, huidige locatie, ENI, vlag, meetbrief,
 * groottonnage, inhoud, lengte, breedte, diepgang, kruiphoogte,
 * bijzonderheden.
 * Separated by divider: eigenaar, deadline.
 */

interface VaartuigEigenSidebarProps {
  id: string;
  onEdit?: (field: string) => void;
}

export default function VaartuigEigenSidebar({ id, onEdit }: VaartuigEigenSidebarProps) {
  const navigate = useNavigate();
  const { data, loading, error } = useVaartuigEigenDetail(id);
  const [activeTab, setActiveTab] = useState<string>("details");

  if (loading) {
    return (
      <DetailsSidebar activeTab={activeTab} onTabChange={setActiveTab}>
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
      <DetailsSidebar activeTab={activeTab} onTabChange={setActiveTab}>
        <div className="flex items-center justify-center py-[40px] w-full">
          <p className="font-sans font-normal leading-[20px] text-rdj-text-tertiary text-[14px]">
            {error || "Geen data gevonden"}
          </p>
        </div>
      </DetailsSidebar>
    );
  }

  return (
    <DetailsSidebar activeTab={activeTab} onTabChange={setActiveTab}>
      <DetailsSidebarSection>
        <DetailRow label="Beschikbaar vanaf" value={data.beschikbaarVanaf} editable onEdit={() => onEdit?.("beschikbaarVanaf")} />
        <DetailRow label="Huidige locatie" value={data.huidigeLocatie} editable onEdit={() => onEdit?.("huidigeLocatie")} />
        <DetailRow label="ENI" value={data.eni} editable onEdit={() => onEdit?.("eni")} />
        <DetailRow label="Vlag" value={data.vlag} editable onEdit={() => onEdit?.("vlag")} />
        <DetailRow label="Meetbrief" value={data.meetbrief} editable onEdit={() => onEdit?.("meetbrief")} />
        <DetailRow label="Groottonnage" value={data.groottonnage} editable onEdit={() => onEdit?.("groottonnage")} />
        <DetailRow label="Inhoud" value={data.inhoud} editable onEdit={() => onEdit?.("inhoud")} />
        <DetailRow label="Lengte" value={data.lengte} editable onEdit={() => onEdit?.("lengte")} />
        <DetailRow label="Breedte" value={data.breedte} editable onEdit={() => onEdit?.("breedte")} />
        <DetailRow label="Diepgang" value={data.diepgang} editable onEdit={() => onEdit?.("diepgang")} />
        <DetailRow label="Kruiphoogte" value={data.kruiphoogte} editable onEdit={() => onEdit?.("kruiphoogte")} />
        <DetailRow label="Bijzonderheden" type="badges" badges={data.bijzonderheden} editable onEdit={() => onEdit?.("bijzonderheden")} />
        <DetailRow label="Relatie" type="linked" value={data.relatie} onClick={() => navigate(`/crm/relatie/${data.relatieId}`)} />
        <DetailRow label="Contactpersoon" value={data.contactpersoon} />
      </DetailsSidebarSection>

      {/* Divider */}
      <div className="w-full h-px bg-rdj-border-secondary shrink-0 -mt-[8px]" />

      <DetailsSidebarSection>
        <DetailRow label="Eigenaar" type="user" value={data.eigenaar} avatarInitials={data.eigenaarInitials} />
        <DetailRow label="Deadline" value={data.deadline} editable onEdit={() => onEdit?.("deadline")} />
      </DetailsSidebarSection>
    </DetailsSidebar>
  );
}