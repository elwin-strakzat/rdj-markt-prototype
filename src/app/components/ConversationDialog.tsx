import { useState, useEffect, useRef, forwardRef } from "react";
import SegmentedButtonGroup from "./SegmentedButtonGroup";
import * as api from "../data/api";
import type { LadingEigen, VaartuigEigen, LadingMarkt, VaartuigMarkt, Partij, Subpartij } from "../data/api";
import {
  mockRelatieLadingen,
  mockRelatieVaartuigen,
  mockRelatieLadingMatches,
  mockRelatieVaartuigMatches,
} from "../data/mock-relatie-data";

/* ── Types ── */

type TabValue = "eigen-ladingen" | "eigen-vaartuigen" | "ladingen-relatie" | "vaartuigen-relatie";
type ItemStatus = "aangeboden" | "interesse" | "geen-interesse";

interface DisplayItem {
  id: string;
  title: string;
  subtitle: string;
  meta: string;
  source: "eigen" | "relatie" | "markt";
  kind: "lading" | "vaartuig";
  laadlocatie?: string;
  laaddatum?: string;
  loslocatie?: string;
  losdatum?: string;
}

interface MatchDisplayItem extends DisplayItem {
  matchPercentage: number;
}

type ConditionKey = "prijs" | "laadtijd" | "liggeldLaden" | "lostijd" | "liggeldLossen" | "overig";

interface ConditionValues {
  prijs?: string;
  laadtijd?: string;
  liggeldLaden?: string;
  lostijd?: string;
  liggeldLossen?: string;
  overig?: string;
}

const CONDITION_DEFS: { key: ConditionKey; label: string; placeholder: string; format: (v: string) => string }[] = [
  { key: "prijs", label: "Prijs", placeholder: "bijv. 4,00", format: v => `€${v} /ton` },
  { key: "laadtijd", label: "Laadtijd", placeholder: "bijv. 12", format: v => `${v} uur laden` },
  { key: "liggeldLaden", label: "Liggeld laden", placeholder: "bijv. 25", format: v => `€${v} liggeld laden` },
  { key: "lostijd", label: "Lostijd", placeholder: "bijv. 8", format: v => `${v} uur lossen` },
  { key: "liggeldLossen", label: "Liggeld lossen", placeholder: "bijv. 25", format: v => `€${v} liggeld lossen` },
  { key: "overig", label: "Overig", placeholder: "vrije tekst", format: v => v },
];

interface ConversationDialogProps {
  relatieId: string;
  relatieName: string;
  preSelectedItemId?: string;
  preSelectedItemType?: "lading" | "vaartuig";
  onClose: () => void;
  onSave?: () => void;
}

/* ── Main component ── */

export default function ConversationDialog({
  relatieId,
  relatieName,
  preSelectedItemId,
  preSelectedItemType,
  onClose,
  onSave,
}: ConversationDialogProps) {
  const getInitialTab = (): TabValue => {
    if (preSelectedItemType === "lading") return "eigen-ladingen";
    if (preSelectedItemType === "vaartuig") return "eigen-vaartuigen";
    return "eigen-ladingen";
  };

  const [activeTab, setActiveTab] = useState<TabValue>(getInitialTab);
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(preSelectedItemId ?? null);
  const [itemStatuses, setItemStatuses] = useState<Map<string, ItemStatus>>(new Map());
  const [itemConditions, setItemConditions] = useState<Map<string, ConditionValues>>(new Map());
  const [itemBidConditions, setItemBidConditions] = useState<Map<string, ConditionValues>>(new Map());
  const [expandedConditions, setExpandedConditions] = useState<Set<string>>(new Set());
  const [addingItem, setAddingItem] = useState<"lading" | "vaartuig" | null>(null);
  const [showMarktLadingen, setShowMarktLadingen] = useState(false);
  const [showMarktVaartuigen, setShowMarktVaartuigen] = useState(false);

  // Data
  const [eigenLadingen, setEigenLadingen] = useState<DisplayItem[]>([]);
  const [eigenVaartuigen, setEigenVaartuigen] = useState<DisplayItem[]>([]);
  const [marktLadingen, setMarktLadingen] = useState<DisplayItem[]>([]);
  const [marktVaartuigen, setMarktVaartuigen] = useState<DisplayItem[]>([]);
  const [relatieLadingenItems, setRelatieLadingenItems] = useState<DisplayItem[]>([]);
  const [relatieVaartuigenItems, setRelatieVaartuigenItems] = useState<DisplayItem[]>([]);

  useEffect(() => {
    loadData();
  }, [relatieId]);

  useEffect(() => {
    setSelectedLeftId(null);
  }, [activeTab]);

  async function loadData() {
    const allLadingenEigen = await api.list<LadingEigen & { status?: string }>("lading_eigen");
    const partijen = await api.list<Partij>("partij");
    const subpartijen = await api.list<Subpartij>("subpartij");
    const havens = await api.list<{ id: string; naam: string }>("haven");
    const partijMap = new Map(partijen.map(p => [p.id, p]));
    const subpartijMap = new Map(subpartijen.map(s => [s.id, s]));
    const havenMap = new Map(havens.map(h => [h.id, h]));

    setEigenLadingen(
      allLadingenEigen.map(le => {
        const partij = partijMap.get(le.partijId);
        const subpartij = subpartijMap.get(le.subpartijId);
        const laadHaven = partij ? havenMap.get(partij.laadhavenId)?.naam : undefined;
        const losHaven = subpartij ? havenMap.get(subpartij.loshavenId)?.naam : undefined;
        return {
          id: le.id,
          title: partij?.naam || le.opmerking || le.id,
          subtitle: `${le.tonnage.toLocaleString("nl-NL")} ton`,
          meta: "",
          source: "eigen" as const,
          kind: "lading" as const,
          laadlocatie: laadHaven,
          laaddatum: subpartij?.laaddatum ? formatDate(subpartij.laaddatum) : undefined,
          loslocatie: losHaven,
          losdatum: subpartij?.losdatum ? formatDate(subpartij.losdatum) : undefined,
        };
      })
    );

    const allVaartuigenEigen = await api.list<VaartuigEigen & { binding?: string }>("vaartuig_eigen");
    setEigenVaartuigen(
      allVaartuigenEigen.map(ve => ({
        id: ve.id,
        title: ve.naam,
        subtitle: `${ve.groottonnage.toLocaleString("nl-NL")} mt · ${ve.inhoud.toLocaleString("nl-NL")} m³`,
        meta: havenMap.get(ve.huidigeLocatieId)?.naam || "",
        source: "eigen" as const,
        kind: "vaartuig" as const,
      }))
    );

    // Markt ladingen (from other relaties)
    const allLadingenMarkt = await api.list<LadingMarkt & { status?: string; laaddatum?: string; losdatum?: string }>("lading_markt");
    const relaties = await api.list<{ id: string; naam: string }>("relatie");
    const relatieMap = new Map(relaties.map(r => [r.id, r]));
    const ladingSoorten = await api.list<{ id: string; naam: string }>("lading_soort");
    const soortMap = new Map(ladingSoorten.map(s => [s.id, s]));

    setMarktLadingen(
      allLadingenMarkt
        .filter(lm => lm.relatieId !== relatieId)
        .map(lm => {
          const laadHaven = havenMap.get(lm.laadhavenId)?.naam;
          const losHaven = havenMap.get(lm.loshavenId)?.naam;
          const relNaam = relatieMap.get(lm.relatieId)?.naam || "";
          const soort = soortMap.get(lm.ladingSoortId)?.naam || "";
          return {
            id: lm.id,
            title: `${lm.tonnage.toLocaleString("nl-NL")} ton ${soort}`,
            subtitle: relNaam,
            meta: "",
            source: "markt" as const,
            kind: "lading" as const,
            laadlocatie: laadHaven,
            laaddatum: lm.laaddatum ? formatDate(lm.laaddatum) : undefined,
            loslocatie: losHaven,
            losdatum: lm.losdatum ? formatDate(lm.losdatum) : undefined,
          };
        })
    );

    // Markt vaartuigen (from other relaties)
    const allVaartuigenMarkt = await api.list<VaartuigMarkt & { status?: string }>("vaartuig_markt");
    setMarktVaartuigen(
      allVaartuigenMarkt
        .filter(vm => vm.relatieId !== relatieId)
        .map(vm => ({
          id: vm.id,
          title: vm.naam,
          subtitle: `${vm.groottonnage.toLocaleString("nl-NL")} mt · ${vm.inhoud.toLocaleString("nl-NL")} m³`,
          meta: `${havenMap.get(vm.huidigeLocatieId)?.naam || ""} · ${relatieMap.get(vm.relatieId)?.naam || ""}`,
          source: "markt" as const,
          kind: "vaartuig" as const,
        }))
    );

    const rl = mockRelatieLadingen.filter(l => l.relatieId === relatieId);
    setRelatieLadingenItems(
      rl.map(l => ({
        id: l.id,
        title: l.titel,
        subtitle: `${l.tonnage} · ${l.product}`,
        meta: "",
        source: "relatie" as const,
        kind: "lading" as const,
        laadlocatie: l.laadhaven,
        laaddatum: l.laaddatum ? formatDate(l.laaddatum) : undefined,
        loslocatie: l.loshaven,
        losdatum: l.losdatum ? formatDate(l.losdatum) : undefined,
      }))
    );

    const rv = mockRelatieVaartuigen.filter(v => v.relatieId === relatieId);
    setRelatieVaartuigenItems(
      rv.map(v => ({
        id: v.id,
        title: v.naam,
        subtitle: `${v.type} · ${v.capaciteit}`,
        meta: `${v.locatie} · vanaf ${formatDate(v.beschikbaarVanaf)}`,
        source: "relatie" as const,
        kind: "vaartuig" as const,
      }))
    );
  }

  const combinedLadingen = showMarktLadingen ? [...eigenLadingen, ...marktLadingen] : eigenLadingen;
  const combinedVaartuigen = showMarktVaartuigen ? [...eigenVaartuigen, ...marktVaartuigen] : eigenVaartuigen;

  type MatchMode = "eigen-lading" | "relatie-lading" | "no-buttons";

  const tabConfig: Record<TabValue, { leftItems: DisplayItem[]; rightItems: DisplayItem[]; leftLabel: string; rightLabel: string; matchLabel: string; matchMode: MatchMode }> = {
    "eigen-ladingen": {
      leftItems: combinedLadingen,
      rightItems: relatieVaartuigenItems,
      leftLabel: "Onze ladingen",
      rightLabel: `Vaartuigen ${relatieName}`,
      matchLabel: `Matches met vaartuigen ${relatieName}`,
      matchMode: "no-buttons",
    },
    "eigen-vaartuigen": {
      leftItems: combinedVaartuigen,
      rightItems: relatieLadingenItems,
      leftLabel: "Onze vaartuigen",
      rightLabel: `Ladingen ${relatieName}`,
      matchLabel: `Matches met ladingen ${relatieName}`,
      matchMode: "relatie-lading",
    },
    "ladingen-relatie": {
      leftItems: relatieLadingenItems,
      rightItems: showMarktVaartuigen ? [...eigenVaartuigen, ...marktVaartuigen] : eigenVaartuigen,
      leftLabel: `Ladingen ${relatieName}`,
      rightLabel: "Onze vaartuigen",
      matchLabel: "Matches met onze vaartuigen",
      matchMode: "no-buttons",
    },
    "vaartuigen-relatie": {
      leftItems: relatieVaartuigenItems,
      rightItems: showMarktLadingen ? [...eigenLadingen, ...marktLadingen] : eigenLadingen,
      leftLabel: `Vaartuigen ${relatieName}`,
      rightLabel: "Onze ladingen",
      matchLabel: "Matches met onze ladingen",
      matchMode: "eigen-lading",
    },
  };

  const { leftItems: unsortedLeftItems, rightItems, leftLabel, rightLabel, matchLabel, matchMode } = tabConfig[activeTab];

  // Pre-compute best match score for each left item
  const getBestMatch = (item: DisplayItem): number | undefined => {
    if (item.kind === "lading") {
      const matches = mockRelatieLadingMatches.filter(m => m.ladingId === item.id);
      if (matches.length > 0) return Math.max(...matches.map(m => m.matchPercentage));
      if (rightItems.length > 0) return Math.max(...rightItems.map(ri => generateScore(item.id, ri.id)));
    }
    if (item.kind === "vaartuig") {
      const matches = mockRelatieVaartuigMatches.filter(m => m.vaartuigId === item.id);
      if (matches.length > 0) return Math.max(...matches.map(m => m.matchPercentage));
      if (rightItems.length > 0) return Math.max(...rightItems.map(ri => generateScore(item.id, ri.id)));
    }
    return undefined;
  };

  // Sort left items by best match score (highest first)
  const leftItems = [...unsortedLeftItems].sort((a, b) => {
    const scoreA = getBestMatch(a) ?? -1;
    const scoreB = getBestMatch(b) ?? -1;
    return scoreB - scoreA;
  });

  const getMatchItems = (): MatchDisplayItem[] => {
    if (!selectedLeftId) return [];
    const selectedItem = leftItems.find(i => i.id === selectedLeftId);
    if (!selectedItem) return [];

    if (selectedItem.kind === "lading") {
      const realMatches = mockRelatieLadingMatches
        .filter(m => m.ladingId === selectedLeftId)
        .filter(m => m.isEigen || showMarktVaartuigen);
      if (realMatches.length > 0) {
        return realMatches
          .sort((a, b) => b.matchPercentage - a.matchPercentage)
          .map(m => ({
            id: m.id,
            title: m.vaartuigNaam,
            subtitle: `${m.vaartuigType} · ${m.groottonnage}`,
            meta: `${m.locatie} · ${m.locatieDatum}`,
            source: (m.isEigen ? "eigen" : "markt") as "eigen" | "relatie" | "markt",
            kind: "vaartuig" as const,
            matchPercentage: m.matchPercentage,
          }));
      }
      return rightItems
        .map(item => ({ ...item, matchPercentage: generateScore(selectedLeftId, item.id) }))
        .sort((a, b) => b.matchPercentage - a.matchPercentage);
    }

    if (selectedItem.kind === "vaartuig") {
      const realMatches = mockRelatieVaartuigMatches
        .filter(m => m.vaartuigId === selectedLeftId)
        .filter(m => m.isEigen || showMarktLadingen);
      if (realMatches.length > 0) {
        return realMatches
          .sort((a, b) => b.matchPercentage - a.matchPercentage)
          .map(m => ({
            id: m.id,
            title: m.ladingTitel,
            subtitle: m.tonnage,
            meta: "",
            source: (m.isEigen ? "eigen" : "markt") as "eigen" | "relatie" | "markt",
            kind: "lading" as const,
            matchPercentage: m.matchPercentage,
            laadlocatie: m.laadHaven,
            laaddatum: m.laadDatum,
            loslocatie: m.losHaven,
            losdatum: m.losDatum,
          }));
      }
      return rightItems
        .map(item => ({ ...item, matchPercentage: generateScore(selectedLeftId, item.id) }))
        .sort((a, b) => b.matchPercentage - a.matchPercentage);
    }

    return [];
  };

  const matchItems = getMatchItems();
  const showMatches = selectedLeftId !== null && matchItems.length > 0;

  const setStatus = (id: string, status: ItemStatus) => {
    setItemStatuses(prev => {
      const next = new Map(prev);
      if (next.get(id) === status) next.delete(id);
      else next.set(id, status);
      return next;
    });
  };

  const setConditionValue = (itemId: string, key: ConditionKey, value: string) => {
    setItemConditions(prev => {
      const next = new Map(prev);
      const existing = next.get(itemId) || {};
      if (value) {
        next.set(itemId, { ...existing, [key]: value });
      } else {
        const updated = { ...existing };
        delete updated[key];
        if (Object.keys(updated).length === 0) next.delete(itemId);
        else next.set(itemId, updated);
      }
      return next;
    });
  };

  const setBidConditionValue = (itemId: string, key: ConditionKey, value: string) => {
    setItemBidConditions(prev => {
      const next = new Map(prev);
      const existing = next.get(itemId) || {};
      if (value) {
        next.set(itemId, { ...existing, [key]: value });
      } else {
        const updated = { ...existing };
        delete updated[key];
        if (Object.keys(updated).length === 0) next.delete(itemId);
        else next.set(itemId, updated);
      }
      return next;
    });
  };

  const toggleConditionsExpanded = (itemId: string) => {
    setExpandedConditions(prev => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  };

  const handleSave = () => {
    onSave?.();
    onClose();
  };

  const handleLeftItemClick = (id: string) => {
    setSelectedLeftId(prev => (prev === id ? null : id));
  };

  const handleAddRelatieLading = (data: { titel: string; tonnage: string; product: string; laadhaven: string; loshaven: string; laaddatum: string; losdatum: string }) => {
    const id = `rl-new-${Date.now()}`;
    const newItem: DisplayItem = {
      id,
      title: data.titel,
      subtitle: `${data.tonnage} · ${data.product}`,
      meta: "",
      source: "relatie",
      kind: "lading",
      laadlocatie: data.laadhaven || undefined,
      laaddatum: data.laaddatum || undefined,
      loslocatie: data.loshaven || undefined,
      losdatum: data.losdatum || undefined,
    };
    setRelatieLadingenItems(prev => [...prev, newItem]);
    setAddingItem(null);
  };

  const handleAddRelatieVaartuig = (data: { naam: string; type: string; capaciteit: string; locatie: string; beschikbaarVanaf: string }) => {
    const id = `rv-new-${Date.now()}`;
    const metaParts = [data.locatie, data.beschikbaarVanaf ? `vanaf ${data.beschikbaarVanaf}` : ""].filter(Boolean);
    const newItem: DisplayItem = {
      id,
      title: data.naam,
      subtitle: `${data.type} · ${data.capaciteit}`,
      meta: metaParts.join(" · "),
      source: "relatie",
      kind: "vaartuig",
    };
    setRelatieVaartuigenItems(prev => [...prev, newItem]);
    setAddingItem(null);
  };

  const isRelatieTab = activeTab === "ladingen-relatie" || activeTab === "vaartuigen-relatie";
  const relatieKind = activeTab === "ladingen-relatie" ? "lading" : "vaartuig";

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Slide-in panel */}
      <div className="relative ml-auto flex flex-col bg-white w-full max-w-[1400px] h-full shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]">
        {/* Header */}
        <div className="border-b border-rdj-border-secondary px-[32px] py-[20px] shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-[4px]">
              <p className="font-sans font-bold text-[18px] leading-[28px] text-rdj-text-primary">
                Gesprek met {relatieName}
              </p>
              <p className="font-sans font-normal text-[14px] leading-[20px] text-rdj-text-secondary">
                Markeer items als aangeboden, interessant of niet relevant.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-[8px] rounded-[8px] hover:bg-rdj-bg-primary-hover transition-colors shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="mt-[16px] flex">
            <SegmentedButtonGroup
              items={[
                { label: "Eigen ladingen", value: "eigen-ladingen" },
                { label: "Eigen vaartuigen", value: "eigen-vaartuigen" },
                { label: "Ladingen relatie", value: "ladingen-relatie" },
                { label: "Vaartuigen relatie", value: "vaartuigen-relatie" },
              ]}
              value={activeTab}
              onChange={val => setActiveTab(val as TabValue)}
            />
          </div>
        </div>

        {/* Body: dual panels */}
        <div className="flex flex-1 min-h-0">
          {/* Left panel */}
          <div className="w-[50%] flex flex-col border-r border-rdj-border-secondary min-w-0">
            <div className="px-[20px] py-[10px] border-b border-rdj-border-secondary bg-[#f9fafb] flex items-center justify-between gap-[12px]">
              <p className="font-sans font-bold text-[13px] leading-[18px] text-rdj-text-secondary uppercase tracking-wide">
                {leftLabel}
              </p>
              {activeTab === "eigen-ladingen" && (
                <MarktToggle
                  label="Marktladingen"
                  checked={showMarktLadingen}

                  onChange={setShowMarktLadingen}
                />
              )}
              {activeTab === "eigen-vaartuigen" && (
                <MarktToggle
                  label="Marktvaartuigen"
                  checked={showMarktVaartuigen}

                  onChange={setShowMarktVaartuigen}
                />
              )}
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-rdj-border-secondary">
              {leftItems.length === 0 && !addingItem ? (
                <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary py-[20px] text-center">
                  Geen items gevonden
                </p>
              ) : (
                leftItems.map(item => (
                  <ItemRow
                    key={item.id}
                    item={item}
                    bestMatch={getBestMatch(item)}
                    status={itemStatuses.get(item.id)}
                    conditions={itemConditions.get(item.id)}
                    bidConditions={itemBidConditions.get(item.id)}
                    conditionsExpanded={expandedConditions.has(item.id)}
                    onStatusChange={status => {
                      setStatus(item.id, status);
                      if ((status === "aangeboden" || status === "interesse") && item.kind === "lading") {
                        setExpandedConditions(prev => new Set(prev).add(item.id));
                      } else if (status === "geen-interesse" && item.kind === "lading") {
                        setExpandedConditions(prev => { const next = new Set(prev); next.delete(item.id); return next; });
                      }
                    }}
                    onToggleConditions={() => toggleConditionsExpanded(item.id)}
                    onConditionChange={(key, value) => setConditionValue(item.id, key, value)}
                    onBidConditionChange={(key, value) => setBidConditionValue(item.id, key, value)}
                    isSelected={item.id === selectedLeftId}
                    onClick={() => handleLeftItemClick(item.id)}
                  />
                ))
              )}
              {/* Quick-add for relatie tabs */}
              {isRelatieTab && addingItem === relatieKind && (
                <QuickAddForm
                  kind={relatieKind}
                  onSave={relatieKind === "lading" ? handleAddRelatieLading : handleAddRelatieVaartuig}
                  onCancel={() => setAddingItem(null)}
                />
              )}
              {isRelatieTab && addingItem !== relatieKind && (
                <button
                  onClick={() => setAddingItem(relatieKind)}
                  className="w-full flex items-center gap-[6px] px-[16px] py-[10px] font-sans font-bold text-[13px] leading-[18px] text-rdj-text-brand hover:bg-[#f0f7ff] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {relatieKind === "lading" ? "Lading toevoegen" : "Vaartuig toevoegen"}
                </button>
              )}
            </div>
          </div>

          {/* Right panel */}
          <div className="w-[50%] flex flex-col min-w-0">
            {selectedLeftId ? (
              <>
                <div className="px-[20px] py-[10px] border-b border-rdj-border-secondary bg-[#f9fafb] flex items-center justify-between gap-[12px]">
                  <div>
                    <p className="font-sans font-bold text-[13px] leading-[18px] text-rdj-text-secondary uppercase tracking-wide">
                      {showMatches ? matchLabel : rightLabel}
                    </p>
                    {showMatches && (
                      <p className="font-sans font-normal text-[12px] leading-[16px] text-rdj-text-tertiary mt-[2px]">
                        {matchItems.length} resultaten
                      </p>
                    )}
                  </div>
                  {activeTab === "ladingen-relatie" && (
                    <MarktToggle
                      label="Marktvaartuigen"
                      checked={showMarktVaartuigen}
                      onChange={setShowMarktVaartuigen}
                    />
                  )}
                  {activeTab === "vaartuigen-relatie" && (
                    <MarktToggle
                      label="Marktladingen"
                      checked={showMarktLadingen}
                      onChange={setShowMarktLadingen}
                    />
                  )}
                </div>
                <div className="flex-1 overflow-y-auto divide-y divide-rdj-border-secondary">
                  {showMatches ? (
                    matchItems.map(item => (
                      <MatchRow
                        key={item.id}
                        item={item}
                        mode={matchMode}
                        status={itemStatuses.get(item.id)}
                        conditions={itemConditions.get(item.id)}
                        bidConditions={itemBidConditions.get(item.id)}
                        conditionsExpanded={expandedConditions.has(item.id)}
                        onStatusChange={status => {
                          setStatus(item.id, status);
                          if ((status === "aangeboden" || status === "interesse") && item.kind === "lading") {
                            setExpandedConditions(prev => new Set(prev).add(item.id));
                          } else if (status === "geen-interesse" && item.kind === "lading") {
                            setExpandedConditions(prev => { const next = new Set(prev); next.delete(item.id); return next; });
                          }
                        }}
                        onToggleConditions={() => toggleConditionsExpanded(item.id)}
                        onConditionChange={(key, value) => setConditionValue(item.id, key, value)}
                        onBidConditionChange={(key, value) => setBidConditionValue(item.id, key, value)}
                      />
                    ))
                  ) : (
                    rightItems.map(item => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        status={itemStatuses.get(item.id)}
                        conditions={itemConditions.get(item.id)}
                        bidConditions={itemBidConditions.get(item.id)}
                        conditionsExpanded={expandedConditions.has(item.id)}
                        onStatusChange={status => {
                          setStatus(item.id, status);
                          if ((status === "aangeboden" || status === "interesse") && item.kind === "lading") {
                            setExpandedConditions(prev => new Set(prev).add(item.id));
                          } else if (status === "geen-interesse" && item.kind === "lading") {
                            setExpandedConditions(prev => { const next = new Set(prev); next.delete(item.id); return next; });
                          }
                        }}
                        onToggleConditions={() => toggleConditionsExpanded(item.id)}
                        onConditionChange={(key, value) => setConditionValue(item.id, key, value)}
                        onBidConditionChange={(key, value) => setBidConditionValue(item.id, key, value)}
                      />
                    ))
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center px-[32px]">
                  <p className="font-sans font-normal text-[14px] leading-[20px] text-rdj-text-tertiary">
                    Selecteer een item links om matches te bekijken
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-rdj-border-secondary px-[32px] py-[16px] flex items-center justify-end gap-[12px]">
          <button
            onClick={onClose}
            className="bg-white relative rounded-[6px] shrink-0"
          >
            <div className="flex items-center justify-center px-[16px] py-[10px] rounded-[inherit]">
              <p className="font-sans font-bold text-[14px] leading-[20px] text-[#344054]">Annuleren</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
          </button>
          <button
            onClick={handleSave}
            className="bg-[#1567a4] relative rounded-[6px] shrink-0"
          >
            <div className="flex items-center justify-center px-[16px] py-[10px] rounded-[inherit]">
              <p className="font-sans font-bold text-[14px] leading-[20px] text-white">Opslaan</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#1567a4] inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Single Condition Pill ── */

function ConditionPill({
  def,
  value,
  onChange,
}: {
  def: (typeof CONDITION_DEFS)[number];
  value?: string;
  onChange: (value: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const handleConfirm = () => {
    onChange(draft.trim());
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleConfirm();
    if (e.key === "Escape") {
      setDraft(value || "");
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <span className="inline-flex items-center rounded-full border border-[#1567a4] bg-white overflow-hidden">
        <span className="font-sans font-bold text-[12px] leading-[16px] text-[#344054] pl-[10px] pr-[4px] whitespace-nowrap">
          {def.label}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={handleConfirm}
          onKeyDown={handleKeyDown}
          placeholder={def.placeholder}
          className="font-sans font-normal text-[12px] leading-[16px] text-rdj-text-primary w-[80px] py-[3px] pr-[10px] outline-none bg-transparent"
        />
      </span>
    );
  }

  if (value) {
    return (
      <button
        onClick={() => {
          setDraft(value);
          setEditing(true);
        }}
        className="inline-flex items-center rounded-full border border-[#abefc6] bg-[#ecfdf3] px-[10px] py-[3px] font-sans font-bold text-[12px] leading-[16px] text-[#067647] hover:bg-[#d1fadf] transition-colors"
      >
        {def.format(value)}
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        setDraft("");
        setEditing(true);
      }}
      className="inline-flex items-center rounded-full border border-dashed border-[#d0d5dd] bg-white px-[10px] py-[3px] font-sans font-normal text-[12px] leading-[16px] text-rdj-text-tertiary hover:border-[#98a2b3] hover:text-[#344054] transition-colors"
    >
      {def.label}
    </button>
  );
}

/* ── Item Row (left panel) ── */

function ItemRow({
  item,
  bestMatch,
  status,
  conditions,
  bidConditions,
  conditionsExpanded,
  onStatusChange,
  onToggleConditions,
  onConditionChange,
  onBidConditionChange,
  isSelected,
  onClick,
}: {
  item: DisplayItem;
  bestMatch?: number;
  status?: ItemStatus;
  conditions?: ConditionValues;
  bidConditions?: ConditionValues;
  conditionsExpanded: boolean;
  onStatusChange: (status: ItemStatus) => void;
  onToggleConditions: () => void;
  onConditionChange: (key: ConditionKey, value: string) => void;
  onBidConditionChange: (key: ConditionKey, value: string) => void;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  const isEigen = item.source === "eigen";
  const isLading = item.kind === "lading";
  const isRelatieLading = !isEigen && isLading;
  const isEigenLading = isEigen && isLading;
  const isVaartuig = item.kind === "vaartuig";
  const hasLocation = isLading && (item.laadlocatie || item.loslocatie);
  const isMarkt = item.source === "markt";
  const filledConditions = conditions ? Object.keys(conditions).length : 0;

  return (
    <div
      className={`px-[16px] py-[10px] transition-colors cursor-pointer ${
        isSelected ? "bg-[#f0f7ff]" : "hover:bg-[#f9fafb]"
      }`}
      onClick={onClick}
    >
      {/* Main row */}
      <div className="flex items-center gap-[10px]">
        {bestMatch != null && (
          <div className="shrink-0">
            <MatchBadge percentage={bestMatch} />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-[8px]">
            {isMarkt && (
              <span className="shrink-0 inline-flex items-center rounded-full bg-[#f2f4f7] px-[6px] py-[1px] font-sans font-bold text-[11px] leading-[16px] text-[#344054]">
                Markt
              </span>
            )}
            <p className="font-sans font-bold text-[14px] leading-[20px] text-rdj-text-primary truncate shrink-0">
              {item.title}
            </p>
            <p className="font-sans font-normal text-[13px] leading-[18px] text-rdj-text-secondary truncate">
              {item.subtitle}
            </p>
          </div>

          {hasLocation && (
            <div className="flex items-center gap-[6px] mt-[4px] font-sans font-normal text-[12px] leading-[16px] text-rdj-text-tertiary">
              {item.laadlocatie && (
                <span>{item.laadlocatie}{item.laaddatum ? ` ${item.laaddatum}` : ""}</span>
              )}
              {item.laadlocatie && item.loslocatie && <span>→</span>}
              {item.loslocatie && (
                <span>{item.loslocatie}{item.losdatum ? ` ${item.losdatum}` : ""}</span>
              )}
            </div>
          )}

          {!hasLocation && item.meta && (
            <p className="mt-[2px] font-sans font-normal text-[12px] leading-[16px] text-rdj-text-tertiary">
              {item.meta}
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="shrink-0 flex items-center gap-[4px]" onClick={e => e.stopPropagation()}>
          {isRelatieLading && (
            <>
              {!conditionsExpanded && (
                <button
                  onClick={onToggleConditions}
                  className="inline-flex items-center gap-[4px] rounded-full border border-[#d0d5dd] bg-white px-[8px] py-[3px] font-sans font-bold text-[12px] leading-[16px] text-[#344054] hover:bg-[#f9fafb] transition-colors"
                >
                  Condities
                  {filledConditions > 0 && (
                    <span className="text-[#067647] font-normal">({filledConditions})</span>
                  )}
                </button>
              )}
              <LadingActionButton
                type="bod"
                active={status === "aangeboden"}
                onClick={() => onStatusChange("aangeboden")}
              />
            </>
          )}
          {isEigenLading && (
            <>
              {!conditionsExpanded && (
                <button
                  onClick={onToggleConditions}
                  className="inline-flex items-center gap-[4px] rounded-full border border-[#d0d5dd] bg-white px-[8px] py-[3px] font-sans font-bold text-[12px] leading-[16px] text-[#344054] hover:bg-[#f9fafb] transition-colors"
                >
                  Condities
                  {filledConditions > 0 && (
                    <span className="text-[#067647] font-normal">({filledConditions})</span>
                  )}
                </button>
              )}
              <LadingActionButton
                type="bod"
                active={status === "aangeboden"}
                onClick={() => onStatusChange("aangeboden")}
              />
              <LadingActionButton
                type="interesse"
                active={status === "interesse"}
                onClick={() => onStatusChange("interesse")}
              />
              <LadingActionButton
                type="geen-interesse"
                active={status === "geen-interesse"}
                onClick={() => onStatusChange("geen-interesse")}
              />
            </>
          )}
          {isVaartuig && isEigen && (
            <StatusSelector value={status} onChange={onStatusChange} />
          )}
        </div>
      </div>

      {/* Expanded conditions for relatie ladingen */}
      {isRelatieLading && conditionsExpanded && (
        <LadingConditionsSection
          conditions={conditions}
          bidConditions={bidConditions}
          showBid={status === "aangeboden"}
          primaryLabel="Hun condities"
          secondaryLabel="Ons bod"
          onConditionChange={onConditionChange}
          onBidConditionChange={onBidConditionChange}
          onCollapse={onToggleConditions}
        />
      )}

      {/* Expanded conditions for eigen ladingen: aangeboden = onze condities, interesse = onze condities + hun bod */}
      {isEigenLading && conditionsExpanded && (status === "aangeboden" || status === "interesse") && (
        <LadingConditionsSection
          conditions={conditions}
          bidConditions={bidConditions}
          showBid={status === "interesse"}
          primaryLabel="Onze condities"
          secondaryLabel="Hun bod"
          onConditionChange={onConditionChange}
          onBidConditionChange={onBidConditionChange}
          onCollapse={onToggleConditions}
        />
      )}

      {/* Condities-only view (no status set yet) */}
      {isEigenLading && conditionsExpanded && !status && (
        <LadingConditionsSection
          conditions={conditions}
          bidConditions={bidConditions}
          showBid={false}
          primaryLabel="Onze condities"
          secondaryLabel="Hun bod"
          onConditionChange={onConditionChange}
          onBidConditionChange={onBidConditionChange}
          onCollapse={onToggleConditions}
        />
      )}
    </div>
  );
}

/* ── Match Row (right panel when matches are shown) ── */

function MatchRow({
  item,
  mode,
  status,
  conditions,
  bidConditions,
  conditionsExpanded,
  onStatusChange,
  onToggleConditions,
  onConditionChange,
  onBidConditionChange,
}: {
  item: MatchDisplayItem;
  mode: "eigen-lading" | "relatie-lading" | "no-buttons";
  status?: ItemStatus;
  conditions?: ConditionValues;
  bidConditions?: ConditionValues;
  conditionsExpanded: boolean;
  onStatusChange: (status: ItemStatus) => void;
  onToggleConditions: () => void;
  onConditionChange: (key: ConditionKey, value: string) => void;
  onBidConditionChange: (key: ConditionKey, value: string) => void;
}) {
  const isLading = item.kind === "lading";
  const hasLocation = isLading && (item.laadlocatie || item.loslocatie);
  const filledConditions = conditions ? Object.keys(conditions).length : 0;
  const showButtons = mode !== "no-buttons" && isLading;
  const isEigenMode = mode === "eigen-lading";
  const primaryLabel = isEigenMode ? "Onze condities" : "Hun condities";
  const secondaryLabel = isEigenMode ? "Hun bod" : "Ons bod";

  return (
    <div className="px-[16px] py-[10px] hover:bg-[#f9fafb] transition-colors">
      {/* Main row */}
      <div className="flex items-center gap-[10px]">
        <div className="shrink-0">
          <MatchBadge percentage={item.matchPercentage} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-[8px]">
            <p className="font-sans font-bold text-[14px] leading-[20px] text-rdj-text-primary truncate shrink-0">
              {item.title}
            </p>
            <p className="font-sans font-normal text-[13px] leading-[18px] text-rdj-text-secondary truncate">
              {item.subtitle}
            </p>
          </div>

          {hasLocation && (
            <div className="flex items-center gap-[6px] mt-[2px] font-sans font-normal text-[12px] leading-[16px] text-rdj-text-tertiary">
              {item.laadlocatie && (
                <span>{item.laadlocatie}{item.laaddatum ? ` ${item.laaddatum}` : ""}</span>
              )}
              {item.laadlocatie && item.loslocatie && <span>→</span>}
              {item.loslocatie && (
                <span>{item.loslocatie}{item.losdatum ? ` ${item.losdatum}` : ""}</span>
              )}
            </div>
          )}

          {!hasLocation && item.meta && (
            <p className="mt-[2px] font-sans font-normal text-[12px] leading-[16px] text-rdj-text-tertiary">
              {item.meta}
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="shrink-0 flex items-center gap-[4px]">
          {showButtons && (
            <>
              {!conditionsExpanded && (
                <button
                  onClick={onToggleConditions}
                  className="inline-flex items-center gap-[4px] rounded-full border border-[#d0d5dd] bg-white px-[8px] py-[3px] font-sans font-bold text-[12px] leading-[16px] text-[#344054] hover:bg-[#f9fafb] transition-colors"
                >
                  Condities
                  {filledConditions > 0 && (
                    <span className="text-[#067647] font-normal">({filledConditions})</span>
                  )}
                </button>
              )}
              <LadingActionButton
                type="bod"
                active={status === "aangeboden"}
                onClick={() => onStatusChange("aangeboden")}
              />
              {isEigenMode && (
                <>
                  <LadingActionButton
                    type="interesse"
                    active={status === "interesse"}
                    onClick={() => onStatusChange("interesse")}
                  />
                  <LadingActionButton
                    type="geen-interesse"
                    active={status === "geen-interesse"}
                    onClick={() => onStatusChange("geen-interesse")}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Expanded conditions */}
      {showButtons && conditionsExpanded && (
        <LadingConditionsSection
          conditions={conditions}
          bidConditions={bidConditions}
          showBid={isEigenMode ? status === "interesse" : status === "aangeboden"}
          primaryLabel={primaryLabel}
          secondaryLabel={secondaryLabel}
          onConditionChange={onConditionChange}
          onBidConditionChange={onBidConditionChange}
          onCollapse={onToggleConditions}
        />
      )}
    </div>
  );
}

/* ── Lading Action Button (bod / interesse / geen-interesse) ── */

function LadingActionButton({
  type,
  active,
  onClick,
}: {
  type: "bod" | "interesse" | "geen-interesse";
  active: boolean;
  onClick: () => void;
}) {
  const config = {
    bod: {
      title: "Bod doen",
      activeClass: "bg-[#eff8ff] border-[#b2ddff] text-[#175cd3]",
      icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.25 1.75L6.417 7.583M12.25 1.75l-3.5 10.5-2.333-4.667L1.75 5.25l10.5-3.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
    interesse: {
      title: "Interesse",
      activeClass: "bg-[#ecfdf3] border-[#abefc6] text-[#067647]",
      icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
    "geen-interesse": {
      title: "Geen interesse",
      activeClass: "bg-[#fef3f2] border-[#fecdca] text-[#b42318]",
      icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
  }[type];

  return (
    <button
      title={config.title}
      onClick={onClick}
      className={`inline-flex items-center justify-center size-[28px] rounded-full border transition-colors ${
        active ? config.activeClass : "border-[#d0d5dd] bg-white text-[#667085] hover:bg-[#f9fafb]"
      }`}
    >
      {config.icon}
    </button>
  );
}

/* ── Shared Lading Conditions Section ── */

function LadingConditionsSection({
  conditions,
  bidConditions,
  showBid,
  primaryLabel,
  secondaryLabel,
  onConditionChange,
  onBidConditionChange,
  onCollapse,
}: {
  conditions?: ConditionValues;
  bidConditions?: ConditionValues;
  showBid: boolean;
  primaryLabel: string;
  secondaryLabel: string;
  onConditionChange: (key: ConditionKey, value: string) => void;
  onBidConditionChange: (key: ConditionKey, value: string) => void;
  onCollapse: () => void;
}) {
  return (
    <div className="mt-[8px] ml-[66px]" onClick={e => e.stopPropagation()}>
      {/* Primary conditions */}
      <div className="flex items-start gap-[6px] mb-[6px]">
        <span className="font-sans font-bold text-[11px] leading-[22px] text-rdj-text-tertiary uppercase tracking-wide w-[90px] shrink-0">
          {primaryLabel}
        </span>
        <div className="flex items-center gap-[4px] flex-wrap">
          {CONDITION_DEFS.map(def => (
            <ConditionPill
              key={def.key}
              def={def}
              value={conditions?.[def.key]}
              onChange={value => onConditionChange(def.key, value)}
            />
          ))}
        </div>
      </div>

      {/* Secondary (bid) conditions */}
      {showBid && (
        <div className="flex items-start gap-[6px] mb-[6px]">
          <span className="font-sans font-bold text-[11px] leading-[22px] text-[#175cd3] uppercase tracking-wide w-[90px] shrink-0">
            {secondaryLabel}
          </span>
          <div className="flex items-center gap-[4px] flex-wrap">
            {CONDITION_DEFS.map(def => (
              <BidConditionPill
                key={def.key}
                def={def}
                value={bidConditions?.[def.key]}
                theirValue={conditions?.[def.key]}
                onChange={value => onBidConditionChange(def.key, value)}
              />
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onCollapse}
        className="inline-flex items-center rounded-full border border-transparent px-[6px] py-[3px] font-sans font-normal text-[12px] leading-[16px] text-rdj-text-tertiary hover:text-rdj-text-secondary transition-colors"
      >
        Inklappen
      </button>
    </div>
  );
}

/* ── Bid Condition Pill (with delta indicator) ── */

function BidConditionPill({
  def,
  value,
  theirValue,
  onChange,
}: {
  def: (typeof CONDITION_DEFS)[number];
  value?: string;
  theirValue?: string;
  onChange: (value: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const handleConfirm = () => {
    onChange(draft.trim());
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleConfirm();
    if (e.key === "Escape") {
      setDraft(value || "");
      setEditing(false);
    }
  };

  // Compute delta between our value and their value
  const getDelta = (): { text: string; color: string } | null => {
    if (!value || !theirValue) return null;
    const ours = parseFloat(value.replace(",", "."));
    const theirs = parseFloat(theirValue.replace(",", "."));
    if (isNaN(ours) || isNaN(theirs) || ours === theirs) return null;
    const diff = ours - theirs;
    const sign = diff > 0 ? "+" : "";
    return {
      text: `${sign}${diff.toFixed(diff % 1 === 0 ? 0 : 2).replace(".", ",")}`,
      color: diff < 0 ? "text-[#067647]" : "text-[#b42318]",
    };
  };

  if (editing) {
    return (
      <span className="inline-flex items-center rounded-full border border-[#175cd3] bg-white overflow-hidden">
        <span className="font-sans font-bold text-[12px] leading-[16px] text-[#344054] pl-[10px] pr-[4px] whitespace-nowrap">
          {def.label}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={handleConfirm}
          onKeyDown={handleKeyDown}
          placeholder={def.placeholder}
          className="font-sans font-normal text-[12px] leading-[16px] text-rdj-text-primary w-[80px] py-[3px] pr-[10px] outline-none bg-transparent"
        />
      </span>
    );
  }

  if (value) {
    const delta = getDelta();
    return (
      <button
        onClick={() => {
          setDraft(value);
          setEditing(true);
        }}
        className="inline-flex items-center gap-[4px] rounded-full border border-[#b2ddff] bg-[#eff8ff] px-[10px] py-[3px] font-sans font-bold text-[12px] leading-[16px] text-[#175cd3] hover:bg-[#d1e9ff] transition-colors"
      >
        {def.format(value)}
        {delta && (
          <span className={`font-normal text-[11px] ${delta.color}`}>
            {delta.text}
          </span>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        setDraft("");
        setEditing(true);
      }}
      className="inline-flex items-center rounded-full border border-dashed border-[#b2ddff] bg-white px-[10px] py-[3px] font-sans font-normal text-[12px] leading-[16px] text-[#84adff] hover:border-[#175cd3] hover:text-[#175cd3] transition-colors"
    >
      {def.label}
    </button>
  );
}

/* ── Match Badge (circular progress donut) ── */

function MatchBadge({ percentage }: { percentage: number }) {
  const size = 20;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percentage / 100) * circumference;

  const color =
    percentage >= 75 ? "#17B26A" : percentage >= 50 ? "#F79009" : "#F04438";
  const trackColor = "#F2F4F7";

  return (
    <div className="shrink-0 flex items-center gap-[6px]">
      <svg
        className="shrink-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={trackColor} strokeWidth={strokeWidth} fill="none" />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          stroke={color} strokeWidth={strokeWidth} fill="none"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <p className="font-sans font-bold text-[13px] leading-[18px] text-rdj-text-primary whitespace-nowrap">
        {percentage}%
      </p>
    </div>
  );
}

/* ── Status Selector (radio-like buttons) ── */

function StatusSelector({
  value,
  onChange,
}: {
  value?: ItemStatus;
  onChange: (status: ItemStatus) => void;
}) {
  const options: { val: ItemStatus; title: string; activeClass: string; icon: React.ReactNode }[] = [
    {
      val: "aangeboden",
      title: "Aangeboden",
      activeClass: "bg-[#eff8ff] border-[#b2ddff] text-[#175cd3]",
      icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.25 1.75L6.417 7.583M12.25 1.75l-3.5 10.5-2.333-4.667L1.75 5.25l10.5-3.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
    {
      val: "interesse",
      title: "Interesse",
      activeClass: "bg-[#ecfdf3] border-[#abefc6] text-[#067647]",
      icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
    {
      val: "geen-interesse",
      title: "Geen interesse",
      activeClass: "bg-[#fef3f2] border-[#fecdca] text-[#b42318]",
      icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
  ];

  return (
    <div className="flex items-center gap-[4px]">
      {options.map(opt => {
        const isActive = value === opt.val;
        return (
          <button
            key={opt.val}
            title={opt.title}
            onClick={() => onChange(opt.val)}
            className={`inline-flex items-center justify-center size-[28px] rounded-full border transition-colors ${
              isActive ? opt.activeClass : "border-[#d0d5dd] bg-white text-[#667085] hover:bg-[#f9fafb]"
            }`}
          >
            {opt.icon}
          </button>
        );
      })}
    </div>
  );
}

/* ── Markt Toggle ── */

function MarktToggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-[8px] cursor-pointer select-none">
      <span className="font-sans font-normal text-[13px] leading-[18px] text-rdj-text-secondary whitespace-nowrap">
        {label}
      </span>
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
        <div className="w-[36px] h-[20px] bg-[#f2f4f7] peer-checked:bg-[#1567a4] rounded-full transition-colors" />
        <div className="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-[16px]" />
      </div>
    </label>
  );
}

/* ── Quick Add Form ── */

function QuickAddForm({
  kind,
  onSave,
  onCancel,
}: {
  kind: "lading" | "vaartuig";
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const firstRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  if (kind === "lading") {
    return <QuickAddLading inputRef={firstRef} onSave={onSave} onCancel={onCancel} />;
  }
  return <QuickAddVaartuig inputRef={firstRef} onSave={onSave} onCancel={onCancel} />;
}

function QuickAddLading({
  inputRef,
  onSave,
  onCancel,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onSave: (data: { titel: string; tonnage: string; product: string; laadhaven: string; loshaven: string; laaddatum: string; losdatum: string }) => void;
  onCancel: () => void;
}) {
  const [titel, setTitel] = useState("");
  const [tonnage, setTonnage] = useState("");
  const [product, setProduct] = useState("");
  const [laadhaven, setLaadhaven] = useState("");
  const [loshaven, setLoshaven] = useState("");
  const [laaddatum, setLaaddatum] = useState("");
  const [losdatum, setLosdatum] = useState("");

  const canSave = titel.trim() !== "";

  const handleSubmit = () => {
    if (!canSave) return;
    onSave({
      titel: titel.trim(),
      tonnage: tonnage.trim() || "– ton",
      product: product.trim() || "–",
      laadhaven: laadhaven.trim(),
      loshaven: loshaven.trim(),
      laaddatum: laaddatum.trim(),
      losdatum: losdatum.trim(),
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canSave) handleSubmit();
    if (e.key === "Escape") onCancel();
  };

  return (
    <div className="px-[16px] py-[12px] bg-[#f0f7ff]" onClick={e => e.stopPropagation()}>
      <div className="flex flex-wrap gap-[8px]">
        <QuickInput ref={inputRef} value={titel} onChange={setTitel} onKeyDown={handleKeyDown} placeholder="Titel *" className="flex-[2_1_140px]" />
        <QuickInput value={tonnage} onChange={setTonnage} onKeyDown={handleKeyDown} placeholder="Tonnage" className="flex-[1_1_80px]" />
        <QuickInput value={product} onChange={setProduct} onKeyDown={handleKeyDown} placeholder="Product" className="flex-[1_1_80px]" />
      </div>
      <div className="flex flex-wrap gap-[8px] mt-[6px]">
        <QuickInput value={laadhaven} onChange={setLaadhaven} onKeyDown={handleKeyDown} placeholder="Laadhaven" className="flex-1" />
        <QuickInput value={laaddatum} onChange={setLaaddatum} onKeyDown={handleKeyDown} placeholder="Datum laden" className="flex-1" />
      </div>
      <div className="flex flex-wrap gap-[8px] mt-[6px]">
        <QuickInput value={loshaven} onChange={setLoshaven} onKeyDown={handleKeyDown} placeholder="Loshaven" className="flex-1" />
        <QuickInput value={losdatum} onChange={setLosdatum} onKeyDown={handleKeyDown} placeholder="Datum lossen" className="flex-1" />
      </div>
      <div className="flex items-center gap-[8px] mt-[8px]">
        <button
          onClick={handleSubmit}
          disabled={!canSave}
          className="inline-flex items-center rounded-[6px] bg-[#1567a4] px-[12px] py-[5px] font-sans font-bold text-[12px] leading-[16px] text-white disabled:opacity-40 hover:bg-[#125d93] transition-colors"
        >
          Toevoegen
        </button>
        <button
          onClick={onCancel}
          className="inline-flex items-center rounded-[6px] px-[12px] py-[5px] font-sans font-bold text-[12px] leading-[16px] text-[#344054] hover:bg-[#eaecf0] transition-colors"
        >
          Annuleren
        </button>
      </div>
    </div>
  );
}

function QuickAddVaartuig({
  inputRef,
  onSave,
  onCancel,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onSave: (data: { naam: string; type: string; capaciteit: string; locatie: string; beschikbaarVanaf: string }) => void;
  onCancel: () => void;
}) {
  const [naam, setNaam] = useState("");
  const [type, setType] = useState("");
  const [capaciteit, setCapaciteit] = useState("");
  const [locatie, setLocatie] = useState("");
  const [beschikbaarVanaf, setBeschikbaarVanaf] = useState("");

  const canSave = naam.trim() !== "";

  const handleSubmit = () => {
    if (!canSave) return;
    onSave({
      naam: naam.trim(),
      type: type.trim() || "Motorschip",
      capaciteit: capaciteit.trim() || "– ton",
      locatie: locatie.trim(),
      beschikbaarVanaf: beschikbaarVanaf.trim(),
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canSave) handleSubmit();
    if (e.key === "Escape") onCancel();
  };

  return (
    <div className="px-[16px] py-[12px] bg-[#f0f7ff]" onClick={e => e.stopPropagation()}>
      <div className="flex flex-wrap gap-[8px]">
        <QuickInput ref={inputRef} value={naam} onChange={setNaam} onKeyDown={handleKeyDown} placeholder="Naam *" className="flex-[2_1_140px]" />
        <QuickInput value={type} onChange={setType} onKeyDown={handleKeyDown} placeholder="Type" className="flex-[1_1_80px]" />
      </div>
      <div className="flex flex-wrap gap-[8px] mt-[6px]">
        <QuickInput value={capaciteit} onChange={setCapaciteit} onKeyDown={handleKeyDown} placeholder="Capaciteit" className="flex-1" />
        <QuickInput value={locatie} onChange={setLocatie} onKeyDown={handleKeyDown} placeholder="Locatie" className="flex-1" />
        <QuickInput value={beschikbaarVanaf} onChange={setBeschikbaarVanaf} onKeyDown={handleKeyDown} placeholder="Beschikbaar vanaf" className="flex-1" />
      </div>
      <div className="flex items-center gap-[8px] mt-[8px]">
        <button
          onClick={handleSubmit}
          disabled={!canSave}
          className="inline-flex items-center rounded-[6px] bg-[#1567a4] px-[12px] py-[5px] font-sans font-bold text-[12px] leading-[16px] text-white disabled:opacity-40 hover:bg-[#125d93] transition-colors"
        >
          Toevoegen
        </button>
        <button
          onClick={onCancel}
          className="inline-flex items-center rounded-[6px] px-[12px] py-[5px] font-sans font-bold text-[12px] leading-[16px] text-[#344054] hover:bg-[#eaecf0] transition-colors"
        >
          Annuleren
        </button>
      </div>
    </div>
  );
}

const QuickInput = forwardRef<
  HTMLInputElement,
  {
    value: string;
    onChange: (v: string) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    placeholder: string;
    className?: string;
  }
>(function QuickInput({ value, onChange, onKeyDown, placeholder, className = "" }, ref) {
  return (
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`rounded-[6px] border border-[#d0d5dd] bg-white px-[10px] py-[5px] font-sans font-normal text-[13px] leading-[18px] text-rdj-text-primary placeholder:text-rdj-text-tertiary outline-none focus:border-[#1567a4] transition-colors ${className}`}
    />
  );
});

/* ── Helpers ── */

function formatDate(dateStr: string): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short" });
}

function generateScore(idA: string, idB: string): number {
  let hash = 0;
  const str = idA + idB;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return 60 + Math.abs(hash % 35);
}
