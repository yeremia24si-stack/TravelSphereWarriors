export default function StatCounter({ icon, value, label, color = "text-biru" }) {
  return (
    <div className="text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <p className={`text-2xl md:text-3xl font-extrabold ${color} leading-none`}>{value}</p>
      <p className="text-gray-500 text-[13px] mt-1.5">{label}</p>
    </div>
  );
}