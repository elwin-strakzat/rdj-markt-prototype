import { type ReactNode } from "react";

export interface SegmentedButtonItem {
  /** Unique value for this segment */
  value: string;
  /** Text label (for text variant) */
  label?: string;
  /** Icon ReactNode (for icon variant) */
  icon?: ReactNode;
  /** Optional count badge shown after label */
  count?: number;
}

interface SegmentedButtonGroupProps {
  /** Array of segment items */
  items: SegmentedButtonItem[];
  /** Currently active value */
  value: string;
  /** Called when a segment is clicked */
  onChange: (value: string) => void;
  /** Optional className on the outer wrapper */
  className?: string;
}

export default function SegmentedButtonGroup({
  items,
  value,
  onChange,
  className = "",
}: SegmentedButtonGroupProps) {
  return (
    <div className={`relative rounded-[6px] shrink-0 ${className}`}>
      <div className="content-stretch flex isolate items-start overflow-clip relative rounded-[inherit]">
        {items.map((item, index) => {
          const isActive = item.value === value;
          const zIndex = items.length - index + 7; // z-[9], z-[8], etc.
          const isLast = index === items.length - 1;

          return (
            <button
              key={item.value}
              onClick={() => onChange(item.value)}
              className={`${
                isActive ? "bg-rdj-bg-active" : "bg-rdj-bg-primary"
              } content-stretch flex items-center justify-center gap-[6px] min-h-[40px] ${
                item.label ? "px-[16px]" : "px-[12px]"
              } py-[8px] relative shrink-0 cursor-pointer`}
              style={{ zIndex }}
            >
              {/* Divider between segments */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="absolute border-[#d0d5dd] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none"
                />
              )}

              {/* Icon */}
              {item.icon && (
                <div
                  className={`[&_svg]:block [&_svg]:size-full overflow-clip relative shrink-0 size-[20px] ${
                    isActive
                      ? "[&_svg_path]:stroke-rdj-text-brand [&_svg_circle]:stroke-rdj-text-brand [&_svg_rect]:stroke-rdj-text-brand [&_svg_line]:stroke-rdj-text-brand"
                      : "[&_svg_path]:stroke-[#344054] [&_svg_circle]:stroke-[#344054] [&_svg_rect]:stroke-[#344054] [&_svg_line]:stroke-[#344054]"
                  }`}
                >
                  {item.icon}
                </div>
              )}

              {/* Label */}
              {item.label && (
                <p
                  className={`font-sans font-bold leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap ${
                    isActive ? "text-rdj-text-brand" : "text-[#344054]"
                  }`}
                >
                  {item.label}
                </p>
              )}

              {/* Count badge */}
              {item.count != null && (
                <span
                  className={`font-sans font-medium text-[12px] leading-[16px] rounded-full min-w-[20px] px-[6px] py-[1px] text-center ${
                    isActive
                      ? "bg-rdj-text-brand text-white"
                      : "bg-[#f2f4f7] text-[#344054]"
                  }`}
                >
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {/* Border overlay */}
      <div
        aria-hidden="true"
        className="absolute border border-rdj-border-primary border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      />
    </div>
  );
}