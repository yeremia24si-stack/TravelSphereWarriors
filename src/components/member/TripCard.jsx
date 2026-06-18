import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

/**
 * TripCard — menampilkan ringkasan trip mendatang member di Dashboard.
 */
export default function TripCard({
  bookingId,
  image,
  destination,
  packageName,
  travelDate,
  daysLeft,
  status = "Confirmed",
}) {
  const statusStyle = {
    Confirmed: "bg-green-100 text-hijau",
    Pending:   "bg-yellow-100 text-kuning",
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
      <img
        src={image}
        alt={destination}
        className="w-full h-44 object-cover"
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Status badge */}
      <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusStyle[status]}`}>
        {status}
      </span>

      {/* Countdown badge */}
      {daysLeft !== undefined && (
        <div className="absolute top-3 left-3 bg-white/95 rounded-xl px-3 py-1.5 text-center">
          <p className="text-[16px] font-extrabold text-biru leading-none">{daysLeft}</p>
          <p className="text-[9px] text-gray-500 font-medium">hari lagi</p>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="text-[11px] opacity-80 flex items-center gap-1 mb-1">
          <FaMapMarkerAlt /> {destination}
        </p>
        <h3 className="font-bold text-[16px] leading-snug mb-2">{packageName}</h3>
        <div className="flex items-center justify-between">
          <p className="text-[12px] opacity-90 flex items-center gap-1.5">
            <FaCalendarAlt /> {travelDate}
          </p>
          <Link
            to={`/member/bookings/${bookingId}`}
            className="bg-white text-biru text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Lihat E-Tiket
          </Link>
        </div>
      </div>
    </div>
  );
}