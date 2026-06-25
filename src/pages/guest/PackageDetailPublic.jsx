import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaUsers, FaCheckCircle, FaStar } from "react-icons/fa";

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
  description: "Jelajahi keindahan Bali dengan paket lengkap yang mencakup kunjungan ke pura-pura bersejarah, sawah terasering Tegalalang, pantai-pantai eksotis, dan budaya lokal yang autentik.",
  highlights: [
    "Tour Pura Tanah Lot saat sunset",
    "Sawah terasering Tegalalang",
    "Pantai Nusa Dua & Kuta",
    "Pertunjukan tari Kecak",
    "Hotel bintang 4 termasuk sarapan",
  ],
};

export default function PackageDetailPublic() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packageDetail; // di real app: fetch berdasarkan id

  const handleBookNow = () => {
    // Guest belum login → arahkan ke halaman login
    navigate("/login");
  };

  return (
    <div className="pt-20">

      {/* Hero image */}
      <div className="relative h-80">
        <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 max-w-6xl mx-auto px-6 text-white">
          <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[11px] font-medium mb-2 inline-block">
            {pkg.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold">{pkg.name}</h1>
          <p className="text-[13px] opacity-90 flex items-center gap-1 mt-1">
            <FaMapMarkerAlt /> {pkg.destination}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8">

        {/* Left column */}
        <div className="space-y-7">

          <div className="flex items-center gap-6 bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaClock className="text-biru" /> {pkg.duration}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaUsers className="text-hijau" /> {pkg.minPax}–{pkg.maxPax} pax
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaStar className="text-kuning" /> {pkg.rating} ({pkg.totalReviews} ulasan)
            </div>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 text-[17px] mb-2">Tentang Paket Ini</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">{pkg.description}</p>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 text-[17px] mb-3">Highlight Perjalanan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pkg.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-[13.5px] text-gray-600">
                  <FaCheckCircle className="text-hijau mt-0.5 flex-shrink-0" /> {h}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — booking box */}
        <div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 sticky top-24">
            <p className="text-[11px] text-gray-400">Mulai dari</p>
            <p className="text-[28px] font-extrabold text-biru mb-5">
              Rp {pkg.price.toLocaleString()}
              <span className="text-[12px] text-gray-400 font-normal"> /orang</span>
            </p>
            <button
              onClick={handleBookNow}
              className="w-full bg-biru hover:bg-blue-600 text-white font-semibold py-3.5 rounded-xl transition-colors"
            >
              Book Sekarang
            </button>
            <p className="text-[11px] text-gray-400 text-center mt-3">
              Masuk atau daftar untuk melanjutkan booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}