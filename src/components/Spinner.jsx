/**
 * Spinner.jsx — Feedback Component
 * Indikator loading kecil untuk digunakan di dalam komponen
 * Props: size, color, label
 */
export default function Spinner({ size = "md", color = "biru", label = "" }) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-7 h-7 border-[3px]",
    lg: "w-10 h-10 border-4",
    xl: "w-14 h-14 border-4",
  };

  const colors = {
    biru:  "border-biru  border-t-transparent",
    hijau: "border-hijau border-t-transparent",
    merah: "border-merah border-t-transparent",
    gray:  "border-gray-400 border-t-transparent",
    white: "border-white border-t-transparent",
  };

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <div
        className={`${sizes[size]} ${colors[color] || colors.biru} rounded-full animate-spin`}
      />
      {label && (
        <p className="text-sm text-gray-500 font-medium animate-pulse">{label}</p>
      )}
    </div>
  );
}