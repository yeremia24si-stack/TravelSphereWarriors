import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCard({ name, role, avatar, rating = 5, comment }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] p-6 h-full flex flex-col">
      <FaQuoteLeft className="text-blue-100 text-3xl mb-3" />

      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className={i < rating ? "text-kuning text-sm" : "text-gray-200 text-sm"} />
        ))}
      </div>

      <p className="text-gray-600 text-[13.5px] leading-relaxed flex-1 mb-5">"{comment}"</p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-800 text-[13px]">{name}</p>
          <p className="text-[11px] text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}