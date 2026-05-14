import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #0ea5e9 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-white/10 rounded-full" />
        <span className="absolute top-16 right-24 text-6xl opacity-10 select-none">✈️</span>
        <span className="absolute bottom-24 left-20 text-5xl opacity-10 select-none">🌏</span>
        <span className="absolute top-1/3 right-12 text-4xl opacity-10 select-none">🗺️</span>
      </div>

      <div className="relative w-full max-w-md mx-4">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-7">
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-[32px] font-extrabold text-gray-800 tracking-tight">Travel</span>
                <span className="text-[34px] font-black text-biru leading-none">Sphere</span>
                <span className="text-[38px] font-black text-kuning leading-none">.</span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium tracking-widest uppercase mt-0.5">
                Travel Agent Dashboard
              </p>
            </div>
          </div>

          {/* Page content rendered here */}
          <Outlet />
        </div>

        <p className="text-center text-[12px] text-white/60 mt-5">
          © 2025 Travel Sphere Admin Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
}