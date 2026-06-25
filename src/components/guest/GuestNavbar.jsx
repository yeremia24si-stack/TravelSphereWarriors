import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function GuestNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", path: "/" },
    { label: "Jelajah Paket", path: "/packages" },
    { label: "Tentang Kami", path: "/about" },
    { label: "Kontak", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      scrolled
        ? isActive ? "text-biru" : "text-gray-600 hover:text-biru"
        : isActive ? "text-white" : "text-white/85 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1 flex-shrink-0">
          <span className={`text-[22px] font-extrabold tracking-tight ${scrolled ? "text-gray-800" : "text-white"}`}>
            Travel
          </span>
          <span className="text-[24px] font-black text-biru leading-none">Sphere</span>
          <span className="text-[28px] font-black text-kuning leading-none">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className={`text-sm font-semibold transition-colors ${
              scrolled ? "text-gray-700 hover:text-biru" : "text-white hover:text-white/80"
            }`}
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              scrolled
                ? "bg-biru text-white hover:bg-blue-600"
                : "bg-white text-biru hover:bg-blue-50"
            }`}
          >
            Daftar Gratis
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 cursor-pointer border-none bg-transparent ${scrolled ? "text-gray-700" : "text-white"}`}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl mt-2 mx-4 rounded-2xl p-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="border-t border-gray-100 my-2" />
          <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            Masuk
          </Link>
          <Link to="/register" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-semibold bg-biru text-white text-center hover:bg-blue-600">
            Daftar Gratis
          </Link>
        </div>
      )}
    </header>
  );
}