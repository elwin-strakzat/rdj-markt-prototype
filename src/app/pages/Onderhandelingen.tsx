import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { Send, MailOpen, Check, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import SegmentedButtonGroup from "../components/SegmentedButtonGroup";
import FilterDropdown from "../components/FilterDropdown";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import type { Column } from "../components/Table";
import Button from "../components/Button";
import NegotiationDialog from "../components/NegotiationDialog";
import svgPaths from "../../imports/svg-q07ncv0e2v";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";

/* ── Status badge mapping ── */
const statusVariantMap: Record<string, string> = {
  "Via werklijst": "brand",
  "Bod verstuurd": "brand",
  "Bod ontvangen": "brand",
  "Goedgekeurd": "success",
  "Afgewezen": "error",
};

const statusIconMap: Record<string, React.ReactNode | null> = {
  "Via werklijst": null,
  "Bod verstuurd": <Send strokeWidth={2.5} />,
  "Bod ontvangen": <MailOpen strokeWidth={2.5} />,
  "Goedgekeurd": <Check strokeWidth={2.5} />,
  "Afgewezen": <X strokeWidth={2.5} />,
};

const statusTypeMap: Record<string, "default" | "color"> = {
  "Via werklijst": "default",
  "Bod verstuurd": "color",
  "Bod ontvangen": "color",
  "Goedgekeurd": "color",
  "Afgewezen": "color",
};

/** Filter groups: "actief" = Via werklijst + Bod ontvangen + Bod verstuurd */
const activeStatuses = ["Via werklijst", "Bod ontvangen", "Bod verstuurd"];

/* ── Mock data for Ladingen-tab ── */
const mockLadingenOnderhandelingen = [
  {
    id: "ond-l-1",
    ladingLabel: "1.200 t Grind",
    ladingBadge: undefined as string | undefined,
    ladingSubtext: "Ex Eur-01 · SP-001",
    vaartuig: "MS Adriana",
    vrachtprijs: "€ 8,50 /t",
    vrachtprijsDiff: "+4,2%",
    relatie: "Rederij de Jong",
    laadHaven: "Rotterdam",
    laadDatum: "15 jan 2026, 08:00",
    losHaven: "Antwerpen",
    losDatum: "16 jan 2026, 14:00",
    deadline: "17 jan 2026",
    status: "Bod verstuurd",
    updateUser: "",
    updateUserInitials: "KN",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "14 jan 2026, 16:32",
    bron: "eigen",
  },
  {
    id: "ond-l-2",
    ladingLabel: "850 t Zand",
    ladingBadge: "Markt" as string | undefined,
    ladingSubtext: "",
    vaartuig: "MS De Hoop",
    vrachtprijs: "€ 7,20 /t",
    vrachtprijsDiff: "-2,1%",
    relatie: "Rijn Transport BV",
    laadHaven: "Duisburg",
    laadDatum: "18 jan 2026, 06:00",
    losHaven: "Dordrecht",
    losDatum: "19 jan 2026, 10:00",
    deadline: "20 jan 2026",
    status: "Bod ontvangen",
    updateUser: "",
    updateUserInitials: "PJ",
    updateUserAvatar: undefined as string | undefined,
    updateDate: "13 jan 2026, 09:15",
    bron: "markt",
  },
  {
    id: "ond-l-3",
    ladingLabel: "2.000 t Steenkool",
    ladingBadge: undefined as string | undefined,
    ladingSubtext: "Ex Eur-02 · SP-003",
    vaartuig: "MS Fortuna",
    vrachtprijs: "€ 9,10 /t",
    vrachtprijsDiff: "+1,8%",
    relatie: "Rederij de Jong",
    laadHaven: "Amsterdam",
    laadDatum: "20 jan 2026, 07:00",
    losHaven: "Gent",
    losDatum: "21 jan 2026, 15:00",
    deadline: "22 jan 2026",
    status: "Goedgekeurd",
    updateUser: "",
    updateUserInitials: "MH",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "15 jan 2026, 11:45",
    bron: "eigen",
  },
  {
    id: "ond-l-4",
    ladingLabel: "600 t Mais",
    ladingBadge: "Markt" as string | undefined,
    ladingSubtext: "",
    vaartuig: "MS Catharina",
    vrachtprijs: "€ 11,00 /t",
    vrachtprijsDiff: "-5,3%",
    relatie: "Schippers & Co",
    laadHaven: "Terneuzen",
    laadDatum: "22 jan 2026, 09:00",
    losHaven: "Luik",
    losDatum: "23 jan 2026, 12:00",
    deadline: "24 jan 2026",
    status: "Afgewezen",
    updateUser: "",
    updateUserInitials: "EN",
    updateUserAvatar: undefined as string | undefined,
    updateDate: "16 jan 2026, 14:20",
    bron: "markt",
  },
  {
    id: "ond-l-5",
    ladingLabel: "1.500 t Klinker",
    ladingBadge: undefined as string | undefined,
    ladingSubtext: "Ex Eur-03 · SP-005",
    vaartuig: "MS Orion",
    vrachtprijs: "€ 10,25 /t",
    vrachtprijsDiff: "+2,5%",
    relatie: "Rederij de Jong",
    laadHaven: "Nijmegen",
    laadDatum: "25 jan 2026, 06:30",
    losHaven: "Rotterdam",
    losDatum: "25 jan 2026, 18:00",
    deadline: "26 jan 2026",
    status: "Bod verstuurd",
    updateUser: "",
    updateUserInitials: "FJ",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "17 jan 2026, 08:00",
    bron: "eigen",
  },
  {
    id: "ond-l-6",
    ladingLabel: "900 t Graan",
    ladingBadge: "Markt" as string | undefined,
    ladingSubtext: "",
    vaartuig: "MS Petronella",
    vrachtprijs: "€ 6,80 /t",
    vrachtprijsDiff: "-1,0%",
    relatie: "Noord-Zuid Bevrachting",
    laadHaven: "Mannheim",
    laadDatum: "28 jan 2026, 07:00",
    losHaven: "Vlissingen",
    losDatum: "30 jan 2026, 09:00",
    deadline: "31 jan 2026",
    status: "Bod ontvangen",
    updateUser: "",
    updateUserInitials: "KN",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "18 jan 2026, 10:10",
    bron: "markt",
  },
  {
    id: "ond-l-7",
    ladingLabel: "1.800 t Houtpellets",
    ladingBadge: undefined as string | undefined,
    ladingSubtext: "Ex Eur-04 · SP-007",
    vaartuig: "—",
    vrachtprijs: "—",
    vrachtprijsDiff: "",
    relatie: "Rederij de Jong",
    laadHaven: "Rotterdam",
    laadDatum: "2 feb 2026, 10:00",
    losHaven: "Hamburg",
    losDatum: "5 feb 2026, 08:00",
    deadline: "1 feb 2026",
    status: "Via werklijst",
    updateUser: "",
    updateUserInitials: "KN",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "19 jan 2026, 14:30",
    bron: "eigen",
  },
];

/* ── Mock data for Vaartuigen-tab ── */
const mockVaartuigenOnderhandelingen = [
  {
    id: "ond-v-1",
    vaartuigLabel: "MS Adriana",
    vaartuigBadge: undefined as string | undefined,
    vaartuigSubtext: "Motorvaartuig",
    locatie: "Rotterdam",
    locatieSubtext: "12 jan 2026, 08:00",
    ladingLabel: "1.200 t Grind",
    ladingSubtext: "Ex Eur-01 · SP-001",
    vrachtprijs: "€ 8,50 /t",
    relatie: "Rederij de Jong",
    laadHaven: "Rotterdam",
    laadDatum: "15 jan 2026, 08:00",
    losHaven: "Antwerpen",
    losDatum: "16 jan 2026, 14:00",
    deadline: "17 jan 2026",
    status: "Bod verstuurd",
    updateUser: "",
    updateUserInitials: "KN",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "14 jan 2026, 16:32",
    bron: "eigen",
    ladingBron: "eigen",
  },
  {
    id: "ond-v-2",
    vaartuigLabel: "MS De Hoop",
    vaartuigBadge: "Markt" as string | undefined,
    vaartuigSubtext: "Duwbak",
    locatie: "Duisburg",
    locatieSubtext: "10 jan 2026, 14:00",
    ladingLabel: "850 t Zand",
    ladingSubtext: "",
    vrachtprijs: "€ 7,20 /t",
    relatie: "Rijn Transport BV",
    laadHaven: "Duisburg",
    laadDatum: "18 jan 2026, 06:00",
    losHaven: "Dordrecht",
    losDatum: "19 jan 2026, 10:00",
    deadline: "20 jan 2026",
    status: "Bod ontvangen",
    updateUser: "",
    updateUserInitials: "PJ",
    updateUserAvatar: undefined as string | undefined,
    updateDate: "13 jan 2026, 09:15",
    bron: "markt",
    ladingBron: "markt",
  },
  {
    id: "ond-v-3",
    vaartuigLabel: "MS Fortuna",
    vaartuigBadge: undefined as string | undefined,
    vaartuigSubtext: "Motorvaartuig",
    locatie: "Amsterdam",
    locatieSubtext: "14 jan 2026, 06:00",
    ladingLabel: "2.000 t Steenkool",
    ladingSubtext: "Ex Eur-02 · SP-003",
    vrachtprijs: "€ 9,10 /t",
    relatie: "Rederij de Jong",
    laadHaven: "Amsterdam",
    laadDatum: "20 jan 2026, 07:00",
    losHaven: "Gent",
    losDatum: "21 jan 2026, 15:00",
    deadline: "22 jan 2026",
    status: "Goedgekeurd",
    updateUser: "",
    updateUserInitials: "MH",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "15 jan 2026, 11:45",
    bron: "eigen",
    ladingBron: "eigen",
  },
  {
    id: "ond-v-4",
    vaartuigLabel: "MS Catharina",
    vaartuigBadge: "Markt" as string | undefined,
    vaartuigSubtext: "Duwbak",
    locatie: "Terneuzen",
    locatieSubtext: "16 jan 2026, 10:00",
    ladingLabel: "600 t Mais",
    ladingSubtext: "",
    vrachtprijs: "€ 11,00 /t",
    relatie: "Schippers & Co",
    laadHaven: "Terneuzen",
    laadDatum: "22 jan 2026, 09:00",
    losHaven: "Luik",
    losDatum: "23 jan 2026, 12:00",
    deadline: "24 jan 2026",
    status: "Afgewezen",
    updateUser: "",
    updateUserInitials: "EN",
    updateUserAvatar: undefined as string | undefined,
    updateDate: "16 jan 2026, 14:20",
    bron: "markt",
    ladingBron: "markt",
  },
  {
    id: "ond-v-5",
    vaartuigLabel: "MS Orion",
    vaartuigBadge: undefined as string | undefined,
    vaartuigSubtext: "Motorvaartuig",
    locatie: "Nijmegen",
    locatieSubtext: "18 jan 2026, 12:00",
    ladingLabel: "1.500 t Klinker",
    ladingSubtext: "Ex Eur-03 · SP-005",
    vrachtprijs: "€ 10,25 /t",
    relatie: "Rederij de Jong",
    laadHaven: "Nijmegen",
    laadDatum: "25 jan 2026, 06:30",
    losHaven: "Rotterdam",
    losDatum: "25 jan 2026, 18:00",
    deadline: "26 jan 2026",
    status: "Bod verstuurd",
    updateUser: "",
    updateUserInitials: "FJ",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "17 jan 2026, 08:00",
    bron: "eigen",
    ladingBron: "eigen",
  },
  {
    id: "ond-v-6",
    vaartuigLabel: "MS Petronella",
    vaartuigBadge: "Markt" as string | undefined,
    vaartuigSubtext: "Motorvaartuig",
    locatie: "Mannheim",
    locatieSubtext: "20 jan 2026, 06:00",
    ladingLabel: "—",
    ladingSubtext: "",
    vrachtprijs: "—",
    relatie: "IJsseldelta Scheepvaart",
    laadHaven: "—",
    laadDatum: "",
    losHaven: "—",
    losDatum: "",
    deadline: "3 feb 2026",
    status: "Via werklijst",
    updateUser: "",
    updateUserInitials: "MH",
    updateUserAvatar: imgAvatar as string | undefined,
    updateDate: "20 jan 2026, 11:00",
    bron: "markt",
    ladingBron: "markt",
  },
];

/* ── Filter-dropdown met divider support ── */
function StatusFilterDropdown({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (v: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options = [
    { label: "Actief", value: "actief" },
    { label: "Goedgekeurd", value: "goedgekeurd" },
    { label: "Afgewezen", value: "afgewezen" },
    { label: "---", value: "divider" },
    { label: "Alles", value: "alles" },
  ];

  const displayLabel = options.find((o) => o.value === value)?.label || "Actief";

  return (
    <div
      ref={ref}
      className="relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-rdj-bg-primary relative rounded-[6px] shrink-0 cursor-pointer"
      >
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0">
            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">
              {displayLabel}
            </p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 11.6667 6.66667"
                >
                  <path
                    d="M1.33334 1.33334L5.83334 5.83334L10.3333 1.33334"
                    stroke="#344054"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.66667"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-rdj-border-primary border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        />
      </button>

      {isOpen && (
        <>
          {/* Click-outside overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-[4px] bg-rdj-bg-primary border border-rdj-border-secondary rounded-[8px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] z-50 min-w-full overflow-hidden">
            {options.map((option, idx) =>
              option.value === "divider" ? (
                <div
                  key={idx}
                  className="border-t border-rdj-border-secondary mx-[4px]"
                />
              ) : (
                <button
                  key={option.value}
                  onClick={() => {
                    onSelect(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-[14px] py-[10px] font-['Hanken_Grotesk:Regular',sans-serif] font-normal text-[14px] leading-[20px] hover:bg-rdj-bg-secondary transition-colors cursor-pointer whitespace-nowrap ${
                    option.value === value
                      ? "text-[#1567a4] bg-[#f0f7fc]"
                      : "text-[#344054]"
                  }`}
                >
                  {option.label}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Plus icon SVG ── */
const PlusIcon = (
  <svg fill="none" viewBox="0 0 20 20">
    <path
      d="M10 4.167V15.833M4.167 10H15.833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.67"
    />
  </svg>
);

export default function Onderhandelingen() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.includes("/vaartuigen")
    ? "vaartuigen"
    : "ladingen";

  const [statusFilter, setStatusFilter] = useState("actief");
  const [sourceFilter, setSourceFilter] = useState("alles");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [selectedNegotiationId, setSelectedNegotiationId] = useState<string | null>(
    null
  );

  /* ── Filter logic: Ladingen ── */
  const filteredLadingen = mockLadingenOnderhandelingen.filter((item) => {
    if (statusFilter === "actief" && !activeStatuses.includes(item.status))
      return false;
    if (statusFilter === "goedgekeurd" && item.status !== "Goedgekeurd")
      return false;
    if (statusFilter === "afgewezen" && item.status !== "Afgewezen") return false;
    if (sourceFilter !== "alles" && item.bron !== sourceFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      if (
        !item.ladingLabel.toLowerCase().includes(q) &&
        !item.relatie.toLowerCase().includes(q) &&
        !item.vaartuig.toLowerCase().includes(q)
      )
        return false;
    }
    return true;
  });

  /* ── Filter logic: Vaartuigen ── */
  const filteredVaartuigen = mockVaartuigenOnderhandelingen.filter((item) => {
    if (statusFilter === "actief" && !activeStatuses.includes(item.status))
      return false;
    if (statusFilter === "goedgekeurd" && item.status !== "Goedgekeurd")
      return false;
    if (statusFilter === "afgewezen" && item.status !== "Afgewezen") return false;
    if (sourceFilter !== "alles" && item.bron !== sourceFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      if (
        !item.vaartuigLabel.toLowerCase().includes(q) &&
        !item.relatie.toLowerCase().includes(q) &&
        !item.ladingLabel.toLowerCase().includes(q)
      )
        return false;
    }
    return true;
  });

  const activeData = activeTab === "ladingen" ? filteredLadingen : filteredVaartuigen;
  const totalItems = activeData.length;
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentLadingen = filteredLadingen.slice(indexOfFirst, indexOfLast);
  const currentVaartuigen = filteredVaartuigen.slice(indexOfFirst, indexOfLast);

  /* ── Ladingen table columns ── */
  const ladingenColumns: Column[] = [
    {
      key: "lading",
      header: "Lading",
      type: "leading-text",
      subtextKey: "ladingSubtext",
      badgeKey: "ladingBadge",
    },
    {
      key: "vaartuig",
      header: "Vaartuig",
      type: "text",
      width: "w-[160px]",
    },
    {
      key: "vrachtprijs",
      header: "Vrachtprijs",
      type: "text",
      width: "w-[140px]",
      subtextKey: "vrachtprijsDiff",
      align: "right",
    },
    {
      key: "relatie",
      header: "Relatie",
      type: "text",
      width: "w-[180px]",
      textColor: "text-rdj-text-brand",
    },
    {
      key: "laden",
      header: "Laden",
      type: "text",
      width: "w-[180px]",
      subtextKey: "ladenDate",
    },
    {
      key: "lossen",
      header: "Lossen",
      type: "text",
      width: "w-[180px]",
      subtextKey: "lossenDate",
    },
    {
      key: "deadline",
      header: "Deadline",
      type: "text",
      width: "w-[140px]",
    },
    {
      key: "status",
      header: "Status",
      type: "status",
      width: "w-[160px]",
      variantKey: "statusVariant",
      iconKey: "statusIcon",
      typeKey: "statusType",
      defaultVariant: "grey" as const,
    },
    {
      key: "updateUser",
      header: "Laatste update",
      type: "text",
      width: "w-[180px]",
      subtextKey: "updateDate",
      avatarSrcKey: "updateUserAvatar",
      avatarInitialsKey: "updateUserInitials",
    },
  ];

  /* ── Vaartuigen table columns ── */
  const vaartuigenColumns: Column[] = [
    {
      key: "vaartuig",
      header: "Vaartuig",
      type: "leading-text",
      subtextKey: "vaartuigSubtext",
      badgeKey: "vaartuigBadge",
    },
    {
      key: "locatie",
      header: "Locatie",
      type: "text",
      width: "w-[160px]",
      subtextKey: "locatieSubtext",
    },
    {
      key: "lading",
      header: "Lading",
      type: "text",
      width: "w-[180px]",
      subtextKey: "ladingSubtext",
    },
    {
      key: "vrachtprijs",
      header: "Vrachtprijs",
      type: "text",
      width: "w-[120px]",
      align: "right",
    },
    {
      key: "relatie",
      header: "Relatie",
      type: "text",
      width: "w-[180px]",
      textColor: "text-rdj-text-brand",
    },
    {
      key: "laden",
      header: "Laden",
      type: "text",
      width: "w-[180px]",
      subtextKey: "ladenDate",
    },
    {
      key: "lossen",
      header: "Lossen",
      type: "text",
      width: "w-[180px]",
      subtextKey: "lossenDate",
    },
    {
      key: "deadline",
      header: "Deadline",
      type: "text",
      width: "w-[140px]",
    },
    {
      key: "status",
      header: "Status",
      type: "status",
      width: "w-[160px]",
      variantKey: "statusVariant",
      iconKey: "statusIcon",
      typeKey: "statusType",
      defaultVariant: "grey" as const,
    },
    {
      key: "updateUser",
      header: "Laatste update",
      type: "text",
      width: "w-[180px]",
      subtextKey: "updateDate",
      avatarSrcKey: "updateUserAvatar",
      avatarInitialsKey: "updateUserInitials",
    },
  ];

  /* ── Map ladingen rows ── */
  const ladingenRows = currentLadingen.map((item) => ({
    id: item.id,
    lading: item.ladingLabel,
    ladingSubtext: item.ladingSubtext || undefined,
    ladingBadge: item.ladingBadge,
    vaartuig: item.vaartuig,
    vrachtprijs: item.vrachtprijs,
    vrachtprijsDiff: item.vrachtprijsDiff,
    relatie: item.relatie,
    laden: item.laadHaven,
    ladenDate: item.laadDatum,
    lossen: item.losHaven,
    lossenDate: item.losDatum,
    deadline: item.deadline,
    status: item.status,
    statusVariant: statusVariantMap[item.status],
    statusIcon: statusIconMap[item.status],
    statusType: statusTypeMap[item.status],
    updateUser: "",
    updateDate: item.updateDate,
    updateUserAvatar: item.updateUserAvatar,
    updateUserInitials: item.updateUserInitials,
  }));

  /* ── Map vaartuigen rows ── */
  const vaartuigenRows = currentVaartuigen.map((item) => ({
    id: item.id,
    vaartuig: item.vaartuigLabel,
    vaartuigSubtext: item.vaartuigSubtext,
    vaartuigBadge: item.vaartuigBadge,
    locatie: item.locatie,
    locatieSubtext: item.locatieSubtext,
    lading: item.ladingLabel,
    ladingSubtext: item.ladingSubtext || undefined,
    vrachtprijs: item.vrachtprijs,
    relatie: item.relatie,
    laden: item.laadHaven,
    ladenDate: item.laadDatum,
    lossen: item.losHaven,
    lossenDate: item.losDatum,
    deadline: item.deadline,
    status: item.status,
    statusVariant: statusVariantMap[item.status],
    statusIcon: statusIconMap[item.status],
    statusType: statusTypeMap[item.status],
    updateUser: "",
    updateDate: item.updateDate,
    updateUserAvatar: item.updateUserAvatar,
    updateUserInitials: item.updateUserInitials,
  }));

  return (
    <div className="flex min-h-screen bg-rdj-bg-primary">
      <Sidebar />

      <div className="flex-1 overflow-auto pt-[24px]">
        <PageHeader
          title="Onderhandelingen"
          actions={
            <Button
              variant="primary"
              label="Toevoegen"
              leadingIcon={PlusIcon}
            />
          }
          tabs={[
            {
              label: "Ladingen",
              path: "/markt/onderhandelingen/ladingen",
              isActive: activeTab === "ladingen",
            },
            {
              label: "Vaartuigen",
              path: "/markt/onderhandelingen/vaartuigen",
              isActive: activeTab === "vaartuigen",
            },
          ]}
          filtersLeft={
            <>
              <StatusFilterDropdown
                value={statusFilter}
                onSelect={(val) => {
                  setStatusFilter(val);
                  setCurrentPage(1);
                }}
              />
              <SegmentedButtonGroup
                items={[
                  { value: "alles", label: "Alles" },
                  { value: "eigen", label: "Eigen" },
                  { value: "markt", label: "Markt" },
                ]}
                value={sourceFilter}
                onChange={(val) => {
                  setSourceFilter(val);
                  setCurrentPage(1);
                }}
              />
              <FilterDropdown
                label="Jan 1, 2026 &#8211; Jan 31, 2026"
                leadingIcon={
                  <div className="absolute inset-[8.33%_12.5%]">
                    <div className="absolute inset-[-5%_-5.56%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 18.3333 20"
                      >
                        <path
                          d={svgPaths.p16594900}
                          stroke="#344054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.66667"
                        />
                      </svg>
                    </div>
                  </div>
                }
              />
              <FilterDropdown label="Laadregio" />
              <button className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[20.83%]">
                    <div className="absolute inset-[-7.14%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 13.3333 13.3333"
                      >
                        <path
                          d={svgPaths.p1b67fa00}
                          stroke="#1567A4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.66667"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">
                  Filter
                </p>
              </button>
            </>
          }
          filtersRight={
            <>
              <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#344054] text-[14px]">
                Groeperen op regio
              </p>
              <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 max-w-[320px] w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center px-[14px] py-[8px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute inset-[12.5%]">
                          <div className="absolute inset-[-5.56%]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 16.6667 16.6667"
                            >
                              <path
                                d={svgPaths.p3190da80}
                                stroke="#667085"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.66667"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Zoeken"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal h-[18px] leading-[20px] min-h-px min-w-px overflow-hidden text-[#667085] text-[14px] text-ellipsis text-left whitespace-nowrap outline-none border-0 bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>
            </>
          }
        />

        {/* Table area */}
        <div>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            rowsPerPage={rowsPerPage}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={setRowsPerPage}
          />

          {activeTab === "ladingen" && (
            <Table
              columns={ladingenColumns}
              data={ladingenRows}
              hoveredRowId={hoveredRow}
              onRowHover={setHoveredRow}
              onRowClick={(row) => {
                setSelectedNegotiationId(row.id);
              }}
            />
          )}

          {activeTab === "vaartuigen" && (
            <Table
              columns={vaartuigenColumns}
              data={vaartuigenRows}
              hoveredRowId={hoveredRow}
              onRowHover={setHoveredRow}
              onRowClick={(row) => {
                setSelectedNegotiationId(row.id);
              }}
            />
          )}

          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            rowsPerPage={rowsPerPage}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={setRowsPerPage}
          />
        </div>
      </div>

      {/* Negotiation Dialog */}
      {selectedNegotiationId && (
        <NegotiationDialog
          negotiationId={selectedNegotiationId}
          onClose={() => setSelectedNegotiationId(null)}
        />
      )}
    </div>
  );
}