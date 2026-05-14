export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Animated plane + spinner */}
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-biru border-t-transparent rounded-full animate-spin" />
        <span className="absolute inset-0 flex items-center justify-center text-2xl">
          ✈️
        </span>
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-[20px] font-extrabold text-gray-800">Travel</span>
        <span className="text-[22px] font-black text-biru">Sphere</span>
        <span className="text-[24px] font-black text-kuning">.</span>
      </div>
      <p className="text-gray-400 text-sm font-medium tracking-wide animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}