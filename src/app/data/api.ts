/**
 * Local in-memory data store for Rederij de Jong market module.
 * Provides typed CRUD operations backed by static dummy data.
 * No external API calls — everything is instant.
 */

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

export type SoortRelatie = 'lading-eigenaar' | 'bevrachter' | 'scheepseigenaar' | 'controleorganisatie' | 'terminal';

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
  soortRelatie?: SoortRelatie[];
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
  ladingSoortId?: string;
  laadhavenNaam?: string;
  loshavenNaam?: string;
  tonnage?: number;
  vrachtprijs?: number;
  laaddatum?: string;
  losdatum?: string;
  startDatum?: string;
  eindDatum?: string;
  routes?: ContractRoute[];
  aanmaakDatum: string;
  laatsteUpdate: string;
  opmerkingen?: string;
}

// ── Import entity data ──

import { mockRelaties, mockContactPersonen, mockGebruikers } from "./mock-relatie-data";
import { mockLadingSoorten, mockLadingSubsoorten, mockBijzonderheden } from "./mock-contract-data";
import { havens } from "./entities/havens";
import { bronnen } from "./entities/bronnen";
import { partijen, subpartijen, exen } from "./entities/partijen";
import { ladingenMarkt } from "./entities/ladingen-markt";
import { ladingenEigen } from "./entities/ladingen-eigen";
import { vaartuigenMarkt } from "./entities/vaartuigen-markt";
import { vaartuigenEigen } from "./entities/vaartuigen-eigen";
import { onderhandelingen, boden } from "./entities/onderhandelingen";

// ── In-memory store ──

const store: Record<EntityType, any[]> = {
  relatie: [...mockRelaties],
  contact_persoon: [...mockContactPersonen],
  gebruiker: [...mockGebruikers],
  lading_soort: [...mockLadingSoorten],
  lading_subsoort: [...mockLadingSubsoorten],
  bijzonderheid: [...mockBijzonderheden],
  haven: [...havens],
  bron: [...bronnen],
  partij: [...partijen],
  subpartij: [...subpartijen],
  ex: [...exen],
  lading_markt: [...ladingenMarkt],
  lading_eigen: [...ladingenEigen],
  vaartuig_markt: [...vaartuigenMarkt],
  vaartuig_eigen: [...vaartuigenEigen],
  onderhandeling: [...onderhandelingen],
  bod: [...boden],
};

let nextId = 1000;
function generateId(): string {
  return `auto-${nextId++}`;
}

// ── CRUD operations (synchronous, wrapped in Promise for API compat) ──

/** List all items of an entity type */
export async function list<T = any>(entity: EntityType): Promise<T[]> {
  return [...(store[entity] || [])] as T[];
}

/** Get a single item by ID */
export async function get<T = any>(entity: EntityType, id: string): Promise<T> {
  const item = (store[entity] || []).find((i: any) => i.id === id);
  if (!item) throw new Error(`${entity} with id "${id}" not found`);
  return { ...item } as T;
}

/** Create a new item (ID auto-generated if not provided) */
export async function create<T = any>(entity: EntityType, data: Partial<T>): Promise<T> {
  const item = { id: generateId(), ...data } as any;
  store[entity].push(item);
  return { ...item } as T;
}

/** Full update of an item */
export async function update<T = any>(entity: EntityType, id: string, data: Partial<T>): Promise<T> {
  const arr = store[entity] || [];
  const idx = arr.findIndex((i: any) => i.id === id);
  if (idx === -1) throw new Error(`${entity} with id "${id}" not found`);
  arr[idx] = { ...arr[idx], ...data, id };
  return { ...arr[idx] } as T;
}

/** Partial update (merge fields) */
export async function patch<T = any>(entity: EntityType, id: string, data: Partial<T>): Promise<T> {
  return update<T>(entity, id, data);
}

/** Delete an item */
export async function remove(entity: EntityType, id: string): Promise<void> {
  const arr = store[entity] || [];
  const idx = arr.findIndex((i: any) => i.id === id);
  if (idx !== -1) arr.splice(idx, 1);
}

/** Get multiple items by their IDs */
export async function batchGet<T = any>(entity: EntityType, ids: string[]): Promise<T[]> {
  if (ids.length === 0) return [];
  const idSet = new Set(ids);
  return (store[entity] || []).filter((i: any) => idSet.has(i.id)).map((i: any) => ({ ...i })) as T[];
}

/** Create multiple items at once */
export async function batchCreate<T = any>(entity: EntityType, items: Partial<T>[]): Promise<T[]> {
  return Promise.all(items.map(item => create<T>(entity, item)));
}

/** Seed — no-op for local store, data is already loaded */
export async function seed(): Promise<string> {
  return "Lokale data is al geladen.";
}

/** Get entity counts */
export async function stats(): Promise<Record<string, number>> {
  const result: Record<string, number> = {};
  for (const [key, arr] of Object.entries(store)) {
    result[key] = arr.length;
  }
  return result;
}

// ── Convenience: resolve relations ──

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
