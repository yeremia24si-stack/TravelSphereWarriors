import { useState } from "react";
import PackageCard from "../../components/member/PackageCard";

const initialWishlist = [
  { id: 2, name: "Raja Ampat Diving",   destination: "Raja Ampat, Papua", category: "Adventure",       duration: "7 Hari 6 Malam", price: 7500000, rating: 4.9, img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400&h=240&fit=crop" },
  { id: 4, name: "Java Heritage Tour",  destination: "Yogyakarta, Jawa",  category: "Cultural",        duration: "3 Hari 2 Malam", price: 2850000, rating: 4.5, img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&h=240&fit=crop" },
  { id: 7, name: "Flores Adventure",    destination: "Flores, NTT",       category: "Adventure",       duration: "5 Hari 4 Malam", price: 4750000, rating: 4.6, img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=240&fit=crop" },
  { id: 8, name: "Wakatobi Snorkeling", destination: "Wakatobi, Sulawesi",category: "Adventure",       duration: "4 Hari 3 Malam", price: 5300000, rating: 4.8, img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=240&fit=crop" },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleToggleFavorite = (id, isFav) => {
    if (!isFav) {
      setWishlist((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Wishlist Saya</h1>
        <p className="text-gray-400 text-sm mt-1">Paket wisata yang Anda simpan untuk dipertimbangkan nanti.</p>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((pkg) => (
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
              isFavorited={true}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="text-5xl block mb-4">💔</span>
          <p className="font-semibold text-gray-700 mb-1">Wishlist Anda masih kosong</p>
          <p className="text-gray-400 text-sm mb-5">Simpan paket favorit Anda untuk dipesan nanti.</p>
          <a href="/member/explore" className="inline-block bg-biru text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors">
            Jelajahi Paket Wisata
          </a>
        </div>
      )}
    </div>
  );
}