import { useState } from "react";

const allPayments = [
  { id: "PAY-3001", packageName: "Bali Explorer 5D4N",  amount: 8400000,  method: "Bank Transfer", status: "Paid",    date: "5 Juni 2026" },
  { id: "PAY-3002", packageName: "Komodo Island 4D3N",  amount: 11800000, method: "Credit Card",   status: "Paid",    date: "20 Juli 2026" },
  { id: "PAY-3003", packageName: "Lombok Beach Escape", amount: 6200000,  method: "GoPay",         status: "Paid",    date: "1 Maret 2025" },
  { id: "PAY-3004", packageName: "Java Heritage Tour",  amount: 11400000, method: "QRIS",          status: "Paid",    date: "20 Desember 2024" },
  { id: "PAY-3005", packageName: "Raja Ampat Diving",   amount: 15000000, method: "Bank Transfer", status: "Refunded", date: "5 Februari 2025" },
];

const statusStyles = {
  Paid:     { cls: "bg-green-100 text-hijau", icon: "✓" },
  Pending:  { cls: "bg-yellow-100 text-kuning", icon: "⏳" },
  Refunded: { cls: "bg-gray-100 text-gray-600", icon: "↩" },
};

const methodIcons = { "Bank Transfer": "🏦", "Credit Card": "💳", "GoPay": "💚", "OVO": "💜", "QRIS": "📱" };

export default function MyPayments() {
  const [search, setSearch] = useState("");

  const filtered = allPayments.filter(
    (p) => p.packageName.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalSpent = allPayments.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Riwayat Pembayaran</h1>
        <p className="text-gray-400 text-sm mt-1">Pantau semua transaksi pembayaran perjalanan Anda.</p>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-5 mb-5 flex items-center justify-between">
        <div>
          <p className="text-[12px] text-gray-500">Total Pengeluaran</p>
          <p className="text-[22px] font-extrabold text-biru">Rp {totalSpent.toLocaleString()}</p>
        </div>
        <span className="text-3xl">💳</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Cari berdasarkan nama paket atau ID transaksi..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm border border-gray-200 bg-white px-4 py-2.5 rounded-xl text-sm outline-none focus:border-biru transition-colors shadow-sm mb-4"
      />

      {/* List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] divide-y divide-gray-50">
        {filtered.map((p) => {
          const st = statusStyles[p.status];
          return (
            <div key={p.id} className="p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-lg flex-shrink-0">
                  {methodIcons[p.method]}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-[13.5px]">{p.packageName}</p>
                  <p className="text-[11px] text-gray-400">{p.id} · {p.date}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-gray-800 text-[14px]">Rp {p.amount.toLocaleString()}</p>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold ${st.cls}`}>
                  {st.icon} {p.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16 text-sm">Tidak ada transaksi ditemukan.</p>
      )}
    </div>
  );
}