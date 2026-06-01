/**
 * Avatar.jsx — Basic Component
 * Props: name, src, size, showName
 * Menampilkan foto profil atau inisial pengguna
 */
export default function Avatar({ name = "", src = null, size = "md", showName = false }) {
  const sizes = {
    sm: "w-7 h-7 text-[11px]",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
    xl: "w-20 h-20 text-xl",
  };

  const bgColors = [
    "bg-blue-500", "bg-green-500", "bg-yellow-500",
    "bg-red-500",  "bg-purple-500", "bg-pink-500",
  ];

  // Warna konsisten berdasarkan huruf pertama
  const colorIndex = name.charCodeAt(0) % bgColors.length;
  const bg = bgColors[colorIndex] || "bg-gray-400";

  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="inline-flex items-center gap-2">
      {src ? (
        <img
          src={src}
          alt={name}
          className={`${sizes[size]} rounded-full object-cover ring-2 ring-white shadow-sm`}
        />
      ) : (
        <div
          className={`
            ${sizes[size]} ${bg}
            rounded-full flex items-center justify-center
            font-bold text-white shadow-sm flex-shrink-0
          `}
        >
          {initials || "?"}
        </div>
      )}
      {showName && (
        <span className="text-sm font-semibold text-gray-700">{name}</span>
      )}
    </div>
  );
}