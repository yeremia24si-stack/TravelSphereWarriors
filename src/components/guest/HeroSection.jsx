import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function HeroSection() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/packages${destination ? `?q=${encodeURIComponent(destination)}` : ""}`);
  };

  return (
    <section className="relative min-h-[640px] flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&h=900&fit=crop"
        alt="Bali destination"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <span className="inline-block bg-white/15 backdrop-blur text-white text-[12px] font-medium px-4 py-1.5 rounded-full mb-5">
          ✈️ Lebih dari 500+ paket wisata tersedia
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Jelajahi Dunia,<br />Wujudkan Liburan Impian
        </h1>

        <p className="text-white/85 text-sm md:text-base max-w-xl mx-auto mb-8">
          Temukan ribuan destinasi terbaik dengan harga terjangkau dan pengalaman tak terlupakan bersama Travel Sphere.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 shadow-2xl max-w-xl mx-auto"
        >
          <div className="relative flex-1 w-full">
            <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-merah text-sm" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Mau liburan ke mana? (cth: Bali, Lombok...)"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-biru hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            <FaSearch className="text-xs" /> Cari Paket
          </button>
        </form>

        {/* Popular tags */}
        <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
          <span className="text-white/70 text-[12px]">Populer:</span>
          {["Bali", "Lombok", "Raja Ampat", "Yogyakarta"].map((tag) => (
            <button
              key={tag}
              onClick={() => navigate(`/packages?q=${tag}`)}
              className="text-white/90 text-[12px] bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors cursor-pointer border-none"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}