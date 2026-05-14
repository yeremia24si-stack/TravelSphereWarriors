import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdConfirmationNumber,
  MdCardTravel,
  MdPayment,
} from "react-icons/md";

const menuItems = [
  { icon: MdDashboard, label: "Dashboard", path: "/" },
  { icon: MdPeople, label: "Customers", path: "/customers" },
  { icon: MdConfirmationNumber, label: "Bookings", path: "/bookings" },
  { icon: MdCardTravel, label: "Tour Packages", path: "/tour-packages" },
  { icon: MdPayment, label: "Payments", path: "/payments" },
];

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl mb-0.5 text-[13px] font-medium transition-all duration-150 border-l-[3px] ${
      isActive
        ? "bg-blue-50 text-biru font-bold border-biru"
        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700 border-transparent"
    }`;

  return (
    <aside className="flex flex-col min-h-screen w-[240px] bg-white shadow-[2px_0_16px_rgba(0,0,0,0.04)] flex-shrink-0 z-10">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-100">
        <div className="flex items-baseline gap-1">
          <span className="text-[26px] font-extrabold text-gray-800 tracking-tight">Travel</span>
          <span className="text-[28px] font-black text-biru leading-none">Sphere</span>
          <span className="text-[32px] font-black text-kuning leading-none">.</span>
        </div>
        <p className="text-[11px] text-gray-400 mt-0.5 font-medium tracking-wide">Travel Agent Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-3.5 mb-2">Main Menu</p>
        {menuItems.map(({ icon: Icon, label, path }) => (
          <NavLink key={label} to={path} className={menuClass}>
            <Icon className="text-[17px] flex-shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Promo Banner */}
      <div className="px-3 pb-5">
        <div
          className="rounded-2xl p-4 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" }}
        >
          <div className="flex-1">
            <p className="text-white/90 text-[11px] leading-relaxed mb-2.5">
              Discover new tour packages and grow your travel business!
            </p>
            <div className="bg-white rounded-lg py-1.5 text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-[11px] font-bold text-biru">+ Add Package</span>
            </div>
          </div>
          <span className="text-4xl">✈️</span>
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-3 leading-relaxed">
          Travel Sphere Admin Dashboard<br />© 2025 All Right Reserved
        </p>
      </div>
    </aside>
  );
}