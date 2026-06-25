import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import DestinationCard from "../../components/guest/DestinationCard";

const allPackages = [
  { id: 1, name: "Bali Explorer 5D4N",   destination: "Bali, Indonesia",   category: "Beach & Culture", price: 4200000, rating: 4.8, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=240&fit=crop" },
  { id: 2, name: "Raja Ampat Diving",    destination: "Raja Ampat, Papua", category: "Adventure",       price: 7500000, rating: 4.9, img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400&h=240&fit=crop" },
  { id: 3, name: "Lombok Beach Escape",  destination: "Lombok, NTB",       category: "Beach & Culture", price: 3100000, rating: 4.6, img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=240&fit=crop" },
  { id: 4, name: "Java Heritage Tour",   destination: "Yogyakarta, Jawa",  category: "Cultural",        price: 2850000, rating: 4.5, img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&h=240&fit=crop" },
  { id: 5, name: "Komodo Island 4D3N",   destination: "Labuan Bajo, NTT",  category: "Adventure",       price: 5900000, rating: 4.7, img: "https://images.unsplash.com/photo-1562084862-94e862b75ab4?w=400&h=240&fit=crop" },
  { id: 6, name: "Bromo Sunrise Trek",   destination: "Probolinggo, Jatim",category: "Adventure",       price: 1800000, rating: 4.4, img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=240&fit=crop" },
  { id: 7, name: "Flores Adventure",     destination: "Flores, NTT",       category: "Adventure",       price: 4750000, rating: 4.6, img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=240&fit=crop" },
  { id: 8, name: "Wakatobi Snorkeling",  destination: "Wakatobi, Sulawesi",category: "Adventure",       price: 5300000, rating: 4.8, img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=240&fit=crop" },
];

const categories = ["All", "Beach & Culture", "Adventure", "Cultural"];

export default function PackagesPublic() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  let filtered = allPackages.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.destination.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  if (sortBy === "price-low")  filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "rating")     filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="pt-28 pb-16 max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Jelajahi Paket Wisata</h1>
        <p className="text-gray-400 text-sm mt-1">Temukan destinasi impian Anda dari ratusan pilihan paket terbaik.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6">
        <input
          type="text"
          placeholder="Cari nama paket atau destinasi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 bg-white px-4 py-2.5 rounded-xl text-sm outline-none focus:border-biru transition-colors shadow-sm md:max-w-xs"
        />

        <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={[
                "px-4 py-1.5 rounded-lg text-[12px] font-semibold transition-all border-none cursor-pointer whitespace-nowrap",
                category === c ? "bg-biru text-white shadow" : "text-gray-500 bg-transparent hover:text-gray-700",
              ].join(" ")}
            >
              {c}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-200 bg-white px-4 py-2.5 rounded-xl text-sm outline-none focus:border-biru shadow-sm"
        >
          <option value="popular">Paling Populer</option>
          <option value="price-low">Harga Terendah</option>
          <option value="price-high">Harga Tertinggi</option>
          <option value="rating">Rating Tertinggi</option>
        </select>
      </div>

      <p className="text-[12px] text-gray-400 mb-5">
        Menampilkan {filtered.length} dari {allPackages.length} paket wisata
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((pkg) => (
          <DestinationCard
            key={pkg.id}
            id={pkg.id}
            image={pkg.img}
            title={pkg.name}
            destination={pkg.destination}
            price={pkg.price}
            rating={pkg.rating}
            category={pkg.category}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16 text-sm">Tidak ada paket yang ditemukan.</p>
      )}
    </div>
  );
}