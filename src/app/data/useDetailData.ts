/**
 * Hooks for fetching fully resolved detail data for each of the 4 entity variants.
 * Used by the reusable sidebar components.
 */

import { useState, useEffect, useRef } from "react";
import * as api from "./api";
import type {
  LadingMarkt, LadingEigen, VaartuigMarkt, VaartuigEigen,
  LadingSoort, LadingSubsoort, Haven, Bron, Gebruiker,
  Relatie, Bijzonderheid, ContactPersoon, Partij, Subpartij, Ex,
} from "./api";

// ── Shared lookup cache ──
interface LookupMaps {
  relaties: Map<string, Relatie>;
  havens: Map<string, Haven>;
  bronnen: Map<string, Bron>;
  gebruikers: Map<string, Gebruiker>;
  ladingSoorten: Map<string, LadingSoort>;
  ladingSubsoorten: Map<string, LadingSubsoort>;
  bijzonderheden: Map<string, Bijzonderheid>;
  contactPersonen: Map<string, ContactPersoon>;
  partijen: Map<string, Partij>;
  subpartijen: Map<string, Subpartij>;
  exen: Map<string, Ex>;
}

let lookupCache: { maps: LookupMaps; timestamp: number } | null = null;
const LOOKUP_TTL = 60_000;

async function getLookups(): Promise<LookupMaps> {
  if (lookupCache && Date.now() - lookupCache.timestamp < LOOKUP_TTL) {
    return lookupCache.maps;
  }
  const [relaties, havens, bronnen, gebruikers, ladingSoorten, ladingSubsoorten, bijzonderheden, contactPersonen, partijen, subpartijen, exen] = await Promise.all([
    api.list<Relatie>("relatie"),
    api.list<Haven>("haven"),
    api.list<Bron>("bron"),
    api.list<Gebruiker>("gebruiker"),
    api.list<LadingSoort>("lading_soort"),
    api.list<LadingSubsoort>("lading_subsoort"),
    api.list<Bijzonderheid>("bijzonderheid"),
    api.list<ContactPersoon>("contact_persoon"),
    api.list<Partij>("partij"),
    api.list<Subpartij>("subpartij"),
    api.list<Ex>("ex"),
  ]);
  const toMap = <T extends { id: string }>(arr: T[]) => new Map(arr.map(i => [i.id, i]));
  const maps: LookupMaps = {
    relaties: toMap(relaties), havens: toMap(havens), bronnen: toMap(bronnen),
    gebruikers: toMap(gebruikers), ladingSoorten: toMap(ladingSoorten),
    ladingSubsoorten: toMap(ladingSubsoorten), bijzonderheden: toMap(bijzonderheden),
    contactPersonen: toMap(contactPersonen), partijen: toMap(partijen),
    subpartijen: toMap(subpartijen), exen: toMap(exen),
  };
  lookupCache = { maps, timestamp: Date.now() };
  return maps;
}

function fmt(n: number | null | undefined): string {
  if (n == null) return "—";
  return n.toLocaleString("nl-NL");
}

function fmtPrice(n: number | null | undefined): string {
  if (n == null) return "—";
  return `€${n.toFixed(2).replace(".", ",")} per ton`;
}

function fmtHours(n: number | null | undefined): string {
  if (n == null) return "—";
  return `${n} uur`;
}

function fmtCurrency(n: number | null | undefined): string {
  if (n == null || n === 0) return "—";
  return `€${n.toFixed(2).replace(".", ",")} per uur`;
}

// ── Resolved detail shapes ──

export interface ResolvedLadingMarkt {
  raw: LadingMarkt & { status?: string; laaddatum?: string; losdatum?: string };
  tonnage: string;
  lading: string;
  subsoort: string;
  soortelijkGewicht: string;
  inhoud: string;
  bijzonderheden: string[];
  laadhaven: string;
  laadhavenCity: string;
  laaddatum: string;
  loshaven: string;
  loshavenCity: string;
  losdatum: string;
  bron: string;
  bronDatum: string;
  relatie: string;
  contactpersoon: string;
  eigenaar: string;
  eigenaarInitials: string;
  prioriteit: number;
  // Condities
  prijs: string;
  laadtijd: string;
  liggeldLaden: string;
  lostijd: string;
  liggeldLossen: string;
}

export interface ResolvedLadingEigen {
  raw: LadingEigen;
  partij: string;
  subpartij: string;
  tonnage: string;
  ex: string;
  exType: string;
  lading: string;
  subsoort: string;
  soortelijkGewicht: string;
  inhoud: string;
  bijzonderheden: string[];
  laadhaven: string;
  laadhavenCity: string;
  laaddatum: string;
  loshaven: string;
  loshavenCity: string;
  losdatum: string;
  relatie: string;
  contactpersoon: string;
  eigenaar: string;
  eigenaarInitials: string;
  deadline: string;
  // Condities eigen
  eigenPrijs: string;
  eigenLaadtijd: string;
  eigenLiggeldLaden: string;
  eigenLostijd: string;
  eigenLiggeldLossen: string;
  // Condities markt (from related lading_markt if any, otherwise blank)
  marktPrijs: string;
  marktLaadtijd: string;
  marktLiggeldLaden: string;
  marktLostijd: string;
  marktLiggeldLossen: string;
}

export interface ResolvedVaartuigMarkt {
  raw: VaartuigMarkt;
  naam: string;
  beschikbaarVanaf: string;
  huidigeLocatie: string;
  eni: string;
  vlag: string;
  meetbrief: string;
  groottonnage: string;
  inhoud: string;
  lengte: string;
  breedte: string;
  diepgang: string;
  kruiphoogte: string;
  bijzonderheden: string[];
  bron: string;
  bronDatum: string;
  relatie: string;
  contactpersoon: string;
  eigenaar: string;
  eigenaarInitials: string;
  prioriteit: number;
}

export interface ResolvedVaartuigEigen {
  raw: VaartuigEigen;
  naam: string;
  beschikbaarVanaf: string;
  huidigeLocatie: string;
  eni: string;
  vlag: string;
  meetbrief: string;
  groottonnage: string;
  inhoud: string;
  lengte: string;
  breedte: string;
  diepgang: string;
  kruiphoogte: string;
  bijzonderheden: string[];
  relatie: string;
  contactpersoon: string;
  eigenaar: string;
  eigenaarInitials: string;
  deadline: string;
}

function getInitials(naam: string): string {
  return naam.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

// ── Hooks ──

export function useLadingMarktDetail(id: string | undefined) {
  const [data, setData] = useState<ResolvedLadingMarkt | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const [item, maps] = await Promise.all([
          api.get<LadingMarkt & { status?: string; laaddatum?: string; losdatum?: string }>("lading_markt", id),
          getLookups(),
        ]);

        const soort = maps.ladingSoorten.get(item.ladingSoortId);
        const subsoort = maps.ladingSubsoorten.get(item.subsoortId);
        const relatie = maps.relaties.get(item.relatieId);
        const laadhaven = maps.havens.get(item.laadhavenId);
        const loshaven = maps.havens.get(item.loshavenId);
        const bron = maps.bronnen.get(item.bronId);
        const eigenaar = item.eigenaarId ? maps.gebruikers.get(item.eigenaarId) : null;
        const contact = relatie?.contactPersoonIds?.[0]
          ? maps.contactPersonen.get(relatie.contactPersoonIds[0])
          : null;
        const bijz = item.bijzonderheidIds
          .map(bid => maps.bijzonderheden.get(bid))
          .filter(Boolean)
          .map(b => b!.naam);

        const resolved: ResolvedLadingMarkt = {
          raw: item,
          tonnage: `${fmt(item.tonnage)} t`,
          lading: soort?.naam || "—",
          subsoort: subsoort?.naam || "—",
          soortelijkGewicht: soort?.soortelijkGewicht ? `${soort.soortelijkGewicht.toFixed(2).replace(".", ",")} t/m³` : "—",
          inhoud: item.tonnage && soort?.soortelijkGewicht ? `${Math.round(item.tonnage / soort.soortelijkGewicht).toLocaleString("nl-NL")} m³` : "—",
          bijzonderheden: bijz,
          laadhaven: laadhaven?.naam || "—",
          laadhavenCity: "",
          laaddatum: item.laaddatum || "Af te stemmen",
          loshaven: loshaven?.naam || "—",
          loshavenCity: "",
          losdatum: item.losdatum || "Af te stemmen",
          bron: bron?.titel || "—",
          bronDatum: bron?.datum || "",
          relatie: relatie?.naam || "—",
          contactpersoon: contact?.naam || "—",
          eigenaar: eigenaar?.naam || "—",
          eigenaarInitials: eigenaar ? getInitials(eigenaar.naam) : "",
          prioriteit: item.prioriteit,
          prijs: fmtPrice(item.prijs),
          laadtijd: fmtHours(item.laadtijd),
          liggeldLaden: fmtCurrency(item.liggeldLaden),
          lostijd: fmtHours(item.lostijd),
          liggeldLossen: fmtCurrency(item.liggeldLossen),
        };

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("useLadingMarktDetail error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id]);

  return { data, loading, error };
}

export function useLadingEigenDetail(id: string | undefined) {
  const [data, setData] = useState<ResolvedLadingEigen | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const [item, maps] = await Promise.all([
          api.get<LadingEigen>("lading_eigen", id),
          getLookups(),
        ]);

        const partij = maps.partijen.get(item.partijId);
        const subpartij = maps.subpartijen.get(item.subpartijId);
        const ex = partij?.exId ? maps.exen.get(partij.exId) : null;
        const soort = partij ? maps.ladingSoorten.get(partij.ladingSoortId) : null;
        const subsoort = partij ? maps.ladingSubsoorten.get(partij.subsoortId) : null;
        const relatie = maps.relaties.get(item.relatieId);
        const laadhaven = partij ? maps.havens.get(partij.laadhavenId) : null;
        const loshaven = subpartij ? maps.havens.get(subpartij.loshavenId) : null;
        const eigenaar = maps.gebruikers.get(item.eigenaarId);
        const contact = relatie?.contactPersoonIds?.[0]
          ? maps.contactPersonen.get(relatie.contactPersoonIds[0])
          : null;
        const bijz = subpartij?.bijzonderheidIds
          ?.map(bid => maps.bijzonderheden.get(bid))
          .filter(Boolean)
          .map(b => b!.naam) || [];

        // Try to find a related markt lading for comparison condities
        let marktLading: (LadingMarkt & { status?: string }) | null = null;
        try {
          const allMarkt = await api.list<LadingMarkt & { status?: string }>("lading_markt");
          // Match on same soort + relatie as a heuristic
          marktLading = allMarkt.find(ml =>
            ml.ladingSoortId === partij?.ladingSoortId && ml.relatieId === item.relatieId
          ) || null;
        } catch { /* no markt data available */ }

        const resolved: ResolvedLadingEigen = {
          raw: item,
          partij: partij?.naam || "—",
          subpartij: subpartij?.naam || "—",
          tonnage: `${fmt(item.tonnage)} t`,
          ex: ex?.naam || "—",
          exType: ex?.type || "",
          lading: soort?.naam || "—",
          subsoort: subsoort?.naam || "—",
          soortelijkGewicht: soort?.soortelijkGewicht ? `${soort.soortelijkGewicht.toFixed(2).replace(".", ",")} t/m³` : "—",
          inhoud: item.tonnage && soort?.soortelijkGewicht ? `${Math.round(item.tonnage / soort.soortelijkGewicht).toLocaleString("nl-NL")} m³` : "—",
          bijzonderheden: bijz,
          laadhaven: laadhaven?.naam || "—",
          laadhavenCity: "",
          laaddatum: subpartij?.laaddatum || "Af te stemmen",
          loshaven: loshaven?.naam || "—",
          loshavenCity: "",
          losdatum: subpartij?.losdatum || "Af te stemmen",
          relatie: relatie?.naam || "—",
          contactpersoon: contact?.naam || "—",
          eigenaar: eigenaar?.naam || "—",
          eigenaarInitials: eigenaar ? getInitials(eigenaar.naam) : "",
          deadline: item.deadline || "—",
          eigenPrijs: fmtPrice(item.prijs),
          eigenLaadtijd: fmtHours(item.laadtijd),
          eigenLiggeldLaden: fmtCurrency(item.liggeldLaden),
          eigenLostijd: fmtHours(item.lostijd),
          eigenLiggeldLossen: fmtCurrency(item.liggeldLossen),
          marktPrijs: marktLading ? fmtPrice(marktLading.prijs) : "—",
          marktLaadtijd: marktLading ? fmtHours(marktLading.laadtijd) : "—",
          marktLiggeldLaden: marktLading ? fmtCurrency(marktLading.liggeldLaden) : "—",
          marktLostijd: marktLading ? fmtHours(marktLading.lostijd) : "—",
          marktLiggeldLossen: marktLading ? fmtCurrency(marktLading.liggeldLossen) : "—",
        };

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("useLadingEigenDetail error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id]);

  return { data, loading, error };
}

export function useVaartuigMarktDetail(id: string | undefined) {
  const [data, setData] = useState<ResolvedVaartuigMarkt | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const [item, maps] = await Promise.all([
          api.get<VaartuigMarkt>("vaartuig_markt", id),
          getLookups(),
        ]);

        const locatie = maps.havens.get(item.huidigeLocatieId);
        const bron = maps.bronnen.get(item.bronId);
        const relatie = maps.relaties.get(item.relatieId);
        const eigenaar = item.eigenaarId ? maps.gebruikers.get(item.eigenaarId) : null;
        const contact = relatie?.contactPersoonIds?.[0]
          ? maps.contactPersonen.get(relatie.contactPersoonIds[0])
          : null;
        const bijz = item.bijzonderheidIds
          .map(bid => maps.bijzonderheden.get(bid))
          .filter(Boolean)
          .map(b => b!.naam);

        const resolved: ResolvedVaartuigMarkt = {
          raw: item,
          naam: item.naam,
          beschikbaarVanaf: item.beschikbaarVanaf || "—",
          huidigeLocatie: locatie?.naam || "—",
          eni: item.eni || "—",
          vlag: item.vlag || "—",
          meetbrief: item.meetbrief || "—",
          groottonnage: `${item.groottonnage.toLocaleString("nl-NL")} mt`,
          inhoud: `${item.inhoud.toLocaleString("nl-NL")} m³`,
          lengte: `${fmt(item.lengte)} m`,
          breedte: `${fmt(item.breedte)} m`,
          diepgang: `${fmt(item.diepgang)} m`,
          kruiphoogte: `${fmt(item.kruiphoogte)} m`,
          bijzonderheden: bijz,
          bron: bron?.titel || "—",
          bronDatum: bron?.datum || "",
          relatie: relatie?.naam || "—",
          contactpersoon: contact?.naam || "—",
          eigenaar: eigenaar?.naam || "—",
          eigenaarInitials: eigenaar ? getInitials(eigenaar.naam) : "",
          prioriteit: item.prioriteit,
        };

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("useVaartuigMarktDetail error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id]);

  return { data, loading, error };
}

export function useVaartuigEigenDetail(id: string | undefined) {
  const [data, setData] = useState<ResolvedVaartuigEigen | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const [item, maps] = await Promise.all([
          api.get<VaartuigEigen>("vaartuig_eigen", id),
          getLookups(),
        ]);

        const locatie = maps.havens.get(item.huidigeLocatieId);
        const eigenaar = maps.gebruikers.get(item.eigenaarId);
        const bijz = item.bijzonderheidIds
          .map(bid => maps.bijzonderheden.get(bid))
          .filter(Boolean)
          .map(b => b!.naam);

        const resolved: ResolvedVaartuigEigen = {
          raw: item,
          naam: item.naam,
          beschikbaarVanaf: item.beschikbaarVanaf || "—",
          huidigeLocatie: locatie?.naam || "—",
          eni: item.eni || "—",
          vlag: item.vlag || "—",
          meetbrief: item.meetbrief || "—",
          groottonnage: `${item.groottonnage.toLocaleString("nl-NL")} mt`,
          inhoud: `${item.inhoud.toLocaleString("nl-NL")} m³`,
          lengte: `${fmt(item.lengte)} m`,
          breedte: `${fmt(item.breedte)} m`,
          diepgang: `${fmt(item.diepgang)} m`,
          kruiphoogte: `${fmt(item.kruiphoogte)} m`,
          bijzonderheden: bijz,
          relatie: maps.relaties.get(item.relatieId)?.naam || "—",
          contactpersoon: maps.contactPersonen.get(maps.relaties.get(item.relatieId)?.contactPersoonIds?.[0] || "")?.naam || "—",
          eigenaar: eigenaar?.naam || "—",
          eigenaarInitials: eigenaar ? getInitials(eigenaar.naam) : "",
          deadline: item.deadline || "—",
        };

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("useVaartuigEigenDetail error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id]);

  return { data, loading, error };
}

/**
 * Combined hook that tries to load a lading from either eigen or markt.
 * Returns the resolved type and summary data for PijplijnDetail header.
 */
export interface PijplijnLadingSummary {
  type: "eigen" | "markt";
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  loadSummary: string;
}

export function usePijplijnLadingSummary(id: string | undefined, typeHint?: "eigen" | "markt") {
  const [data, setData] = useState<PijplijnLadingSummary | null>(null);
  const [detectedType, setDetectedType] = useState<"eigen" | "markt">(typeHint || "eigen");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const maps = await getLookups();

        // Try the hinted type first, then fallback
        const tryOrder: Array<"eigen" | "markt"> = typeHint
          ? [typeHint, typeHint === "eigen" ? "markt" : "eigen"]
          : ["eigen", "markt"];

        let resolved: PijplijnLadingSummary | null = null;

        for (const t of tryOrder) {
          try {
            if (t === "eigen") {
              const item = await api.get<LadingEigen>("lading_eigen", id);
              const partij = maps.partijen.get(item.partijId);
              const subpartij = maps.subpartijen.get(item.subpartijId);
              const ex = partij?.exId ? maps.exen.get(partij.exId) : null;
              const soort = partij ? maps.ladingSoorten.get(partij.ladingSoortId) : null;
              const subsoort = partij ? maps.ladingSubsoorten.get(partij.subsoortId) : null;
              const relatie = maps.relaties.get(item.relatieId);
              const laadhaven = partij ? maps.havens.get(partij.laadhavenId) : null;
              const loshaven = subpartij ? maps.havens.get(subpartij.loshavenId) : null;

              const soortLabel = subsoort ? `${soort?.naam || ""} (${subsoort.naam})` : soort?.naam || "";
              resolved = {
                type: "eigen",
                title: ex ? `${ex.type === "Warehouse" ? ex.naam : `m/v ${ex.naam}`} - ${relatie?.naam || ""}` : `${subpartij?.naam || ""} - ${relatie?.naam || ""}`,
                subtitle: `${formatTonnage(item.tonnage)} ton ${soortLabel}`,
                status: "Is in de markt",
                statusColor: "#17B26A",
                loadSummary: `${laadhaven?.naam || "—"} (${subpartij?.laaddatum ? formatDate(subpartij.laaddatum) : "Af te stemmen"}) naar ${loshaven?.naam || "—"} (${subpartij?.losdatum ? formatDate(subpartij.losdatum) : "Af te stemmen"})`,
              };
              setDetectedType("eigen");
            } else {
              const item = await api.get<LadingMarkt & { status?: string; pijplijnStatus?: string; laaddatum?: string; losdatum?: string }>("lading_markt", id);
              const soort = maps.ladingSoorten.get(item.ladingSoortId);
              const subsoort = maps.ladingSubsoorten.get(item.subsoortId);
              const relatie = maps.relaties.get(item.relatieId);
              const laadhaven = maps.havens.get(item.laadhavenId);
              const loshaven = maps.havens.get(item.loshavenId);

              const soortLabel = subsoort ? `${soort?.naam || ""} (${subsoort.naam})` : soort?.naam || "";
              const pijplijnStatus = (item as any).pijplijnStatus || "markt";
              const statusLabel = pijplijnStatus === "markt" ? "Is in de markt"
                : pijplijnStatus === "onderhandeling" ? "Is in onderhandeling"
                : "Geprijsd";
              const statusColor = pijplijnStatus === "markt" ? "#17B26A"
                : pijplijnStatus === "onderhandeling" ? "#F79009"
                : "#667085";

              resolved = {
                type: "markt",
                title: `${formatTonnage(item.tonnage)} ton ${soortLabel} - ${relatie?.naam || ""}`,
                subtitle: "",
                status: statusLabel,
                statusColor,
                loadSummary: `${laadhaven?.naam || "—"} (${item.laaddatum ? formatDate(item.laaddatum) : "Af te stemmen"}) naar ${loshaven?.naam || "—"} (${item.losdatum ? formatDate(item.losdatum) : "Af te stemmen"})`,
              };
              setDetectedType("markt");
            }
            break; // Success, stop trying
          } catch {
            continue; // Try next type
          }
        }

        if (!resolved) {
          throw new Error(`Lading met id "${id}" niet gevonden in eigen of markt`);
        }

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("usePijplijnLadingSummary error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id, typeHint]);

  return { data, detectedType, loading, error };
}

/**
 * Combined hook that tries to load a vaartuig from either eigen or markt.
 * Returns the resolved type and summary data for PijplijnDetail header.
 */
export interface PijplijnVaartuigSummary {
  type: "eigen" | "markt";
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  loadSummary: string;
}

export function usePijplijnVaartuigSummary(id: string | undefined, typeHint?: "eigen" | "markt") {
  const [data, setData] = useState<PijplijnVaartuigSummary | null>(null);
  const [detectedType, setDetectedType] = useState<"eigen" | "markt">(typeHint || "markt");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const maps = await getLookups();

        const tryOrder: Array<"eigen" | "markt"> = typeHint
          ? [typeHint, typeHint === "eigen" ? "markt" : "eigen"]
          : ["markt", "eigen"];

        let resolved: PijplijnVaartuigSummary | null = null;

        for (const t of tryOrder) {
          try {
            if (t === "markt") {
              const item = await api.get<VaartuigMarkt>("vaartuig_markt", id);
              const locatie = maps.havens.get(item.huidigeLocatieId);
              const relatie = maps.relaties.get(item.relatieId);

              resolved = {
                type: "markt",
                title: `${item.naam} - ${relatie?.naam || ""}`,
                subtitle: `${item.groottonnage.toLocaleString("nl-NL")} ton · ${item.lengte}m × ${item.breedte}m`,
                status: "Is in de markt",
                statusColor: "#17B26A",
                loadSummary: `${locatie?.naam || "—"} · Beschikbaar vanaf ${item.beschikbaarVanaf ? formatDate(item.beschikbaarVanaf) : "Af te stemmen"}`,
              };
              setDetectedType("markt");
            } else {
              const item = await api.get<VaartuigEigen>("vaartuig_eigen", id);
              const locatie = maps.havens.get(item.huidigeLocatieId);

              resolved = {
                type: "eigen",
                title: `${item.naam} - Rederij de Jong`,
                subtitle: `${item.groottonnage.toLocaleString("nl-NL")} ton · ${item.lengte}m × ${item.breedte}m`,
                status: "Is in de markt",
                statusColor: "#17B26A",
                loadSummary: `${locatie?.naam || "—"} · Beschikbaar vanaf ${item.beschikbaarVanaf ? formatDate(item.beschikbaarVanaf) : "Af te stemmen"}`,
              };
              setDetectedType("eigen");
            }
            break;
          } catch {
            continue;
          }
        }

        if (!resolved) {
          throw new Error(`Vaartuig met id "${id}" niet gevonden in eigen of markt`);
        }

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("usePijplijnVaartuigSummary error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id, typeHint]);

  return { data, detectedType, loading, error };
}

/**
 * Unified hook for inbox detail pages - resolves a lading_markt with full summary.
 */
export interface InboxLadingSummary {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
}

export function useInboxLadingSummary(id: string | undefined) {
  const [data, setData] = useState<InboxLadingSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const [item, maps] = await Promise.all([
          api.get<LadingMarkt & { laaddatum?: string; losdatum?: string }>("lading_markt", id),
          getLookups(),
        ]);

        const soort = maps.ladingSoorten.get(item.ladingSoortId);
        const subsoort = maps.ladingSubsoorten.get(item.subsoortId);
        const laadhaven = maps.havens.get(item.laadhavenId);
        const loshaven = maps.havens.get(item.loshavenId);

        const soortLabel = subsoort ? `${soort?.naam || ""} (${subsoort.naam})` : soort?.naam || "";
        const title = `${formatTonnage(item.tonnage)} ton ${soortLabel}`;

        const resolved: InboxLadingSummary = {
          title,
          subtitle: `Vanuit ${laadhaven?.naam || "—"} (${item.laaddatum ? formatDate(item.laaddatum) : "Af te stemmen"}) naar ${loshaven?.naam || "—"} (${item.losdatum ? formatDate(item.losdatum) : "Af te stemmen"})`,
          breadcrumbLabel: title.substring(0, 20),
        };

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("useInboxLadingSummary error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id]);

  return { data, loading, error };
}

/**
 * Unified hook for inbox vessel detail pages - resolves a vaartuig_markt with full summary.
 */
export interface InboxVaartuigSummary {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
}

export function useInboxVaartuigSummary(id: string | undefined) {
  const [data, setData] = useState<InboxVaartuigSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const [item, maps] = await Promise.all([
          api.get<VaartuigMarkt>("vaartuig_markt", id),
          getLookups(),
        ]);

        const locatie = maps.havens.get(item.huidigeLocatieId);

        const resolved: InboxVaartuigSummary = {
          title: item.naam,
          subtitle: `Motorschip in ${locatie?.naam || "—"} · Beschikbaar op ${item.beschikbaarVanaf ? formatDate(item.beschikbaarVanaf) : "Af te stemmen"}`,
          breadcrumbLabel: item.naam,
        };

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("useInboxVaartuigSummary error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id]);

  return { data, loading, error };
}

/**
 * Hook for bevrachting lading detail - resolves an eigen lading with full summary.
 */
export interface BevrachtingLadingSummary {
  title: string;
  exType?: string;
  subtitle: string;
  status: string;
  statusVariant: "success" | "warning" | "brand" | "grey";
  breadcrumbLabel: string;
}

export function useBevrachtingLadingSummary(id: string | undefined) {
  const [data, setData] = useState<BevrachtingLadingSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const maps = await getLookups();
        let resolved: BevrachtingLadingSummary;

        // Try lading_eigen first, then fall back to lading_markt
        try {
          const item = await api.get<LadingEigen & { status?: string }>("lading_eigen", id);

          const partij = maps.partijen.get(item.partijId);
          const subpartij = maps.subpartijen.get(item.subpartijId);
          const ex = partij?.exId ? maps.exen.get(partij.exId) : null;
          const soort = partij ? maps.ladingSoorten.get(partij.ladingSoortId) : null;
          const subsoort = partij ? maps.ladingSubsoorten.get(partij.subsoortId) : null;
          const laadhaven = partij ? maps.havens.get(partij.laadhavenId) : null;
          const loshaven = subpartij ? maps.havens.get(subpartij.loshavenId) : null;

          const soortLabel = subsoort ? `${soort?.naam || ""} (${subsoort.naam})` : soort?.naam || "";
          const title = ex ? (ex.type === "Warehouse" ? ex.naam : `m/v ${ex.naam}`) : subpartij?.naam || id || "—";
          const status = (item as any).status || "intake";

          resolved = {
            title,
            exType: ex?.type,
            subtitle: `${formatTonnage(item.tonnage)} ton ${soortLabel} vanuit ${laadhaven?.naam || "—"} (${subpartij?.laaddatum ? formatDate(subpartij.laaddatum) : "Af te stemmen"}) naar ${loshaven?.naam || "—"} (${subpartij?.losdatum ? formatDate(subpartij.losdatum) : "Af te stemmen"})`,
            status: status === "pijplijn" ? "Pijplijn" : status === "inbox" ? "Inbox" : status === "markt" ? "In de markt" : status === "werklijst" ? "Werklijst" : status === "intake" ? "Intake" : "Gesloten",
            statusVariant: status === "pijplijn" ? "brand" : status === "inbox" ? "grey" : status === "markt" ? "success" : status === "werklijst" ? "warning" : status === "intake" ? "brand" : "grey",
            breadcrumbLabel: title.substring(0, 20),
          };
        } catch {
          const item = await api.get<LadingMarkt & { status?: string; laaddatum?: string; losdatum?: string }>("lading_markt", id);

          const soort = maps.ladingSoorten.get(item.ladingSoortId);
          const subsoort = maps.ladingSubsoorten.get(item.subsoortId);
          const laadhaven = maps.havens.get(item.laadhavenId);
          const loshaven = maps.havens.get(item.loshavenId);

          const soortLabel = subsoort ? `${soort?.naam || ""} (${subsoort.naam})` : soort?.naam || "";
          const title = `${formatTonnage(item.tonnage)} ton ${soortLabel}` || id || "—";
          const status = (item as any).status || "inbox";

          resolved = {
            title,
            subtitle: `vanuit ${laadhaven?.naam || "—"} (${item.laaddatum ? formatDate(item.laaddatum) : "Af te stemmen"}) naar ${loshaven?.naam || "—"} (${item.losdatum ? formatDate(item.losdatum) : "Af te stemmen"})`,
            status: status === "pijplijn" ? "Pijplijn" : status === "inbox" ? "Inbox" : status === "markt" ? "In de markt" : status === "werklijst" ? "Werklijst" : status === "intake" ? "Intake" : "Gesloten",
            statusVariant: status === "pijplijn" ? "brand" : status === "inbox" ? "grey" : status === "markt" ? "success" : status === "werklijst" ? "warning" : status === "intake" ? "brand" : "grey",
            breadcrumbLabel: title.substring(0, 20),
          };
        }

        if (mountedRef.current) setData(resolved);
      } catch (err: any) {
        console.error("useBevrachtingLadingSummary error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id]);

  return { data, loading, error };
}

/**
 * Hook for bevrachting vaartuig detail - resolves an eigen vaartuig with full summary.
 */
export interface BevrachtingVaartuigSummary {
  title: string;
  subtitle: string;
  status: string;
  statusVariant: "success" | "warning" | "brand" | "grey";
  breadcrumbLabel: string;
}

export function useBevrachtingVaartuigSummary(id: string | undefined) {
  const [data, setData] = useState<BevrachtingVaartuigSummary | null>(null);
  const [detectedType, setDetectedType] = useState<"eigen" | "markt">("eigen");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (!id) { setLoading(false); return; }

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const maps = await getLookups();
        let item: (VaartuigEigen | VaartuigMarkt) & { status?: string };
        let type: "eigen" | "markt" = "eigen";

        // Try eigen first, then markt
        try {
          item = await api.get<VaartuigEigen & { status?: string }>("vaartuig_eigen", id);
          type = "eigen";
        } catch {
          item = await api.get<VaartuigMarkt & { status?: string }>("vaartuig_markt", id);
          type = "markt";
        }

        const locatie = maps.havens.get(item.huidigeLocatieId);
        const status = (item as any).status || "intake";

        const resolved: BevrachtingVaartuigSummary = {
          title: item.naam,
          subtitle: `Motorschip · ${item.groottonnage.toLocaleString("nl-NL")} ton · ${locatie?.naam || "—"} (${item.beschikbaarVanaf ? formatDate(item.beschikbaarVanaf) : "Af te stemmen"})`,
          status: status === "pijplijn" ? "Pijplijn" : status === "inbox" ? "Inbox" : status === "markt" ? "In de markt" : status === "werklijst" ? "Werklijst" : status === "intake" ? "Intake" : "Gesloten",
          statusVariant: status === "pijplijn" ? "brand" : status === "inbox" ? "grey" : status === "markt" ? "success" : status === "werklijst" ? "warning" : status === "intake" ? "brand" : "grey",
          breadcrumbLabel: item.naam,
        };

        if (mountedRef.current) {
          setDetectedType(type);
          setData(resolved);
        }
      } catch (err: any) {
        console.error("useBevrachtingVaartuigSummary error:", err);
        if (mountedRef.current) setError(err.message);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    })();

    return () => { mountedRef.current = false; };
  }, [id]);

  return { data, detectedType, loading, error };
}

function formatTonnage(t: number): string {
  return t >= 1000 ? `${(t / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}.000` : `${t}`;
}

function formatDate(d: string): string {
  if (!d) return "Af te stemmen";
  try {
    const date = new Date(d);
    if (isNaN(date.getTime())) return d;
    const days = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
    const months = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  } catch {
    return d;
  }
}