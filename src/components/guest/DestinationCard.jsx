import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function DestinationCard({ id, image, title, destination, price, rating = 0, category }) {
  return (
    <Link
      to={`/packages/${id}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {category && (
          <span className="absolute top-3 left-3 bg-white/90 text-gray-700 text-[11px] font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur px-2.5 py-1 rounded-full text-white text-[11px] font-semibold">
          <FaStar className="text-kuning" /> {rating.toFixed(1)}
        </div>
      </div>

      <div className="p-4">
        <p className="text-[11px] text-gray-400 flex items-center gap-1 mb-1">
          <FaMapMarkerAlt className="text-merah" /> {destination}
        </p>
        <h3 className="font-bold text-gray-800 text-[15px] leading-snug mb-3 group-hover:text-biru transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400">Mulai dari</p>
            <p className="font-extrabold text-biru text-[16px]">Rp {Number(price).toLocaleString()}</p>
          </div>
          <span className="text-[12px] font-semibold text-biru opacity-0 group-hover:opacity-100 transition-opacity">
            Lihat →
          </span>
        </div>
      </div>
    </Link>
  );
}