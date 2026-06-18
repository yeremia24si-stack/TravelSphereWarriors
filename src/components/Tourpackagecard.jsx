import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";

/**
 * TourPackageCard.jsx — Data Display Component
 * Menampilkan informasi paket wisata
 * Props: image, title, destination, category, duration, minPax, maxPax, price, rating, status
 */
export default function Tourpackagecard({
  image,
  title,
  destination,
  category = "Adventure",
  duration,
  minPax = 2,
  maxPax = 20,
  price,
  rating = 0,
  status = "Active",
  onDetail,
}) {
  const statusType = {
    Active:   "success",
    Seasonal: "warning",
    Inactive: "danger",
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < Math.round(rating) ? "text-kuning" : "text-gray-300"}>
      ★
    </span>
  ));

  return (
    <Card hover className="overflow-hidden !p-0">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop";
          }}
        />
        <div className="absolute top-3 right-3">
          <Badge type={statusType[status] || "secondary"}>{status}</Badge>
        </div>
        <div className="absolute top-3 left-3">
          <Badge type="primary">{category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-[14px] leading-snug mb-1">{title}</h3>
        <p className="text-[12px] text-gray-400 mb-2 flex items-center gap-1">
          <span>📍</span> {destination}
        </p>

        <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-3">
          <span>🕒 {duration}</span>
          <span>👥 {minPax}–{maxPax} pax</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[13px] mb-3">
          {stars}
          <span className="text-[11px] text-gray-400 ml-1">{rating.toFixed(1)}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400">From</p>
            <p className="font-extrabold text-biru text-[15px]">
              Rp {Number(price).toLocaleString()}
            </p>
          </div>
          <Button type="primary" size="sm" onClick={onDetail}>
            Detail
          </Button>
        </div>
      </div>
    </Card>
  );
}
