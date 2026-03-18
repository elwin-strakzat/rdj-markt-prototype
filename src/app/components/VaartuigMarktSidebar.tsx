import { useState } from "react";
import { useNavigate } from "react-router";
import DetailsSidebar, { DetailsSidebarSection } from "./DetailsSidebar";
import DetailRow from "./DetailRow";
import Button from "./Button";
import { useVaartuigMarktDetail } from "../data/useDetailData";
import { RotateCcw } from "lucide-react";

/**
 * VaartuigMarktSidebar — detail sidebar for a markt-vaartuig.
 * Flow: Inbox → Pijplijn
 *
 * Has "Reset naar bron" button since it originates from the inbox.
 *
 * Details tab: beschikbaar vanaf, huidige locatie, ENI, vlag, meetbrief,
 * groottonnage, inhoud, lengte, breedte, diepgang, kruiphoogte,
 * bijzonderheden, bron, relatie, contactpersoon.
 * Separated by divider: eigenaar, prioriteit.
 */

interface VaartuigMarktSidebarProps {
  id: string;
  onEdit?: (field: string) => void;
  onResetToBron?: () => void;
}

export default function VaartuigMarktSidebar({ id, onEdit, onResetToBron }: VaartuigMarktSidebarProps) {
  const navigate = useNavigate();
  const { data, loading, error } = useVaartuigMarktDetail(id);
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

  const stars = Array.from({ length: 5 }, (_, i) => i < data.prioriteit);

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
          value={stars.map((filled) => filled ? "★" : "☆").join("")}
          editable
          onEdit={() => onEdit?.("prioriteit")}
        />
      </DetailsSidebarSection>

      {/* Reset naar bron button */}
      <div className="w-full shrink-0 pb-[16px]">
        <Button
          variant="secondary"
          label="Reset naar bron"
          leadingIcon={<RotateCcw size={16} strokeWidth={2} />}
          onClick={onResetToBron}
          className="w-full justify-center"
        />
      </div>
    </DetailsSidebar>
  );
}
