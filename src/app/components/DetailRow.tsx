import { type ReactNode } from "react";
import StarRating from "./StarRating";

/**
 * DetailRow — a label + value row for detail sidebars.
 *
 * Types:
 *   default  — plain text, optional subtext
 *   linked   — text in brand color (clickable), optional subtext
 *   badges   — wrapping badge list
 *   user     — avatar (image or initials) + text
 */

export type DetailRowType = "default" | "linked" | "badges" | "user" | "rating";

export interface DetailRowProps {
  /** Left-side label */
  label: string;

  /** Row type — determines how the value is rendered */
  type?: DetailRowType;

  /** Primary value text (default / linked / user) */
  value?: string;

  /** Secondary line below value (default / linked) */
  subtext?: string;

  /** Badge strings (type = badges) */
  badges?: string[];

  /** Avatar image source (type = user) */
  avatarSrc?: string;

  /** Avatar initials fallback (type = user) */
  avatarInitials?: string;

  /** Click handler — only applies to linked rows */
  onClick?: () => void;

  /** Label width — defaults to w-[144px] */
  labelWidth?: string;

  /** Show editable hover box on the value area */
  editable?: boolean;

  /** Callback when the editable value area is clicked */
  onEdit?: () => void;

  /** Rating value (type = rating) */
  rating?: number;

  /** Rating change handler (type = rating) */
  onRate?: (value: number) => void;
}

export default function DetailRow({
  label,
  type = "default",
  value,
  subtext,
  badges,
  avatarSrc,
  avatarInitials,
  onClick,
  labelWidth = "w-[144px]",
  editable = false,
  onEdit,
  rating,
  onRate,
}: DetailRowProps) {
  const valueContent = (
    <>
      {type === "default" && <DefaultValue value={value} subtext={subtext} />}
      {type === "linked" && (
        <LinkedValue value={value} subtext={subtext} onClick={onClick} />
      )}
      {type === "badges" && <BadgesValue badges={badges} />}
      {type === "user" && (
        <UserValue
          value={value}
          avatarSrc={avatarSrc}
          avatarInitials={avatarInitials}
        />
      )}
      {type === "rating" && (
        <div className="px-[12px] py-[6px]">
          <StarRating value={rating ?? 0} onChange={onRate} />
        </div>
      )}
    </>
  );

  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full group/detail-row">
      {/* Label */}
      <div
        className={`bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 ${labelWidth}`}
      >
        <p className="flex-[1_0_0] font-sans font-normal leading-[20px] min-h-px min-w-px relative text-rdj-text-secondary text-[14px]">
          {label}
        </p>
      </div>

      {/* Value */}
      {editable ? (
        <div
          className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative cursor-pointer"
          onClick={onEdit}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onEdit?.();
            }
          }}
        >
          <div className="rounded-[6px] w-full border border-transparent transition-all group-hover/detail-row:border-rdj-border-primary group-hover/detail-row:bg-rdj-bg-secondary-hover">
            {valueContent}
          </div>
        </div>
      ) : (
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          {valueContent}
        </div>
      )}
    </div>
  );
}

/* ── Value renderers ── */

function DefaultValue({
  value,
  subtext,
}: {
  value?: string;
  subtext?: string;
}) {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex flex-col justify-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px]">
            {value || "—"}
          </p>
          {subtext && (
            <p className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px]">
              {subtext}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function LinkedValue({
  value,
  subtext,
  onClick,
}: {
  value?: string;
  subtext?: string;
  onClick?: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
      <button
        onClick={onClick}
        className="content-stretch flex items-center gap-[6px] overflow-clip relative shrink-0 w-full group"
        type="button"
      >
        <p className="flex-[1_0_0] font-sans font-bold leading-[20px] min-h-px min-w-px overflow-hidden relative text-rdj-text-brand text-[14px] text-ellipsis text-left whitespace-nowrap group-hover:underline">
          {value || "—"}
        </p>
      </button>
      {subtext && (
        <p className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px]">
          {subtext}
        </p>
      )}
    </div>
  );
}

function BadgesValue({ badges }: { badges?: string[] }) {
  if (!badges || badges.length === 0) {
    return (
      <div className="px-[12px] py-[8px]">
        <p className="font-sans font-normal leading-[20px] text-rdj-text-tertiary text-[14px]">
          —
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <div className="content-stretch flex flex-wrap gap-[4px] items-start relative w-full">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-rdj-border-primary border-solid inset-0 pointer-events-none rounded-[4px]"
                />
                <p className="font-sans font-bold leading-[18px] relative shrink-0 text-rdj-text-primary text-[12px] text-center whitespace-nowrap">
                  {badge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UserValue({
  value,
  avatarSrc,
  avatarInitials,
}: {
  value?: string;
  avatarSrc?: string;
  avatarInitials?: string;
}) {
  const initials =
    avatarInitials ||
    (value
      ? value
          .split(" ")
          .map((w) => w[0])
          .filter(Boolean)
          .slice(0, 2)
          .join("")
          .toUpperCase()
      : "");

  return (
    <div className="content-stretch flex items-center gap-[8px] px-[12px] py-[6px] relative w-full">
      {/* Avatar */}
      <div className="relative rounded-full shrink-0 size-[28px] bg-rdj-bg-secondary overflow-hidden">
        {avatarSrc ? (
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-full size-full"
            src={avatarSrc}
          />
        ) : (
          <div className="flex items-center justify-center size-full">
            <p className="font-sans font-bold text-[11px] text-rdj-text-secondary leading-none">
              {initials}
            </p>
          </div>
        )}
      </div>

      {/* Name */}
      <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px] truncate min-w-0">
        {value || "—"}
      </p>
    </div>
  );
}