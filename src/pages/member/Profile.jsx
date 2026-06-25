import { useState } from "react";
import LoyaltyProgress from "../../components/member/LoyaltyProgress";

export default function Profile() {
  const [form, setForm] = useState({
    fullName: "Andi Pratama",
    email: "andi.pratama@email.com",
    phone: "081234567890",
    city: "Jakarta",
  });
  const [passwordForm, setPasswordForm] = useState({ current: "", newPass: "", confirm: "" });
  const [saved, setSaved] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwordForm.newPass !== passwordForm.confirm) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }
    alert("Password berhasil diubah!");
    setPasswordForm({ current: "", newPass: "", confirm: "" });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profil Saya</h1>
        <p className="text-gray-400 text-sm mt-1">Kelola informasi akun dan keamanan Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-5">

        {/* Left — avatar & loyalty */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <img
              src="https://avatar.iran.liara.run/public/45"
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <p className="font-bold text-gray-800 text-[16px]">{form.fullName}</p>
            <p className="text-gray-400 text-[12px] mb-4">{form.email}</p>
            <button className="text-[12px] font-semibold text-biru border border-biru rounded-lg px-4 py-1.5 hover:bg-blue-50 transition-colors">
              Ubah Foto
            </button>
          </div>

          <LoyaltyProgress points={1850} />
        </div>

        {/* Right — forms */}
        <div className="space-y-5">

          {/* Personal info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-gray-800 text-[15px] mb-4">Informasi Pribadi</h2>
            {saved && (
              <div className="bg-green-50 text-hijau text-[12px] rounded-lg p-2.5 mb-4">
                ✅ Profil berhasil disimpan!
              </div>
            )}
            <form onSubmit={handleSaveProfile} className="space-y-3">
              <div>
                <label className="text-[12px] text-gray-500 font-medium mb-1 block">Nama Lengkap</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[12px] text-gray-500 font-medium mb-1 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                  />
                </div>
                <div>
                  <label className="text-[12px] text-gray-500 font-medium mb-1 block">No. Telepon</label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                  />
                </div>
              </div>
              <div>
                <label className="text-[12px] text-gray-500 font-medium mb-1 block">Kota</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                />
              </div>
              <button type="submit" className="bg-biru hover:bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                Simpan Perubahan
              </button>
            </form>
          </div>

          {/* Password */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-gray-800 text-[15px] mb-4">Ubah Password</h2>
            <form onSubmit={handleChangePassword} className="space-y-3">
              <div>
                <label className="text-[12px] text-gray-500 font-medium mb-1 block">Password Saat Ini</label>
                <input
                  type="password"
                  value={passwordForm.current}
                  onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                  placeholder="********"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[12px] text-gray-500 font-medium mb-1 block">Password Baru</label>
                  <input
                    type="password"
                    value={passwordForm.newPass}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPass: e.target.value })}
                    className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                    placeholder="********"
                  />
                </div>
                <div>
                  <label className="text-[12px] text-gray-500 font-medium mb-1 block">Konfirmasi Password</label>
                  <input
                    type="password"
                    value={passwordForm.confirm}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                    className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none focus:border-biru"
                    placeholder="********"
                  />
                </div>
              </div>
              <button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                Ubah Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}