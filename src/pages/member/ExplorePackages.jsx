import { useState } from "react";
import PackageCard from "../../components/member/PackageCard";

const allPackages = [
  { id: 1, name: "Bali Explorer 5D4N",   destination: "Bali, Indonesia",   category: "Beach & Culture", duration: "5 Hari 4 Malam", price: 4200000, rating: 4.8, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=240&fit=crop" },
  { id: 2, name: "Raja Ampat Diving",    destination: "Raja Ampat, Papua", category: "Adventure",       duration: "7 Hari 6 Malam", price: 7500000, rating: 4.9, img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400&h=240&fit=crop" },
  { id: 3, name: "Lombok Beach Escape",  destination: "Lombok, NTB",       category: "Beach & Culture", duration: "4 Hari 3 Malam", price: 3100000, rating: 4.6, img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=240&fit=crop" },
  { id: 4, name: "Java Heritage Tour",   destination: "Yogyakarta, Jawa",  category: "Cultural",        duration: "3 Hari 2 Malam", price: 2850000, rating: 4.5, img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&h=240&fit=crop" },
  { id: 5, name: "Komodo Island 4D3N",   destination: "Labuan Bajo, NTT",  category: "Adventure",       duration: "4 Hari 3 Malam", price: 5900000, rating: 4.7, img: "https://images.unsplash.com/photo-1562084862-94e862b75ab4?w=400&h=240&fit=crop" },
  { id: 6, name: "Bromo Sunrise Trek",   destination: "Probolinggo, Jatim",category: "Adventure",       duration: "2 Hari 1 Malam", price: 1800000, rating: 4.4, img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=240&fit=crop" },
  { id: 7, name: "Flores Adventure",     destination: "Flores, NTT",       category: "Adventure",       duration: "5 Hari 4 Malam", price: 4750000, rating: 4.6, img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=240&fit=crop" },
  { id: 8, name: "Wakatobi Snorkeling",  destination: "Wakatobi, Sulawesi",category: "Adventure",       duration: "4 Hari 3 Malam", price: 5300000, rating: 4.8, img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=240&fit=crop" },
];

const categories = ["All", "Beach & Culture", "Adventure", "Cultural"];

export default function ExplorePackages() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const filtered = allPackages.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.destination.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  const handleToggleFavorite = (id, isFav) => {
    setFavorites((prev) => (isFav ? [...prev, id] : prev.filter((f) => f !== id)));
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-800">Jelajah Paket Wisata</h1>
        <p className="text-gray-400 text-sm mt-1">Temukan destinasi impian Anda berikutnya.</p>
      </div>

      {/* Search */}
      <div className="relative mb-4 max-w-md">
        <input
          type="text"
          placeholder="Cari nama paket atau destinasi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 bg-white pl-4 pr-4 py-2.5 rounded-xl text-sm outline-none focus:border-biru transition-colors shadow-sm"
        />
      </div>

      {/* Category filter */}
      <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm w-fit mb-5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={[
              "px-4 py-1.5 rounded-lg text-[12px] font-semibold transition-all border-none cursor-pointer",
              category === c ? "bg-biru text-white shadow" : "text-gray-500 bg-transparent hover:text-gray-700",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="text-[12px] text-gray-400 mb-4">
        Menampilkan {filtered.length} dari {allPackages.length} paket wisata
      </p>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-4">
        {filtered.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            image={pkg.img}
            title={pkg.name}
            destination={pkg.destination}
            duration={pkg.duration}
            price={pkg.price}
            rating={pkg.rating}
            category={pkg.category}
            isFavorited={favorites.includes(pkg.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16 text-sm">Tidak ada paket yang ditemukan.</p>
      )}
    </div>
  );
}