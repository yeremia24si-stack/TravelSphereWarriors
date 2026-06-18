import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

/**
 * ReviewStars — menampilkan rating bintang.
 * mode="display": hanya tampilkan rating (read-only)
 * mode="input": user bisa klik untuk memberi rating (untuk form ulasan)
 */
export default function ReviewStars({ value = 0, mode = "display", onChange, size = "md" }) {
  const [hovered, setHovered] = useState(0);

  const sizes = { sm: "text-[12px]", md: "text-[16px]", lg: "text-[22px]" };

  const handleClick = (star) => {
    if (mode === "input" && onChange) onChange(star);
  };

  return (
    <div className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = mode === "input"
          ? star <= (hovered || value)
          : star <= Math.round(value);

        return (
          <span
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => mode === "input" && setHovered(star)}
            onMouseLeave={() => mode === "input" && setHovered(0)}
            className={`${sizes[size]} ${mode === "input" ? "cursor-pointer" : ""} ${active ? "text-kuning" : "text-gray-300"} transition-colors`}
          >
            {active ? <FaStar /> : <FaRegStar />}
          </span>
        );
      })}
      {mode === "display" && (
        <span className="text-[11px] text-gray-400 ml-1.5 font-medium">{value.toFixed(1)}</span>
      )}
    </div>
  );
}