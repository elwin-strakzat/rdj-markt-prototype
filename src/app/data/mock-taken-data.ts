import { mockRelaties } from "./mock-relatie-data";
import { mockContracten } from "./mock-contract-data";

export type TaakStatus = "open" | "voltooid";
export type TaakType = "handmatig" | "contactfrequentie" | "contractafloop";

export interface Taak {
  id: string;
  omschrijving: string;
  deadline: string;
  status: TaakStatus;
  type: TaakType;
  relatieId: string;
  contractId?: string;
  eigenaarId: string;
  aanmaakDatum: string;
  voltooiDatum?: string;
}

export let mockTaken: Taak[] = [
  {
    id: "taak-001",
    omschrijving: "Offerte meststoffen Q2 opvolgen bij Sophie van Dam",
    deadline: "2026-03-14",
    status: "open",
    type: "handmatig",
    relatieId: "rel-003",
    contractId: "ctr-003",
    eigenaarId: "usr-001",
    aanmaakDatum: "2026-03-10",
  },
  {
    id: "taak-002",
    omschrijving: "Beschikbaarheid duwbak bevestigen aan Anne Mulder",
    deadline: "2026-03-12",
    status: "open",
    type: "handmatig",
    relatieId: "rel-005",
    contractId: "ctr-005",
    eigenaarId: "usr-002",
    aanmaakDatum: "2026-03-06",
  },
  {
    id: "taak-003",
    omschrijving: "Verzekeringsafhandeling staal schade afronden",
    deadline: "2026-03-15",
    status: "open",
    type: "handmatig",
    relatieId: "rel-002",
    eigenaarId: "usr-002",
    aanmaakDatum: "2026-03-05",
  },
  {
    id: "taak-004",
    omschrijving: "Contact opnemen met Jan de Vries (contactfrequentie: wekelijks)",
    deadline: "2026-03-15",
    status: "open",
    type: "contactfrequentie",
    relatieId: "rel-001",
    eigenaarId: "usr-001",
    aanmaakDatum: "2026-03-08",
  },
  {
    id: "taak-005",
    omschrijving: "Eerste gesprek inplannen met Van Oord Transport",
    deadline: "2026-03-18",
    status: "open",
    type: "handmatig",
    relatieId: "rel-006",
    contractId: "ctr-011",
    eigenaarId: "usr-001",
    aanmaakDatum: "2026-03-09",
  },
  {
    id: "taak-006",
    omschrijving: "Contact opnemen met Pieter Jansen (contactfrequentie: maandelijks)",
    deadline: "2026-03-20",
    status: "open",
    type: "contactfrequentie",
    relatieId: "rel-002",
    eigenaarId: "usr-002",
    aanmaakDatum: "2026-02-20",
  },
  {
    id: "taak-007",
    omschrijving: "Contract Janlow loopt af — verlenging bespreken",
    deadline: "2026-12-01",
    status: "open",
    type: "contractafloop",
    relatieId: "rel-002",
    contractId: "ctr-002",
    eigenaarId: "usr-002",
    aanmaakDatum: "2026-03-01",
  },
  {
    id: "taak-008",
    omschrijving: "Inspectie sojabonen plannen met Noor van den Berg",
    deadline: "2026-03-19",
    status: "open",
    type: "handmatig",
    relatieId: "rel-010",
    contractId: "ctr-006",
    eigenaarId: "usr-001",
    aanmaakDatum: "2026-03-10",
  },
  {
    id: "taak-009",
    omschrijving: "Contact opnemen met Noor van den Berg (contactfrequentie: wekelijks)",
    deadline: "2026-03-16",
    status: "open",
    type: "contactfrequentie",
    relatieId: "rel-010",
    eigenaarId: "usr-001",
    aanmaakDatum: "2026-03-09",
  },
  {
    id: "taak-010",
    omschrijving: "Containers deal Duisburg — contractvoorstel sturen",
    deadline: "2026-03-13",
    status: "open",
    type: "handmatig",
    relatieId: "rel-012",
    contractId: "ctr-008",
    eigenaarId: "usr-002",
    aanmaakDatum: "2026-03-09",
  },
  {
    id: "taak-011",
    omschrijving: "Provaart Q2 contract voorwaarden afstemmen met Maria",
    deadline: "2026-03-07",
    status: "voltooid",
    type: "handmatig",
    relatieId: "rel-001",
    contractId: "ctr-010",
    eigenaarId: "usr-001",
    aanmaakDatum: "2026-02-28",
    voltooiDatum: "2026-03-06",
  },
  {
    id: "taak-012",
    omschrijving: "Contact opnemen met Daan Peters (contactfrequentie: maandelijks)",
    deadline: "2026-04-01",
    status: "open",
    type: "contactfrequentie",
    relatieId: "rel-007",
    eigenaarId: "usr-003",
    aanmaakDatum: "2026-03-01",
  },
  {
    id: "taak-013",
    omschrijving: "Contact opnemen met Klaus Müller (contactfrequentie: kwartaal)",
    deadline: "2026-05-10",
    status: "open",
    type: "contactfrequentie",
    relatieId: "rel-012",
    eigenaarId: "usr-002",
    aanmaakDatum: "2026-02-10",
  },
];

/** Helper: get label for taak type */
export const TAAK_TYPE_LABELS: Record<TaakType, string> = {
  handmatig: "Handmatig",
  contactfrequentie: "Contactfrequentie",
  contractafloop: "Contractafloop",
};

export const TAAK_TYPE_VARIANT_MAP: Record<TaakType, string> = {
  handmatig: "grey",
  contactfrequentie: "brand",
  contractafloop: "warning",
};
