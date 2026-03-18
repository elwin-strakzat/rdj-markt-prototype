import { useState, useCallback, useRef, useEffect, type ReactNode } from "react";
import { X, Info } from "lucide-react";

const SIDEBAR_WIDTH = 360;
const MIN_WIDTH_CONTENT = 600;
const MAX_WIDTH_CONTENT = 1240;

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
  const [contentWidth, setContentWidth] = useState(MAX_WIDTH_CONTENT);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  const totalWidth = sidebarOpen && sidebar
    ? contentWidth + SIDEBAR_WIDTH
    : contentWidth;

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    startX.current = e.clientX;
    startWidth.current = contentWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, [contentWidth]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = startX.current - e.clientX;
      const newWidth = Math.min(MAX_WIDTH_CONTENT, Math.max(MIN_WIDTH_CONTENT, startWidth.current + delta));
      setContentWidth(newWidth);
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{ width: `${totalWidth}px` }}
      className="fixed inset-y-0 right-0 z-30 flex flex-col bg-white border-l border-rdj-border-secondary shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)] animate-[slide-in-right_150ms_ease-out] transition-[width] duration-150 ease-out"
    >
      {/* Resize handle */}
      <div
        onMouseDown={handleMouseDown}
        className="absolute left-0 top-0 bottom-0 w-[4px] cursor-col-resize hover:bg-rdj-fg-brand/30 active:bg-rdj-fg-brand/50 z-10"
      />
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
          <div className="flex items-center gap-[4px] shrink-0">
            {sidebar && (
              <button
                onClick={() => setSidebarOpen((v) => !v)}
                className={`p-[8px] rounded-[8px] transition-colors shrink-0 ${sidebarOpen ? 'bg-rdj-bg-active text-rdj-text-brand' : 'hover:bg-rdj-bg-primary-hover text-rdj-text-secondary'}`}
              >
                <Info size={20} />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-[8px] rounded-[8px] hover:bg-rdj-bg-primary-hover transition-colors shrink-0"
            >
              <X size={20} className="text-rdj-text-secondary" />
            </button>
          </div>
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
          <div
            className={`shrink-0 border-l border-rdj-border-secondary overflow-hidden transition-[width] duration-150 ease-out ${sidebarOpen ? 'w-[360px]' : 'w-0 border-l-0'}`}
          >
            <div className="w-[360px] h-full overflow-y-auto">
              {sidebar}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
