import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: "Alamat", value: "Jl. Sudirman No. 88, Jakarta Selatan" },
    { icon: <FaPhone />,        label: "Telepon", value: "+62 21 1234 5678" },
    { icon: <FaEnvelope />,     label: "Email",   value: "halo@travelsphere.id" },
    { icon: <FaClock />,        label: "Jam Operasional", value: "Senin – Minggu, 08.00 – 21.00 WIB" },
  ];

  return (
    <div className="pt-28 pb-16 max-w-6xl mx-auto px-6">

      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Hubungi Kami</h1>
        <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
          Punya pertanyaan tentang paket wisata? Tim kami siap membantu Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10">

        {/* Contact info */}
        <div className="space-y-5">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-biru flex items-center justify-center flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <p className="text-[12px] text-gray-400">{info.label}</p>
                <p className="text-[14px] font-medium text-gray-700">{info.value}</p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl overflow-hidden h-48 bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1577086664693-894d8405334a?w=600&h=300&fit=crop"
              alt="Office location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          {sent && (
            <div className="bg-green-50 text-hijau text-sm rounded-xl p-3 mb-4 flex items-center gap-2">
              ✅ Pesan Anda berhasil terkirim! Tim kami akan segera merespons.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[12px] text-gray-500 font-medium mb-1 block">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="text-[12px] text-gray-500 font-medium mb-1 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-[12px] text-gray-500 font-medium mb-1 block">Subjek</label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                placeholder="Tentang apa pesan Anda?"
              />
            </div>
            <div>
              <label className="text-[12px] text-gray-500 font-medium mb-1 block">Pesan</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru resize-none"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-biru hover:bg-blue-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}