import { type ReactNode } from "react";
import { useNavigate } from "react-router";
import Badge from "./Badge";

export interface PageTab {
  label: string;
  path: string;
  isActive: boolean;
  /** Optional badge label (e.g. count) — shown as color/brand Badge */
  badge?: string;
}

interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Optional icon shown before the title */
  titleIcon?: ReactNode;
  /** Optional compact badge shown inline next to the title */
  titleBadge?: ReactNode;
  /** Optional subtitle shown below the title */
  subtitle?: ReactNode;
  /** Optional content displayed between title and action buttons (e.g. informational text) */
  titleMeta?: ReactNode;
  /** Action buttons rendered to the right of the title */
  actions?: ReactNode;
  /** Tab items; omit for pages without tabs */
  tabs?: PageTab[];
  /** Optional callback when a tab is clicked; if provided, overrides route navigation */
  onTabClick?: (tab: PageTab) => void;
  /** Filter controls rendered on the left side of the filter bar */
  filtersLeft?: ReactNode;
  /** Filter controls rendered on the right side of the filter bar */
  filtersRight?: ReactNode;
}

export default function PageHeader({
  title,
  titleIcon,
  titleBadge,
  subtitle,
  titleMeta,
  actions,
  tabs,
  onTabClick,
  filtersLeft,
  filtersRight,
}: PageHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Title Row */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-center flex flex-wrap gap-[20px_16px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[320px] relative">
                <div className="flex items-center gap-[12px] w-full">
                  {titleIcon}
                  <p className="font-sans font-bold leading-[38px] shrink-0 text-rdj-text-primary text-[30px]">
                    {title}
                  </p>
                  {titleBadge}
                </div>
                {subtitle && (
                  <div className="w-full">
                    {typeof subtitle === "string" ? (
                      <p className="font-sans font-normal leading-[24px] text-rdj-text-secondary text-[16px]">
                        {subtitle}
                      </p>
                    ) : (
                      subtitle
                    )}
                  </div>
                )}
              </div>
              {titleMeta}
              {actions && (
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  {actions}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Row */}
      {tabs && tabs.length > 0 && (
        <div className="relative shrink-0 w-full pt-[24px]">
          <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border-rdj-border-secondary border-b border-solid inset-0 pointer-events-none"
              />
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                {tabs.map((tab) => (
                  <button
                    key={tab.path}
                    onClick={() => onTabClick ? onTabClick(tab) : navigate(tab.path)}
                    className={`content-stretch flex gap-[8px] h-[32px] items-center justify-center pb-[12px] px-[4px] relative shrink-0 ${
                      tab.isActive ? "border-b-2 border-[#1567a4]" : ""
                    }`}
                  >
                    <p
                      className={`font-sans font-bold leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap ${
                        tab.isActive ? "text-rdj-text-brand" : "text-rdj-text-tertiary"
                      }`}
                    >
                      {tab.label}
                    </p>
                    {tab.badge && (
                      <Badge
                        label={tab.badge}
                        variant="brand"
                        type={tab.isActive ? "color" : "default"}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters Row */}
      {(filtersLeft || filtersRight) && (
        <div className="relative shrink-0 w-full pt-[16px]">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[16px] items-center px-[24px] relative w-full">
              {filtersLeft && (
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  {filtersLeft}
                </div>
              )}
              {filtersRight && (
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-h-px min-w-px relative">
                  {filtersRight}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}