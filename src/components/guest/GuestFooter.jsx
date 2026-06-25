import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function GuestFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Dapatkan promo eksklusif</h3>
            <p className="text-white/80 text-sm">Daftar newsletter dan jadi yang pertama tahu paket diskon terbaru.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 md:w-64 px-4 py-3 rounded-xl text-sm text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="bg-white text-biru font-semibold px-5 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-2xl font-extrabold">Travel</span>
              <span className="text-2xl font-black text-biru">Sphere</span>
              <span className="text-3xl font-black text-kuning leading-none">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-4">
              Platform travel agency terpercaya untuk menjelajahi keindahan Indonesia dan dunia, dengan ribuan paket wisata terbaik.
            </p>
            <div className="flex gap-3">
              {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-biru transition-colors"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="font-semibold mb-3 text-sm">Jelajahi</p>
            <div className="space-y-2 text-sm text-gray-400">
              <Link to="/packages" className="block hover:text-white transition-colors">Semua Paket</Link>
              <Link to="/packages" className="block hover:text-white transition-colors">Destinasi Populer</Link>
              <Link to="/about" className="block hover:text-white transition-colors">Tentang Kami</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="font-semibold mb-3 text-sm">Bantuan</p>
            <div className="space-y-2 text-sm text-gray-400">
              <Link to="/contact" className="block hover:text-white transition-colors">Hubungi Kami</Link>
              <span className="block hover:text-white transition-colors cursor-pointer">FAQ</span>
              <span className="block hover:text-white transition-colors cursor-pointer">Kebijakan Privasi</span>
            </div>
          </div>

          {/* Account */}
          <div>
            <p className="font-semibold mb-3 text-sm">Akun</p>
            <div className="space-y-2 text-sm text-gray-400">
              <Link to="/login" className="block hover:text-white transition-colors">Masuk</Link>
              <Link to="/register" className="block hover:text-white transition-colors">Daftar</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2025 Travel Sphere. Semua hak dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-2 text-lg">
            <span>✈️</span><span>🌏</span><span>🗺️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}