import { Link } from "react-router-dom";
import HeroSection from "../../components/guest/HeroSection";
import DestinationCard from "../../components/guest/DestinationCard";
import TestimonialCard from "../../components/guest/TestimonialCard";
import TrustBadge from "../../components/guest/TrustBadge";

const featuredPackages = [
  { id: 1, name: "Bali Explorer 5D4N",  destination: "Bali, Indonesia",   category: "Beach & Culture", price: 4200000, rating: 4.8, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=240&fit=crop" },
  { id: 2, name: "Raja Ampat Diving",   destination: "Raja Ampat, Papua", category: "Adventure",       price: 7500000, rating: 4.9, img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400&h=240&fit=crop" },
  { id: 5, name: "Komodo Island 4D3N",  destination: "Labuan Bajo, NTT",  category: "Adventure",       price: 5900000, rating: 4.7, img: "https://images.unsplash.com/photo-1562084862-94e862b75ab4?w=400&h=240&fit=crop" },
  { id: 4, name: "Java Heritage Tour",  destination: "Yogyakarta, Jawa",  category: "Cultural",        price: 2850000, rating: 4.5, img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&h=240&fit=crop" },
];

const whyChooseUs = [
  { icon: "💰", title: "Harga Terbaik",     desc: "Dapatkan harga termurah dengan kualitas perjalanan terjamin." },
  { icon: "🛡️", title: "Aman & Terpercaya", desc: "Sudah dipercaya ribuan pelanggan sejak 2015." },
  { icon: "🎯", title: "Itinerary Fleksibel", desc: "Bisa disesuaikan dengan kebutuhan dan budget Anda." },
  { icon: "📞", title: "Support 24/7",       desc: "Tim customer service siap membantu kapan saja." },
];

const testimonials = [
  { name: "Rina Kusuma",  role: "Traveler", avatar: "https://avatar.iran.liara.run/public/10", rating: 5, comment: "Pelayanannya luar biasa! Trip ke Bali jadi pengalaman terbaik tahun ini." },
  { name: "Fajar Hidayat", role: "Traveler", avatar: "https://avatar.iran.liara.run/public/11", rating: 5, comment: "Harga bersaing, guide ramah, hotel nyaman. Pasti akan booking lagi!" },
  { name: "Intan Permata", role: "Traveler", avatar: "https://avatar.iran.liara.run/public/12", rating: 4, comment: "Itinerary-nya pas banget, nggak terlalu padat tapi semua spot bagus terlewati." },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <TrustBadge icon="✈️" value="12,500+" label="Wisatawan Puas" />
          <TrustBadge icon="🗺️" value="500+"   label="Paket Wisata" />
          <TrustBadge icon="🌏" value="80+"    label="Destinasi" />
          <TrustBadge icon="⭐" value="4.8/5"  label="Rating Pelanggan" />
        </div>
      </section>

      {/* Featured packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Paket Wisata Unggulan</h2>
              <p className="text-gray-400 text-sm mt-1">Destinasi favorit pilihan ribuan traveler.</p>
            </div>
            <Link to="/packages" className="text-biru font-semibold text-sm hover:underline whitespace-nowrap">
              Lihat Semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPackages.map((pkg) => (
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
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Kenapa Pilih Travel Sphere?</h2>
            <p className="text-gray-400 text-sm mt-2">Kami berkomitmen memberikan pengalaman liburan terbaik untuk Anda.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 text-[15px] mb-1.5">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Apa Kata Mereka</h2>
            <p className="text-gray-400 text-sm mt-2">Ribuan pengalaman tak terlupakan dari pelanggan kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Siap untuk liburan impianmu?
          </h2>
          <p className="text-white/85 text-sm md:text-base mb-7">
            Daftar sekarang dan dapatkan akses ke ribuan paket wisata eksklusif dengan harga terbaik.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/register"
              className="bg-white text-biru font-semibold px-7 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors"
            >
              Daftar Gratis Sekarang
            </Link>
            <Link
              to="/packages"
              className="border border-white/40 text-white font-semibold px-7 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors"
            >
              Jelajahi Paket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}