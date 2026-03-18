import { type ReactNode } from "react";
import { X } from "lucide-react";

interface ModelessPanelProps {
  /** Panel title shown in the header */
  title: string;
  /** Optional subtitle */
  subtitle?: ReactNode;
  /** Close handler */
  onClose: () => void;
  /** Main content (left side) */
  children: ReactNode;
  /** Right sidebar content */
  sidebar?: ReactNode;
}

export default function ModelessPanel({
  title,
  subtitle,
  onClose,
  children,
  sidebar,
}: ModelessPanelProps) {
  return (
    <div className="fixed inset-y-0 right-0 z-30 flex flex-col bg-white w-full max-w-[1200px] border-l border-rdj-border-secondary shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]">
      {/* Header */}
      <div className="border-b border-rdj-border-secondary px-[24px] py-[16px] shrink-0">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-[2px]">
            <p className="font-sans font-bold leading-[28px] text-rdj-text-primary text-[18px]">
              {title}
            </p>
            {subtitle && (
              <div className="font-sans font-normal leading-[20px] text-rdj-text-secondary text-[14px]">
                {subtitle}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-[8px] rounded-[8px] hover:bg-rdj-bg-primary-hover transition-colors shrink-0"
          >
            <X size={20} className="text-rdj-text-secondary" />
          </button>
        </div>
      </div>

      {/* Body: main content + sidebar */}
      <div className="flex flex-1 min-h-0">
        {/* Main content */}
        <div className="flex-1 overflow-y-auto min-w-0">
          {children}
        </div>

        {/* Right sidebar */}
        {sidebar && (
          <div className="w-[360px] shrink-0 border-l border-rdj-border-secondary overflow-y-auto">
            {sidebar}
          </div>
        )}
      </div>
    </div>
  );
}
