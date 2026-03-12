import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router";
import { Search, SlidersHorizontal, Package, Users, Ship, ArrowUp, ArrowDown, CornerDownLeft, Clock } from "lucide-react";
import { Dialog, DialogOverlay, DialogPortal } from "./ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { mockRelaties, mockRelatieLadingen, mockRelatieVaartuigen } from "../data/mock-relatie-data";
import type { RelatieLading, RelatieVaartuig } from "../data/mock-relatie-data";
import type { Relatie } from "../data/api";

type SearchResultType = "lading" | "vaartuig" | "relatie";

interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;
  path: string;
  meta?: Record<string, string>;
}

const STATUS_LABELS: Record<string, string> = {
  intake: "Intake",
  werklijst: "Werklijst",
  markt: "Op de markt",
  gesloten: "Gesloten",
  beschikbaar: "Beschikbaar",
  onderweg: "Onderweg",
  beladen: "Beladen",
  in_onderhoud: "In onderhoud",
  actief: "Actief",
  prospect: "Prospect",
  inactief: "Inactief",
};

function buildSearchResults(): SearchResult[] {
  const results: SearchResult[] = [];

  mockRelatieLadingen.forEach((l: RelatieLading) => {
    const relatie = mockRelaties.find((r) => r.id === l.relatieId);
    results.push({
      id: l.id,
      type: "lading",
      title: l.titel,
      subtitle: `${l.product} · ${l.tonnage}`,
      path: `/lading/${l.id}`,
      meta: {
        product: l.product,
        tonnage: l.tonnage,
        laadhaven: l.laadhaven,
        loshaven: l.loshaven,
        laaddatum: l.laaddatum,
        status: STATUS_LABELS[l.status] || l.status,
        relatie: relatie?.naam || "",
      },
    });
  });

  mockRelatieVaartuigen.forEach((v: RelatieVaartuig) => {
    const relatie = mockRelaties.find((r) => r.id === v.relatieId);
    results.push({
      id: v.id,
      type: "vaartuig",
      title: v.naam,
      subtitle: `${v.type} · ${v.capaciteit}`,
      path: `/crm/relatie/${v.relatieId}`,
      meta: {
        type: v.type,
        capaciteit: v.capaciteit,
        locatie: v.locatie,
        beschikbaar: v.beschikbaarVanaf,
        status: STATUS_LABELS[v.status] || v.status,
        relatie: relatie?.naam || "",
      },
    });
  });

  mockRelaties.forEach((r: Relatie) => {
    results.push({
      id: r.id,
      type: "relatie",
      title: r.naam,
      subtitle: [r.plaats, r.land].filter(Boolean).join(", "),
      path: `/crm/relatie/${r.id}`,
      meta: {
        status: STATUS_LABELS[r.status || ""] || r.status || "",
        plaats: [r.plaats, r.land].filter(Boolean).join(", "),
        ...(r.email ? { email: r.email } : {}),
        ...(r.telefoon ? { telefoon: r.telefoon } : {}),
        ...(r.soortRelatie?.length ? { soort: r.soortRelatie.join(", ") } : {}),
      },
    });
  });

  return results;
}

const TYPE_CONFIG: Record<SearchResultType, { label: string; icon: typeof Package; color: string }> = {
  lading: { label: "Lading", icon: Package, color: "#1567A4" },
  vaartuig: { label: "Vaartuig", icon: Ship, color: "#667085" },
  relatie: { label: "Relatie", icon: Users, color: "#7A5AF8" },
};

const ALL_TYPES: SearchResultType[] = ["lading", "vaartuig", "relatie"];

// Persist recent searches in localStorage
const RECENT_KEY = "rdj-recent-searches";
const MAX_RECENT = 8;

function getRecentSearches(): SearchResult[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function addRecentSearch(result: SearchResult) {
  const recent = getRecentSearches().filter((r) => !(r.id === result.id && r.type === result.type));
  recent.unshift(result);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)));
}

interface GlobalSearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GlobalSearchDialog({ open, onOpenChange }: GlobalSearchDialogProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Set<SearchResultType>>(new Set());
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const allResults = useMemo(() => buildSearchResults(), []);

  const isSearching = query.trim().length > 0 || activeFilters.size > 0;

  const filteredResults = useMemo(() => {
    let results = allResults;

    if (activeFilters.size > 0) {
      results = results.filter((r) => activeFilters.has(r.type));
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.subtitle.toLowerCase().includes(q) ||
          Object.values(r.meta || {}).some((v) => v.toLowerCase().includes(q))
      );
    }

    return results;
  }, [allResults, query, activeFilters]);

  const displayResults = isSearching ? filteredResults : recentSearches;
  const selectedResult = displayResults[selectedIndex] || null;

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setShowFilters(false);
      setActiveFilters(new Set());
      setRecentSearches(getRecentSearches());
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  // Keep selected index in bounds
  useEffect(() => {
    if (selectedIndex >= displayResults.length) {
      setSelectedIndex(Math.max(0, displayResults.length - 1));
    }
  }, [displayResults.length, selectedIndex]);

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll("[data-search-item]");
    const item = items[selectedIndex];
    if (item) {
      item.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      addRecentSearch(result);
      onOpenChange(false);
      navigate(result.path);
    },
    [navigate, onOpenChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, displayResults.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedResult) handleSelect(selectedResult);
          break;
        case "Escape":
          e.preventDefault();
          onOpenChange(false);
          break;
      }
    },
    [displayResults.length, selectedResult, handleSelect, onOpenChange]
  );

  const toggleFilter = (type: SearchResultType) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
    setSelectedIndex(0);
  };

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/40" />
        <DialogPrimitive.Content
          className="fixed top-[12%] left-[50%] z-50 translate-x-[-50%] w-full max-w-[760px] bg-white rounded-[12px] shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)] overflow-hidden outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
          onKeyDown={handleKeyDown}
        >
          {/* Search input */}
          <div className="flex items-center gap-[8px] px-[16px] py-[12px]">
            <Search className="shrink-0 size-[20px]" stroke="#667085" strokeWidth={2} />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Zoek naar alles..."
              className="flex-1 font-sans text-[14px] text-rdj-text-primary placeholder:text-rdj-text-tertiary outline-none bg-transparent"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`shrink-0 p-[6px] rounded-[4px] transition-colors ${
                showFilters || activeFilters.size > 0
                  ? "bg-rdj-bg-brand text-rdj-text-brand"
                  : "text-rdj-fg-secondary hover:bg-rdj-bg-secondary-hover"
              }`}
            >
              <SlidersHorizontal className="size-[16px]" strokeWidth={2} />
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="flex items-center gap-[6px] px-[16px] pb-[12px]">
              {ALL_TYPES.map((type) => {
                const config = TYPE_CONFIG[type];
                const isActive = activeFilters.has(type);
                return (
                  <button
                    key={type}
                    onClick={() => toggleFilter(type)}
                    className={`flex items-center gap-[6px] px-[10px] py-[4px] rounded-[6px] font-sans text-[12px] font-medium transition-colors border ${
                      isActive
                        ? "bg-rdj-bg-brand border-[#1567A4]/20 text-rdj-text-brand"
                        : "border-rdj-border-secondary text-rdj-text-secondary hover:bg-rdj-bg-secondary"
                    }`}
                  >
                    <config.icon className="size-[12px]" strokeWidth={2} />
                    {config.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Content area: results + preview */}
          <div className="flex border-t border-rdj-border-secondary" style={{ height: "420px" }}>
            {/* Results list */}
            <div ref={listRef} className="flex-1 overflow-y-auto min-w-0">
              {displayResults.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-[8px]">
                  {isSearching ? (
                    <p className="font-sans text-[14px] text-rdj-text-tertiary">Geen resultaten gevonden</p>
                  ) : (
                    <>
                      <Clock className="size-[20px]" stroke="#d0d5dd" strokeWidth={2} />
                      <p className="font-sans text-[13px] text-rdj-text-tertiary">Geen recente zoekopdrachten</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="py-[4px]">
                  {!isSearching && (
                    <p className="px-[16px] py-[6px] font-sans text-[11px] font-medium text-rdj-text-tertiary uppercase tracking-wider">
                      Recent
                    </p>
                  )}
                  {displayResults.map((result, index) => {
                    const config = TYPE_CONFIG[result.type];
                    const Icon = config.icon;
                    const isSelected = index === selectedIndex;
                    return (
                      <div
                        key={`${result.type}-${result.id}`}
                        data-search-item
                        className={`flex items-center gap-[10px] px-[16px] py-[8px] cursor-pointer transition-colors ${
                          isSelected ? "bg-rdj-bg-secondary" : "hover:bg-rdj-bg-primary-hover"
                        }`}
                        onClick={() => handleSelect(result)}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        {!isSearching && (
                          <Clock className="shrink-0 size-[14px]" stroke="#d0d5dd" strokeWidth={2} />
                        )}
                        {isSearching && (
                          <div
                            className="shrink-0 flex items-center justify-center size-[28px] rounded-[6px]"
                            style={{ backgroundColor: `${config.color}10` }}
                          >
                            <Icon className="size-[14px]" stroke={config.color} strokeWidth={2} />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-sans text-[13px] font-medium text-rdj-text-primary truncate leading-[18px]">
                            {result.title}
                          </p>
                          <p className="font-sans text-[12px] text-rdj-text-tertiary truncate leading-[16px]">
                            {result.subtitle}
                          </p>
                        </div>
                        <span
                          className="shrink-0 font-sans text-[11px] font-medium px-[6px] py-[2px] rounded-[4px]"
                          style={{
                            backgroundColor: `${config.color}10`,
                            color: config.color,
                          }}
                        >
                          {config.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Preview panel */}
            <div className="w-[280px] shrink-0 border-l border-rdj-border-secondary bg-rdj-bg-secondary overflow-y-auto">
              {selectedResult ? (
                <div className="p-[20px]">
                  <div className="flex items-center gap-[8px] mb-[16px]">
                    {(() => {
                      const config = TYPE_CONFIG[selectedResult.type];
                      const Icon = config.icon;
                      return (
                        <>
                          <div
                            className="shrink-0 flex items-center justify-center size-[32px] rounded-[8px]"
                            style={{ backgroundColor: `${config.color}15` }}
                          >
                            <Icon className="size-[16px]" stroke={config.color} strokeWidth={2} />
                          </div>
                          <span
                            className="font-sans text-[11px] font-medium px-[6px] py-[2px] rounded-[4px]"
                            style={{
                              backgroundColor: `${config.color}10`,
                              color: config.color,
                            }}
                          >
                            {config.label}
                          </span>
                        </>
                      );
                    })()}
                  </div>
                  <h3 className="font-sans text-[14px] font-semibold text-rdj-text-primary leading-[20px] mb-[4px]">
                    {selectedResult.title}
                  </h3>
                  <p className="font-sans text-[12px] text-rdj-text-tertiary leading-[16px] mb-[16px]">
                    {selectedResult.subtitle}
                  </p>
                  {selectedResult.meta && (
                    <div className="flex flex-col gap-[10px]">
                      {Object.entries(selectedResult.meta).map(([key, value]) =>
                        value ? (
                          <div key={key}>
                            <p className="font-sans text-[11px] font-medium text-rdj-text-tertiary uppercase tracking-wider mb-[2px]">
                              {key}
                            </p>
                            <p className="font-sans text-[13px] text-rdj-text-primary leading-[18px]">{value}</p>
                          </div>
                        ) : null
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="font-sans text-[13px] text-rdj-text-tertiary">Geen preview beschikbaar</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer with shortcuts */}
          <div className="flex items-center gap-[16px] px-[16px] py-[10px] border-t border-rdj-border-secondary bg-rdj-bg-secondary">
            <div className="flex items-center gap-[6px]">
              <span className="flex items-center justify-center size-[20px] rounded-[4px] bg-white border border-rdj-border-secondary shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <ArrowUp className="size-[12px]" stroke="#667085" strokeWidth={2} />
              </span>
              <span className="flex items-center justify-center size-[20px] rounded-[4px] bg-white border border-rdj-border-secondary shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <ArrowDown className="size-[12px]" stroke="#667085" strokeWidth={2} />
              </span>
              <span className="font-sans text-[11px] text-rdj-text-tertiary">Navigeren</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <span className="flex items-center justify-center h-[20px] px-[6px] rounded-[4px] bg-white border border-rdj-border-secondary shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <CornerDownLeft className="size-[12px]" stroke="#667085" strokeWidth={2} />
              </span>
              <span className="font-sans text-[11px] text-rdj-text-tertiary">Openen</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <span className="flex items-center justify-center h-[20px] px-[6px] rounded-[4px] bg-white border border-rdj-border-secondary font-sans text-[11px] text-rdj-text-tertiary font-medium shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                Esc
              </span>
              <span className="font-sans text-[11px] text-rdj-text-tertiary">Sluiten</span>
            </div>
            <div className="ml-auto flex items-center gap-[6px]">
              <span className="flex items-center justify-center h-[20px] px-[6px] rounded-[4px] bg-white border border-rdj-border-secondary font-sans text-[11px] text-rdj-text-tertiary font-medium shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                ⌘K
              </span>
              <span className="font-sans text-[11px] text-rdj-text-tertiary">Zoeken</span>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
