import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaHeart, FaUserCircle } from "react-icons/fa";

export default function MemberNavbar() {
  const navigate = useNavigate();
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpenNotif(false);
        setOpenProfile(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/member" className="flex items-baseline gap-1 flex-shrink-0">
          <span className="text-[22px] font-extrabold text-gray-800 tracking-tight">Travel</span>
          <span className="text-[24px] font-black text-biru leading-none">Sphere</span>
          <span className="text-[28px] font-black text-kuning leading-none">.</span>
        </Link>

        {/* Search */}
        <div className="relative flex-1 max-w-md hidden md:block">
          <input
            type="text"
            placeholder="Cari destinasi atau paket wisata..."
            className="w-full border border-gray-200 bg-gray-50 pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none focus:border-biru transition-colors"
          />
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        </div>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/member/explore" className="hover:text-biru transition-colors">Jelajah</Link>
          <Link to="/member/bookings" className="hover:text-biru transition-colors">Booking Saya</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Wishlist */}
          <Link
            to="/member/wishlist"
            className="p-2.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-merah transition-colors"
          >
            <FaHeart className="text-base" />
          </Link>

          {/* Notification */}
          <div className="relative">
            <button
              onClick={() => { setOpenNotif(!openNotif); setOpenProfile(false); }}
              className="relative p-2.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-biru transition-colors cursor-pointer border-none bg-transparent"
            >
              <FaBell className="text-base" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-merah rounded-full border-2 border-white" />
            </button>
            {openNotif && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-xl p-4 text-sm border border-gray-100 z-50">
                <p className="font-semibold mb-3 text-gray-700">Notifikasi</p>
                <div className="space-y-2.5 text-gray-600">
                  <p className="flex items-start gap-2">
                    <span>✅</span>
                    <span>Booking Bali Explorer telah dikonfirmasi</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>💳</span>
                    <span>Pembayaran Rp 4.200.000 berhasil diterima</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>🎁</span>
                    <span>Anda naik ke tier Silver! Nikmati diskon eksklusif</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => { setOpenProfile(!openProfile); setOpenNotif(false); }}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer border-none bg-transparent"
            >
              <img
                src="https://avatar.iran.liara.run/public/45"
                className="w-8 h-8 rounded-full object-cover"
                alt="profile"
              />
              <span className="text-sm font-medium text-gray-700 hidden sm:block">Andi Pratama</span>
            </button>
            {openProfile && (
              <div className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50">
                <Link to="/member" className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-colors">
                  <FaUserCircle className="text-gray-400" /> Dashboard Saya
                </Link>
                <Link to="/member/profile" className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-colors">
                  ⚙️ Profil & Akun
                </Link>
                <Link to="/member/payments" className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-colors">
                  💳 Riwayat Pembayaran
                </Link>
                <div className="border-t border-gray-100 my-1" />
                <button
                  onClick={() => navigate("/login")}
                  className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-red-50 text-sm text-merah transition-colors cursor-pointer border-none bg-transparent text-left"
                >
                  🚪 Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}