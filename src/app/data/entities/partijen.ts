import type { Partij, Subpartij, Ex } from "../api";

export const exen: Ex[] = [
  { id: "ex-001", naam: "Abis Dover", type: "zeeboot" },
  { id: "ex-002", naam: "Maran Future", type: "zeeboot" },
  { id: "ex-003", naam: "A2B Future", type: "zeeboot" },
  { id: "ex-004", naam: "Merganser", type: "zeeboot" },
  { id: "ex-005", naam: "Morgenster", type: "opslag" },
];

export const partijen: Partij[] = [
  {
    id: "par-001",
    naam: "Graan Rotterdam Q1",
    ladingSoortId: "ls-001",
    subsoortId: "lss-001",
    exId: "ex-001",
    laadhavenId: "hav-003",
    subpartijIds: ["sub-001"],
  },
  {
    id: "par-002",
    naam: "Houtpellets Salzgitter",
    ladingSoortId: "ls-003",
    subsoortId: "lss-006",
    exId: "ex-002",
    laadhavenId: "hav-001",
    subpartijIds: ["sub-002"],
  },
  {
    id: "par-003",
    naam: "Staal Dordrecht",
    ladingSoortId: "ls-004",
    subsoortId: "lss-008",
    exId: "ex-003",
    laadhavenId: "hav-007",
    subpartijIds: ["sub-003"],
  },
  {
    id: "par-004",
    naam: "Sojabonen Botlek",
    ladingSoortId: "ls-007",
    subsoortId: "",
    exId: "ex-004",
    laadhavenId: "hav-009",
    subpartijIds: ["sub-004"],
  },
];

export const subpartijen: Subpartij[] = [
  {
    id: "sub-001",
    naam: "Graan Rotterdam–Krefeld #1",
    partijId: "par-001",
    bijzonderheidIds: ["bh-001", "bh-002"],
    loshavenId: "hav-004",
    laaddatum: "2026-03-18",
    losdatum: "2026-03-21",
  },
  {
    id: "sub-002",
    naam: "Houtpellets Salzgitter–Hamburg #1",
    partijId: "par-002",
    bijzonderheidIds: ["bh-002"],
    loshavenId: "hav-002",
    laaddatum: "2026-03-14",
    losdatum: "2026-03-17",
  },
  {
    id: "sub-003",
    naam: "Staal Dordrecht–Antwerpen #1",
    partijId: "par-003",
    bijzonderheidIds: ["bh-005"],
    loshavenId: "hav-008",
    laaddatum: "2026-03-15",
    losdatum: "2026-03-17",
  },
  {
    id: "sub-004",
    naam: "Sojabonen Botlek–Basel #1",
    partijId: "par-004",
    bijzonderheidIds: ["bh-001", "bh-002", "bh-003"],
    loshavenId: "hav-010",
    laaddatum: "2026-03-16",
    losdatum: "2026-03-22",
  },
];
