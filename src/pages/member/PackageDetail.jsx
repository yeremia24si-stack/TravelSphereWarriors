import { useParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaUsers, FaCheckCircle } from "react-icons/fa";
import ReviewStars from "../../components/member/ReviewStars";

// Dummy single package detail (di real app, fetch by params.id)
const packageDetail = {
  id: 1,
  name: "Bali Explorer 5D4N",
  destination: "Bali, Indonesia",
  category: "Beach & Culture",
  duration: "5 Hari 4 Malam",
  minPax: 2,
  maxPax: 20,
  price: 4200000,
  rating: 4.8,
  totalReviews: 142,
  img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&h=400&fit=crop",
  description: "Jelajahi keindahan Bali dengan paket lengkap yang mencakup kunjungan ke pura-pura bersejarah, sawah terasering Tegalalang, pantai-pantai eksotis, dan budaya lokal yang autentik. Cocok untuk keluarga maupun pasangan yang ingin liburan berkesan.",
  highlights: [
    "Tour Pura Tanah Lot saat sunset",
    "Sawah terasering Tegalalang",
    "Pantai Nusa Dua & Kuta",
    "Pertunjukan tari Kecak",
    "Hotel bintang 4 termasuk sarapan",
  ],
  itinerary: [
    { day: "Hari 1", title: "Kedatangan & Check-in", desc: "Penjemputan di airport, transfer ke hotel, istirahat." },
    { day: "Hari 2", title: "Pura Tanah Lot & Sawah Tegalalang", desc: "Kunjungan tempat ikonik di Bali bagian utara." },
    { day: "Hari 3", title: "Pantai Nusa Dua & Kuta", desc: "Bersantai di pantai dan menikmati sunset." },
    { day: "Hari 4", title: "Budaya & Belanja", desc: "Tari Kecak, pasar seni Ubud, oleh-oleh." },
    { day: "Hari 5", title: "Check-out & Kepulangan", desc: "Transfer ke airport." },
  ],
};

const reviews = [
  { name: "Rina Kusuma", rating: 5, comment: "Pengalaman luar biasa! Guide sangat ramah dan itinerary padat tapi tidak melelahkan.", date: "2 minggu lalu" },
  { name: "Fajar Hidayat", rating: 4, comment: "Hotelnya nyaman, makanan enak. Hanya saja transportasi sedikit terlambat di hari ke-3.", date: "1 bulan lalu" },
  { name: "Intan Permata", rating: 5, comment: "Worth it banget! Akan booking lagi untuk paket lain dari Travel Sphere.", date: "1 bulan lalu" },
];

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = packageDetail; // di real app: cari dari data berdasarkan id

  return (
    <div className="space-y-6">

      {/* Hero image */}
      <div className="relative rounded-2xl overflow-hidden h-72">
        <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-5 left-6 text-white">
          <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[11px] font-medium mb-2 inline-block">
            {pkg.category}
          </span>
          <h1 className="text-2xl font-bold">{pkg.name}</h1>
          <p className="text-[13px] opacity-90 flex items-center gap-1 mt-1">
            <FaMapMarkerAlt /> {pkg.destination}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[1.6fr_1fr] gap-6">

        {/* Left column */}
        <div className="space-y-6">

          {/* Quick info */}
          <div className="flex items-center gap-6 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaClock className="text-biru" /> {pkg.duration}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaUsers className="text-hijau" /> {pkg.minPax}–{pkg.maxPax} pax
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ReviewStars value={pkg.rating} size="sm" />
              <span className="text-gray-400">({pkg.totalReviews} ulasan)</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="font-bold text-gray-800 text-[16px] mb-2">Tentang Paket Ini</h2>
            <p className="text-[13px] text-gray-600 leading-relaxed">{pkg.description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="font-bold text-gray-800 text-[16px] mb-3">Highlight Perjalanan</h2>
            <div className="grid grid-cols-2 gap-2">
              {pkg.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                  <FaCheckCircle className="text-hijau mt-0.5 flex-shrink-0" /> {h}
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="font-bold text-gray-800 text-[16px] mb-3">Itinerary</h2>
            <div className="space-y-3">
              {pkg.itinerary.map((item, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <p className="text-[11px] font-bold text-biru">{item.day}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-[13px]">{item.title}</p>
                    <p className="text-[12px] text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="font-bold text-gray-800 text-[16px] mb-3">Ulasan Pelanggan</h2>
            <div className="space-y-3">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="font-semibold text-gray-800 text-[13px]">{r.name}</p>
                    <span className="text-[11px] text-gray-400">{r.date}</span>
                  </div>
                  <ReviewStars value={r.rating} size="sm" />
                  <p className="text-[12.5px] text-gray-600 mt-2 leading-relaxed">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — booking box (sticky) */}
        <div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.08)] p-5 sticky top-20">
            <p className="text-[11px] text-gray-400">Mulai dari</p>
            <p className="text-[26px] font-extrabold text-biru mb-4">
              Rp {pkg.price.toLocaleString()}
              <span className="text-[12px] text-gray-400 font-normal"> /orang</span>
            </p>
            <Link
              to={`/member/checkout/${pkg.id}`}
              className="block text-center bg-biru hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Book Sekarang
            </Link>
            <p className="text-[11px] text-gray-400 text-center mt-3">
              Tanpa biaya tersembunyi · Bisa dibatalkan H-3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}