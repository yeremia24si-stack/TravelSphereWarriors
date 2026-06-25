import { useState } from "react";
import { Link } from "react-router-dom";

const allBookings = [
  { id: 1, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&h=140&fit=crop", destination: "Bali, Indonesia",      packageName: "Bali Explorer 5D4N",    travelDate: "12 Juli 2026",    pax: 2, totalPrice: 8400000,  status: "Confirmed" },
  { id: 2, img: "https://images.unsplash.com/photo-1562084862-94e862b75ab4?w=200&h=140&fit=crop", destination: "Labuan Bajo, NTT",     packageName: "Komodo Island 4D3N",    travelDate: "28 Agustus 2026", pax: 2, totalPrice: 11800000, status: "Confirmed" },
  { id: 3, img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=200&h=140&fit=crop", destination: "Lombok, NTB",          packageName: "Lombok Beach Escape",    travelDate: "15 Maret 2025",   pax: 2, totalPrice: 6200000,  status: "Completed" },
  { id: 4, img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=200&h=140&fit=crop", destination: "Yogyakarta, Jawa",     packageName: "Java Heritage Tour",     travelDate: "2 Januari 2025",  pax: 4, totalPrice: 11400000, status: "Completed" },
  { id: 5, img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=200&h=140&fit=crop", destination: "Raja Ampat, Papua",    packageName: "Raja Ampat Diving",      travelDate: "10 Februari 2025", pax: 2, totalPrice: 15000000, status: "Cancelled" },
];

const statusStyles = {
  Confirmed: "bg-green-100 text-hijau",
  Completed: "bg-blue-100 text-biru",
  Cancelled: "bg-red-100 text-merah",
};

const tabs = ["All", "Confirmed", "Completed", "Cancelled"];

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? allBookings
    : allBookings.filter((b) => b.status === activeTab);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Booking Saya</h1>
        <p className="text-gray-400 text-sm mt-1">Kelola dan pantau semua perjalanan Anda di sini.</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm w-fit mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={[
              "px-4 py-1.5 rounded-lg text-[12px] font-semibold transition-all border-none cursor-pointer",
              activeTab === tab ? "bg-biru text-white shadow" : "text-gray-500 bg-transparent hover:text-gray-700",
            ].join(" ")}
          >
            {tab} {tab !== "All" && `(${allBookings.filter((b) => b.status === tab).length})`}
          </button>
        ))}
      </div>

      {/* Booking list */}
      <div className="space-y-4">
        {filtered.map((b) => (
          <div key={b.id} className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] p-4 flex flex-col sm:flex-row gap-4">
            <img src={b.img} alt={b.packageName} className="w-full sm:w-36 h-32 sm:h-24 rounded-xl object-cover flex-shrink-0" />

            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-1.5 ${statusStyles[b.status]}`}>
                  {b.status}
                </span>
                <p className="font-bold text-gray-800 text-[15px]">{b.packageName}</p>
                <p className="text-[12px] text-gray-400 flex items-center gap-1 mt-0.5">📍 {b.destination}</p>
                <p className="text-[12px] text-gray-500 mt-1">📅 {b.travelDate} · {b.pax} pax</p>
              </div>

              <div className="text-right flex-shrink-0">
                <p className="text-[11px] text-gray-400">Total</p>
                <p className="font-extrabold text-biru text-[16px] mb-2">Rp {b.totalPrice.toLocaleString()}</p>
                <Link
                  to={`/member/bookings/${b.id}`}
                  className="inline-block bg-blue-50 text-biru text-[12px] font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16 text-sm">Belum ada booking di kategori ini.</p>
      )}
    </div>
  );
}