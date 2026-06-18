import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdExplore,
  MdConfirmationNumber,
  MdPayment,
  MdFavoriteBorder,
  MdPerson,
} from "react-icons/md";


const menuItems = [
  {
    icon: MdDashboard,
    label: "Dashboard",
    path: "/member",
  },

  {
    icon: MdExplore,
    label: "Jelajah Paket",
    path: "/member/packages",
  },

  {
    icon: MdConfirmationNumber,
    label: "Booking Saya",
    path: "/member/checkout",
  },

  {
    icon: MdPayment,
    label: "Pembayaran",
    path: "/member/checkout",
  },

  {
    icon: MdFavoriteBorder,
    label: "Wishlist",
    path: "/member/packages",
  },

  {
    icon: MdPerson,
    label: "Profil Saya",
    path: "/member",
  },
];


export default function MemberSidebar() {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl mb-0.5 text-[13px] font-medium transition-all duration-150 ${
      isActive
        ? "bg-blue-50 text-biru font-bold"
        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
    }`;


  return (
    <aside className="w-[220px] flex-shrink-0 hidden md:block">

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sticky top-20">

        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-3.5 mb-2 mt-1">
          Akun Saya
        </p>


        {menuItems.map(({ icon: Icon, label, path }) => (

          <NavLink
            key={label}
            to={path}
            end
            className={linkClass}
          >

            <Icon className="text-[18px] flex-shrink-0" />

            {label}

          </NavLink>

        ))}


        {/* Loyalty Badge */}
        <div className="mt-4 mx-1 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100">

          <p className="text-[11px] text-gray-500 mb-1">
            Loyalty Tier
          </p>

          <p className="text-[15px] font-extrabold text-biru">
            🥈 Silver
          </p>

        </div>


      </div>

    </aside>
  );
}