/**
 * LoyaltyProgress — progress bar tier loyalty member (Bronze/Silver/Gold).
 */
const tiers = [
  { name: "Bronze", min: 0,    icon: "🥉" },
  { name: "Silver", min: 1000, icon: "🥈" },
  { name: "Gold",   min: 5000, icon: "🥇" },
];

export default function LoyaltyProgress({ points = 0 }) {
  // Tentukan tier saat ini & tier berikutnya
  let currentTier = tiers[0];
  let nextTier = tiers[1];
  for (let i = 0; i < tiers.length; i++) {
    if (points >= tiers[i].min) {
      currentTier = tiers[i];
      nextTier = tiers[i + 1] || null;
    }
  }

  const progressPct = nextTier
    ? Math.min(((points - currentTier.min) / (nextTier.min - currentTier.min)) * 100, 100)
    : 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-[11px] text-gray-400 font-medium">Loyalty Tier</p>
          <p className="text-[18px] font-extrabold text-gray-800">
            {currentTier.icon} {currentTier.name}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-gray-400 font-medium">Total Poin</p>
          <p className="text-[18px] font-extrabold text-biru">{points.toLocaleString()}</p>
        </div>
      </div>

      <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-2">
        <div
          className="h-full rounded-full bg-gradient-to-r from-biru to-blue-400 transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {nextTier ? (
        <p className="text-[11px] text-gray-500">
          {(nextTier.min - points).toLocaleString()} poin lagi untuk naik ke{" "}
          <span className="font-semibold text-gray-700">{nextTier.icon} {nextTier.name}</span>
        </p>
      ) : (
        <p className="text-[11px] text-hijau font-medium">🎉 Anda sudah di tier tertinggi!</p>
      )}
    </div>
  );
}