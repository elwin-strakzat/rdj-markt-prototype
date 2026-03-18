import { useDrag } from "react-dnd";
import { useNavigate } from "react-router";
import imgAvatar from "../../assets/a2737d3b5b234fc04041650cb9f114889c6859da.png";
import { Vessel } from "../data/mock-data";

interface VesselCardProps {
  vessel: Vessel;
}

export default function VesselCard({ vessel }: VesselCardProps) {
  const navigate = useNavigate();
  const [{ isDragging }, drag] = useDrag({
    type: 'VESSEL',
    item: { id: vessel.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div onClick={() => navigate(`/markt/bevrachting/vaartuig/${vessel.id}`)}>
      <div
        ref={drag}
        className={`bg-rdj-bg-primary border border-rdj-border-secondary rounded-[8px] p-[16px] hover:shadow-md transition-shadow cursor-pointer ${isDragging ? 'opacity-50' : ''}`}
      >
        {/* Top Row */}
        <div className="flex items-start gap-[10px] mb-[12px] w-full">
          <div className="flex-1 min-w-0">
            <p className="font-sans font-bold leading-[20px] text-[14px] text-black mb-[2px]">
              {vessel.title}
            </p>
            <p className="font-sans font-normal leading-[18px] text-rdj-text-secondary text-[12px]">
              {vessel.weight} · {vessel.vesselType}
            </p>
          </div>
          <div className="relative rounded-[9999px] shrink-0 size-[24px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
            <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
          </div>
        </div>

        {/* Location Row */}
        {vessel.location && (
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-1 gap-[6px] items-center min-w-0">
              <div className="relative shrink-0 size-[12px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <g clipPath="url(#clip0_vessel_location)">
                    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" fill="#258DD2" opacity="0.3" />
                    <circle cx="6" cy="6" fill="#258DD2" r="3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_vessel_location">
                      <rect fill="white" height="12" width="12" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-sans font-normal leading-[18px] text-rdj-text-primary text-[12px] overflow-hidden text-ellipsis whitespace-nowrap">
                {vessel.location}
              </p>
            </div>
            {vessel.locationDate && (
              <p className="font-sans font-normal leading-[18px] text-rdj-text-tertiary text-[12px] whitespace-nowrap ml-[8px]">
                {vessel.locationDate}
              </p>
            )}
          </div>
        )}

        {/* Destination Row (if exists) */}
        {vessel.to && (
          <div className="flex items-start justify-between w-full mt-[8px]">
            <div className="flex flex-1 gap-[6px] items-center min-w-0">
              <div className="relative shrink-0 size-[12px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <circle cx="6" cy="6" fill="#667085" r="3" />
                </svg>
              </div>
              <p className="font-sans font-normal leading-[18px] text-rdj-text-primary text-[12px] overflow-hidden text-ellipsis whitespace-nowrap">
                {vessel.to}
              </p>
            </div>
          </div>
        )}

        {/* Matches Footer */}
        {vessel.matches != null && vessel.matches > 0 && (
          <div className="mt-[12px] pt-[12px] border-t border-rdj-border-secondary">
            <div className="flex items-center gap-[6px]">
              <p className="font-sans font-normal leading-[18px] text-rdj-text-tertiary text-[12px]">
                {vessel.matches} ladingen
              </p>
              <p className="font-sans font-normal leading-[18px] text-rdj-text-tertiary text-[12px]">
                · 12 matches
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}