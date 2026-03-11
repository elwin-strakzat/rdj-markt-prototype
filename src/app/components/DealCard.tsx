import { Link } from "react-router";
import { useDrag } from "react-dnd";
import Badge from "./Badge";
import type { Contract } from "../data/api";
import { CONTRACT_SOORT_LABELS } from "../data/mock-contract-data";
import { mockRelaties, mockGebruikers } from "../data/mock-relatie-data";
import { mockTaken } from "../data/mock-taken-data";

interface DealCardProps {
  deal: Contract;
}

function formatCurrency(value?: number): string {
  if (value === undefined || value === null) return "";
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short" });
}

function getInitials(name: string): string {
  return name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}

function isExpired(dateStr?: string): boolean {
  if (!dateStr) return false;
  return new Date(dateStr) < new Date();
}

export default function DealCard({ deal }: DealCardProps) {
  const [{ isDragging }, drag] = useDrag({
    type: "DEAL",
    item: { id: deal.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const relatie = mockRelaties.find((r) => r.id === deal.relatieId);
  const eigenaar = mockGebruikers.find((g) => g.id === deal.eigenaarId);
  const openTakenCount = mockTaken.filter((t) => t.contractId === deal.id && t.status === "open").length;

  const deadline = deal.type === "spot" ? deal.laaddatum : deal.startDatum;
  const deadlineExpired = isExpired(deadline);

  const route = deal.type === "spot"
    ? [deal.laadhavenNaam, deal.loshavenNaam].filter(Boolean).join(" → ")
    : deal.routes && deal.routes.length > 0
      ? [deal.routes[0].laadhavenNaam, deal.routes[0].loshavenNaam].filter(Boolean).join(" → ") + (deal.routes.length > 1 ? ` +${deal.routes.length - 1}` : "")
      : "";

  return (
    <Link to={`/crm/deal/${deal.id}`}>
      <div
        ref={drag}
        className={`bg-rdj-bg-primary border border-rdj-border-secondary rounded-[8px] p-[16px] hover:shadow-md transition-shadow cursor-pointer ${isDragging ? "opacity-50" : ""}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-[8px] mb-[8px]">
          <div className="flex-1 min-w-0">
            <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px]">
              {deal.titel}
            </p>
            <p className="font-sans font-normal leading-[18px] text-rdj-text-secondary text-[12px] mt-[2px]">
              {relatie?.naam || "—"} · {CONTRACT_SOORT_LABELS[deal.soort]}
            </p>
          </div>
          {eigenaar && (
            <div className="shrink-0 size-[28px] rounded-full bg-[#f2f4f7] flex items-center justify-center">
              <span className="font-sans font-bold text-[10px] text-rdj-text-secondary">{getInitials(eigenaar.naam)}</span>
            </div>
          )}
        </div>

        {/* Route */}
        {route && (
          <div className="flex items-center gap-[6px] mb-[6px]">
            <div className="shrink-0 w-[14px] flex items-center justify-center">
              <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-[#667085]" />
            </div>
            <p className="font-sans font-normal leading-[18px] text-[#344054] text-[12px] flex-1 min-w-0 truncate">
              {route}
            </p>
          </div>
        )}

        {/* Waarde */}
        {deal.waarde && (
          <div className="flex items-center gap-[6px]">
            <div className="shrink-0 w-[14px] flex items-center justify-center">
              <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                <path d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
              </svg>
            </div>
            <p className="font-sans font-normal leading-[18px] text-[#475467] text-[12px]">
              {formatCurrency(deal.waarde)}
            </p>
          </div>
        )}

        {/* Footer: eigenaar + deadline */}
        <div className="mt-[10px] pt-[10px] border-t border-rdj-border-secondary flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <Badge
              label={deal.type === "contract" ? "Contract" : "Spot"}
              variant="grey"
            />
            {openTakenCount > 0 && (
              <div className="inline-flex items-center gap-[3px] px-[6px] py-[1px] rounded-[4px] bg-[#f2f4f7]">
                <svg className="size-[10px] text-rdj-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-sans font-bold text-[11px] text-rdj-text-secondary leading-[16px]">{openTakenCount}</span>
              </div>
            )}
            {eigenaar && (
              <p className="font-sans font-normal leading-[18px] text-rdj-text-secondary text-[12px]">
                {eigenaar.naam}
              </p>
            )}
          </div>
          {deadline && (
            <p className={`font-sans font-bold leading-[18px] text-[12px] ${deadlineExpired ? "text-[#F04438]" : "text-rdj-text-secondary"}`}>
              {formatDate(deadline)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
