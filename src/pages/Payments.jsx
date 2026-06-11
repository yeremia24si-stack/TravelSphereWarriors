import { useState } from "react";
import PageHeader from "../components/PageHeader";

// ✅ SHADCN KOMPONEN 1 — Input
import { Input } from "@/components/ui/input";

// ✅ SHADCN KOMPONEN 2 — Select
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ✅ SHADCN KOMPONEN 3 — Table
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const generatePayments = () => {
  const statuses  = ["Paid", "Pending", "Failed", "Refunded"];
  const methods   = ["Bank Transfer", "Credit Card", "GoPay", "OVO", "QRIS"];
  const customers = ["Andi Pratama", "Siti Rahayu", "Budi Setiawan", "Dewi Anggraini", "Rizky Nugroho", "Maya Sari", "Hendra Wijaya"];
  const packages  = ["Bali Explorer 5D4N", "Raja Ampat Diving", "Lombok Beach Escape", "Java Heritage Tour", "Komodo Island 4D3N", "Bromo Sunrise Trek"];
  return Array.from({ length: 30 }, (_, i) => ({
    paymentId:    `PAY-${3000 + i + 1}`,
    bookingId:    `BKG-${2000 + i + 1}`,
    customerName: customers[i % customers.length],
    packageName:  packages[i % packages.length],
    amount:       Math.floor(1500000 + Math.random() * 8000000),
    method:       methods[i % methods.length],
    status:       statuses[i % 4],
    date: `2025-${String(Math.floor(1 + (i % 12))).padStart(2, "0")}-${String(Math.floor(1 + (i % 28))).padStart(2, "0")}`,
  }));
};

const initialPayments = generatePayments();

const statusStyles = {
  Paid:     { cls: "bg-green-100 text-green-700",   icon: "✓"  },
  Pending:  { cls: "bg-yellow-100 text-yellow-700", icon: "⏳" },
  Failed:   { cls: "bg-red-100 text-red-700",       icon: "✗"  },
  Refunded: { cls: "bg-gray-100 text-gray-600",     icon: "↩"  },
};

const methodIcons = { "Bank Transfer":"🏦","Credit Card":"💳","GoPay":"💚","OVO":"💜","QRIS":"📱" };

export default function Payments() {
  const [payments]      = useState(initialPayments);
  const [search, setSearch]             = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const totalRevenue  = payments.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0);
  const totalPending  = payments.filter((p) => p.status === "Pending").reduce((s, p) => s + p.amount, 0);
  const totalRefunded = payments.filter((p) => p.status === "Refunded").reduce((s, p) => s + p.amount, 0);

  const filtered = payments.filter((p) => {
    const matchStatus = filterStatus === "All" || p.status === filterStatus;
    const q = search.toLowerCase();
    const matchSearch = p.customerName.toLowerCase().includes(q) || p.paymentId.toLowerCase().includes(q) || p.bookingId.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <div>
      <PageHeader title="Payments" breadcrumb={["Travel Sphere", "Payments"]} />

      <div className="grid grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Revenue",  value: `Rp ${totalRevenue.toLocaleString()}`,  color: "text-hijau",  bg: "bg-green-50",  icon: "💰" },
          { label: "Pending Amount", value: `Rp ${totalPending.toLocaleString()}`,  color: "text-kuning", bg: "bg-yellow-50", icon: "⏳" },
          { label: "Total Refunded", value: `Rp ${totalRefunded.toLocaleString()}`, color: "text-merah",  bg: "bg-red-50",    icon: "↩"  },
          { label: "Transactions",   value: payments.length,                         color: "text-biru",   bg: "bg-blue-50",   icon: "📋" },
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

      {/* Filter bar */}
      <div className="flex items-center gap-3 mb-4">

        {/* KOMPONEN 1 — shadcn Input */}
        <Input
          placeholder="Search by customer, payment ID, booking ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />

        {/* KOMPONEN 2 — shadcn Select */}
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Status</SelectItem>
            <SelectItem value="Paid">✓ Paid</SelectItem>
            <SelectItem value="Pending">⏳ Pending</SelectItem>
            <SelectItem value="Failed">✗ Failed</SelectItem>
            <SelectItem value="Refunded">↩ Refunded</SelectItem>
          </SelectContent>
        </Select>

        <span className="text-[12px] text-gray-400 ml-auto">
          Showing {filtered.length} of {payments.length} transactions
        </span>
      </div>

      {/* KOMPONEN 3 — shadcn Table */}
      <div className="bg-white rounded-2xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payment ID</TableHead>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Package</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-gray-400 py-10">No payments found.</TableCell>
              </TableRow>
            ) : (
              filtered.map((p) => {
                const st = statusStyles[p.status];
                return (
                  <TableRow key={p.paymentId}>
                    <TableCell className="font-mono text-[12px] text-biru font-semibold">{p.paymentId}</TableCell>
                    <TableCell className="font-mono text-[12px] text-gray-500">{p.bookingId}</TableCell>
                    <TableCell className="font-semibold text-gray-800 text-[13px]">{p.customerName}</TableCell>
                    <TableCell className="text-gray-500 text-[12px] max-w-[140px] truncate">{p.packageName}</TableCell>
                    <TableCell>
                      <span className="flex items-center gap-1.5 text-[12px] text-gray-600 font-medium">
                        <span>{methodIcons[p.method]}</span>{p.method}
                      </span>
                    </TableCell>
                    <TableCell className="font-bold text-gray-800 text-[13px]">Rp {p.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${st.cls}`}>
                        <span>{st.icon}</span>{p.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-400 text-[12px]">{p.date}</TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}