/**
 * Button.jsx — Basic Component
 * Props: children, type, size, onClick, disabled, icon
 */
export default function Button({
  children,
  type = "primary",
  size = "md",
  onClick,
  disabled = false,
  icon = null,
}) {
  const types = {
    primary:   "bg-biru    hover:bg-blue-600   text-white",
    secondary: "bg-gray-200 hover:bg-gray-300  text-gray-700",
    success:   "bg-hijau   hover:bg-green-600  text-white",
    danger:    "bg-merah   hover:bg-red-600    text-white",
    warning:   "bg-kuning  hover:bg-yellow-500 text-white",
    outline:   "border-2 border-biru text-biru hover:bg-blue-50 bg-transparent",
    ghost:     "text-biru hover:bg-blue-50 bg-transparent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${types[type]} ${sizes[size]}
        rounded-xl font-semibold transition-all duration-200
        inline-flex items-center gap-2 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {icon && <span className="text-[14px]">{icon}</span>}
      {children}
    </button>
  );
}