/**
 * Frontend API client for Rederij de Jong market module.
 * Provides typed CRUD operations for all entities against the KV-backed server.
 */

import { projectId, publicAnonKey } from "../../../utils/supabase/info";

const BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-53a0cbca`;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${publicAnonKey}`,
};

// ── Generic response type ──
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

async function request<T>(
  method: string,
  path: string,
  body?: any
): Promise<T> {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const json: ApiResponse<T> = await res.json();

  if (!json.success) {
    console.error(`API error [${method} ${path}]:`, json.error);
    throw new Error(json.error || "Unknown API error");
  }

  return json.data as T;
}

// ── Entity types ──

export type EntityType =
  | "relatie"
  | "contact_persoon"
  | "lading_soort"
  | "lading_subsoort"
  | "bijzonderheid"
  | "haven"
  | "bron"
  | "gebruiker"
  | "lading_markt"
  | "partij"
  | "ex"
  | "subpartij"
  | "lading_eigen"
  | "vaartuig_markt"
  | "vaartuig_eigen"
  | "onderhandeling"
  | "bod";

// ── Data interfaces ──

export interface Relatie {
  id: string;
  naam: string;
  contactPersoonIds: string[];
  adres?: string;
  postcode?: string;
  plaats?: string;
  land?: string;
  telefoon?: string;
  email?: string;
  website?: string;
  ladingGroepen?: string[];
  eigenaarId?: string;
  status?: 'actief' | 'inactief' | 'prospect';
  contactFrequentie?: 'wekelijks' | 'maandelijks' | 'kwartaal' | 'geen';
  laatsteContact?: string;
  opmerkingen?: string;
}

export interface ContactPersoon {
  id: string;
  naam: string;
  email: string;
  telefoon: string;
  relatieId: string;
  functie?: string;
  eigenaarId?: string;
}

export interface LadingSoort {
  id: string;
  naam: string;
  soortelijkGewicht: number;
  subsoortIds: string[];
}

export interface LadingSubsoort {
  id: string;
  naam: string;
  soortelijkGewicht: number;
  ladingSoortId: string;
}

export interface Bijzonderheid {
  id: string;
  naam: string;
}

export interface Haven {
  id: string;
  naam: string;
  geolocatie: { lat: number; lng: number };
}

export interface Bron {
  id: string;
  titel: string;
  datum: string;
}

export interface Gebruiker {
  id: string;
  naam: string;
  profielfoto: string;
}

export interface LadingMarkt {
  id: string;
  opmerking: string;
  tonnage: number;
  ladingSoortId: string;
  subsoortId: string;
  bijzonderheidIds: string[];
  laadhavenId: string;
  loshavenId: string;
  bronId: string;
  relatieId: string;
  eigenaarId: string | null;
  prioriteit: number;
  prijs: number | null;
  laadtijd: number | null;
  liggeldLaden: number;
  lostijd: number | null;
  liggeldLossen: number;
}

export interface Partij {
  id: string;
  naam: string;
  ladingSoortId: string;
  subsoortId: string;
  exId: string;
  laadhavenId: string;
  subpartijIds: string[];
}

export interface Ex {
  id: string;
  naam: string;
  type: string;
}

export interface Subpartij {
  id: string;
  naam: string;
  partijId: string;
  bijzonderheidIds: string[];
  loshavenId: string;
  laaddatum: string | null;
  losdatum: string | null;
}

export interface LadingEigen {
  id: string;
  opmerking: string;
  partijId: string;
  subpartijId: string;
  tonnage: number;
  relatieId: string;
  eigenaarId: string;
  deadline: string;
  prijs: number | null;
  laadtijd: number | null;
  liggeldLaden: number;
  lostijd: number | null;
  liggeldLossen: number;
}

export interface VaartuigMarkt {
  id: string;
  naam: string;
  opmerking: string;
  beschikbaarVanaf: string;
  huidigeLocatieId: string;
  eni: string;
  vlag: string;
  meetbrief: string;
  groottonnage: number;
  inhoud: number;
  lengte: number;
  breedte: number;
  diepgang: number;
  kruiphoogte: number;
  bijzonderheidIds: string[];
  bronId: string;
  relatieId: string;
  eigenaarId: string | null;
  prioriteit: number;
}

export interface VaartuigEigen {
  id: string;
  naam: string;
  opmerking: string;
  beschikbaarVanaf: string;
  huidigeLocatieId: string;
  eni: string;
  vlag: string;
  meetbrief: string;
  groottonnage: number;
  inhoud: number;
  lengte: number;
  breedte: number;
  diepgang: number;
  kruiphoogte: number;
  bijzonderheidIds: string[];
  relatieId: string;
  eigenaarId: string;
  deadline: string;
}

export interface Onderhandeling {
  id: string;
  bodId: string;
  relatieId: string;
  deadline: string;
}

export interface Bod {
  id: string;
  opmerking: string;
  ladingId: string;
  ladingType: "markt" | "eigen";
  vaartuigId: string | null;
  vaartuigType: "markt" | "eigen" | null;
  vrachtprijs: number;
  tonnage: number;
  laaddatum: string | null;
  losdatum: string | null;
  laadtijd: number | null;
  liggeldLaden: number;
  lostijd: number | null;
  liggeldLossen: number;
  laagwaterToeslag: number;
  status: string;
}

// ── CRM Contract types ──

export type ContractType = "spot" | "contract";
export type ContractSoort = "bevrachting" | "verhuur_duwbak" | "op_overslag" | "inspectie_goederen";
export type ContractStatus = "aandacht_nodig" | "in_onderhandeling" | "gewonnen" | "verloren";

export interface ContractRoute {
  id: string;
  laadhavenNaam: string;
  loshavenNaam: string;
  tonnage?: number;
  vrachtprijs?: number;
}

export interface Contract {
  id: string;
  titel: string;
  relatieId: string;
  contactPersoonId?: string;
  eigenaarId?: string;
  type: ContractType;
  soort: ContractSoort;
  status: ContractStatus;
  verlorenReden?: string;
  waarde?: number;
  // Spot
  laadhavenNaam?: string;
  loshavenNaam?: string;
  tonnage?: number;
  vrachtprijs?: number;
  laaddatum?: string;
  losdatum?: string;
  // Contract
  startDatum?: string;
  eindDatum?: string;
  routes?: ContractRoute[];
  // Meta
  aanmaakDatum: string;
  laatsteUpdate: string;
  opmerkingen?: string;
}

// ── CRUD operations ──

/** List all items of an entity type */
export async function list<T = any>(entity: EntityType): Promise<T[]> {
  return request<T[]>("GET", `/${entity}`);
}

/** Get a single item by ID */
export async function get<T = any>(entity: EntityType, id: string): Promise<T> {
  return request<T>("GET", `/${entity}/${id}`);
}

/** Create a new item (ID auto-generated if not provided) */
export async function create<T = any>(entity: EntityType, data: Partial<T>): Promise<T> {
  return request<T>("POST", `/${entity}`, data);
}

/** Full update of an item */
export async function update<T = any>(entity: EntityType, id: string, data: Partial<T>): Promise<T> {
  return request<T>("PUT", `/${entity}/${id}`, data);
}

/** Partial update (merge fields) */
export async function patch<T = any>(entity: EntityType, id: string, data: Partial<T>): Promise<T> {
  return request<T>("PATCH", `/${entity}/${id}`, data);
}

/** Delete an item */
export async function remove(entity: EntityType, id: string): Promise<void> {
  await request<void>("DELETE", `/${entity}/${id}`);
}

/** Get multiple items by their IDs */
export async function batchGet<T = any>(entity: EntityType, ids: string[]): Promise<T[]> {
  if (ids.length === 0) return [];
  return request<T[]>("POST", `/${entity}/batch`, { ids });
}

/** Create multiple items at once */
export async function batchCreate<T = any>(entity: EntityType, items: Partial<T>[]): Promise<T[]> {
  if (items.length === 0) return [];
  return request<T[]>("POST", `/${entity}/batch-create`, { items });
}

/** Seed the database with demo data */
export async function seed(): Promise<string> {
  const res = await fetch(`${BASE_URL}/seed`, {
    method: "POST",
    headers,
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error);
  return json.message;
}

/** Get entity counts */
export async function stats(): Promise<Record<string, number>> {
  return request<Record<string, number>>("GET", "/stats");
}

// ── Convenience: resolve relations ──

/**
 * Fetches items and resolves specified relation fields.
 * Example: listWithRelations('lading_markt', { relatieId: 'relatie', laadhavenId: 'haven' })
 * Returns items with _resolved.relatieId, _resolved.laadhavenId etc.
 */
export async function listWithRelations<T extends Record<string, any>>(
  entity: EntityType,
  relations: Record<string, EntityType>
): Promise<(T & { _resolved: Record<string, any> })[]> {
  const items = await list<T>(entity);

  // Collect all unique IDs per relation entity
  const idsByEntity: Record<string, Set<string>> = {};
  for (const [field, relEntity] of Object.entries(relations)) {
    if (!idsByEntity[relEntity]) idsByEntity[relEntity] = new Set();
    for (const item of items) {
      const val = item[field];
      if (val) {
        if (Array.isArray(val)) {
          val.forEach((v: string) => idsByEntity[relEntity].add(v));
        } else {
          idsByEntity[relEntity].add(val as string);
        }
      }
    }
  }

  // Batch fetch all related entities
  const resolvedMaps: Record<string, Map<string, any>> = {};
  await Promise.all(
    Object.entries(idsByEntity).map(async ([relEntity, idsSet]) => {
      const idsArr = Array.from(idsSet);
      if (idsArr.length === 0) return;
      const relItems = await batchGet(relEntity as EntityType, idsArr);
      const map = new Map<string, any>();
      for (const ri of relItems) {
        if (ri && ri.id) map.set(ri.id, ri);
      }
      resolvedMaps[relEntity] = map;
    })
  );

  // Attach resolved data to items
  return items.map((item) => {
    const resolved: Record<string, any> = {};
    for (const [field, relEntity] of Object.entries(relations)) {
      const map = resolvedMaps[relEntity];
      const val = item[field];
      if (map && val) {
        if (Array.isArray(val)) {
          resolved[field] = val.map((v: string) => map.get(v)).filter(Boolean);
        } else {
          resolved[field] = map.get(val as string) || null;
        }
      } else {
        resolved[field] = Array.isArray(val) ? [] : null;
      }
    }
    return { ...item, _resolved: resolved };
  });
}