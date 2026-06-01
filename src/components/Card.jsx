/**
 * Card.jsx — Data Display Component
 * Pembungkus informasi / konten
 * Props: children, className, hover
 */
export default function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`
        bg-white border border-gray-100 rounded-2xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] p-5
        ${hover ? "hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}