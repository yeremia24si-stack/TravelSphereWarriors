/**
 * Badge.jsx — Basic Component
 * Props: children, type
 * Usage: booking status, loyalty level, package category
 */
export default function Badge({ children, type = "primary" }) {
  const types = {
    primary:   "bg-blue-100  text-biru",
    success:   "bg-green-100 text-hijau",
    danger:    "bg-red-100   text-merah",
    warning:   "bg-yellow-100 text-kuning",
    secondary: "bg-gray-100  text-gray-600",
    gold:      "bg-yellow-100 text-yellow-700",
    silver:    "bg-gray-100  text-gray-600",
    bronze:    "bg-orange-100 text-orange-600",
  };

  return (
    <span
      className={`
        ${types[type] || types.primary}
        px-2.5 py-1 rounded-full text-xs font-semibold
        inline-flex items-center gap-1
      `}
    >
      {children}
    </span>
  );
}