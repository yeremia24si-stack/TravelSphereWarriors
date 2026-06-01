/**
 * Footer.jsx — Layout Component
 * Komponen footer untuk halaman Travel Sphere
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10 rounded-2xl">
      <div className="container mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl font-extrabold">Travel</span>
              <span className="text-2xl font-black text-biru">Sphere</span>
              <span className="text-3xl font-black text-kuning leading-none">.</span>
            </div>
            <p className="text-gray-400 text-sm">
              Platform manajemen agen perjalanan modern.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <div>
              <p className="font-semibold text-white mb-2">Menu</p>
              <div className="space-y-1 text-gray-400">
                <p className="hover:text-white cursor-pointer transition-colors">Dashboard</p>
                <p className="hover:text-white cursor-pointer transition-colors">Bookings</p>
                <p className="hover:text-white cursor-pointer transition-colors">Tour Packages</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Support</p>
              <div className="space-y-1 text-gray-400">
                <p className="hover:text-white cursor-pointer transition-colors">Help Center</p>
                <p className="hover:text-white cursor-pointer transition-colors">Contact Us</p>
                <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-5 flex items-center justify-between">
          <p className="text-gray-500 text-xs">
            © 2025 Travel Sphere Admin Dashboard. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-lg">
            <span className="cursor-pointer hover:scale-110 transition-transform">✈️</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">🌏</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">🗺️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}