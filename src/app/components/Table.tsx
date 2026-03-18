import { type ReactNode } from "react";
import { useState } from "react";
import { Ship, Warehouse } from "lucide-react";
import Checkbox from "./Checkbox";
import FeaturedIcon from "./FeaturedIcon";
import Badge, { type BadgeVariant } from "./Badge";
import Button from "./Button";

/* ─────────────────────────────────────────────
   Column header
   ───────────────────────────────────────────── */

interface ColumnHeaderProps {
  label: string;
  sortActive?: boolean;
  sortDirection?: "asc" | "desc";
  align?: "left" | "right";
}

function ColumnHeader({
  label,
  sortActive = false,
  sortDirection = "asc",
  align = "left",
}: ColumnHeaderProps) {
  const arrow = sortActive ? (sortDirection === "asc" ? " ↑" : " ↓") : "";
  return (
    <p
      className={`font-sans font-bold leading-[18px] text-[12px] whitespace-nowrap ${
        sortActive ? "text-rdj-text-primary" : "text-rdj-text-secondary"
      } ${align === "right" ? "text-right" : "text-left"}`}
    >
      {label}
      {arrow}
    </p>
  );
}

/* ──────────────────────────────────────────
   Column type definitions
   ───────────────────────────────────────────── */

interface BaseColumn {
  /** Unique key — also used to look up row data (row[key]) */
  key: string;
  /** Header label */
  header: string;
  /** Fixed width class, e.g. "w-[180px]". Omit for the leading column (uses flex-1). */
  width?: string;
  /** Sort state */
  sortActive?: boolean;
  sortDirection?: "asc" | "desc";
  onSort?: () => void;
  /** Mark this column as editable — shows a highlight box on row hover */
  editable?: boolean;
}

export interface LeadingTextColumn extends BaseColumn {
  type: "leading-text";
  /** Row key for sub-text */
  subtextKey?: string;
  /** Row key (boolean) that shows a blue "new" dot when true */
  dotKey?: string;
  /** Row key for a badge label shown next to the primary text */
  badgeKey?: string;
  /** Row key for the badge variant (BadgeVariant). Defaults to "grey" */
  badgeVariantKey?: string;
  /** Row key for an icon type indicator ("vaartuig" | "warehouse") */
  iconKey?: string;
  /** Label for the hover action button (default: "Openen") */
  actionLabel?: string;
}

export interface TextColumn extends BaseColumn {
  type: "text";
  subtextKey?: string;
  align?: "left" | "right";
  /** Optional leading icon: row key for a ReactNode */
  iconKey?: string;
  /** Optional leading featured icon: row key for icon ReactNode */
  featuredIconKey?: string;
  /** Row key for featured icon variant ('grey' | 'brand') */
  featuredIconVariantKey?: string;
  /** Default featured icon variant */
  featuredIconDefaultVariant?: "grey" | "brand";
  /** Optional leading avatar: row key for avatar image src */
  avatarSrcKey?: string;
  /** Row key for avatar initials (fallback when no image) */
  avatarInitialsKey?: string;
  /** Text color class override (e.g. for relation-style blue links) */
  textColor?: string;
  /** Row key that holds a click handler for this cell (e.g. navigate to relation) */
  onClickKey?: string;
}

export interface RatingColumn extends BaseColumn {
  type: "rating";
  /** Max stars */
  max?: number;
  /** Called with (rowId, newValue) when a star is clicked */
  onRate?: (rowId: string, value: number) => void;
}

export interface BadgesColumn extends BaseColumn {
  type: "badges";
  /** Row key for variant per badge item (optional, expects BadgeVariant[]) */
  variantsKey?: string;
  /** Default variant for all badges */
  defaultVariant?: BadgeVariant;
  /** Max badges to show before "+X" overflow (default 2) */
  maxVisible?: number;
}

export interface StatusColumn extends BaseColumn {
  type: "status";
  /** Row key for the badge variant ('grey' | 'brand' | 'success' | 'warning' | 'error') */
  variantKey?: string;
  /** Default variant when not specified per row */
  defaultVariant?: BadgeVariant;
  /** Row key for a ReactNode icon to display instead of the dot */
  iconKey?: string;
  /** Row key for the badge type ('default' | 'color') */
  typeKey?: string;
  /** Default badge type */
  defaultType?: "default" | "color";
  /** If true, show a dot (default: true when no iconKey) */
  dot?: boolean;
}

export interface ProgressColumn extends BaseColumn {
  type: "progress";
  /** Row key that holds the numeric value (0–100). Defaults to col.key */
  valueKey?: string;
  /** Text alignment */
  align?: "left" | "right";
}

export interface DeadlineColumn extends BaseColumn {
  type: "deadline";
  /** Row key (boolean) that indicates the deadline has expired */
  expiredKey?: string;
  /** Text alignment */
  align?: "left" | "right";
}

export interface CustomColumn extends BaseColumn {
  type: "custom";
  /** Render function for full control */
  render: (row: any, rowIndex: number) => ReactNode;
}

export type Column =
  | LeadingTextColumn
  | TextColumn
  | RatingColumn
  | BadgesColumn
  | StatusColumn
  | ProgressColumn
  | DeadlineColumn
  | CustomColumn;

/* ─────────────────────────────────────────────
   Row data shape
   ───────────────────────────────────────────── */

export interface RowData {
  id: string;
  [key: string]: any;
}

/* ─────────────────────────────────────────────
   Table props
   ───────────────────────────────────────────── */

interface TableProps {
  columns: Column[];
  data: RowData[];
  /** Row click handler */
  onRowClick?: (row: RowData) => void;
  /** Action button click handler (e.g. "+ Onderhandeling"). Falls back to onRowClick if not provided. */
  onRowAction?: (row: RowData) => void;
  /** Id of the row that is currently active (e.g. open in a detail panel) */
  activeRowId?: string | null;
  /** Enable row checkboxes */
  selectable?: boolean;
  selectedIds?: string[];
  onSelectAll?: () => void;
  onSelectItem?: (id: string) => void;
  /** Hovered row id (managed externally for action columns) */
  hoveredRowId?: string | null;
  onRowHover?: (id: string | null) => void;
}

/* ────────────────────────────────────────────
   Star SVG path (same as existing code)
   ──────────────────────────────────────────── */

const STAR_PATH =
  "M9.10326 2.31221C9.47008 1.56773 10.5299 1.56773 10.8967 2.31221L12.7063 5.98091L16.7647 6.5725C17.5899 6.69293 17.9208 7.70441 17.3279 8.2831L14.4025 11.1317L15.0939 15.1701C15.2358 15.9925 14.3764 16.6177 13.6408 16.2309L10 14.313L6.35921 16.2309C5.6236 16.6177 4.76418 15.9925 4.90611 15.1701L5.59748 11.1317L2.67207 8.2831C2.07921 7.70441 2.41006 6.69293 3.23527 6.5725L7.29372 5.98091L9.10326 2.31221Z";

/* ─────────────────────────────────────────────
   Cell renderers
   ───────────────────────────────────────────── */

function CellLeadingText({
  row,
  col,
  onAction,
}: {
  row: RowData;
  col: LeadingTextColumn;
  onAction?: () => void;
}) {
  const text = row[col.key];
  const subtext = col.subtextKey ? row[col.subtextKey] : undefined;
  const showDot = col.dotKey ? !!row[col.dotKey] : false;
  const hasDotKey = !!col.dotKey;
  const actionLabel = col.actionLabel ?? "Openen";

  const badgeLabel = col.badgeKey ? row[col.badgeKey] : undefined;
  const iconType = col.iconKey ? row[col.iconKey] : undefined;

  return (
    <div className="flex items-center gap-[8px] min-w-0">
      {/* Only reserve dot space when this column uses dotKey */}
      {hasDotKey && (
        <div className="shrink-0 w-[8px] flex items-center justify-center">
          {showDot && (
            <svg className="block size-[8px]" fill="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="#258DD2" r="4" />
            </svg>
          )}
        </div>
      )}
      {iconType && (
        <div className="shrink-0 flex items-center justify-center">
          {iconType === "opslag" ? (
            <Warehouse className="size-[16px] text-rdj-text-tertiary" />
          ) : (
            <Ship className="size-[16px] text-rdj-text-tertiary" />
          )}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-[6px] min-w-0">
          <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px] truncate">
            {text}
          </p>
          {badgeLabel && (
            <span className="shrink-0 inline-flex items-center border border-rdj-border-secondary rounded-[4px] px-[4px] py-[0px] font-sans font-bold leading-[16px] text-[11px] text-rdj-text-primary whitespace-nowrap">
              {badgeLabel}
            </span>
          )}
        </div>
        {subtext && (
          <p className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px] truncate">
            {subtext}
          </p>
        )}
      </div>
      {onAction && (
        <div className="shrink-0 opacity-0 group-hover/row:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="sm"
            label={actionLabel}
            leadingIcon={<svg fill="none" viewBox="0 0 12 12"><path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            onClick={(e) => {
              e.stopPropagation();
              onAction();
            }}
          />
        </div>
      )}
    </div>
  );
}

function CellText({ row, col }: { row: RowData; col: TextColumn }) {
  const text = row[col.key];
  const subtext = col.subtextKey ? row[col.subtextKey] : undefined;
  const alignCls = col.align === "right" ? "text-right" : "text-left";
  const fontCls = "font-sans font-normal";
  const onCellClick = col.onClickKey ? row[col.onClickKey] as (() => void) | undefined : undefined;

  const icon = col.iconKey ? row[col.iconKey] : undefined;
  const featuredIcon = col.featuredIconKey ? row[col.featuredIconKey] : undefined;
  const featuredIconVariant =
    (col.featuredIconVariantKey ? row[col.featuredIconVariantKey] : undefined) ??
    col.featuredIconDefaultVariant ??
    "grey";
  const avatarSrc = col.avatarSrcKey ? row[col.avatarSrcKey] : undefined;
  const avatarInitials =
    col.avatarInitialsKey ? row[col.avatarInitialsKey] : undefined;
  const textColor = col.textColor ?? "text-rdj-text-primary";

  const hasLeading = icon || featuredIcon || avatarSrc || avatarInitials;
  const hasText = (text != null && String(text) !== "") || (subtext != null && String(subtext) !== "");

  // Render leading visual element
  const leadingEl = hasLeading ? (
    <>
      {icon && <div className="shrink-0 size-[16px]">{icon}</div>}
      {featuredIcon && (
        <FeaturedIcon icon={featuredIcon} variant={featuredIconVariant} size={32} />
      )}
      {avatarSrc && (
        <div className="relative rounded-full shrink-0 size-[32px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-full size-full"
            src={avatarSrc}
          />
        </div>
      )}
      {!avatarSrc && avatarInitials && (
        <div className="relative rounded-full shrink-0 size-[32px] bg-[#f2f4f7] flex items-center justify-center">
          <p className="font-sans font-bold text-[#344054] text-[12px]">
            {avatarInitials}
          </p>
        </div>
      )}
    </>
  ) : null;

  // If we have a leading visual, wrap in horizontal flex
  if (hasLeading) {
    return (
      <div className={`flex items-center gap-[8px] ${hasText ? "" : "justify-center"}`}>
        {leadingEl}
        {hasText && (
          <div className={`min-w-0 ${alignCls}`}>
            {text != null && String(text) !== "" && (
              onCellClick ? (
                <button
                  type="button"
                  className={`${fontCls} leading-[20px] ${textColor} text-[14px] truncate text-left hover:underline cursor-pointer`}
                  onClick={(e) => { e.stopPropagation(); onCellClick(); }}
                >
                  {String(text)}
                </button>
              ) : (
                <p className={`${fontCls} leading-[20px] ${textColor} text-[14px] truncate`}>
                  {String(text)}
                </p>
              )
            )}
            {subtext != null && String(subtext) !== "" && (
              <p className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px] truncate">
                {String(subtext)}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  // No leading visual — plain text layout
  const textEl = text != null && String(text) !== "" ? (
    onCellClick ? (
      <button
        type="button"
        className={`${fontCls} leading-[20px] ${textColor} text-[14px] truncate text-left hover:underline cursor-pointer`}
        onClick={(e) => { e.stopPropagation(); onCellClick(); }}
      >
        {String(text)}
      </button>
    ) : (
      <p className={`${fontCls} leading-[20px] ${textColor} text-[14px] truncate`}>
        {String(text)}
      </p>
    )
  ) : null;

  return (
    <div className={alignCls}>
      {textEl}
      {subtext != null && String(subtext) !== "" && (
        <p className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px] truncate">
          {String(subtext)}
        </p>
      )}
    </div>
  );
}

function CellRating({
  row,
  col,
}: {
  row: RowData;
  col: RatingColumn;
}) {
  const value = row[col.key] ?? 0;
  const max = col.max ?? 5;
  const [hovered, setHovered] = useState<number | null>(null);

  const getStarFill = (star: number) => {
    if (hovered === null) {
      return star <= value ? "#FDB022" : "#F2F4F7";
    }
    if (hovered >= value) {
      // Increasing or same: filled up to current, light yellow for preview
      if (star <= value) return "#FDB022";
      if (star <= hovered) return "#FEF0C7";
      return "#F2F4F7";
    }
    // Decreasing: filled up to hovered, light yellow for stars being removed
    if (star <= hovered) return "#FDB022";
    if (star <= value) return "#FEF0C7";
    return "#F2F4F7";
  };

  return (
    <div
      className="flex items-center gap-[4px]"
      onMouseLeave={() => setHovered(null)}
    >
      {Array.from({ length: max }, (_, i) => {
        const star = i + 1;
        return (
          <button
            key={star}
            onClick={(e) => {
              e.stopPropagation();
              col.onRate?.(row.id, star);
            }}
            onMouseEnter={() => setHovered(star)}
            className="overflow-clip relative shrink-0 size-[20px] cursor-pointer"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
            >
              <path
                d={STAR_PATH}
                fill={getStarFill(star)}
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

function CellBadges({ row, col }: { row: RowData; col: BadgesColumn }) {
  const items: string[] = Array.isArray(row[col.key]) ? row[col.key] : [];
  const variants: BadgeVariant[] =
    col.variantsKey && Array.isArray(row[col.variantsKey])
      ? row[col.variantsKey]
      : items.map(() => col.defaultVariant ?? "grey");

  const maxVisible = col.maxVisible ?? 2;
  const visibleCount = items.length <= maxVisible ? items.length : maxVisible;
  const overflow = items.length - visibleCount;

  return (
    <div className="flex items-center gap-[4px] flex-wrap">
      {items.slice(0, visibleCount).map((badge, idx) => (
        <div key={idx} className="shrink-0">
          <Badge label={badge} variant={variants[idx] ?? "grey"} />
        </div>
      ))}
      {overflow > 0 && (
        <div className="shrink-0">
          <Badge label={`+${overflow}`} variant="grey" />
        </div>
      )}
    </div>
  );
}

function CellStatus({ row, col }: { row: RowData; col: StatusColumn }) {
  const text = row[col.key];
  const variant =
    (col.variantKey ? row[col.variantKey] : undefined) ??
    col.defaultVariant ??
    "grey";

  const icon = col.iconKey ? row[col.iconKey] : undefined;
  const showDot = col.dot ?? !icon;

  const type =
    (col.typeKey ? row[col.typeKey] : undefined) ??
    col.defaultType ??
    "default";

  return <Badge label={text} variant={variant} dot={showDot} icon={icon} type={type} />;
}

function CellProgress({ row, col }: { row: RowData; col: ProgressColumn }) {
  const raw = col.valueKey ? row[col.valueKey] : row[col.key];
  const value = typeof raw === "number" ? raw : parseInt(String(raw), 10) || 0;
  const clamped = Math.max(0, Math.min(100, value));

  // Donut dimensions
  const size = 20;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (clamped / 100) * circumference;

  // Color based on value
  const color =
    clamped >= 75 ? "#17B26A" : clamped >= 50 ? "#F79009" : clamped >= 25 ? "#F79009" : "#F04438";
  const trackColor = "#F2F4F7";

  const alignCls = col.align === "right" ? "justify-end" : "justify-start";

  return (
    <div className={`flex items-center gap-[8px] ${alignCls}`}>
      <svg
        className="shrink-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px] whitespace-nowrap">
        {clamped}%
      </p>
    </div>
  );
}

function CellDeadline({ row, col }: { row: RowData; col: DeadlineColumn }) {
  const text = row[col.key];
  const expired = col.expiredKey ? !!row[col.expiredKey] : false;
  const alignCls = col.align === "right" ? "text-right" : "text-left";
  const fontCls = expired
    ? "font-sans font-bold"
    : "font-sans font-normal";
  const colorCls = expired ? "text-rdj-text-warning" : "text-rdj-text-secondary";

  return (
    <p
      className={`${fontCls} leading-[20px] text-[14px] truncate ${alignCls} ${colorCls}`}
    >
      {text}
    </p>
  );
}

/* ─────────────────────────────────────────────
   Cell dispatcher
   ───────────────────────────────────────────── */

function renderCell(row: RowData, col: Column, rowIndex: number, onAction?: () => void) {
  switch (col.type) {
    case "leading-text":
      return <CellLeadingText row={row} col={col} onAction={onAction} />;
    case "text":
      return <CellText row={row} col={col} />;
    case "rating":
      return <CellRating row={row} col={col} />;
    case "badges":
      return <CellBadges row={row} col={col} />;
    case "status":
      return <CellStatus row={row} col={col} />;
    case "progress":
      return <CellProgress row={row} col={col} />;
    case "deadline":
      return <CellDeadline row={row} col={col} />;
    case "custom":
      return col.render(row, rowIndex);
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────
   Table component
   ───────────────────────────────────────────── */

export default function Table({
  columns,
  data,
  onRowClick,
  onRowAction,
  activeRowId,
  selectable = false,
  selectedIds = [],
  onSelectAll,
  onSelectItem,
  hoveredRowId,
  onRowHover,
}: TableProps) {
  const allSelected = data.length > 0 && selectedIds.length === data.length;
  const someSelected = selectedIds.length > 0 && selectedIds.length < data.length;

  return (
    <div className="overflow-x-auto bg-rdj-bg-primary border-t border-rdj-border-secondary">
      <div className="min-w-max">
      {/* ── Header ── */}
      <div className="border-b border-rdj-border-secondary">
        <div className="flex items-center px-[24px] py-[12px] gap-[16px]">
          {selectable && (
            <div className="w-[40px] shrink-0 flex items-center justify-center">
              <Checkbox
                checked={allSelected}
                indeterminate={someSelected}
                onChange={() => onSelectAll?.()}
              />
            </div>
          )}
          {columns.map((col) => {
            const isLeading = col.type === "leading-text";
            const widthCls = isLeading
              ? "flex-1 min-w-[400px]"
              : `${col.width ?? "w-[120px]"} shrink-0`;
            // When a leading-text column has a dotKey, offset the header
            // to align with the text content (past the dot + gap space)
            const headerPadding = isLeading && (col as LeadingTextColumn).dotKey ? "pl-[16px]" : "";

            return (
              <div
                key={col.key}
                className={`${widthCls} ${headerPadding} ${col.onSort ? "cursor-pointer" : ""}`}
                onClick={() => col.onSort?.()}
              >
                <ColumnHeader
                  label={col.header}
                  sortActive={col.sortActive}
                  sortDirection={col.sortDirection}
                  align={col.type === "text" ? (col as TextColumn).align : col.type === "progress" ? (col as ProgressColumn).align : col.type === "deadline" ? (col as DeadlineColumn).align : "left"}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Body ── */}
      <div>
        {data.map((row, rowIndex) => {
          const isSelected = selectable && selectedIds.includes(row.id);
          const isActive = activeRowId === row.id;
          const bgCls = isSelected || isActive
            ? "bg-rdj-bg-active hover:bg-rdj-bg-active-hover"
            : "hover:bg-rdj-bg-primary-hover";

          return (
          <div
            key={row.id}
            className={`group/row flex items-center px-[24px] py-[16px] gap-[16px] border-b border-rdj-border-secondary ${bgCls} transition-colors ${onRowClick ? "cursor-pointer" : ""}`}
            onMouseEnter={() => onRowHover?.(row.id)}
            onMouseLeave={() => onRowHover?.(null)}
            onClick={onRowClick ? () => onRowClick(row) : undefined}
          >
            {selectable && (
              <div className="w-[40px] shrink-0 flex items-center justify-center">
                <Checkbox
                  checked={isSelected}
                  onChange={() => onSelectItem?.(row.id)}
                />
              </div>
            )}
            {columns.map((col) => {
              const isLeading = col.type === "leading-text";
              const widthCls = isLeading
                ? "flex-1 min-w-[400px]"
                : `${col.width ?? "w-[120px]"} shrink-0`;

              const actionHandler = onRowAction ?? onRowClick;
              const cellContent = renderCell(row, col, rowIndex, (col.type === "leading-text" && actionHandler) ? () => actionHandler(row) : undefined);

              return (
                <div key={col.key} className={widthCls}>
                  {col.editable ? (
                    <div className={`rounded-[6px] px-[6px] py-[6px] -mx-[6px] -my-[6px] h-[52px] flex items-center border transition-all ${
                      col.type === 'rating'
                        ? 'border-transparent group-hover/row:border-[#FDB022] group-hover/row:bg-rdj-bg-secondary-hover'
                        : 'border-transparent group-hover/row:bg-rdj-bg-secondary-hover'
                    }`}>
                      <div className="w-full">{cellContent}</div>
                    </div>
                  ) : (
                    cellContent
                  )}
                </div>
              );
            })}
          </div>
          );
        })}

        {data.length === 0 && (
          <div className="flex items-center justify-center px-[24px] py-[48px]">
            <p className="font-sans font-normal text-[14px] text-rdj-text-tertiary">
              Geen resultaten gevonden
            </p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}