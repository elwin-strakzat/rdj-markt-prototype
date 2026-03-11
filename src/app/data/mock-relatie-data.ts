import type { Relatie, ContactPersoon } from "./api";

export const LADINGGROEP_SUGGESTIES = [
  "Agri",
  "Constructie",
  "Bouwmaterialen",
  "Chemie",
  "Staal",
  "Containers",
  "Kolen & ertsen",
  "Zand & grind",
  "Meststoffen",
  "Overig",
];

export const FUNCTIE_SUGGESTIES = [
  "Directeur",
  "Bevrachter",
  "Planner",
  "Commercieel medewerker",
  "Operations manager",
  "Logistiek coördinator",
  "Accountmanager",
  "Administratie",
];

export const mockRelaties: Relatie[] = [
  {
    id: "rel-001",
    naam: "Provaart Logistics BV",
    contactPersoonIds: ["cp-001", "cp-002"],
    adres: "Maashaven OZ 80",
    postcode: "3072 MV",
    plaats: "Rotterdam",
    land: "Nederland",
    telefoon: "+31 10 234 5678",
    email: "info@provaart.nl",
    website: "www.provaart.nl",
    ladingGroepen: ["Agri", "Bouwmaterialen"],
    eigenaarId: "usr-001",
    status: "actief",
    contactFrequentie: "wekelijks",
    laatsteContact: "2026-03-08",
    opmerkingen: "Grote klant, altijd bereikbaar via Jan. Betrouwbare betaler.",
  },
  {
    id: "rel-002",
    naam: "Janlow B.V.",
    contactPersoonIds: ["cp-003"],
    adres: "Industrieweg 42",
    postcode: "3316 AB",
    plaats: "Dordrecht",
    land: "Nederland",
    telefoon: "+31 78 654 3210",
    email: "info@janlow.nl",
    ladingGroepen: ["Constructie", "Staal"],
    eigenaarId: "usr-002",
    status: "actief",
    contactFrequentie: "maandelijks",
    laatsteContact: "2026-02-20",
  },
  {
    id: "rel-003",
    naam: "Cargill N.V.",
    contactPersoonIds: ["cp-004", "cp-005", "cp-006"],
    adres: "Kanaaldijk 100",
    postcode: "1047 HH",
    plaats: "Amsterdam",
    land: "Nederland",
    telefoon: "+31 20 567 8901",
    email: "logistics@cargill.com",
    website: "www.cargill.com",
    ladingGroepen: ["Agri", "Meststoffen", "Chemie"],
    eigenaarId: "usr-001",
    status: "actief",
    contactFrequentie: "wekelijks",
    laatsteContact: "2026-03-10",
    opmerkingen: "Multinational. Meerdere contactpersonen per afdeling.",
  },
  {
    id: "rel-004",
    naam: "De Volharding C.V.",
    contactPersoonIds: ["cp-007"],
    adres: "Havenstraat 15",
    postcode: "2991 BD",
    plaats: "Barendrecht",
    land: "Nederland",
    telefoon: "+31 180 612 345",
    email: "info@devolharding.nl",
    ladingGroepen: ["Zand & grind", "Bouwmaterialen"],
    eigenaarId: "usr-003",
    status: "actief",
    contactFrequentie: "kwartaal",
    laatsteContact: "2026-01-15",
  },
  {
    id: "rel-005",
    naam: "Rederij Alfa",
    contactPersoonIds: ["cp-008", "cp-009"],
    adres: "Waalhaven Z.Z. 22",
    postcode: "3089 JH",
    plaats: "Rotterdam",
    land: "Nederland",
    telefoon: "+31 10 429 5000",
    email: "charter@rederij-alfa.nl",
    website: "www.rederij-alfa.nl",
    ladingGroepen: ["Containers", "Staal"],
    eigenaarId: "usr-002",
    status: "actief",
    contactFrequentie: "wekelijks",
    laatsteContact: "2026-03-07",
  },
  {
    id: "rel-006",
    naam: "Van Oord Transport",
    contactPersoonIds: ["cp-010"],
    adres: "Schaardijk 55",
    postcode: "3063 NH",
    plaats: "Rotterdam",
    land: "Nederland",
    telefoon: "+31 10 282 3456",
    email: "transport@vanoord.com",
    ladingGroepen: ["Zand & grind", "Constructie"],
    eigenaarId: "usr-001",
    status: "prospect",
    contactFrequentie: "geen",
    laatsteContact: "2026-02-01",
    opmerkingen: "Eerste contact via beurs. Nog geen concrete deal.",
  },
  {
    id: "rel-007",
    naam: "Boskalis Nederland",
    contactPersoonIds: ["cp-011", "cp-012"],
    adres: "Rosmolenweg 20",
    postcode: "3356 LK",
    plaats: "Papendrecht",
    land: "Nederland",
    telefoon: "+31 78 696 9000",
    email: "info@boskalis.com",
    website: "www.boskalis.com",
    ladingGroepen: ["Zand & grind", "Kolen & ertsen"],
    eigenaarId: "usr-003",
    status: "actief",
    contactFrequentie: "maandelijks",
    laatsteContact: "2026-03-01",
  },
  {
    id: "rel-008",
    naam: "Heidelberg Materials",
    contactPersoonIds: ["cp-013"],
    adres: "Betonweg 3",
    postcode: "6222 NL",
    plaats: "Maastricht",
    land: "Nederland",
    telefoon: "+31 43 350 1200",
    email: "logistics@heidelbergmaterials.com",
    ladingGroepen: ["Bouwmaterialen"],
    eigenaarId: "usr-002",
    status: "actief",
    contactFrequentie: "maandelijks",
    laatsteContact: "2026-02-28",
  },
  {
    id: "rel-009",
    naam: "Terberg Transport BV",
    contactPersoonIds: [],
    adres: "Binnenhaven 60",
    postcode: "4691 EL",
    plaats: "Tholen",
    land: "Nederland",
    telefoon: "+31 166 600 700",
    email: "info@terberg-transport.nl",
    ladingGroepen: ["Chemie", "Overig"],
    status: "inactief",
    contactFrequentie: "geen",
    laatsteContact: "2025-06-15",
    opmerkingen: "Relatie gepauzeerd na conflict over betalingstermijnen.",
  },
  {
    id: "rel-010",
    naam: "Viterra Trading",
    contactPersoonIds: ["cp-014", "cp-015"],
    adres: "Westerlaan 10",
    postcode: "3016 CK",
    plaats: "Rotterdam",
    land: "Nederland",
    telefoon: "+31 10 280 6000",
    email: "chartering@viterra.com",
    website: "www.viterra.com",
    ladingGroepen: ["Agri", "Meststoffen"],
    eigenaarId: "usr-001",
    status: "actief",
    contactFrequentie: "wekelijks",
    laatsteContact: "2026-03-09",
  },
  {
    id: "rel-011",
    naam: "Rhenus Logistics BV",
    contactPersoonIds: ["cp-016"],
    adres: "Veilingweg 10",
    postcode: "2651 BE",
    plaats: "Berkel en Rodenrijs",
    land: "Nederland",
    telefoon: "+31 10 292 8000",
    email: "info@rhenus.com",
    website: "www.rhenus.com",
    ladingGroepen: ["Containers", "Overig"],
    eigenaarId: "usr-003",
    status: "prospect",
    contactFrequentie: "geen",
    laatsteContact: "2026-03-05",
  },
  {
    id: "rel-012",
    naam: "Duisburg Hafen AG",
    contactPersoonIds: ["cp-017"],
    adres: "Hafenstraße 1",
    postcode: "47119",
    plaats: "Duisburg",
    land: "Duitsland",
    telefoon: "+49 203 803 0",
    email: "info@duisport.de",
    website: "www.duisport.de",
    ladingGroepen: ["Staal", "Kolen & ertsen", "Containers"],
    eigenaarId: "usr-002",
    status: "actief",
    contactFrequentie: "kwartaal",
    laatsteContact: "2026-02-10",
  },
];

export const mockContactPersonen: ContactPersoon[] = [
  { id: "cp-001", naam: "Jan de Vries", functie: "Bevrachter", email: "j.devries@provaart.nl", telefoon: "+31 6 1234 5678", relatieId: "rel-001" },
  { id: "cp-002", naam: "Maria Bakker", functie: "Operations manager", email: "m.bakker@provaart.nl", telefoon: "+31 6 2345 6789", relatieId: "rel-001" },
  { id: "cp-003", naam: "Pieter Jansen", functie: "Directeur", email: "p.jansen@janlow.nl", telefoon: "+31 6 3456 7890", relatieId: "rel-002" },
  { id: "cp-004", naam: "Sophie van Dam", functie: "Commercieel medewerker", email: "s.vandam@cargill.com", telefoon: "+31 6 4567 8901", relatieId: "rel-003" },
  { id: "cp-005", naam: "Tom Hendriks", functie: "Planner", email: "t.hendriks@cargill.com", telefoon: "+31 6 5678 9012", relatieId: "rel-003" },
  { id: "cp-006", naam: "Lisa Smit", functie: "Accountmanager", email: "l.smit@cargill.com", telefoon: "+31 6 6789 0123", relatieId: "rel-003" },
  { id: "cp-007", naam: "Kees Visser", functie: "Bevrachter", email: "k.visser@devolharding.nl", telefoon: "+31 6 7890 1234", relatieId: "rel-004" },
  { id: "cp-008", naam: "Anne Mulder", functie: "Planner", email: "a.mulder@rederij-alfa.nl", telefoon: "+31 6 8901 2345", relatieId: "rel-005" },
  { id: "cp-009", naam: "Robert Bos", functie: "Directeur", email: "r.bos@rederij-alfa.nl", telefoon: "+31 6 9012 3456", relatieId: "rel-005" },
  { id: "cp-010", naam: "Emma de Groot", functie: "Logistiek coördinator", email: "e.degroot@vanoord.com", telefoon: "+31 6 0123 4567", relatieId: "rel-006" },
  { id: "cp-011", naam: "Daan Peters", functie: "Bevrachter", email: "d.peters@boskalis.com", telefoon: "+31 6 1111 2222", relatieId: "rel-007" },
  { id: "cp-012", naam: "Floor Willems", functie: "Operations manager", email: "f.willems@boskalis.com", telefoon: "+31 6 3333 4444", relatieId: "rel-007" },
  { id: "cp-013", naam: "Hans Brouwer", functie: "Planner", email: "h.brouwer@heidelberg.com", telefoon: "+31 6 5555 6666", relatieId: "rel-008" },
  { id: "cp-014", naam: "Noor van den Berg", functie: "Bevrachter", email: "n.vandenberg@viterra.com", telefoon: "+31 6 7777 8888", relatieId: "rel-010" },
  { id: "cp-015", naam: "Thijs Dekker", functie: "Commercieel medewerker", email: "t.dekker@viterra.com", telefoon: "+31 6 9999 0000", relatieId: "rel-010" },
  { id: "cp-016", naam: "Mara Kok", functie: "Accountmanager", email: "m.kok@rhenus.com", telefoon: "+31 6 1212 3434", relatieId: "rel-011" },
  { id: "cp-017", naam: "Klaus Müller", functie: "Hafenmeister", email: "k.mueller@duisport.de", telefoon: "+49 170 123 4567", relatieId: "rel-012" },
];

/** Mock aantallen ladingen, vaartuigen en onderhandelingen per relatie */
export const mockRelatieCounts: Record<string, { ladingen: number; vaartuigen: number; onderhandelingen: number }> = {
  "rel-001": { ladingen: 8, vaartuigen: 3, onderhandelingen: 2 },
  "rel-002": { ladingen: 4, vaartuigen: 1, onderhandelingen: 1 },
  "rel-003": { ladingen: 12, vaartuigen: 5, onderhandelingen: 4 },
  "rel-004": { ladingen: 2, vaartuigen: 1, onderhandelingen: 0 },
  "rel-005": { ladingen: 6, vaartuigen: 4, onderhandelingen: 3 },
  "rel-006": { ladingen: 0, vaartuigen: 0, onderhandelingen: 0 },
  "rel-007": { ladingen: 5, vaartuigen: 2, onderhandelingen: 1 },
  "rel-008": { ladingen: 3, vaartuigen: 1, onderhandelingen: 1 },
  "rel-009": { ladingen: 0, vaartuigen: 0, onderhandelingen: 0 },
  "rel-010": { ladingen: 7, vaartuigen: 3, onderhandelingen: 2 },
  "rel-011": { ladingen: 0, vaartuigen: 0, onderhandelingen: 0 },
  "rel-012": { ladingen: 3, vaartuigen: 2, onderhandelingen: 1 },
};

/** Mock ladingen per relatie */
export interface RelatieLading {
  id: string;
  relatieId: string;
  titel: string;
  laadhaven: string;
  loshaven: string;
  tonnage: string;
  product: string;
  laaddatum: string;
  status: "intake" | "werklijst" | "markt" | "gesloten";
  matches: number;
  onderhandelingen: number;
}

export const mockRelatieLadingen: RelatieLading[] = [
  { id: "rl-001", relatieId: "rel-001", titel: "Houtpellets Salzgitter", laadhaven: "Salzgitter Stichkanal", loshaven: "Hamburg Veddelkanal", tonnage: "2.000 ton", product: "Houtpellets (DSIT)", laaddatum: "2026-03-14", status: "markt", matches: 5, onderhandelingen: 2 },
  { id: "rl-002", relatieId: "rel-001", titel: "Graan Rotterdam–Krefeld", laadhaven: "Rotterdam", loshaven: "Krefeld", tonnage: "3.500 ton", product: "Graan", laaddatum: "2026-03-18", status: "werklijst", matches: 3, onderhandelingen: 0 },
  { id: "rl-003", relatieId: "rel-001", titel: "Meststoffen Amsterdam", laadhaven: "Amsterdam", loshaven: "Mannheim", tonnage: "4.000 ton", product: "Meststoffen", laaddatum: "2026-03-22", status: "intake", matches: 0, onderhandelingen: 0 },
  { id: "rl-004", relatieId: "rel-002", titel: "Staal Dordrecht–Antwerpen", laadhaven: "Dordrecht", loshaven: "Antwerpen", tonnage: "3.000 ton", product: "Staal", laaddatum: "2026-03-15", status: "markt", matches: 4, onderhandelingen: 1 },
  { id: "rl-005", relatieId: "rel-002", titel: "Staal Dordrecht–Gent", laadhaven: "Dordrecht", loshaven: "Gent", tonnage: "2.500 ton", product: "Staal", laaddatum: "2026-03-20", status: "werklijst", matches: 2, onderhandelingen: 0 },
  { id: "rl-006", relatieId: "rel-003", titel: "Sojabonen Rotterdam", laadhaven: "Rotterdam Botlek", loshaven: "Basel", tonnage: "3.500 ton", product: "Sojabonen", laaddatum: "2026-03-16", status: "markt", matches: 6, onderhandelingen: 3 },
  { id: "rl-007", relatieId: "rel-003", titel: "Graan Amsterdam–Strasbourg", laadhaven: "Amsterdam", loshaven: "Strasbourg", tonnage: "3.000 ton", product: "Graan", laaddatum: "2026-03-25", status: "intake", matches: 0, onderhandelingen: 0 },
  { id: "rl-008", relatieId: "rel-004", titel: "Zand Barendrecht", laadhaven: "Barendrecht", loshaven: "Rotterdam Europoort", tonnage: "1.800 ton", product: "Zand", laaddatum: "2026-03-14", status: "gesloten", matches: 0, onderhandelingen: 0 },
  { id: "rl-009", relatieId: "rel-005", titel: "Containers Rotterdam–Antwerpen", laadhaven: "Rotterdam", loshaven: "Antwerpen", tonnage: "2.000 ton", product: "Containers", laaddatum: "2026-03-19", status: "markt", matches: 3, onderhandelingen: 1 },
  { id: "rl-010", relatieId: "rel-007", titel: "Grind Papendrecht", laadhaven: "Papendrecht", loshaven: "Rotterdam", tonnage: "3.000 ton", product: "Grind", laaddatum: "2026-03-17", status: "werklijst", matches: 2, onderhandelingen: 0 },
  { id: "rl-011", relatieId: "rel-008", titel: "Kolen Maastricht–Luik", laadhaven: "Maastricht", loshaven: "Luik", tonnage: "2.200 ton", product: "Kolen", laaddatum: "2026-03-12", status: "gesloten", matches: 0, onderhandelingen: 0 },
  { id: "rl-012", relatieId: "rel-010", titel: "Sojabonen inspectie Botlek", laadhaven: "Rotterdam Botlek", loshaven: "Rotterdam Botlek", tonnage: "5.000 ton", product: "Sojabonen", laaddatum: "2026-03-21", status: "intake", matches: 0, onderhandelingen: 0 },
  { id: "rl-013", relatieId: "rel-012", titel: "Containers Rotterdam–Duisburg", laadhaven: "Rotterdam", loshaven: "Duisburg", tonnage: "2.000 ton", product: "Containers", laaddatum: "2026-03-23", status: "markt", matches: 4, onderhandelingen: 2 },
];

/** Mock vaartuigen per relatie */
export interface RelatieVaartuig {
  id: string;
  relatieId: string;
  naam: string;
  type: string;
  capaciteit: string;
  locatie: string;
  beschikbaarVanaf: string;
  status: "beschikbaar" | "onderweg" | "beladen" | "in_onderhoud";
  matches: number;
  onderhandelingen: number;
}

const VAARTUIG_STATUS_MAP: Record<string, string> = {
  beschikbaar: "Beschikbaar",
  onderweg: "Onderweg",
  beladen: "Beladen",
  in_onderhoud: "In onderhoud",
};

export { VAARTUIG_STATUS_MAP };

export const mockRelatieVaartuigen: RelatieVaartuig[] = [
  { id: "rv-001", relatieId: "rel-001", naam: "Emily", type: "Motorschip", capaciteit: "3.000 ton", locatie: "Waalhaven", beschikbaarVanaf: "2026-03-12", status: "beschikbaar", matches: 4, onderhandelingen: 1 },
  { id: "rv-002", relatieId: "rel-001", naam: "Agaat", type: "Motorschip", capaciteit: "2.500 ton", locatie: "Krefeld", beschikbaarVanaf: "2026-03-19", status: "onderweg", matches: 2, onderhandelingen: 0 },
  { id: "rv-003", relatieId: "rel-002", naam: "S.S. Anna", type: "Motorschip", capaciteit: "2.500 ton", locatie: "Bremerhaven", beschikbaarVanaf: "2026-03-14", status: "beschikbaar", matches: 3, onderhandelingen: 1 },
  { id: "rv-004", relatieId: "rel-003", naam: "Bregje", type: "Motorschip", capaciteit: "3.000 ton", locatie: "Rotterdam Botlek", beschikbaarVanaf: "2026-03-16", status: "beladen", matches: 5, onderhandelingen: 2 },
  { id: "rv-005", relatieId: "rel-003", naam: "Hercules", type: "Motorschip", capaciteit: "3.000 ton", locatie: "Basel", beschikbaarVanaf: "2026-03-22", status: "onderweg", matches: 1, onderhandelingen: 0 },
  { id: "rv-006", relatieId: "rel-004", naam: "Antonia V", type: "Motorschip", capaciteit: "4.200 ton", locatie: "Barendrecht", beschikbaarVanaf: "2026-03-14", status: "beschikbaar", matches: 3, onderhandelingen: 0 },
  { id: "rv-007", relatieId: "rel-005", naam: "Duwbak Alfa-1", type: "Duwbak", capaciteit: "2.000 ton", locatie: "Rotterdam", beschikbaarVanaf: "2026-04-01", status: "in_onderhoud", matches: 0, onderhandelingen: 0 },
  { id: "rv-008", relatieId: "rel-005", naam: "Duwbak Alfa-2", type: "Duwbak", capaciteit: "2.000 ton", locatie: "Moerdijk", beschikbaarVanaf: "2026-03-15", status: "beschikbaar", matches: 2, onderhandelingen: 1 },
  { id: "rv-009", relatieId: "rel-007", naam: "Merganser", type: "Motorschip", capaciteit: "2.000 ton", locatie: "Papendrecht", beschikbaarVanaf: "2026-03-18", status: "beladen", matches: 3, onderhandelingen: 1 },
  { id: "rv-010", relatieId: "rel-010", naam: "Amber", type: "Motorschip", capaciteit: "4.500 ton", locatie: "Rotterdam Botlek", beschikbaarVanaf: "2026-03-20", status: "beschikbaar", matches: 4, onderhandelingen: 0 },
  { id: "rv-011", relatieId: "rel-012", naam: "Rhein Trader", type: "Motorschip", capaciteit: "2.800 ton", locatie: "Duisburg", beschikbaarVanaf: "2026-03-24", status: "onderweg", matches: 2, onderhandelingen: 1 },
];

/** Mock lading matches (vaartuigen die passen bij een lading) */
export interface RelatieLadingMatch {
  id: string;
  ladingId: string;
  vaartuigNaam: string;
  vaartuigType: string;
  relatie: string;
  contactPersoon: string;
  locatie: string;
  locatieDatum: string;
  groottonnage: string;
  inhoud: string;
  bron: string;
  bronDatum: string;
  matchPercentage: number;
  isEigen: boolean;
}

export const mockRelatieLadingMatches: RelatieLadingMatch[] = [
  { id: "rlm-001", ladingId: "rl-001", vaartuigNaam: "Emily", vaartuigType: "Motorschip", relatie: "Provaart Logistics BV", contactPersoon: "Jan de Vries", locatie: "Waalhaven", locatieDatum: "Ma 10 Mrt", groottonnage: "3.000 mt", inhoud: "3.800 m³", bron: "Eigen vloot", bronDatum: "Do 6 Mrt 12:44", matchPercentage: 92, isEigen: true },
  { id: "rlm-002", ladingId: "rl-001", vaartuigNaam: "Agaat", vaartuigType: "Motorschip", relatie: "Provaart Logistics BV", contactPersoon: "Jan de Vries", locatie: "Krefeld", locatieDatum: "Wo 12 Mrt", groottonnage: "2.500 mt", inhoud: "3.200 m³", bron: "Eigen vloot", bronDatum: "Do 6 Mrt 14:20", matchPercentage: 85, isEigen: true },
  { id: "rlm-003", ladingId: "rl-001", vaartuigNaam: "S.S. Anna", vaartuigType: "Motorschip", relatie: "Janlow B.V.", contactPersoon: "Pieter Jansen", locatie: "Bremerhaven", locatieDatum: "Di 11 Mrt", groottonnage: "2.500 mt", inhoud: "3.000 m³", bron: "Automatische feed", bronDatum: "Vr 7 Mrt 09:15", matchPercentage: 78, isEigen: false },
  { id: "rlm-004", ladingId: "rl-001", vaartuigNaam: "Rhein Trader", vaartuigType: "Motorschip", relatie: "Duisburg Hafen AG", contactPersoon: "Klaus Müller", locatie: "Duisburg", locatieDatum: "Do 13 Mrt", groottonnage: "2.800 mt", inhoud: "3.500 m³", bron: "Automatische feed", bronDatum: "Vr 7 Mrt 11:30", matchPercentage: 72, isEigen: false },
  { id: "rlm-005", ladingId: "rl-001", vaartuigNaam: "Merganser", vaartuigType: "Motorschip", relatie: "Boskalis Nederland", contactPersoon: "Daan Peters", locatie: "Papendrecht", locatieDatum: "Ma 10 Mrt", groottonnage: "2.000 mt", inhoud: "2.500 m³", bron: "Automatische feed", bronDatum: "Za 8 Mrt 16:00", matchPercentage: 65, isEigen: false },
  { id: "rlm-006", ladingId: "rl-004", vaartuigNaam: "Antonia V", vaartuigType: "Motorschip", relatie: "De Volharding C.V.", contactPersoon: "Kees Visser", locatie: "Barendrecht", locatieDatum: "Ma 10 Mrt", groottonnage: "4.200 mt", inhoud: "5.200 m³", bron: "Eigen vloot", bronDatum: "Vr 7 Mrt 08:00", matchPercentage: 88, isEigen: true },
  { id: "rlm-007", ladingId: "rl-004", vaartuigNaam: "Bregje", vaartuigType: "Motorschip", relatie: "Cargill N.V.", contactPersoon: "Sophie van Dam", locatie: "Rotterdam Botlek", locatieDatum: "Di 11 Mrt", groottonnage: "3.000 mt", inhoud: "3.800 m³", bron: "Automatische feed", bronDatum: "Do 6 Mrt 15:45", matchPercentage: 76, isEigen: false },
  { id: "rlm-008", ladingId: "rl-006", vaartuigNaam: "Amber", vaartuigType: "Motorschip", relatie: "Viterra Trading", contactPersoon: "Noor van den Berg", locatie: "Rotterdam Botlek", locatieDatum: "Ma 10 Mrt", groottonnage: "4.500 mt", inhoud: "5.600 m³", bron: "Eigen vloot", bronDatum: "Do 6 Mrt 10:30", matchPercentage: 94, isEigen: true },
  { id: "rlm-009", ladingId: "rl-006", vaartuigNaam: "Emily", vaartuigType: "Motorschip", relatie: "Provaart Logistics BV", contactPersoon: "Jan de Vries", locatie: "Waalhaven", locatieDatum: "Ma 10 Mrt", groottonnage: "3.000 mt", inhoud: "3.800 m³", bron: "Automatische feed", bronDatum: "Vr 7 Mrt 14:00", matchPercentage: 82, isEigen: false },
  { id: "rlm-010", ladingId: "rl-009", vaartuigNaam: "Duwbak Alfa-2", vaartuigType: "Duwbak", relatie: "Rederij Alfa", contactPersoon: "Anne Mulder", locatie: "Moerdijk", locatieDatum: "Di 11 Mrt", groottonnage: "2.000 mt", inhoud: "2.400 m³", bron: "Eigen vloot", bronDatum: "Do 6 Mrt 09:00", matchPercentage: 80, isEigen: true },
  { id: "rlm-011", ladingId: "rl-013", vaartuigNaam: "Rhein Trader", vaartuigType: "Motorschip", relatie: "Duisburg Hafen AG", contactPersoon: "Klaus Müller", locatie: "Duisburg", locatieDatum: "Do 13 Mrt", groottonnage: "2.800 mt", inhoud: "3.500 m³", bron: "Eigen vloot", bronDatum: "Vr 7 Mrt 11:30", matchPercentage: 90, isEigen: true },
];

/** Mock vaartuig matches (ladingen die passen bij een vaartuig) */
export interface RelatieVaartuigMatch {
  id: string;
  vaartuigId: string;
  ladingTitel: string;
  tonnage: string;
  relatie: string;
  contactPersoon: string;
  laadHaven: string;
  laadDatum: string;
  losHaven: string;
  losDatum: string;
  bron: string;
  bronDatum: string;
  matchPercentage: number;
  isEigen: boolean;
}

export const mockRelatieVaartuigMatches: RelatieVaartuigMatch[] = [
  { id: "rvm-001", vaartuigId: "rv-001", ladingTitel: "2.000 ton Houtpellets (DSIT)", tonnage: "2.000 ton", relatie: "Provaart Logistics BV", contactPersoon: "Jan de Vries", laadHaven: "Salzgitter Stichkanal", laadDatum: "Vr 14 Mrt 10:00", losHaven: "Hamburg Veddelkanal", losDatum: "Di 18 Mrt 14:00", bron: "Eigen", bronDatum: "Do 6 Mrt 12:44", matchPercentage: 92, isEigen: true },
  { id: "rvm-002", vaartuigId: "rv-001", ladingTitel: "3.500 ton Graan", tonnage: "3.500 ton", relatie: "Provaart Logistics BV", contactPersoon: "Maria Bakker", laadHaven: "Rotterdam", laadDatum: "Di 18 Mrt 08:00", losHaven: "Krefeld", losDatum: "Vr 21 Mrt", bron: "Eigen", bronDatum: "Vr 7 Mrt 09:15", matchPercentage: 85, isEigen: true },
  { id: "rvm-003", vaartuigId: "rv-001", ladingTitel: "3.000 ton Staal", tonnage: "3.000 ton", relatie: "Janlow B.V.", contactPersoon: "Pieter Jansen", laadHaven: "Dordrecht", laadDatum: "Za 15 Mrt 06:00", losHaven: "Antwerpen", losDatum: "Ma 17 Mrt 14:00", bron: "Automatische feed", bronDatum: "Vr 7 Mrt 11:30", matchPercentage: 72, isEigen: false },
  { id: "rvm-004", vaartuigId: "rv-001", ladingTitel: "2.000 ton Containers", tonnage: "2.000 ton", relatie: "Rederij Alfa", contactPersoon: "Anne Mulder", laadHaven: "Rotterdam", laadDatum: "Wo 19 Mrt 08:00", losHaven: "Antwerpen", losDatum: "Do 20 Mrt 14:00", bron: "Automatische feed", bronDatum: "Za 8 Mrt 16:00", matchPercentage: 65, isEigen: false },
  { id: "rvm-005", vaartuigId: "rv-003", ladingTitel: "3.000 ton Staal", tonnage: "3.000 ton", relatie: "Janlow B.V.", contactPersoon: "Pieter Jansen", laadHaven: "Dordrecht", laadDatum: "Za 15 Mrt 06:00", losHaven: "Antwerpen", losDatum: "Ma 17 Mrt 14:00", bron: "Eigen", bronDatum: "Do 6 Mrt 15:45", matchPercentage: 88, isEigen: true },
  { id: "rvm-006", vaartuigId: "rv-004", ladingTitel: "3.500 ton Sojabonen", tonnage: "3.500 ton", relatie: "Cargill N.V.", contactPersoon: "Sophie van Dam", laadHaven: "Rotterdam Botlek", laadDatum: "Zo 16 Mrt 08:00", losHaven: "Basel", losDatum: "Do 20 Mrt", bron: "Eigen", bronDatum: "Do 6 Mrt 10:30", matchPercentage: 94, isEigen: true },
  { id: "rvm-007", vaartuigId: "rv-004", ladingTitel: "3.000 ton Graan", tonnage: "3.000 ton", relatie: "Cargill N.V.", contactPersoon: "Tom Hendriks", laadHaven: "Amsterdam", laadDatum: "Di 25 Mrt 08:00", losHaven: "Strasbourg", losDatum: "Za 29 Mrt", bron: "Eigen", bronDatum: "Vr 7 Mrt 14:00", matchPercentage: 82, isEigen: true },
  { id: "rvm-008", vaartuigId: "rv-008", ladingTitel: "2.000 ton Containers", tonnage: "2.000 ton", relatie: "Rederij Alfa", contactPersoon: "Anne Mulder", laadHaven: "Rotterdam", laadDatum: "Wo 19 Mrt 08:00", losHaven: "Antwerpen", losDatum: "Do 20 Mrt 14:00", bron: "Eigen", bronDatum: "Do 6 Mrt 09:00", matchPercentage: 80, isEigen: true },
  { id: "rvm-009", vaartuigId: "rv-009", ladingTitel: "3.000 ton Grind", tonnage: "3.000 ton", relatie: "Boskalis Nederland", contactPersoon: "Daan Peters", laadHaven: "Papendrecht", laadDatum: "Ma 17 Mrt 06:00", losHaven: "Rotterdam", losDatum: "Di 18 Mrt 10:00", bron: "Eigen", bronDatum: "Vr 7 Mrt 08:00", matchPercentage: 86, isEigen: true },
  { id: "rvm-010", vaartuigId: "rv-010", ladingTitel: "5.000 ton Sojabonen", tonnage: "5.000 ton", relatie: "Viterra Trading", contactPersoon: "Noor van den Berg", laadHaven: "Rotterdam Botlek", laadDatum: "Vr 21 Mrt 08:00", losHaven: "Rotterdam Botlek", losDatum: "Vr 21 Mrt 18:00", bron: "Eigen", bronDatum: "Do 6 Mrt 10:30", matchPercentage: 90, isEigen: true },
];

/** Mock gebruikers (eigenaren) — supplement existing API data */
export const mockGebruikers = [
  { id: "usr-001", naam: "Erick Nieuwkoop", profielfoto: "" },
  { id: "usr-002", naam: "Khoa Nguyen", profielfoto: "" },
  { id: "usr-003", naam: "Michiel den Hond", profielfoto: "" },
];
