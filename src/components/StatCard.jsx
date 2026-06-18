/**
 * StatCard.jsx — Data Display Component
 * Kartu statistik untuk dashboard (Total Bookings, Revenue, dll)
 * Props: icon, value, label, trend, up, iconBg
 */
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

export default function StatCard({ icon: Icon, value, label, trend, up = true, iconBg = "bg-biru" }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-3.5 border border-gray-100
                    shadow-[0_1px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]
                    hover:-translate-y-0.5 transition-all duration-200 cursor-default">
      <div className={`w-[52px] h-[52px] rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
        {Icon && <Icon className="text-[22px] text-white" />}
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
  );
}