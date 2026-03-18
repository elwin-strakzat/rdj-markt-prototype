import { useState } from "react";
import { Send, MailOpen, Check, X } from "lucide-react";
import ModelessPanel from "./ModelessPanel";
import type { PageTab } from "./PageHeader";
import Badge from "./Badge";
import Table from "./Table";
import type { Column, RowData } from "./Table";
import Pagination from "./Pagination";
import Button from "./Button";
import ActivityFeed from "./ActivityFeed";
import NegotiationDialog from "./NegotiationDialog";
import { DetailsSidebarSection } from "./DetailsSidebar";
import DetailRow from "./DetailRow";
import { useBevrachtingVaartuigSummary, useVaartuigEigenDetail, useVaartuigMarktDetail } from "../data/useDetailData";
import svgPaths from "../../imports/svg-62fj7rjvas";
import imgAvatar from "../../assets/a2737d3b5b234fc04041650cb9f114889c6859da.png";
import imgAvatar1 from "../../assets/3627de284acb374a4d9313b3c2dbaeeb87a48224.png";
import imgAvatar2 from "../../assets/e7809035038b3816de2a1d67c5de86ebeed325d0.png";
import imgAvatar3 from "../../assets/bf485cb6f98c12534c69bc81459ce34f2e24e4a8.png";
import imgAvatar4 from "../../assets/9e45f45f537bea4bf653bc0307471e5ff5545f63.png";

/* ── Mock vessel matches ── */
const vesselMatches = [
  { id: 'VM001', cargo: '3.000 ton Houtpellets (DSIT)', company: 'Rederij de Jong', contactPersoon: 'Pieter de Jong', laadHaven: 'Salzgitter Stichkanal', laadDatum: 'Ma 12 Jan 10:00', losHaven: 'Hamburg Veddelkanal', losDatum: 'Vr 16 Jan 14:00', matchPercentage: 92, isEigen: true, source: 'Rederij de Jong', sourceDate: 'Do 5 Feb 12:44' },
  { id: 'VM002', cargo: '2.000 ton Koolraapzaad', company: 'Agro Delta Groep', contactPersoon: 'Jaeger den Oud', laadHaven: 'Rotterdam Europoort', laadDatum: 'Do 15 Jan 08:00', losHaven: 'Mannheim', losDatum: 'Ma 19 Jan', matchPercentage: 85, isEigen: false, source: 'Automatische feed', sourceDate: 'Do 5 Feb 12:44' },
  { id: 'VM003', cargo: '2.000 ton Houtpellets', company: 'Provaart Logistics BV', contactPersoon: 'Frits van Dam', laadHaven: 'Rotterdam Europoort', laadDatum: 'Do 15 Jan 08:00', losHaven: 'Mannheim', losDatum: 'Af te stemmen', matchPercentage: 78, isEigen: false, source: 'Automatische feed', sourceDate: 'Do 5 Feb 13:24' },
  { id: 'VM004', cargo: '1.500 ton Graan', company: 'Cargill N.V.', contactPersoon: 'Lisa Abraham', laadHaven: 'Bremerhaven', laadDatum: 'Ma 19 Jan', losHaven: 'Duisburg', losDatum: 'Wo 21 Jan', matchPercentage: 65, isEigen: false, source: 'Automatische feed', sourceDate: 'Vr 6 Feb 09:01' },
];

/* ── Mock negotiations ── */
const vesselNegotiations = [
  { id: 'VN001', company: 'Provaart Logistics BV', cargo: '2.000 ton Houtpellets (DSIT)', price: '€3,50 per ton', laadHaven: 'Salzgitter Stichkanal', laadDatum: 'Ma 12 Jan 10:00', losHaven: 'Hamburg Veddelkanal', losDatum: 'Vr 16 Jan 14:00', deadline: 'Za 14 Feb, 16:00', deadlineExpired: true, status: 'Bod ontvangen', contact: { name: 'Erick Nieuwkoop', date: 'Ma 9 Feb 07:28' } },
  { id: 'VN002', company: 'Janlow B.V.', cargo: '3.000 ton Houtpellets', price: '€3,00 per ton', laadHaven: 'Rotterdam Europoort', laadDatum: 'Do 15 Jan 08:00', losHaven: 'Mannheim', losDatum: 'Af te stemmen', deadline: 'Morgen, 10:00', deadlineExpired: false, status: 'Via werklijst', contact: { name: 'Michiel den Hond', date: 'Di 10 Feb 19:53' } },
  { id: 'VN003', company: 'Cargill N.V.', cargo: '2.000 ton Koolraapzaad', price: '', laadHaven: 'Bremerhaven', laadDatum: 'Ma 19 Jan', losHaven: 'Duisburg', losDatum: 'Wo 21 Jan', deadline: 'Do 19 Feb, 11:15', deadlineExpired: false, status: 'Via werklijst', contact: { name: 'Khoa Nguyen', date: 'Zo 8 Feb 01:31' } },
];

const statusVariantMap: Record<string, string> = {
  "Via werklijst": "brand",
  "Bod verstuurd": "brand",
  "Bod ontvangen": "brand",
  "Goedgekeurd": "success",
  "Afgewezen": "error",
  "Afgekeurd": "error",
};

const statusIconMap: Record<string, React.ReactNode | null> = {
  "Via werklijst": null,
  "Bod verstuurd": <Send strokeWidth={2.5} />,
  "Bod ontvangen": <MailOpen strokeWidth={2.5} />,
  "Goedgekeurd": <Check strokeWidth={2.5} />,
  "Afgewezen": <X strokeWidth={2.5} />,
  "Afgekeurd": <X strokeWidth={2.5} />,
};

const statusTypeMap: Record<string, "default" | "color"> = {
  "Via werklijst": "default",
  "Bod verstuurd": "color",
  "Bod ontvangen": "color",
  "Goedgekeurd": "color",
  "Afgewezen": "color",
  "Afgekeurd": "color",
};

interface VaartuigDetailPanelProps {
  id: string;
  onClose: () => void;
}

export default function VaartuigDetailPanel({ id, onClose }: VaartuigDetailPanelProps) {
  const [activeTab, setActiveTab] = useState<'matches' | 'onderhandelingen' | 'activiteit'>('matches');
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [selectedNegotiationId, setSelectedNegotiationId] = useState<string | null>(null);

  const [matchPage, setMatchPage] = useState(1);
  const [matchRowsPerPage, setMatchRowsPerPage] = useState(50);
  const [negPage, setNegPage] = useState(1);
  const [negRowsPerPage, setNegRowsPerPage] = useState(50);

  const { data: summary, detectedType, loading: summaryLoading } = useBevrachtingVaartuigSummary(id);
  const avatars = [imgAvatar, imgAvatar1, imgAvatar2, imgAvatar3, imgAvatar4];

  const titleBadge = summary ? (
    <Badge label={summary.status} variant={summary.statusVariant} size="lg" dot />
  ) : null;

  const tabs: PageTab[] = [
    { label: 'Matches', path: '#matches', isActive: activeTab === 'matches', badge: String(vesselMatches.length) },
    { label: 'Onderhandelingen', path: '#onderhandelingen', isActive: activeTab === 'onderhandelingen', badge: String(vesselNegotiations.length) },
    { label: 'Activiteit', path: '#activiteit', isActive: activeTab === 'activiteit' },
  ];

  const matchColumns: Column[] = [
    { key: 'cargo', header: 'Lading', type: 'leading-text', badgeKey: 'eigenBadge', actionLabel: '+ Onderhandeling' },
    { key: 'company', header: 'Relatie', type: 'text', subtextKey: 'contactPersoon', textColor: 'text-rdj-text-brand', width: 'w-[160px]' },
    { key: 'laadHaven', header: 'Laden', type: 'text', subtextKey: 'laadDatum', width: 'w-[160px]' },
    { key: 'losHaven', header: 'Lossen', type: 'text', subtextKey: 'losDatum', width: 'w-[160px]' },
    { key: 'matchPercentage', header: 'Match', type: 'progress', align: 'right', width: 'w-[100px]' },
  ];

  const sourceIcon = (
    <svg fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="8" cy="8" r="2" fill="currentColor"/>
    </svg>
  );

  const matchTableData: RowData[] = vesselMatches.map((m) => ({
    id: m.id,
    cargo: m.cargo,
    eigenBadge: m.isEigen ? undefined : 'Markt',
    company: m.company,
    contactPersoon: m.contactPersoon,
    laadHaven: m.laadHaven,
    laadDatum: m.laadDatum,
    losHaven: m.losHaven,
    losDatum: m.losDatum,
    source: m.source,
    sourceDate: m.sourceDate,
    sourceIcon: sourceIcon,
    sourceIconVariant: 'grey',
    matchPercentage: m.matchPercentage,
  }));

  const negColumns: Column[] = [
    { key: 'company', header: 'Relatie', type: 'leading-text', subtextKey: 'cargo', actionLabel: 'Openen' },
    { key: 'freightPrice', header: 'Vrachtprijs', type: 'text', width: 'w-[120px]' },
    { key: 'laadHaven', header: 'Laden', type: 'text', subtextKey: 'laadDatum', width: 'w-[160px]' },
    { key: 'losHaven', header: 'Lossen', type: 'text', subtextKey: 'losDatum', width: 'w-[160px]' },
    { key: 'deadline', header: 'Deadline', type: 'deadline', expiredKey: 'deadlineExpired', editable: true, width: 'w-[140px]' },
    { key: 'status', header: 'Status', type: 'status', variantKey: 'statusVariant', iconKey: 'statusIcon', typeKey: 'statusType', width: 'w-[140px]' },
  ];

  const negTableData: RowData[] = vesselNegotiations.map((b, idx) => ({
    id: b.id,
    company: b.company,
    cargo: b.cargo,
    freightPrice: b.price || '—',
    laadHaven: b.laadHaven,
    laadDatum: b.laadDatum,
    losHaven: b.losHaven,
    losDatum: b.losDatum,
    deadline: b.deadline,
    deadlineExpired: b.deadlineExpired,
    status: b.status,
    statusVariant: statusVariantMap[b.status] || 'grey',
    statusIcon: statusIconMap[b.status] || null,
    statusType: statusTypeMap[b.status] || 'default',
    contactName: b.contact.name,
    contactDate: b.contact.date,
    contactAvatar: avatars[idx % avatars.length],
  }));

  const actions = (
    <>
      <Button
        variant="secondary"
        label="Uit markt halen"
        leadingIcon={
          <svg fill="none" viewBox="-0.5 -0.5 12.5 12.5">
            <path d={svgPaths.p3f40eb80} stroke="#B42318" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        }
        className="[&_p]:!text-[#b42318] [&_svg_path]:!stroke-[#b42318] [&_div>div]:!size-[12px] [&_div]:!gap-[2px]"
      />
      <Button variant="primary" label="Bewerken" />
    </>
  );

  /* Sidebar content (without the DetailsSidebar wrapper since ModelessPanel provides the container) */
  const sidebarContent = detectedType === 'markt'
    ? <VaartuigMarktSidebarContent id={id} />
    : <VaartuigEigenSidebarContent id={id} />;

  return (
    <>
      <ModelessPanel
        title={summaryLoading ? "Laden..." : (summary?.title || "—")}
        subtitle={
          summaryLoading ? undefined : (
            <span className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px]">
              {summary?.subtitle || ""}
            </span>
          )
        }
        onClose={onClose}
        sidebar={sidebarContent}
      >
        <div className="flex flex-col px-[24px] py-[16px]">
          {/* Status badge */}
          {titleBadge && (
            <div className="mb-[16px]">
              {titleBadge}
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-[4px] border-b border-rdj-border-secondary mb-[16px]">
            {tabs.map((tab) => (
              <button
                key={tab.path}
                onClick={() => {
                  const tabKey = tab.path.replace('#', '') as 'matches' | 'onderhandelingen' | 'activiteit';
                  setActiveTab(tabKey);
                }}
                className={`flex items-center gap-[8px] px-[12px] py-[10px] text-[14px] font-sans font-bold leading-[20px] relative ${
                  tab.isActive
                    ? 'text-rdj-text-brand'
                    : 'text-rdj-text-tertiary hover:text-rdj-text-secondary'
                }`}
              >
                {tab.label}
                {tab.badge && (
                  <span className={`text-[12px] font-bold px-[6px] py-[1px] rounded-full ${
                    tab.isActive ? 'bg-rdj-bg-brand text-rdj-text-brand' : 'bg-rdj-bg-secondary text-rdj-text-tertiary'
                  }`}>
                    {tab.badge}
                  </span>
                )}
                {tab.isActive && (
                  <div className="absolute bottom-0 left-[12px] right-[12px] h-[2px] bg-rdj-text-brand rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'matches' && (
            <>
              <Pagination
                currentPage={matchPage}
                totalItems={vesselMatches.length}
                rowsPerPage={matchRowsPerPage}
                onPageChange={setMatchPage}
                onRowsPerPageChange={setMatchRowsPerPage}
              />
              <Table
                columns={matchColumns}
                data={matchTableData}
                hoveredRowId={hoveredRow}
                onRowHover={setHoveredRow}
                onRowClick={() => {}}
              />
            </>
          )}

          {activeTab === 'onderhandelingen' && (
            <>
              <Pagination
                currentPage={negPage}
                totalItems={vesselNegotiations.length}
                rowsPerPage={negRowsPerPage}
                onPageChange={setNegPage}
                onRowsPerPageChange={setNegRowsPerPage}
              />
              <Table
                columns={negColumns}
                data={negTableData}
                hoveredRowId={hoveredRow}
                onRowHover={setHoveredRow}
                onRowClick={(row) => setSelectedNegotiationId(row.id)}
              />
            </>
          )}

          {activeTab === 'activiteit' && (
            <div className="w-full">
              <ActivityFeed />
            </div>
          )}
        </div>
      </ModelessPanel>

      {/* Negotiation dialog on top */}
      {selectedNegotiationId && (
        <NegotiationDialog
          negotiationId={selectedNegotiationId}
          onClose={() => setSelectedNegotiationId(null)}
        />
      )}
    </>
  );
}

/* ── Inline sidebar content components (renders content without DetailsSidebar wrapper) ── */

function VaartuigEigenSidebarContent({ id }: { id: string }) {
  const { data, loading, error } = useVaartuigEigenDetail(id);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-[40px] w-full">
        <p className="font-sans font-normal leading-[20px] text-rdj-text-tertiary text-[14px]">Laden...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center py-[40px] w-full">
        <p className="font-sans font-normal leading-[20px] text-rdj-text-tertiary text-[14px]">{error || "Geen data gevonden"}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[16px] p-[24px] pt-[16px]">
      <DetailsSidebarSection>
        <DetailRow label="Beschikbaar vanaf" value={data.beschikbaarVanaf} editable />
        <DetailRow label="Huidige locatie" value={data.huidigeLocatie} editable />
        <DetailRow label="ENI" value={data.eni} editable />
        <DetailRow label="Vlag" value={data.vlag} editable />
        <DetailRow label="Meetbrief" value={data.meetbrief} editable />
        <DetailRow label="Groottonnage" value={data.groottonnage} editable />
        <DetailRow label="Inhoud" value={data.inhoud} editable />
        <DetailRow label="Lengte" value={data.lengte} editable />
        <DetailRow label="Breedte" value={data.breedte} editable />
        <DetailRow label="Diepgang" value={data.diepgang} editable />
        <DetailRow label="Kruiphoogte" value={data.kruiphoogte} editable />
        <DetailRow label="Bijzonderheden" type="badges" badges={data.bijzonderheden} editable />
        <DetailRow label="Relatie" type="linked" value={data.relatie} />
        <DetailRow label="Contactpersoon" value={data.contactpersoon} />
      </DetailsSidebarSection>
      <div className="w-full h-px bg-rdj-border-secondary shrink-0" />
      <DetailsSidebarSection>
        <DetailRow label="Eigenaar" type="user" value={data.eigenaar} avatarInitials={data.eigenaarInitials} />
        <DetailRow label="Deadline" value={data.deadline} editable />
      </DetailsSidebarSection>
    </div>
  );
}

function VaartuigMarktSidebarContent({ id }: { id: string }) {
  const { data, loading, error } = useVaartuigMarktDetail(id);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-[40px] w-full">
        <p className="font-sans font-normal leading-[20px] text-rdj-text-tertiary text-[14px]">Laden...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center py-[40px] w-full">
        <p className="font-sans font-normal leading-[20px] text-rdj-text-tertiary text-[14px]">{error || "Geen data gevonden"}</p>
      </div>
    );
  }

  const stars = Array.from({ length: 5 }, (_, i) => i < data.prioriteit);

  return (
    <div className="flex flex-col gap-[16px] p-[24px] pt-[16px]">
      <DetailsSidebarSection>
        <DetailRow label="Beschikbaar vanaf" value={data.beschikbaarVanaf} editable />
        <DetailRow label="Huidige locatie" value={data.huidigeLocatie} editable />
        <DetailRow label="ENI" value={data.eni} editable />
        <DetailRow label="Vlag" value={data.vlag} editable />
        <DetailRow label="Meetbrief" value={data.meetbrief} editable />
        <DetailRow label="Groottonnage" value={data.groottonnage} editable />
        <DetailRow label="Inhoud" value={data.inhoud} editable />
        <DetailRow label="Lengte" value={data.lengte} editable />
        <DetailRow label="Breedte" value={data.breedte} editable />
        <DetailRow label="Diepgang" value={data.diepgang} editable />
        <DetailRow label="Kruiphoogte" value={data.kruiphoogte} editable />
        <DetailRow label="Bijzonderheden" type="badges" badges={data.bijzonderheden} editable />
        <DetailRow label="Bron" type="linked" value={data.bron} subtext={data.bronDatum} />
        <DetailRow label="Relatie" type="linked" value={data.relatie} />
        <DetailRow label="Contactpersoon" value={data.contactpersoon} />
      </DetailsSidebarSection>
      <div className="w-full h-px bg-rdj-border-secondary shrink-0" />
      <DetailsSidebarSection>
        <DetailRow label="Eigenaar" type="user" value={data.eigenaar} avatarInitials={data.eigenaarInitials} />
        <DetailRow label="Prioriteit" value={stars.map((filled) => filled ? "★" : "☆").join("")} editable />
      </DetailsSidebarSection>
    </div>
  );
}
