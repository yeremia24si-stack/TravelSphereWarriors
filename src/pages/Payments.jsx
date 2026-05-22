import { useState } from "react";
import PageHeader from "../components/PageHeader";

const generatePayments = () => {
  const statuses = ["Paid", "Pending", "Failed", "Refunded"];
  const methods = ["Bank Transfer", "Credit Card", "GoPay", "OVO", "QRIS"];
  const customers = [
    "Andi Pratama", "Siti Rahayu", "Budi Setiawan", "Dewi Anggraini", "Rizky Nugroho",
    "Maya Sari", "Hendra Wijaya", "Rina Kusuma",
  ];
  const packages = [
    "Bali Explorer 5D4N", "Raja Ampat Diving", "Lombok Beach Escape",
    "Java Heritage Tour", "Komodo Island 4D3N", "Bromo Sunrise Trek",
  ];
  const payments = [];
  for (let i = 1; i <= 30; i++) {
    payments.push({
      paymentId: `PAY-${3000 + i}`,
      bookingId: `BKG-${2000 + i}`,
      customerName: customers[i % customers.length],
      packageName: packages[i % packages.length],
      amount: Math.floor(1500000 + Math.random() * 8000000),
      method: methods[i % methods.length],
      status: statuses[i % 4],
      date: `2025-${String(Math.floor(1 + (i % 12))).padStart(2, "0")}-${String(Math.floor(1 + (i % 28))).padStart(2, "0")}`,
    });
  }
  return payments;
};

const initialPayments = generatePayments();

const statusStyles = {
  Paid:     { cls: "bg-green-100 text-green-700",  icon: "✓" },
  Pending:  { cls: "bg-yellow-100 text-yellow-700", icon: "⏳" },
  Failed:   { cls: "bg-red-100 text-red-700",      icon: "✗" },
  Refunded: { cls: "bg-gray-100 text-gray-600",    icon: "↩" },
};

const methodIcons = {
  "Bank Transfer": "🏦",
  "Credit Card":   "💳",
  "GoPay":         "💚",
  "OVO":           "💜",
  "QRIS":          "📱",
};

export default function Payments() {
  const [payments] = useState(initialPayments);
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");

  const statuses = ["All", "Paid", "Pending", "Failed", "Refunded"];

  const filtered = payments.filter((p) => {
    const matchStatus = filterStatus === "All" || p.status === filterStatus;
    const matchSearch =
      p.customerName.toLowerCase().includes(search.toLowerCase()) ||
      p.paymentId.toLowerCase().includes(search.toLowerCase()) ||
      p.bookingId.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  // Summary stats
  const totalRevenue = payments.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0);
  const totalPending = payments.filter((p) => p.status === "Pending").reduce((s, p) => s + p.amount, 0);
  const totalRefunded = payments.filter((p) => p.status === "Refunded").reduce((s, p) => s + p.amount, 0);

  return (
    <div>
      <PageHeader title="Payments" breadcrumb={["Travel Sphere", "Payments"]} />

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Revenue",    value: `Rp ${totalRevenue.toLocaleString()}`,   color: "text-hijau",  bg: "bg-green-50",  icon: "💰" },
          { label: "Pending Amount",   value: `Rp ${totalPending.toLocaleString()}`,   color: "text-kuning", bg: "bg-yellow-50", icon: "⏳" },
          { label: "Total Refunded",   value: `Rp ${totalRefunded.toLocaleString()}`,  color: "text-merah",  bg: "bg-red-50",    icon: "↩" },
          { label: "Transactions",     value: payments.length,                          color: "text-biru",   bg: "bg-blue-50",   icon: "📋" },
        ].map(({ label, value, color, bg, icon }) => (
          <div key={label} className={`${bg} rounded-2xl p-4 border border-gray-100 shadow-sm`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{icon}</span>
              <span className={`text-[11px] font-bold ${color}`}>this month</span>
            </div>
            <p className={`text-[18px] font-extrabold ${color} leading-tight`}>{value}</p>
            <p className="text-[11px] text-gray-500 mt-0.5 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm">
          {statuses.map((s) => (
            <button key={s} onClick={() => setFilterStatus(s)}
              className={[
                "px-3.5 py-1.5 rounded-lg text-[12px] font-semibold transition-all border-none cursor-pointer",
                filterStatus === s ? "bg-biru text-white shadow" : "text-gray-500 bg-transparent hover:text-gray-700",
              ].join(" ")}
            >
              {s}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search by customer, payment ID, booking ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 bg-white p-2.5 w-72 rounded-xl outline-none text-sm focus:border-biru transition-colors shadow-sm"
        />
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-[0_1px_8px_rgba(0,0,0,0.06)] overflow-x-auto">
        <table className="w-full text-sm min-w-[800px]">
          <thead className="bg-gray-50">
            <tr>
              {["Payment ID", "Booking ID", "Customer", "Package", "Method", "Amount", "Status", "Date"].map((h) => (
                <th key={h} className="p-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => {
              const st = statusStyles[p.status];
              return (
                <tr key={p.paymentId} className="border-t hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-mono text-[12px] text-biru font-semibold">{p.paymentId}</td>
                  <td className="p-3 font-mono text-[12px] text-gray-500">{p.bookingId}</td>
                  <td className="p-3 font-semibold text-gray-800 text-[13px]">{p.customerName}</td>
                  <td className="p-3 text-gray-500 text-[12px] max-w-[140px]">{p.packageName}</td>
                  <td className="p-3">
                    <span className="flex items-center gap-1.5 text-[12px] text-gray-600 font-medium">
                      <span>{methodIcons[p.method]}</span>
                      {p.method}
                    </span>
                  </td>
                  <td className="p-3 font-bold text-gray-800 text-[13px]">Rp {p.amount.toLocaleString()}</td>
                  <td className="p-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${st.cls}`}>
                      <span>{st.icon}</span> {p.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-400 text-[12px]">{p.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-8 text-sm">No payments found.</p>
        )}
      </div>

      <div className="flex items-center justify-between mt-3 px-1">
        <p className="text-[12px] text-gray-400">Showing {filtered.length} of {payments.length} transactions</p>
        <div className="flex items-center gap-1">
          {["←", "1", "2", "3", "→"].map((btn, i) => (
            <button key={i}
              className={[
                "w-7 h-7 rounded-lg text-[12px] font-semibold border-none cursor-pointer transition-colors",
                btn === "1" ? "bg-biru text-white" : "bg-white text-gray-500 hover:bg-gray-100 shadow-sm",
              ].join(" ")}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
