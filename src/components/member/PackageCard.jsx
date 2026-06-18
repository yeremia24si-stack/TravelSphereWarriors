import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

/**
 * PackageCard — kartu katalog publik untuk halaman Jelajah Paket (member).
 * Beda dari TourPackageCard admin: ada tombol wishlist & gaya lebih "menjual".
 */
export default function PackageCard({
  id,
  image,
  title,
  destination,
  duration,
  price,
  rating = 0,
  category = "Adventure",
  isFavorited = false,
  onToggleFavorite,
}) {
  const [favorited, setFavorited] = useState(isFavorited);

  const handleFavorite = (e) => {
    e.preventDefault();
    setFavorited(!favorited);
    if (onToggleFavorite) onToggleFavorite(id, !favorited);
  };

  return (
    <Link
      to={`/member/package/${id}`}
      className="block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-200"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop";
          }}
        />
        <span className="absolute top-3 left-3 bg-black/60 text-white text-[11px] px-2.5 py-1 rounded-full font-medium">
          {category}
        </span>
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center cursor-pointer border-none hover:bg-white transition-colors"
        >
          {favorited
            ? <FaHeart className="text-merah text-[15px]" />
            : <FaRegHeart className="text-gray-500 text-[15px]" />
          }
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1 text-kuning text-[12px] mb-1.5">
          <FaStar /> <span className="font-semibold text-gray-700">{rating.toFixed(1)}</span>
        </div>
        <h3 className="font-bold text-gray-800 text-[15px] leading-snug mb-1">{title}</h3>
        <p className="text-[12px] text-gray-400 flex items-center gap-1 mb-3">
          <FaMapMarkerAlt className="text-merah text-[11px]" /> {destination}
        </p>
        <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-3">
          <FaClock className="text-biru" /> {duration}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400">Mulai dari</p>
            <p className="font-extrabold text-biru text-[16px]">Rp {Number(price).toLocaleString()}</p>
          </div>
          <span className="text-[12px] font-semibold text-biru">Lihat Detail →</span>
        </div>
      </div>
    </Link>
  );
}