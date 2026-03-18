import { useState } from "react";

const STAR_PATH =
  "M9.10326 2.31221C9.47008 1.56773 10.5299 1.56773 10.8967 2.31221L12.7063 5.98091L16.7647 6.5725C17.5899 6.69293 17.9208 7.70441 17.3279 8.2831L14.4025 11.1317L15.0939 15.1701C15.2358 15.9925 14.3764 16.6177 13.6408 16.2309L10 14.313L6.35921 16.2309C5.6236 16.6177 4.76418 15.9925 4.90611 15.1701L5.59748 11.1317L2.67207 8.2831C2.07921 7.70441 2.41006 6.69293 3.23527 6.5725L7.29372 5.98091L9.10326 2.31221Z";

interface StarRatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  size?: number;
}

export default function StarRating({ value, max = 5, onChange, size = 20 }: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const getStarFill = (star: number) => {
    if (hovered === null) {
      return star <= value ? "#FDB022" : "#F2F4F7";
    }
    if (hovered >= value) {
      if (star <= value) return "#FDB022";
      if (star <= hovered) return "#FEF0C7";
      return "#F2F4F7";
    }
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
              onChange?.(star);
            }}
            onMouseEnter={() => setHovered(star)}
            className="overflow-clip relative shrink-0 cursor-pointer"
            style={{ width: size, height: size }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
            >
              <path d={STAR_PATH} fill={getStarFill(star)} />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
