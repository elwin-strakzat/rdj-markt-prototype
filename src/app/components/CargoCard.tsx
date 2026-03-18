import { useDrag } from "react-dnd";
import { Ship, Warehouse } from "lucide-react";
import { useNavigate } from "react-router";
import imgAvatar from "../../assets/a2737d3b5b234fc04041650cb9f114889c6859da.png";
import { Cargo } from "../data/mock-data";

interface CargoCardProps {
  cargo: Cargo;
}

export default function CargoCard({ cargo }: CargoCardProps) {
  const navigate = useNavigate();
  const [{ isDragging }, drag] = useDrag({
    type: 'CARGO',
    item: { id: cargo.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div onClick={() => navigate(`/markt/bevrachting/lading/${cargo.id}`)}>
      <div
        ref={drag}
        className={`bg-rdj-bg-primary border border-rdj-border-secondary rounded-[8px] p-[16px] hover:shadow-md transition-shadow cursor-pointer ${isDragging ? 'opacity-50' : ''}`}
      >
        {/* Header: Title + Avatar */}
        <div className="flex items-start justify-between gap-[8px] mb-[12px]">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-[4px]">
              {cargo.exType && (
                cargo.exType === "opslag" ? (
                  <Warehouse className="shrink-0 size-[14px] text-rdj-text-tertiary" />
                ) : (
                  <Ship className="shrink-0 size-[14px] text-rdj-text-tertiary" />
                )
              )}
              <p className="font-sans font-bold leading-[20px] text-rdj-text-primary text-[14px]">
                {cargo.title}
              </p>
            </div>
            <p className="font-sans font-normal leading-[18px] text-rdj-text-secondary text-[12px] mt-[2px]">
              {cargo.company && <>{cargo.company} · </>}{cargo.code}
            </p>
          </div>
          <div className="relative rounded-[9999px] shrink-0 size-[28px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
          </div>
        </div>

        {/* Location rows */}
        <div className="space-y-[6px] mb-[8px]">
          {/* Load location */}
          <div className="flex items-center gap-[6px]">
            <div className="shrink-0 w-[14px] flex items-center justify-center">
              <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-[#667085]" />
            </div>
            <p className="font-sans font-normal leading-[18px] text-[#344054] text-[12px] flex-1 min-w-0 truncate">
              {cargo.from}
            </p>
            <p className="font-sans font-normal leading-[18px] text-rdj-text-tertiary text-[12px] shrink-0 whitespace-nowrap">
              {cargo.fromDate}
            </p>
          </div>

          {/* Unload location */}
          <div className="flex items-center gap-[6px]">
            <div className="shrink-0 w-[14px] flex items-center justify-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#667085]" />
            </div>
            <p className="font-sans font-normal leading-[18px] text-[#344054] text-[12px] flex-1 min-w-0 truncate">
              {cargo.to}
            </p>
            {cargo.toDate && (
              <p className="font-sans font-normal leading-[18px] text-rdj-text-tertiary text-[12px] shrink-0 whitespace-nowrap">
                {cargo.toDate}
              </p>
            )}
          </div>
        </div>

        {/* Cargo weight */}
        <div className="flex items-center gap-[6px] mb-[2px]">
          <div className="shrink-0 w-[14px] flex items-center justify-center">
            <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
              <path d="M6 1.5V3M3.75 4.5H8.25M2.625 10.5H9.375C9.75 10.5 10.125 10.125 10.125 9.75L8.625 4.5H3.375L1.875 9.75C1.875 10.125 2.25 10.5 2.625 10.5Z" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
            </svg>
          </div>
          <p className="font-sans font-normal leading-[18px] text-[#344054] text-[12px] flex-1 min-w-0 truncate">
            {cargo.cargo}
          </p>
        </div>

        {/* Price info (werklijst) */}
        {cargo.priceInfo && (
          <div className="flex items-center gap-[6px] mt-[4px]">
            <div className="shrink-0 w-[14px] flex items-center justify-center">
              <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                <path d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
              </svg>
            </div>
            <p className="font-sans font-normal leading-[18px] text-[#475467] text-[12px] flex-1 min-w-0 truncate">
              {cargo.priceInfo}
            </p>
          </div>
        )}

        {/* Urgent marker */}
        {cargo.urgent && (
          <div className="mt-[10px] pt-[10px] border-t border-rdj-border-secondary">
            <div className="flex items-center gap-[6px]">
              <svg className="shrink-0 size-[14px]" fill="none" viewBox="0 0 14 14">
                <path d="M7 4.33V7M7 9.67H7.007M12.833 7A5.833 5.833 0 1 1 1.167 7a5.833 5.833 0 0 1 11.666 0Z" stroke="#F04438" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
              </svg>
              <p className="font-sans font-bold leading-[18px] text-[#F04438] text-[12px]">
                Beoordeling, 9:00
              </p>
            </div>
          </div>
        )}

        {/* Bids & Matches footer */}
        {(cargo.bids != null && cargo.bids > 0 || cargo.matches != null && cargo.matches > 0) && (
          <div className={`flex items-center gap-[12px] ${cargo.urgent ? 'mt-[8px]' : 'mt-[10px] pt-[10px] border-t border-rdj-border-secondary'}`}>
            {cargo.bids && cargo.bids > 0 && (
              <p className="font-sans font-normal leading-[18px] text-rdj-text-secondary text-[12px]">
                {cargo.bids} biedingen
              </p>
            )}
            {cargo.matches && cargo.matches > 0 && (
              <p className="font-sans font-normal leading-[18px] text-rdj-text-secondary text-[12px]">
                {cargo.matches} matches
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}