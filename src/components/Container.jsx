/**
 * Container.jsx — Layout Component
 * Pembungkus terluar konten halaman
 * Props: children, className
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full mx-auto py-6 px-4 ${className}`}>
      {children}
    </div>
  );
}