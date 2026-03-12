import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import Sidebar from "../components/Sidebar";
import NegotiationDialog from "../components/NegotiationDialog";
import LadingEigenSidebar from "../components/LadingEigenSidebar";
import LadingMarktSidebar from "../components/LadingMarktSidebar";
import VaartuigEigenSidebar from "../components/VaartuigEigenSidebar";
import VaartuigMarktSidebar from "../components/VaartuigMarktSidebar";
import SectionHeader from "../components/SectionHeader";
import Table from "../components/Table";
import type { Column, RowData } from "../components/Table";
import Pagination from "../components/Pagination";
import Badge from "../components/Badge";
import ActivityFeed from "../components/ActivityFeed";
import svgPaths from "../../imports/svg-1tovr4micn";
import imgAvatar from "../../assets/a2737d3b5b234fc04041650cb9f114889c6859da.png";
import imgAvatar1 from "../../assets/3627de284acb374a4d9313b3c2dbaeeb87a48224.png";
import imgAvatar2 from "../../assets/e7809035038b3816de2a1d67c5de86ebeed325d0.png";
import imgAvatar3 from "../../assets/bf485cb6f98c12534c69bc81459ce34f2e24e4a8.png";
import Button from "../components/Button";
import { Send, MailOpen, Check, X } from "lucide-react";
import { usePijplijnLadingSummary, usePijplijnVaartuigSummary } from "../data/useDetailData";

/* ── Status variant map ── */
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

/* ── Mock data ── */
const mockNegotiationsLading = [
  { id: '1', company: 'Janson & Janson B.V.', vrachtprijs: '€3,40 per ton', priceDiff: '+10%', tonnage: '2.345 ton', deadline: 'Za 14 Feb, 16:00', deadlineExpired: true, status: 'Goedgekeurd', contact: 'Erick Nieuwkoop', contactDate: 'Ma 9 Feb 07:28' },
  { id: '2', company: 'De Vahrenburg C.V.', vrachtprijs: '€3,60 per ton', priceDiff: '-8%', tonnage: '3.678 ton', deadline: 'Gisteren, 9:00', deadlineExpired: true, status: 'Bod ontvangen', contact: 'Michiel den Hoe', contactDate: 'Di 10 Feb 19:53' },
  { id: '3', company: 'Rederij Alfa', vrachtprijs: '€3,70 per ton', priceDiff: '-8%', tonnage: '2.890 ton', deadline: 'Morgen, 10:00', deadlineExpired: false, status: 'Bod verstuurd', contact: 'Khoa Nguyen', contactDate: 'Zo 8 Feb 21:12' },
  { id: '4', company: 'Rederij Abel', vrachtprijs: '€3,20 per ton', priceDiff: '+6%', tonnage: '4.123 ton', deadline: 'Morgen, 11:00', deadlineExpired: false, status: 'Bod ontvangen', contact: 'Pelger de Jong', contactDate: 'Za 7 Feb 18:39' },
  { id: '5', company: 'Vaart Wel B.V.', vrachtprijs: '€3,90 per ton', priceDiff: '+4%', tonnage: '3.456 ton', deadline: 'Do 19 Feb, 11:16', deadlineExpired: false, status: 'Afgewezen', contact: 'Michiel den Hoe', contactDate: 'Vr 6 Feb 11:47' },
  { id: '6', company: 'Plano Shipping', vrachtprijs: '—', priceDiff: '', tonnage: '2.765 ton', deadline: 'Vr 20 Feb', deadlineExpired: false, status: 'Via werklijst', contact: 'Khoa Nguyen', contactDate: 'Wo 11 Feb 20:01' },
  { id: '7', company: 'De Blauwe Golf B.V.', vrachtprijs: '—', priceDiff: '', tonnage: '3.234 ton', deadline: 'Vr 20 Feb', deadlineExpired: false, status: 'Via werklijst', contact: 'Khoa Nguyen', contactDate: 'Do 5 Feb 16:22' },
];

const mockNegotiationsVaartuig = [
  { id: 'VN1', company: 'Provaart Logistics BV', cargo: '2.000 ton Houtpellets (DSIT)', vrachtprijs: '€3,50 per ton', laadHaven: 'Salzgitter Stichkanal', laadDatum: 'Ma 12 Jan 10:00', losHaven: 'Hamburg Veddelkanal', losDatum: 'Vr 16 Jan 14:00', deadline: 'Za 14 Feb, 16:00', deadlineExpired: true, status: 'Bod ontvangen', contact: 'Erick Nieuwkoop', contactDate: 'Ma 9 Feb 07:28' },
  { id: 'VN2', company: 'Janlow B.V.', cargo: '3.000 ton Houtpellets', vrachtprijs: '€3,00 per ton', laadHaven: 'Rotterdam Europoort', laadDatum: 'Do 15 Jan 08:00', losHaven: 'Mannheim', losDatum: 'Af te stemmen', deadline: 'Morgen, 10:00', deadlineExpired: false, status: 'Via werklijst', contact: 'Michiel den Hond', contactDate: 'Di 10 Feb 19:53' },
  { id: 'VN3', company: 'Cargill N.V.', cargo: '2.000 ton Koolraapzaad', vrachtprijs: '', laadHaven: 'Bremerhaven', laadDatum: 'Ma 19 Jan', losHaven: 'Duisburg', losDatum: 'Wo 21 Jan', deadline: 'Do 19 Feb, 11:15', deadlineExpired: false, status: 'Via werklijst', contact: 'Khoa Nguyen', contactDate: 'Zo 8 Feb 01:31' },
  { id: 'VN4', company: 'Rederij Abel', cargo: '1.500 ton Graan', vrachtprijs: '€2,80 per ton', laadHaven: 'Bremerhaven', laadDatum: 'Ma 19 Jan', losHaven: 'Duisburg', losDatum: 'Wo 21 Jan', deadline: 'Morgen, 11:00', deadlineExpired: false, status: 'Goedgekeurd', contact: 'Pelger de Jong', contactDate: 'Za 7 Feb 18:39' },
  { id: 'VN5', company: 'Vaart Wel B.V.', cargo: '2.500 ton Houtpellets', vrachtprijs: '€3,90 per ton', laadHaven: 'Rotterdam Europoort', laadDatum: 'Do 15 Jan 08:00', losHaven: 'Mannheim', losDatum: 'Ma 19 Jan', deadline: 'Do 19 Feb, 11:16', deadlineExpired: false, status: 'Afgewezen', contact: 'Michiel den Hoe', contactDate: 'Vr 6 Feb 11:47' },
];

/* Mock matches — for lading: matching vaartuigen, for vaartuig: matching ladingen */
const mockLadingMatches = [
  { id: 'M1', name: 'Aar', type: 'Motorschip', isEigen: false, company: 'Andermans B.V.', contactPersoon: 'Claas Alexiaan', location: 'Europahafen (Maassluis)', locationDate: 'Vanaf Ma 21 Dec', capacity: '3.519 mt', inhoud: '4.200 m³', matchPct: 92, source: 'Automatische feed', sourceDate: 'Do 5 Feb 12:44' },
  { id: 'M2', name: 'Agaat', type: 'Motorschip', isEigen: false, company: 'Markel Freight B.V.', contactPersoon: 'Richard Riverwoon', location: 'Maasvlakte', locationDate: 'Vanaf Ma 13 Jan', capacity: '2.085 mt', inhoud: '2.500 m³', matchPct: 85, source: 'Automatische feed', sourceDate: 'Do 5 Feb 12:44' },
  { id: 'M3', name: 'Adonai', type: 'Motorschip', isEigen: false, company: 'Buiten Onszelf N.V.', contactPersoon: 'Lisa Abraham', location: 'Maasvlakte', locationDate: 'Vanaf Ma 13 Jan', capacity: '3.865 mt', inhoud: '4.600 m³', matchPct: 78, source: 'Automatische feed', sourceDate: 'Do 5 Feb 12:44' },
  { id: 'M4', name: 'Emily', type: 'Motorschip', isEigen: true, company: 'Rederij de Jong', contactPersoon: 'Pieter de Jong', location: 'Waalhaven', locationDate: 'Vanaf Ma 12 Jan', capacity: '3.000 mt', inhoud: '3.600 m³', matchPct: 60, source: 'Rederij de Jong', sourceDate: 'Do 5 Feb 13:24' },
];

const mockVaartuigMatches = [
  { id: 'VM1', lading: '3.000 ton Houtpellets (DSIT)', isEigen: true, company: 'Rederij de Jong', contactPersoon: 'Pieter de Jong', laden: 'Salzgitter Stichkanal', ladenDatum: 'Ma 12 Jan 10:00', lossen: 'Hamburg Veddelkanal', lossenDatum: 'Vr 16 Jan 14:00', matchPct: 92, source: 'Rederij de Jong', sourceDate: 'Do 5 Feb 12:44' },
  { id: 'VM2', lading: '2.000 ton Koolraapzaad', isEigen: false, company: 'Agro Delta Groep', contactPersoon: 'Jaeger den Oud', laden: 'Rotterdam Europoort', ladenDatum: 'Do 15 Jan 08:00', lossen: 'Mannheim', lossenDatum: 'Ma 19 Jan', matchPct: 85, source: 'Automatische feed', sourceDate: 'Do 5 Feb 12:44' },
  { id: 'VM3', lading: '2.000 ton Houtpellets', isEigen: false, company: 'Provaart Logistics BV', contactPersoon: 'Frits van Dam', laden: 'Rotterdam Europoort', ladenDatum: 'Do 15 Jan 08:00', lossen: 'Mannheim', lossenDatum: 'Af te stemmen', matchPct: 78, source: 'Automatische feed', sourceDate: 'Do 5 Feb 13:24' },
];

export default function PijplijnDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'onderhandelingen' | 'matches' | 'activiteit'>('onderhandelingen');
  const [selectedNegotiationId, setSelectedNegotiationId] = useState<string | null>(null);
  const [negotiationFilter, setNegotiationFilter] = useState('Actieve onderhandelingen');
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  /* Pagination */
  const [negPage, setNegPage] = useState(1);
  const [negRowsPerPage, setNegRowsPerPage] = useState(50);
  const [matchPage, setMatchPage] = useState(1);
  const [matchRowsPerPage, setMatchRowsPerPage] = useState(50);

  // Detect entity type from route or state
  const entityTypeFromState = location.state?.entityType as "lading" | "vaartuig" | undefined;
  const isVaartuig = location.pathname.includes("/vaartuig/") || entityTypeFromState === "vaartuig";

  // Detect ownership from state
  const typeHint = location.state?.ladingType as "eigen" | "markt" | undefined;

  // Use appropriate summary hook
  const ladingSummary = usePijplijnLadingSummary(!isVaartuig ? id : undefined, typeHint);
  const vaartuigSummary = usePijplijnVaartuigSummary(isVaartuig ? id : undefined, typeHint);

  const summary = isVaartuig ? vaartuigSummary.data : ladingSummary.data;
  const detectedType = isVaartuig ? vaartuigSummary.detectedType : ladingSummary.detectedType;
  const summaryLoading = isVaartuig ? vaartuigSummary.loading : ladingSummary.loading;

  const avatars = [imgAvatar, imgAvatar1, imgAvatar2, imgAvatar3];

  // Check if we should open a specific negotiation after returning
  useEffect(() => {
    if (location.state?.openNegotiationId) {
      setSelectedNegotiationId(location.state.openNegotiationId);
    }
  }, [location.state]);

  // Status badge color mapping
  const statusBgMap: Record<string, string> = {
    '#17B26A': '#ECFDF3',
    '#F79009': '#FEF6EE',
    '#667085': '#F9FAFB',
  };

  /* ── Onderhandelingen table ── */
  const negColumnsLading: Column[] = [
    { key: 'company', header: 'Relatie', type: 'leading-text', actionLabel: 'Openen' },
    { key: 'vrachtprijs', header: 'Vrachtprijs', type: 'text', subtextKey: 'priceDiff', align: 'right', width: 'w-[160px]' },
    { key: 'tonnage', header: 'Tonnage', type: 'text', align: 'right', width: 'w-[120px]' },
    { key: 'deadline', header: 'Deadline', type: 'deadline', expiredKey: 'deadlineExpired', editable: true, width: 'w-[160px]' },
    { key: 'status', header: 'Status', type: 'status', variantKey: 'statusVariant', iconKey: 'statusIcon', typeKey: 'statusType', width: 'w-[160px]' },
    { key: 'contactName', header: 'Laatste update', type: 'text', subtextKey: 'contactDate', avatarSrcKey: 'contactAvatar', width: 'w-[200px]' },
  ];

  const negColumnsVaartuig: Column[] = [
    { key: 'company', header: 'Relatie', type: 'leading-text', subtextKey: 'cargo', actionLabel: 'Openen' },
    { key: 'vrachtprijs', header: 'Vrachtprijs', type: 'text', width: 'w-[140px]' },
    { key: 'laadHaven', header: 'Laden', type: 'text', subtextKey: 'laadDatum', width: 'w-[180px]' },
    { key: 'losHaven', header: 'Lossen', type: 'text', subtextKey: 'losDatum', width: 'w-[180px]' },
    { key: 'deadline', header: 'Deadline', type: 'deadline', expiredKey: 'deadlineExpired', editable: true, width: 'w-[160px]' },
    { key: 'status', header: 'Status', type: 'status', variantKey: 'statusVariant', iconKey: 'statusIcon', typeKey: 'statusType', width: 'w-[160px]' },
    { key: 'contactName', header: 'Laatste update', type: 'text', subtextKey: 'contactDate', avatarSrcKey: 'contactAvatar', width: 'w-[200px]' },
  ];

  const negColumns = isVaartuig ? negColumnsVaartuig : negColumnsLading;

  const negTableData: RowData[] = isVaartuig
    ? mockNegotiationsVaartuig.map((neg, idx) => ({
        id: neg.id,
        company: neg.company,
        cargo: neg.cargo,
        vrachtprijs: neg.vrachtprijs || '—',
        laadHaven: neg.laadHaven,
        laadDatum: neg.laadDatum,
        losHaven: neg.losHaven,
        losDatum: neg.losDatum,
        deadline: neg.deadline,
        deadlineExpired: neg.deadlineExpired,
        status: neg.status,
        statusVariant: statusVariantMap[neg.status] || 'grey',
        statusIcon: statusIconMap[neg.status] || null,
        statusType: statusTypeMap[neg.status] || 'default',
        contactName: neg.contact,
        contactDate: neg.contactDate,
        contactAvatar: avatars[idx % avatars.length],
      }))
    : mockNegotiationsLading.map((neg, idx) => ({
        id: neg.id,
        company: neg.company,
        vrachtprijs: neg.vrachtprijs,
        priceDiff: neg.priceDiff,
        tonnage: neg.tonnage,
        deadline: neg.deadline,
        deadlineExpired: neg.deadlineExpired,
        status: neg.status,
        statusVariant: statusVariantMap[neg.status] || 'grey',
        statusIcon: statusIconMap[neg.status] || null,
        statusType: statusTypeMap[neg.status] || 'default',
        contactName: neg.contact,
        contactDate: neg.contactDate,
        contactAvatar: avatars[idx % avatars.length],
      }));

  /* ── Matches table — depends on entity type ── */
  const sourceIcon = (
    <svg fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="8" cy="8" r="2" fill="currentColor"/>
    </svg>
  );

  const ladingMatchColumns: Column[] = [
    { key: 'name', header: 'Vaartuig', type: 'leading-text', subtextKey: 'type', badgeKey: 'eigenBadge', actionLabel: '+ Onderhandeling' },
    { key: 'company', header: 'Relatie', type: 'text', subtextKey: 'contactPersoon', textColor: 'text-rdj-text-brand', width: 'w-[180px]' },
    { key: 'location', header: 'Locatie', type: 'text', subtextKey: 'locationDate', width: 'w-[200px]' },
    { key: 'capacity', header: 'Groottonnage', type: 'text', align: 'right', width: 'w-[120px]' },
    { key: 'inhoud', header: 'Inhoud', type: 'text', align: 'right', width: 'w-[100px]' },
    { key: 'source', header: 'Bron', type: 'text', subtextKey: 'sourceDate', featuredIconKey: 'sourceIcon', featuredIconVariantKey: 'sourceIconVariant', width: 'w-[180px]' },
    { key: 'matchPct', header: 'Match', type: 'progress', align: 'right', width: 'w-[100px]' },
  ];

  const ladingMatchData: RowData[] = mockLadingMatches.map(m => ({
    id: m.id,
    name: m.name,
    type: m.type,
    eigenBadge: m.isEigen ? undefined : 'Markt',
    company: m.company,
    contactPersoon: m.contactPersoon,
    location: m.location,
    locationDate: m.locationDate,
    capacity: m.capacity,
    inhoud: m.inhoud,
    source: m.source,
    sourceDate: m.sourceDate,
    sourceIcon: sourceIcon,
    sourceIconVariant: 'grey',
    matchPct: m.matchPct,
  }));

  const vaartuigMatchColumns: Column[] = [
    { key: 'lading', header: 'Lading', type: 'leading-text', badgeKey: 'eigenBadge', actionLabel: '+ Onderhandeling' },
    { key: 'company', header: 'Relatie', type: 'text', subtextKey: 'contactPersoon', textColor: 'text-rdj-text-brand', width: 'w-[180px]' },
    { key: 'laden', header: 'Laden', type: 'text', subtextKey: 'ladenDatum', width: 'w-[180px]' },
    { key: 'lossen', header: 'Lossen', type: 'text', subtextKey: 'lossenDatum', width: 'w-[180px]' },
    { key: 'source', header: 'Bron', type: 'text', subtextKey: 'sourceDate', featuredIconKey: 'sourceIcon', featuredIconVariantKey: 'sourceIconVariant', width: 'w-[180px]' },
    { key: 'matchPct', header: 'Match', type: 'progress', align: 'right', width: 'w-[100px]' },
  ];

  const vaartuigMatchData: RowData[] = mockVaartuigMatches.map(m => ({
    id: m.id,
    lading: m.lading,
    eigenBadge: m.isEigen ? undefined : 'Markt',
    company: m.company,
    contactPersoon: m.contactPersoon,
    laden: m.laden,
    ladenDatum: m.ladenDatum,
    lossen: m.lossen,
    lossenDatum: m.lossenDatum,
    source: m.source,
    sourceDate: m.sourceDate,
    sourceIcon: sourceIcon,
    sourceIconVariant: 'grey',
    matchPct: m.matchPct,
  }));

  const matchColumns = isVaartuig ? vaartuigMatchColumns : ladingMatchColumns;
  const matchData = isVaartuig ? vaartuigMatchData : ladingMatchData;

  /* ── Determine correct sidebar ── */
  const renderSidebar = () => {
    if (isVaartuig) {
      return detectedType === 'markt'
        ? <VaartuigMarktSidebar id={id!} />
        : <VaartuigEigenSidebar id={id!} />;
    }
    return detectedType === 'markt'
      ? <LadingMarktSidebar id={id!} />
      : <LadingEigenSidebar id={id!} />;
  };

  /* ── Back path ── */
  const backPath = isVaartuig ? '/markt/pijplijn/vaartuigen' : '/markt/pijplijn/ladingen';

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          {/* Page Header */}
          <div className="border-b border-[#eaecf0] px-[32px] py-[24px]">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-[8px] mb-[20px]">
              <button 
                onClick={() => navigate(backPath)}
                className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover"
              >
                <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Markt</p>
              </button>
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                  <div className="absolute inset-[-8.33%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
                      <path d={svgPaths.p3ec8f700} stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate(backPath)}
                className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0 hover:bg-rdj-bg-primary-hover"
              >
                <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Pijplijn</p>
              </button>
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                  <div className="absolute inset-[-8.33%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
                      <path d={svgPaths.p3ec8f700} stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0">
                <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">
                  {summaryLoading ? '...' : (summary?.title?.split(' - ')[0]?.substring(0, 20) || id)}
                </p>
              </div>
            </div>

            {/* Title and Status */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-[12px] mb-[4px]">
                  <p className="font-sans font-bold leading-[32px] text-[#101828] text-[24px]">
                    {summaryLoading ? 'Laden...' : (summary?.title || '—')}
                  </p>
                  {summary && (
                    <div className="content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: statusBgMap[summary.statusColor] || '#F9FAFB' }}>
                      <div className="relative shrink-0 size-[8px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" fill={summary.statusColor} r="4" />
                        </svg>
                      </div>
                      <p className="font-sans font-bold leading-[18px] relative shrink-0 text-[12px] text-center whitespace-nowrap" style={{ color: summary.statusColor }}>
                        {summary.status}
                      </p>
                    </div>
                  )}
                </div>
                <p className="font-sans font-normal leading-[24px] text-[#475467] text-[16px]">
                  {summaryLoading ? '' : (summary?.loadSummary || '')}
                </p>
              </div>
              <button className="bg-white relative rounded-[6px] shrink-0 hover:opacity-80">
                <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
                  <p className="font-sans font-bold leading-[20px] text-[#d92d20] text-[14px] whitespace-nowrap">
                    Uit de markt halen
                  </p>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d92d20] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#eaecf0] mt-[20px] -mb-px">
              <div className="flex gap-[12px]">
                <button onClick={() => setActiveTab('onderhandelingen')} className="relative pb-[12px] flex items-center gap-[8px]">
                  {activeTab === 'onderhandelingen' && <div className="absolute border-[#1567a4] border-b-2 border-solid inset-x-0 bottom-0 pointer-events-none" />}
                  <p className={`font-sans font-bold leading-[20px] text-[14px] ${activeTab === 'onderhandelingen' ? 'text-[#145990]' : 'text-[#667085]'}`}>
                    Onderhandelingen
                  </p>
                  <Badge label={String(negTableData.length)} variant="brand" type={activeTab === 'onderhandelingen' ? 'color' : 'default'} />
                </button>
                <button onClick={() => setActiveTab('matches')} className="relative pb-[12px] flex items-center gap-[8px]">
                  {activeTab === 'matches' && <div className="absolute border-[#1567a4] border-b-2 border-solid inset-x-0 bottom-0 pointer-events-none" />}
                  <p className={`font-sans font-bold leading-[20px] text-[14px] ${activeTab === 'matches' ? 'text-[#145990]' : 'text-[#667085]'}`}>
                    Matches
                  </p>
                  <Badge label={String(matchData.length)} variant="brand" type={activeTab === 'matches' ? 'color' : 'default'} />
                </button>
                <button onClick={() => setActiveTab('activiteit')} className="relative pb-[12px]">
                  {activeTab === 'activiteit' && <div className="absolute border-[#1567a4] border-b-2 border-solid inset-x-0 bottom-0 pointer-events-none" />}
                  <p className={`font-sans font-bold leading-[20px] text-[14px] ${activeTab === 'activiteit' ? 'text-[#145990]' : 'text-[#667085]'}`}>
                    Activiteit
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto px-[32px] py-[24px]">
            {activeTab === 'onderhandelingen' && (
              <>
                <SectionHeader
                  title="Onderhandelingen"
                  filterLabel={negotiationFilter}
                  filterOptions={['Actieve onderhandelingen', 'Alle onderhandelingen', 'Goedgekeurd', 'Afgewezen']}
                  filterValue={negotiationFilter}
                  onFilterChange={setNegotiationFilter}
                  onAdd={() => navigate(`/markt/pijplijn/${isVaartuig ? 'vaartuig/' : ''}${id}/nieuweonderhandeling`)}
                  addTooltip="Nieuwe onderhandeling"
                />
                <Pagination
                  currentPage={negPage}
                  totalItems={negTableData.length}
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

            {activeTab === 'matches' && (
              <>
                <SectionHeader title="Matches" />
                <Pagination
                  currentPage={matchPage}
                  totalItems={matchData.length}
                  rowsPerPage={matchRowsPerPage}
                  onPageChange={setMatchPage}
                  onRowsPerPageChange={setMatchRowsPerPage}
                />
                <Table
                  columns={matchColumns}
                  data={matchData}
                  hoveredRowId={hoveredRow}
                  onRowHover={setHoveredRow}
                  onRowClick={() => {}}
                />
              </>
            )}

            {activeTab === 'activiteit' && (
              <ActivityFeed />
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        {renderSidebar()}

        {/* Negotiation Sidebar - overlays on top */}
        {selectedNegotiationId && (
          <NegotiationDialog
            negotiationId={selectedNegotiationId}
            onClose={() => setSelectedNegotiationId(null)}
          />
        )}
      </div>
    </div>
  );
}