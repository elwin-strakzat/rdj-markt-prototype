import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { useLocation } from "react-router";
import LadingDetailPanel from "./LadingDetailPanel";
import VaartuigDetailPanel from "./VaartuigDetailPanel";

interface DetailPanelState {
  type: "lading" | "vaartuig";
  id: string;
}

interface DetailPanelContextValue {
  openDetail: (type: "lading" | "vaartuig", id: string) => void;
  closeDetail: () => void;
  activeDetail: DetailPanelState | null;
}

const DetailPanelContext = createContext<DetailPanelContextValue | null>(null);

export function useDetailPanel() {
  const ctx = useContext(DetailPanelContext);
  if (!ctx) throw new Error("useDetailPanel must be used within DetailPanelProvider");
  return ctx;
}

export function DetailPanelProvider({ children }: { children: ReactNode }) {
  const [activeDetail, setActiveDetail] = useState<DetailPanelState | null>(null);
  const { pathname } = useLocation();

  // Close panel when navigating to a different page
  useEffect(() => {
    setActiveDetail(null);
  }, [pathname]);

  const openDetail = useCallback((type: "lading" | "vaartuig", id: string) => {
    setActiveDetail({ type, id });
  }, []);

  const closeDetail = useCallback(() => {
    setActiveDetail(null);
  }, []);

  return (
    <DetailPanelContext.Provider value={{ openDetail, closeDetail, activeDetail }}>
      {children}

      {activeDetail?.type === "lading" && (
        <LadingDetailPanel id={activeDetail.id} onClose={closeDetail} />
      )}
      {activeDetail?.type === "vaartuig" && (
        <VaartuigDetailPanel id={activeDetail.id} onClose={closeDetail} />
      )}
    </DetailPanelContext.Provider>
  );
}
