import StatCounter from "../../components/guest/StatCounter";

const team = [
  { name: "Budi Santoso",   role: "Founder & CEO",        avatar: "https://avatar.iran.liara.run/public/20" },
  { name: "Siti Aminah",    role: "Head of Operations",   avatar: "https://avatar.iran.liara.run/public/21" },
  { name: "Agus Wijaya",    role: "Head of Customer Care",avatar: "https://avatar.iran.liara.run/public/22" },
  { name: "Dewi Kartika",   role: "Travel Consultant",    avatar: "https://avatar.iran.liara.run/public/23" },
];

const values = [
  { icon: "🤝", title: "Kepercayaan", desc: "Kami menjaga komitmen pada setiap detail perjalanan pelanggan." },
  { icon: "🌱", title: "Sustainable Travel", desc: "Mendukung pariwisata berkelanjutan di setiap destinasi." },
  { icon: "💡", title: "Inovasi", desc: "Terus berinovasi memberikan pengalaman terbaik melalui teknologi." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=600&fit=crop"
          alt="About Travel Sphere"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Tentang Travel Sphere</h1>
          <p className="text-white/85 text-sm max-w-lg mx-auto">
            Menghubungkan traveler dengan pengalaman tak terlupakan di seluruh penjuru Indonesia dan dunia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=440&fit=crop"
            alt="Our story"
            className="rounded-2xl w-full h-80 object-cover"
          />
          <div>
            <span className="text-biru font-semibold text-sm">Cerita Kami</span>
            <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">
              Berawal dari Kecintaan pada Perjalanan
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Travel Sphere didirikan pada tahun 2015 oleh sekelompok traveler yang percaya bahwa
              setiap orang berhak mendapatkan pengalaman liburan terbaik tanpa rumit dan mahal.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Kini, kami telah melayani lebih dari 12.000 pelanggan dengan ratusan paket wisata
              di seluruh Indonesia dan destinasi populer dunia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter icon="📅" value="10+"     label="Tahun Pengalaman" />
          <StatCounter icon="✈️" value="12,500+" label="Wisatawan Puas" />
          <StatCounter icon="🗺️" value="500+"    label="Paket Wisata" />
          <StatCounter icon="🏆" value="15+"     label="Penghargaan" />
        </div>
      </section>

      {/* Values */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">Nilai yang Kami Pegang</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6 rounded-2xl bg-blue-50">
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-gray-800 text-[15px] mb-1.5">{v.title}</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Tim Kami</h2>
            <p className="text-gray-400 text-sm mt-1">Orang-orang di balik pengalaman terbaik Anda.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-3" />
                <p className="font-semibold text-gray-800 text-[14px]">{member.name}</p>
                <p className="text-gray-400 text-[12px]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}