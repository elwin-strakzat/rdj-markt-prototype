import { useState, useMemo } from "react";
import { useParams, Link } from "react-router";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Badge from "../components/Badge";
import ActivityFeed from "../components/ActivityFeed";
import { mockVlootData } from "../data/mock-vloot-data";

const chevronSvg = (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
    <path d="M0.666664 8.66667L4.66666 4.66667L0.666664 0.666668" stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);

interface Reis {
  id: string;
  subject: string;
  subjectSub: string;
  typeLading: string;
  ladinggewicht: string;
  ladinggewichtSub: string;
  laaddatum: string;
  losdatum: string;
  laadhaven: string;
  loshaven: string;
  status: string;
  statusVariant: "brand" | "success" | "warning" | "error" | "grey";
}

interface NietBeschikbaar {
  id: string;
  type: string;
  locatie: string;
  beschrijving: string;
  datum: string;
}

const mockReizen: Reis[] = [
  {
    id: "r-1",
    subject: "RWE Supply & Trading",
    subjectSub: "24.02.124 • RWE230.01",
    typeLading: "Mais",
    ladinggewicht: "1.891.629 t",
    ladinggewichtSub: "~5,82t",
    laaddatum: "Vr 9 Jan 10:05",
    losdatum: "Zo 11 Jan 10:05",
    laadhaven: "Rotterdam Botlek",
    loshaven: "Gatum Containers",
    status: "Varend",
    statusVariant: "success",
  },
  {
    id: "r-2",
    subject: "Uniper Benelux N.V.",
    subjectSub: "24.02.151 • LAN.190.01",
    typeLading: "Hoofdpellets",
    ladinggewicht: "3.125/3.101 t",
    ladinggewichtSub: "",
    laaddatum: "Wo 14 Jan 10:05",
    losdatum: "Wo 14 Jan 10:05",
    laadhaven: "Rotterdam Botlek",
    loshaven: "Gatum Containers",
    status: "Gepland",
    statusVariant: "brand",
  },
  {
    id: "r-3",
    subject: "Archer Daniels Midland",
    subjectSub: "24.02.183 • ADM.0012",
    typeLading: "Sojabonen",
    ladinggewicht: "1.993 t",
    ladinggewichtSub: "",
    laaddatum: "Wo 21 Jan 10:05",
    losdatum: "Ma 19 Jan 10:05",
    laadhaven: "Rotterdam",
    loshaven: "Gent",
    status: "Te laden",
    statusVariant: "warning",
  },
];

const mockNietBeschikbaar: NietBeschikbaar[] = [
  {
    id: "nb-1",
    type: "Werf",
    locatie: "IJmuiden Buitenspuikanaal",
    beschrijving: "Schoonmaken en 2x beren",
    datum: "Wo 14 Jan 09:00 - Ma 21 Jan 09:00",
  },
];

export default function VlootVaartuigDetail() {
  const { id } = useParams();
  const [sidebarTab, setSidebarTab] = useState<"details" | "profiel" | "team" | "plan">("details");
  const [reizenTab, setReizenTab] = useState("alle");
  const [nbTab, setNbTab] = useState("alle");

  const vaartuig = useMemo(() => mockVlootData.find((v) => v.id === id), [id]);

  if (!vaartuig) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-sans font-bold text-[20px] text-rdj-text-primary">Vaartuig niet gevonden</p>
            <Link to="/vloot" className="font-sans text-[14px] text-rdj-text-brand hover:underline mt-2 block">
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtitle = `${vaartuig.type} in ${vaartuig.huidigeLocatie}`;

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {/* Breadcrumb */}
        <div className="flex flex-col gap-[20px] items-start pt-[24px] w-full">
          <div className="flex items-center gap-[8px] pl-[24px]">
            <Link to="/vloot" className="flex items-center justify-center p-[4px] rounded-[6px] hover:bg-rdj-bg-primary-hover">
              <p className="font-sans font-bold leading-[20px] text-[#475467] text-[14px] whitespace-nowrap">Vloot</p>
            </Link>
            <div className="overflow-clip shrink-0 size-[16px]"><div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4 relative"><div className="absolute inset-[-8.33%_-16.67%]">{chevronSvg}</div></div></div>
            <div className="bg-[#f9fafb] flex items-center justify-center px-[8px] py-[4px] rounded-[6px]">
              <p className="font-sans font-bold leading-[20px] text-[#344054] text-[14px] whitespace-nowrap">{vaartuig.naam}</p>
            </div>
            {/* Prev/next arrows */}
            <div className="flex items-center gap-[4px] ml-[8px]">
              <button className="size-[24px] flex items-center justify-center rounded-[4px] border border-rdj-border-primary text-rdj-text-secondary hover:bg-rdj-bg-primary-hover">
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d="M7.5 9L4.5 6L7.5 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
              </button>
              <button className="size-[24px] flex items-center justify-center rounded-[4px] border border-rdj-border-primary text-rdj-text-secondary hover:bg-rdj-bg-primary-hover">
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
              </button>
            </div>
          </div>
          <div className="h-px w-full bg-rdj-border-secondary" />
        </div>

        <div className="flex items-stretch min-h-[calc(100vh-65px)]">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="max-w-[960px] mx-auto px-[24px] py-[32px]">
              {/* Header */}
              <div className="flex items-start justify-between mb-[24px]">
                <div>
                  <h1 className="font-sans font-bold text-[24px] leading-[32px] text-rdj-text-primary">{vaartuig.naam}</h1>
                  <p className="font-sans font-normal text-[14px] leading-[20px] text-rdj-text-secondary mt-[4px]">{subtitle}</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <Button variant="secondary" label="Acties" trailingIcon={
                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                  } />
                  <Button variant="primary" label="Bewerken" />
                </div>
              </div>

              {/* GMP Warning Banner */}
              <div className="mb-[32px] bg-[#fffaeb] border border-[#fedf89] rounded-[12px] p-[16px]">
                <div className="flex gap-[12px]">
                  <div className="shrink-0 mt-[2px]">
                    <div className="size-[20px] rounded-full bg-[#F79009] flex items-center justify-center">
                      <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                        <path d="M6 4V6.5M6 8H6.005" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-sans font-bold text-[14px] leading-[20px] text-[#b54708]">GMP is verlopen</p>
                    <p className="font-sans font-normal text-[14px] leading-[20px] text-[#b54708] mt-[4px]">
                      Het certificaat voor GMP is niet meer geldig sinds 24 januari 2024. Verleng deze of vraag een nieuwe verkoopdatum toe.
                    </p>
                    <div className="flex items-center gap-[12px] mt-[12px]">
                      <button className="font-sans font-bold text-[14px] text-[#b54708] underline hover:no-underline">Verlengen</button>
                      <button className="font-sans font-bold text-[14px] text-[#b54708] underline hover:no-underline">Aanpassen</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reizen */}
              <div className="mb-[32px]">
                <div className="flex items-center justify-between mb-[16px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">Reizen</h2>
                  <div className="flex items-center gap-[4px]">
                    {["Alle", "Gepland", "Actief", "Afgerond"].map((tab) => {
                      const key = tab.toLowerCase();
                      return (
                        <button
                          key={key}
                          onClick={() => setReizenTab(key === "alle" ? "alle" : key)}
                          className={`px-[12px] py-[6px] rounded-[6px] font-sans font-bold text-[13px] transition-colors ${
                            reizenTab === key
                              ? "bg-rdj-bg-active text-rdj-text-brand"
                              : "text-rdj-text-secondary hover:bg-rdj-bg-secondary"
                          }`}
                        >
                          {tab}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Reizen table */}
                <div className="border border-rdj-border-secondary rounded-[12px] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                          {["Subject", "Type lading", "Ladinggewicht", "Laaddatum", "Losdatum", "Laadhaven", "Loshaven", "Status"].map((h) => (
                            <th key={h} className="text-left px-[16px] py-[10px] font-sans font-bold text-[12px] text-rdj-text-secondary whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {mockReizen.map((reis) => (
                          <tr key={reis.id} className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-rdj-bg-primary-hover transition-colors">
                            <td className="px-[16px] py-[12px]">
                              <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{reis.subject}</p>
                              <p className="font-sans font-normal text-[12px] text-rdj-text-tertiary">{reis.subjectSub}</p>
                            </td>
                            <td className="px-[16px] py-[12px]">
                              <Badge label={reis.typeLading} variant="grey" />
                            </td>
                            <td className="px-[16px] py-[12px]">
                              <p className="font-sans font-normal text-[14px] text-rdj-text-primary whitespace-nowrap">{reis.ladinggewicht}</p>
                              {reis.ladinggewichtSub && (
                                <p className="font-sans font-normal text-[12px] text-rdj-text-tertiary">{reis.ladinggewichtSub}</p>
                              )}
                            </td>
                            <td className="px-[16px] py-[12px]">
                              <p className="font-sans font-normal text-[14px] text-rdj-text-primary whitespace-nowrap">{reis.laaddatum}</p>
                            </td>
                            <td className="px-[16px] py-[12px]">
                              <p className="font-sans font-normal text-[14px] text-rdj-text-primary whitespace-nowrap">{reis.losdatum}</p>
                            </td>
                            <td className="px-[16px] py-[12px]">
                              <p className="font-sans font-normal text-[14px] text-rdj-text-primary whitespace-nowrap">{reis.laadhaven}</p>
                            </td>
                            <td className="px-[16px] py-[12px]">
                              <p className="font-sans font-normal text-[14px] text-rdj-text-primary whitespace-nowrap">{reis.loshaven}</p>
                            </td>
                            <td className="px-[16px] py-[12px]">
                              <Badge label={reis.status} variant={reis.statusVariant} dot />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Niet beschikbaar */}
              <div className="mb-[32px]">
                <div className="flex items-center justify-between mb-[16px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">Niet beschikbaar</h2>
                  <div className="flex items-center gap-[4px]">
                    {["Alle", "Werf", "Reparatie", "Inspectie", "Overig"].map((tab) => {
                      const key = tab.toLowerCase();
                      return (
                        <button
                          key={key}
                          onClick={() => setNbTab(key === "alle" ? "alle" : key)}
                          className={`px-[12px] py-[6px] rounded-[6px] font-sans font-bold text-[13px] transition-colors ${
                            nbTab === key
                              ? "bg-rdj-bg-active text-rdj-text-brand"
                              : "text-rdj-text-secondary hover:bg-rdj-bg-secondary"
                          }`}
                        >
                          {tab}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Niet beschikbaar table */}
                <div className="border border-rdj-border-secondary rounded-[12px] overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-rdj-border-secondary bg-[#f9fafb]">
                        {["Type", "Locatie", "Beschrijving", "Datum"].map((h) => (
                          <th key={h} className="text-left px-[16px] py-[10px] font-sans font-bold text-[12px] text-rdj-text-secondary whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {mockNietBeschikbaar.map((nb) => (
                        <tr key={nb.id} className="border-b border-rdj-border-secondary last:border-b-0 hover:bg-rdj-bg-primary-hover transition-colors">
                          <td className="px-[16px] py-[12px]">
                            <p className="font-sans font-normal text-[14px] text-rdj-text-primary">{nb.type}</p>
                          </td>
                          <td className="px-[16px] py-[12px]">
                            <p className="font-sans font-normal text-[14px] text-rdj-text-primary">{nb.locatie}</p>
                          </td>
                          <td className="px-[16px] py-[12px]">
                            <p className="font-sans font-normal text-[14px] text-rdj-text-primary">{nb.beschrijving}</p>
                          </td>
                          <td className="px-[16px] py-[12px]">
                            <p className="font-sans font-normal text-[14px] text-rdj-text-primary whitespace-nowrap">{nb.datum}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-[12px]">
                  <button className="flex items-center gap-[6px] text-rdj-text-brand font-sans font-bold text-[14px] hover:underline">
                    <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                      <path d="M8 3V13M3 8H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                    Moment toevoegen
                  </button>
                </div>
              </div>

              {/* Activiteit */}
              <div>
                <div className="flex items-center justify-between mb-[16px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] text-rdj-text-primary">Activiteit</h2>
                  <button className="flex items-center gap-[4px] font-sans font-bold text-[14px] text-rdj-text-brand hover:underline">
                    Alle activiteit
                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                  </button>
                </div>
                <ActivityFeed />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[320px] shrink-0 border-l border-rdj-border-secondary bg-white">
            {/* Sidebar tabs */}
            <div className="flex border-b border-rdj-border-secondary">
              {(["details", "profiel", "team", "plan"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSidebarTab(tab)}
                  className={`flex-1 py-[12px] font-sans font-bold text-[13px] text-center border-b-2 transition-colors ${
                    sidebarTab === tab
                      ? "text-rdj-text-brand border-[#1567a4]"
                      : "text-rdj-text-secondary border-transparent hover:text-rdj-text-primary"
                  }`}
                >
                  {tab === "details" ? "My details" : tab === "profiel" ? "Profiel" : tab === "team" ? "Team" : "Plan"}
                </button>
              ))}
            </div>

            <div className="p-[24px] flex flex-col gap-[20px]">
              {sidebarTab === "details" && (
                <>
                  {/* Note */}
                  <p className="font-sans font-normal text-[13px] leading-[20px] text-rdj-text-secondary italic">
                    {vaartuig.naam} heeft aanmerking(en)
                  </p>

                  {/* Details rows */}
                  <div className="flex flex-col gap-[12px]">
                    <DetailRow label="Status">
                      <Badge label={vaartuig.status} variant={vaartuig.statusVariant} dot />
                    </DetailRow>
                    <DetailRow label="Beschikbaar vanaf" value="Wo 14 Jan" />
                    <DetailRow label="Huidige locatie" value={vaartuig.huidigeLocatie} />
                    <DetailRow label="Ondernemer" value="02333A61" />
                    <DetailRow label="Vlag">
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[14px]">🇳🇱</span>
                        <span className="font-sans font-bold text-[14px] text-rdj-text-primary">Nederlands</span>
                      </div>
                    </DetailRow>
                    <DetailRow label="Motorvermogen">
                      <Badge label="BR SHTPARK" variant="brand" type="color" />
                    </DetailRow>
                  </div>

                  <div className="h-px w-full bg-rdj-border-secondary" />

                  {/* Physical details */}
                  <div className="flex flex-col gap-[12px]">
                    <DetailRow label="Grootteklasse" value={vaartuig.grootteklasse} />
                    <DetailRow label="Inhoud" value={vaartuig.inhoud} />
                    <DetailRow label="Lengte" value={vaartuig.lengte} />
                    <DetailRow label="Breedte" value={vaartuig.breedte} />
                    <DetailRow label="Diepgang" value="300 cm" />
                    <DetailRow label="Kruiphoogte" value="300 m" />
                  </div>

                  <div className="h-px w-full bg-rdj-border-secondary" />

                  {/* Bijzonderheden */}
                  <div className="flex items-start gap-[16px]">
                    <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">Bijzonderheden</p>
                    <div className="flex flex-wrap gap-[4px]">
                      {vaartuig.bijzonderheden.filter((b) => !b.startsWith("+")).map((b) => (
                        <span key={b} className="inline-flex items-center bg-[#f2f4f7] rounded-[4px] px-[8px] py-[2px] font-sans font-bold text-[12px] text-rdj-text-primary">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {sidebarTab === "profiel" && (
                <div className="flex flex-col gap-[12px]">
                  <DetailRow label="Type" value={vaartuig.type} />
                  <DetailRow label="Binding" value={vaartuig.binding || "—"} />
                  <DetailRow label="Bouwjaar" value="2008" />
                  <DetailRow label="Werf" value="Bijlsma Wartena" />
                  <DetailRow label="ENI nummer" value="02333461" />
                  <DetailRow label="Roepnaam" value={vaartuig.naam} />
                </div>
              )}

              {sidebarTab === "team" && (
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="relative rounded-full shrink-0 size-[32px] bg-rdj-bg-secondary flex items-center justify-center">
                      <p className="font-sans font-bold text-rdj-text-primary text-[12px]">JK</p>
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">Jan Koopmans</p>
                      <p className="font-sans font-normal text-[13px] text-rdj-text-secondary">Schipper</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <div className="relative rounded-full shrink-0 size-[32px] bg-rdj-bg-secondary flex items-center justify-center">
                      <p className="font-sans font-bold text-rdj-text-primary text-[12px]">PV</p>
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">Pieter de Vries</p>
                      <p className="font-sans font-normal text-[13px] text-rdj-text-secondary">Matroos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <div className="relative rounded-full shrink-0 size-[32px] bg-rdj-bg-secondary flex items-center justify-center">
                      <p className="font-sans font-bold text-rdj-text-primary text-[12px]">EN</p>
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[14px] text-rdj-text-primary">Erick Nieuwkoop</p>
                      <p className="font-sans font-normal text-[13px] text-rdj-text-secondary">Planner</p>
                    </div>
                  </div>
                </div>
              )}

              {sidebarTab === "plan" && (
                <div className="flex flex-col gap-[12px]">
                  <DetailRow label="Volgende reis" value={vaartuig.volgendeReis || "—"} />
                  <DetailRow label="Vertrekdatum" value={vaartuig.volgendeReisDate || "—"} />
                  <DetailRow label="Bestemming" value={vaartuig.volgendeReisSub || "—"} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-[16px]">
      <p className="font-sans font-normal text-[14px] text-rdj-text-secondary w-[120px] shrink-0">{label}</p>
      {children ?? <p className="font-sans font-bold text-[14px] text-rdj-text-primary">{value}</p>}
    </div>
  );
}
