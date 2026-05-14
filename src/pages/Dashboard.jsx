import { useState } from "react";
import {
  FaPlane, FaUsers, FaMoneyBillWave, FaSuitcase,
  FaStar, FaRegStar,
} from "react-icons/fa";
import { FiMoreVertical, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import PageHeader from "../components/PageHeader";

// ---- Custom SVG Donut ----
function DonutChart({ value, color, track = "#f1f5f9", size = 100, sw = 10 }) {
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)", display: "block" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={sw} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={sw} strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
      />
    </svg>
  );
}

// ---- Custom SVG Area Chart ----
function AreaChart({ data }) {
  const W = 460, H = 155;
  const pad = { t: 16, r: 12, b: 26, l: 28 };
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const max = Math.max(...data.map((d) => d.v)) * 1.12;
  const xs = data.map((_, i) => pad.l + (i / (data.length - 1)) * iw);
  const ys = data.map((d) => pad.t + ih - (d.v / max) * ih);
  const linePath = xs
    .map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${ys[i].toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L${xs[xs.length - 1].toFixed(1)},${(pad.t + ih).toFixed(1)} L${pad.l},${(pad.t + ih).toFixed(1)} Z`;
  const peakIdx = data.reduce((bi, d, i) => (d.v > data[bi].v ? i : bi), 0);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="areaGradTravel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((t) => (
        <line
          key={t}
          x1={pad.l} x2={W - pad.r}
          y1={pad.t + ih * (1 - t)} y2={pad.t + ih * (1 - t)}
          stroke="#f1f5f9" strokeWidth="1"
        />
      ))}
      <path d={areaPath} fill="url(#areaGradTravel)" />
      <path d={linePath} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {data.map((d, i) => (
        <circle key={i} cx={xs[i]} cy={ys[i]}
          r={i === peakIdx ? 5 : 3}
          fill={i === peakIdx ? "#3b82f6" : "#fff"}
          stroke="#3b82f6" strokeWidth="2"
        />
      ))}
      <g>
        <rect x={xs[peakIdx] - 52} y={ys[peakIdx] - 42} width={104} height={30} rx={8} fill="#1e293b" />
        <polygon
          points={`${xs[peakIdx] - 5},${ys[peakIdx] - 12} ${xs[peakIdx] + 5},${ys[peakIdx] - 12} ${xs[peakIdx]},${ys[peakIdx] - 4}`}
          fill="#1e293b"
        />
        <text x={xs[peakIdx]} y={ys[peakIdx] - 25} textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
          {data[peakIdx].v} Bookings
        </text>
        <text x={xs[peakIdx]} y={ys[peakIdx] - 15} textAnchor="middle" fill="#94a3b8" fontSize="9">
          {data[peakIdx].label}
        </text>
      </g>
      {data.map((d, i) => (
        <text key={i} x={xs[i]} y={H - 4} textAnchor="middle" fill="#9ca3af" fontSize="9.5">
          {d.day}
        </text>
      ))}
    </svg>
  );
}

function TrendUp() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function TrendDown() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  );
}

const stats = [
  { Icon: FaPlane,         value: "1,284", label: "Total Bookings",   trend: "+12% (30 days)", up: true,  iconBg: "bg-biru"   },
  { Icon: FaUsers,         value: "3,620", label: "Total Customers",  trend: "+8% (30 days)",  up: true,  iconBg: "bg-hijau"  },
  { Icon: FaMoneyBillWave, value: "$94K",  label: "Total Revenue",    trend: "+21% (30 days)", up: true,  iconBg: "bg-kuning" },
  { Icon: FaSuitcase,      value: "48",    label: "Tour Packages",    trend: "-3 (this month)", up: false, iconBg: "bg-merah"  },
];

const donuts = [
  { label: "Confirmed",   value: 72, color: "#00b074", track: "#bbf7d0" },
  { label: "Pending",     value: 18, color: "#f59e0b", track: "#fef3c7" },
  { label: "Cancelled",   value: 10, color: "#ef4444", track: "#fecaca" },
];

const areaData = [
  { day: "Sun", v: 120, label: "Week 1" },
  { day: "Mon", v: 210, label: "Week 1" },
  { day: "Tue", v: 180, label: "Week 2" },
  { day: "Wed", v: 340, label: "Week 2" },
  { day: "Thu", v: 290, label: "Week 3" },
  { day: "Fri", v: 410, label: "Week 3" },
  { day: "Sat", v: 360, label: "Week 4" },
];

function StarRating({ value }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= Math.round(value)
          ? <FaStar key={i} className="text-kuning text-[11px]" />
          : <FaRegStar key={i} className="text-gray-300 text-[11px]" />
      )}
    </div>
  );
}

function ActionMenu({ open, onToggle }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors border-none bg-transparent cursor-pointer"
      >
        <FiMoreVertical size={14} />
      </button>
      {open && (
        <div className="absolute right-0 top-8 w-36 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50">
          {[
            { icon: <FiEye size={12} />,    label: "View Detail", color: "text-gray-600" },
            { icon: <FiEdit2 size={12} />,  label: "Edit",        color: "text-blue-500" },
            { icon: <FiTrash2 size={12} />, label: "Delete",      color: "text-red-500"  },
          ].map(({ icon, label, color }) => (
            <div key={label} className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-50 text-[12px] font-medium ${color}`}>
              {icon} {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const recentBookings = [
  { id: 1, customer: "Andi Pratama",   destination: "Bali, Indonesia",      package: "Bali Explorer 5D4N",   price: "Rp 4.200.000", status: "Confirmed", rating: 4.8, avatar: "https://avatar.iran.liara.run/public/1"  },
  { id: 2, customer: "Siti Rahayu",    destination: "Raja Ampat, Papua",    package: "Raja Ampat Diving",    price: "Rp 7.500.000", status: "Pending",   rating: 4.5, avatar: "https://avatar.iran.liara.run/public/2"  },
  { id: 3, customer: "Budi Setiawan",  destination: "Lombok, NTB",          package: "Lombok Beach Escape",  price: "Rp 3.100.000", status: "Confirmed", rating: 4.9, avatar: "https://avatar.iran.liara.run/public/3"  },
  { id: 4, customer: "Dewi Anggraini", destination: "Yogyakarta, Jawa",     package: "Java Heritage Tour",   price: "Rp 2.850.000", status: "Cancelled", rating: 4.2, avatar: "https://avatar.iran.liara.run/public/4"  },
  { id: 5, customer: "Rizky Nugroho",  destination: "Labuan Bajo, NTT",     package: "Komodo Island 4D3N",   price: "Rp 5.900.000", status: "Confirmed", rating: 4.7, avatar: "https://avatar.iran.liara.run/public/5"  },
  { id: 6, customer: "Maya Sari",      destination: "Flores, NTT",          package: "Flores Adventure",     price: "Rp 4.750.000", status: "Pending",   rating: 4.6, avatar: "https://avatar.iran.liara.run/public/6"  },
];

const statusStyles = {
  Confirmed: { bg: "bg-green-50",  text: "text-hijau",  dot: "bg-hijau"  },
  Pending:   { bg: "bg-yellow-50", text: "text-kuning", dot: "bg-kuning" },
  Cancelled: { bg: "bg-red-50",    text: "text-merah",  dot: "bg-merah"  },
};

function RecentBookingsTable() {
  const [openMenu, setOpenMenu] = useState(null);
  const [filter, setFilter] = useState("All");

  const statuses = ["All", "Confirmed", "Pending", "Cancelled"];
  const filtered = filter === "All" ? recentBookings : recentBookings.filter((b) => b.status === filter);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h2 className="font-bold text-[15px] text-gray-800 leading-none">Recent Bookings</h2>
          <p className="text-[11px] text-gray-400 mt-1">Showing {filtered.length} of {recentBookings.length} bookings</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={[
                  "px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-150 border-none cursor-pointer",
                  filter === s
                    ? "bg-white text-biru shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
                    : "text-gray-500 bg-transparent hover:text-gray-700",
                ].join(" ")}
              >
                {s}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1.5 text-[11px] font-bold text-biru border border-biru rounded-xl px-3 py-1.5 hover:bg-blue-50 transition-colors cursor-pointer bg-transparent ml-1">
            + Add Booking
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/60">
              {["Customer", "Destination", "Package", "Price", "Rating", "Status", "Action"].map((h) => (
                <th key={h} className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide px-5 py-3 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => {
              const st = statusStyles[b.status];
              return (
                <tr
                  key={b.id}
                  className="border-t border-gray-50 hover:bg-gray-50/60 transition-colors"
                  onClick={() => setOpenMenu(null)}
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <img src={b.avatar} alt={b.customer} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <p className="text-[13px] font-semibold text-gray-800 leading-none whitespace-nowrap">{b.customer}</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">#{String(b.id).padStart(4, "0")}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-[12px] text-gray-600 font-medium">{b.destination}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-[12px] text-gray-500">{b.package}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-[13px] font-bold text-gray-800">{b.price}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex flex-col gap-0.5">
                      <StarRating value={b.rating} />
                      <span className="text-[10px] text-gray-400 font-medium">{b.rating.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold ${st.bg} ${st.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                      {b.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                    <ActionMenu
                      open={openMenu === b.id}
                      onToggle={() => setOpenMenu(openMenu === b.id ? null : b.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
        <p className="text-[12px] text-gray-400">Showing 1–{filtered.length} of {recentBookings.length} results</p>
        <div className="flex items-center gap-1">
          {["←", "1", "2", "3", "→"].map((p, i) => (
            <button
              key={i}
              className={[
                "w-7 h-7 rounded-lg text-[12px] font-semibold border-none cursor-pointer transition-colors",
                p === "1" ? "bg-biru text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200",
              ].join(" ")}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <PageHeader title="Dashboard" breadcrumb="Welcome back to Travel Sphere" />

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map(({ Icon, value, label, trend, up, iconBg }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-4 flex items-center gap-3.5 border border-gray-100
                       shadow-[0_1px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]
                       hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            <div className={`w-[52px] h-[52px] rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
              <Icon className="text-[22px] text-white" />
            </div>
            <div>
              <p className="text-[22px] font-extrabold text-gray-800 leading-none tracking-tight">{value}</p>
              <p className="text-[11px] text-gray-400 mt-1 mb-1.5 font-medium">{label}</p>
              <div className={`flex items-center gap-1 text-[10px] font-semibold ${up ? "text-hijau" : "text-merah"}`}>
                {up ? <TrendUp /> : <TrendDown />}
                {trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-[1fr_1.45fr] gap-4">
        {/* Donut */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between mb-5">
            <span className="font-bold text-[15px] text-gray-800">Booking Status</span>
            <span className="text-gray-400 text-[18px] cursor-pointer leading-none select-none">⋯</span>
          </div>
          <div className="flex justify-around items-center py-1">
            {donuts.map(({ label, value, color, track }) => (
              <div key={label} className="flex flex-col items-center gap-2.5">
                <div className="relative" style={{ width: 100, height: 100 }}>
                  <DonutChart value={value} color={color} track={track} size={100} sw={10} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[17px] font-extrabold text-gray-800">{value}%</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 font-semibold text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Area Chart */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="font-bold text-[15px] text-gray-800 leading-none">Booking Trend</p>
              <p className="text-[11px] text-gray-400 mt-1.5">Weekly bookings overview for this month</p>
            </div>
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-biru border border-biru rounded-xl px-3 py-1.5 hover:bg-blue-50 transition-colors cursor-pointer bg-transparent">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Save Report
            </button>
          </div>
          <div style={{ height: 168 }}>
            <AreaChart data={areaData} />
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <RecentBookingsTable />
    </div>
  );
}