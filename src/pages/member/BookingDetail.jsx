import { useParams, Link } from "react-router-dom";

const bookingDetail = {
  id: 1,
  bookingId: "BKG-2001",
  img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=300&fit=crop",
  destination: "Bali, Indonesia",
  packageName: "Bali Explorer 5D4N",
  travelDate: "12 Juli 2026",
  bookingDate: "5 Juni 2026",
  pax: 2,
  pricePerPax: 4200000,
  status: "Confirmed",
  customerName: "Andi Pratama",
  email: "andi.pratama@email.com",
  phone: "081234567890",
  payment: "Bank Transfer",
};

const statusStyles = {
  Confirmed: "bg-green-100 text-hijau",
  Completed: "bg-blue-100 text-biru",
  Cancelled: "bg-red-100 text-merah",
};

export default function BookingDetail() {
  const { id } = useParams();
  const b = bookingDetail; // di real app: fetch berdasarkan id

  const totalPrice = b.pricePerPax * b.pax;

  return (
    <div>
      <Link to="/member/bookings" className="text-[12px] text-biru font-semibold hover:underline mb-4 inline-block">
        ← Kembali ke Booking Saya
      </Link>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.08)] overflow-hidden max-w-2xl">

        {/* Header image */}
        <div className="relative h-44">
          <img src={b.img} alt={b.packageName} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[12px] font-semibold ${statusStyles[b.status]}`}>
            {b.status}
          </span>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-[12px] opacity-85">📍 {b.destination}</p>
            <h1 className="text-xl font-bold">{b.packageName}</h1>
          </div>
        </div>

        {/* E-ticket body */}
        <div className="p-6">
          <p className="text-[11px] text-gray-400 mb-1">Booking ID</p>
          <p className="font-mono font-bold text-biru text-[15px] mb-5">{b.bookingId}</p>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <p className="text-[11px] text-gray-400">Tanggal Berangkat</p>
              <p className="font-semibold text-gray-700 text-[14px]">{b.travelDate}</p>
            </div>
            <div>
              <p className="text-[11px] text-gray-400">Tanggal Booking</p>
              <p className="font-semibold text-gray-700 text-[14px]">{b.bookingDate}</p>
            </div>
            <div>
              <p className="text-[11px] text-gray-400">Jumlah Peserta</p>
              <p className="font-semibold text-gray-700 text-[14px]">{b.pax} orang</p>
            </div>
            <div>
              <p className="text-[11px] text-gray-400">Metode Pembayaran</p>
              <p className="font-semibold text-gray-700 text-[14px]">{b.payment}</p>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-200 pt-4 mb-5">
            <p className="text-[12px] font-semibold text-gray-500 mb-2">Informasi Pemesan</p>
            <p className="text-[14px] text-gray-700">{b.customerName}</p>
            <p className="text-[12px] text-gray-400">{b.email} · {b.phone}</p>
          </div>

          <div className="border-t border-dashed border-gray-200 pt-4 flex items-center justify-between">
            <span className="font-semibold text-gray-700 text-[14px]">Total Pembayaran</span>
            <span className="font-extrabold text-biru text-[20px]">Rp {totalPrice.toLocaleString()}</span>
          </div>

          <button className="w-full mt-5 bg-biru hover:bg-blue-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors">
            📄 Download E-Tiket
          </button>
        </div>
      </div>
    </div>
  );
}