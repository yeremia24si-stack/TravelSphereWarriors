import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const packageInfo = {
  name: "Bali Explorer 5D4N",
  destination: "Bali, Indonesia",
  pricePerPax: 4200000,
  img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&h=140&fit=crop",
};

const paymentMethods = [
  { id: "bank",   label: "Bank Transfer", icon: "🏦" },
  { id: "card",   label: "Credit Card",   icon: "💳" },
  { id: "gopay",  label: "GoPay",         icon: "💚" },
  { id: "qris",   label: "QRIS",          icon: "📱" },
];

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    travelDate: "",
    pax: 2,
    fullName: "Andi Pratama",
    email: "andi.pratama@email.com",
    phone: "081234567890",
    payment: "bank",
  });
  const [submitting, setSubmitting] = useState(false);

  const totalPrice = packageInfo.pricePerPax * form.pax;

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.travelDate || form.pax < 1) {
      alert("Harap lengkapi tanggal perjalanan dan jumlah peserta.");
      return;
    }
    setSubmitting(true);
    // Simulasi proses booking
    setTimeout(() => {
      setSubmitting(false);
      navigate("/member/bookings");
    }, 1200);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Checkout Booking</h1>
      <p className="text-gray-400 text-sm mb-6">Lengkapi detail untuk menyelesaikan pemesanan Anda.</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-[1.6fr_1fr] gap-6">

        {/* Left — form */}
        <div className="space-y-5">

          {/* Trip details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h2 className="font-bold text-gray-800 text-[15px] mb-4">Detail Perjalanan</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[12px] text-gray-500 font-medium mb-1 block">Tanggal Keberangkatan</label>
                <input
                  type="date"
                  value={form.travelDate}
                  onChange={(e) => handleChange("travelDate", e.target.value)}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                />
              </div>
              <div>
                <label className="text-[12px] text-gray-500 font-medium mb-1 block">Jumlah Peserta</label>
                <input
                  type="number"
                  min={1}
                  value={form.pax}
                  onChange={(e) => handleChange("pax", parseInt(e.target.value) || 1)}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                />
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h2 className="font-bold text-gray-800 text-[15px] mb-4">Informasi Kontak</h2>
            <div className="space-y-3">
              <div>
                <label className="text-[12px] text-gray-500 font-medium mb-1 block">Nama Lengkap</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[12px] text-gray-500 font-medium mb-1 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                  />
                </div>
                <div>
                  <label className="text-[12px] text-gray-500 font-medium mb-1 block">No. Telepon</label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment method */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h2 className="font-bold text-gray-800 text-[15px] mb-4">Metode Pembayaran</h2>
            <div className="grid grid-cols-4 gap-3">
              {paymentMethods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleChange("payment", m.id)}
                  className={[
                    "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors cursor-pointer",
                    form.payment === m.id ? "border-biru bg-blue-50" : "border-gray-100 bg-gray-50 hover:border-gray-200",
                  ].join(" ")}
                >
                  <span className="text-2xl">{m.icon}</span>
                  <span className="text-[11px] font-medium text-gray-600">{m.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right — summary */}
        <div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.08)] p-5 sticky top-20">
            <h2 className="font-bold text-gray-800 text-[15px] mb-4">Ringkasan Pesanan</h2>

            <div className="flex gap-3 mb-4 pb-4 border-b border-gray-100">
              <img src={packageInfo.img} alt={packageInfo.name} className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <p className="font-semibold text-gray-800 text-[13px]">{packageInfo.name}</p>
                <p className="text-[11px] text-gray-400">{packageInfo.destination}</p>
              </div>
            </div>

            <div className="space-y-2 text-[13px] mb-4">
              <div className="flex justify-between text-gray-500">
                <span>Harga per orang</span>
                <span>Rp {packageInfo.pricePerPax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Jumlah peserta</span>
                <span>× {form.pax}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-gray-100 mb-5">
              <span className="font-semibold text-gray-700 text-[13px]">Total Pembayaran</span>
              <span className="font-extrabold text-biru text-[18px]">Rp {totalPrice.toLocaleString()}</span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-biru hover:bg-blue-600 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {submitting ? "Memproses..." : "Konfirmasi & Bayar"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}