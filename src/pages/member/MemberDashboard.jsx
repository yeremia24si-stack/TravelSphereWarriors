import { Link } from "react-router-dom";
import TripCard from "../../components/member/TripCard";
import LoyaltyProgress from "../../components/member/LoyaltyProgress";

const upcomingTrip = {
  bookingId: 1,
  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=300&fit=crop",
  destination: "Bali, Indonesia",
  packageName: "Bali Explorer 5D4N",
  travelDate: "12 Juli 2026",
  daysLeft: 24,
  status: "Confirmed",
};

const quickStats = [
  { label: "Total Trip", value: 7,  icon: "✈️", bg: "bg-blue-50",   color: "text-biru"  },
  { label: "Trip Selesai", value: 5, icon: "✅", bg: "bg-green-50", color: "text-hijau" },
  { label: "Wishlist",    value: 4,  icon: "❤️", bg: "bg-red-50",   color: "text-merah" },
  { label: "Poin Loyalty", value: 1850, icon: "⭐", bg: "bg-yellow-50", color: "text-kuning" },
];

const recentActivity = [
  { icon: "💳", text: "Pembayaran Bali Explorer 5D4N berhasil", time: "2 hari lalu" },
  { icon: "✅", text: "Booking Komodo Island 4D3N dikonfirmasi", time: "1 minggu lalu" },
  { icon: "🎁", text: "Anda naik ke tier Silver",               time: "2 minggu lalu" },
  { icon: "⭐", text: "Ulasan untuk Lombok Beach Escape terkirim", time: "3 minggu lalu" },
];

export default function MemberDashboard() {
  return (
    <div className="space-y-6">

      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Selamat datang kembali, Andi! 👋</h1>
        <p className="text-gray-400 text-sm mt-1">Berikut ringkasan aktivitas perjalanan Anda.</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-4 gap-4">
        {quickStats.map(({ label, value, icon, bg, color }) => (
          <div key={label} className={`${bg} rounded-2xl p-4 border border-gray-100`}>
            <span className="text-2xl">{icon}</span>
            <p className={`text-[20px] font-extrabold ${color} mt-2 leading-none`}>
              {typeof value === "number" && value > 999 ? value.toLocaleString() : value}
            </p>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-5">

        {/* Left column */}
        <div className="space-y-5">
          {/* Upcoming trip */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-gray-800 text-[15px]">Trip Mendatang</h2>
              <Link to="/member/bookings" className="text-[12px] font-semibold text-biru hover:underline">
                Lihat Semua →
              </Link>
            </div>
            <TripCard {...upcomingTrip} />
          </div>

          {/* Quick actions */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] p-5">
            <h2 className="font-bold text-gray-800 text-[15px] mb-3">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-3">
              <Link to="/member/explore" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-center">
                <span className="text-2xl">🗺️</span>
                <span className="text-[12px] font-semibold text-biru">Jelajah Paket</span>
              </Link>
              <Link to="/member/payments" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors text-center">
                <span className="text-2xl">💳</span>
                <span className="text-[12px] font-semibold text-hijau">Pembayaran</span>
              </Link>
              <Link to="/member/wishlist" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-red-50 hover:bg-red-100 transition-colors text-center">
                <span className="text-2xl">❤️</span>
                <span className="text-[12px] font-semibold text-merah">Wishlist</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <LoyaltyProgress points={1850} />

          {/* Recent activity */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] p-5">
            <h2 className="font-bold text-gray-800 text-[15px] mb-3">Aktivitas Terbaru</h2>
            <div className="space-y-3">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{act.icon}</span>
                  <div>
                    <p className="text-[12.5px] text-gray-700 leading-snug">{act.text}</p>
                    <p className="text-[10.5px] text-gray-400 mt-0.5">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}