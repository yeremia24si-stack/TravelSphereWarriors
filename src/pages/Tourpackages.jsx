import { useState } from "react";
import { FaStar, FaRegStar, FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const initialPackages = [
  {
    id: 1,
    name: "Bali Explorer 5D4N",
    destination: "Bali, Indonesia",
    category: "Beach & Culture",
    duration: "5 Days 4 Nights",
    minPax: 2,
    maxPax: 20,
    price: 4200000,
    rating: 4.8,
    totalBookings: 142,
    status: "Active",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=240&fit=crop",
    description: "Experience the magic of Bali with temples, rice terraces, and stunning beaches.",
  },
  {
    id: 2,
    name: "Raja Ampat Diving",
    destination: "Raja Ampat, Papua",
    category: "Adventure",
    duration: "7 Days 6 Nights",
    minPax: 4,
    maxPax: 12,
    price: 7500000,
    rating: 4.9,
    totalBookings: 87,
    status: "Active",
    img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400&h=240&fit=crop",
    description: "Dive into the world's richest marine biodiversity in Raja Ampat's crystal waters.",
  },
  {
    id: 3,
    name: "Lombok Beach Escape",
    destination: "Lombok, NTB",
    category: "Beach & Culture",
    duration: "4 Days 3 Nights",
    minPax: 2,
    maxPax: 15,
    price: 3100000,
    rating: 4.6,
    totalBookings: 203,
    status: "Active",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=240&fit=crop",
    description: "Relax on pristine beaches and explore the volcanic landscapes of Lombok.",
  },
  {
    id: 4,
    name: "Java Heritage Tour",
    destination: "Yogyakarta, Jawa",
    category: "Cultural",
    duration: "3 Days 2 Nights",
    minPax: 2,
    maxPax: 25,
    price: 2850000,
    rating: 4.5,
    totalBookings: 318,
    status: "Active",
    img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&h=240&fit=crop",
    description: "Explore Borobudur, Prambanan, and the rich cultural heritage of Yogyakarta.",
  },
  {
    id: 5,
    name: "Komodo Island 4D3N",
    destination: "Labuan Bajo, NTT",
    category: "Adventure",
    duration: "4 Days 3 Nights",
    minPax: 4,
    maxPax: 10,
    price: 5900000,
    rating: 4.7,
    totalBookings: 95,
    status: "Active",
    img: "https://images.unsplash.com/photo-1562084862-94e862b75ab4?w=400&h=240&fit=crop",
    description: "Encounter Komodo dragons and snorkel in the stunning pink beach.",
  },
  {
    id: 6,
    name: "Bromo Sunrise Trek",
    destination: "Probolinggo, Jawa Timur",
    category: "Adventure",
    duration: "2 Days 1 Night",
    minPax: 2,
    maxPax: 20,
    price: 1800000,
    rating: 4.4,
    totalBookings: 412,
    status: "Seasonal",
    img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=240&fit=crop",
    description: "Witness the spectacular sunrise over the volcanic landscapes of Mount Bromo.",
  },
];

const categories = ["All", "Beach & Culture", "Adventure", "Cultural"];

const statusColors = {
  Active:   "bg-green-100 text-green-700",
  Seasonal: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

function StarRating({ value }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= Math.round(value)
          ? <FaStar key={i} className="text-kuning text-[12px]" />
          : <FaRegStar key={i} className="text-gray-300 text-[12px]" />
      )}
      <span className="text-[12px] text-gray-500 ml-1 font-medium">{value.toFixed(1)}</span>
    </div>
  );
}

export default function TourPackages() {
  const [packages, setPackages] = useState(initialPackages);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid | table
  const [formData, setFormData] = useState({
    name: "", destination: "", category: "Beach & Culture",
    duration: "", minPax: 2, maxPax: 20, price: "", status: "Active", description: "",
  });

  const filtered = filter === "All" ? packages : packages.filter((p) => p.category === filter);

  const handleAdd = () => {
    if (!formData.name || !formData.destination || !formData.price || !formData.duration) {
      alert("Harap isi semua field wajib!");
      return;
    }
    const newPkg = {
      id: packages.length + 1,
      rating: 0,
      totalBookings: 0,
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop",
      ...formData,
      price: parseInt(formData.price),
      minPax: parseInt(formData.minPax),
      maxPax: parseInt(formData.maxPax),
    };
    setPackages([newPkg, ...packages]);
    setShowModal(false);
    setFormData({ name: "", destination: "", category: "Beach & Culture", duration: "", minPax: 2, maxPax: 20, price: "", status: "Active", description: "" });
  };

  return (
    <div>
      <PageHeader title="Tour Packages" breadcrumb={["Travel Sphere", "Tour Packages"]}>
        <button
          onClick={() => setShowModal(true)}
          className="bg-biru text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
        >
          + Add Package
        </button>
      </PageHeader>

      {/* Filters + View Toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm">
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={[
                "px-4 py-1.5 rounded-lg text-[12px] font-semibold transition-all border-none cursor-pointer",
                filter === c ? "bg-biru text-white shadow" : "text-gray-500 bg-transparent hover:text-gray-700",
              ].join(" ")}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm">
          {[["grid", "⊞"], ["table", "☰"]].map(([mode, icon]) => (
            <button key={mode} onClick={() => setViewMode(mode)}
              className={[
                "px-3 py-1.5 rounded-lg text-[13px] font-bold transition-all border-none cursor-pointer",
                viewMode === mode ? "bg-biru text-white shadow" : "text-gray-400 bg-transparent",
              ].join(" ")}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-3 gap-4">
          {filtered.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-200">
              <div className="relative">
                <img src={pkg.img} alt={pkg.name} className="w-full h-44 object-cover"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop"; }}
                />
                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold ${statusColors[pkg.status]}`}>
                  {pkg.status}
                </span>
                <span className="absolute top-3 left-3 bg-black/60 text-white text-[11px] px-2.5 py-1 rounded-full font-medium">
                  {pkg.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-[14px] leading-snug mb-1">{pkg.name}</h3>
                <div className="flex items-center gap-1 text-gray-400 text-[12px] mb-2">
                  <FaMapMarkerAlt className="text-merah text-[11px]" /> {pkg.destination}
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-3 line-clamp-2">{pkg.description}</p>
                <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FaClock className="text-biru" /> {pkg.duration}</span>
                  <span className="flex items-center gap-1"><FaUsers className="text-hijau" /> {pkg.minPax}–{pkg.maxPax} pax</span>
                </div>
                <StarRating value={pkg.rating || 0} />
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-[10px] text-gray-400">Starting from</p>
                    <p className="font-extrabold text-biru text-[15px]">Rp {pkg.price.toLocaleString()}</p>
                  </div>
                  <span className="text-[11px] text-gray-400">{pkg.totalBookings} bookings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="bg-white rounded-2xl p-4 shadow-[0_1px_8px_rgba(0,0,0,0.06)] overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead className="bg-gray-50">
              <tr>
                {["Package", "Destination", "Category", "Duration", "Pax", "Price", "Rating", "Bookings", "Status"].map((h) => (
                  <th key={h} className="p-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((pkg) => (
                <tr key={pkg.id} className="border-t hover:bg-gray-50 transition-colors">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img src={pkg.img} alt={pkg.name} className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-semibold text-gray-800 text-[13px]">{pkg.name}</span>
                    </div>
                  </td>
                  <td className="p-3 text-gray-500 text-[12px]">{pkg.destination}</td>
                  <td className="p-3 text-gray-500 text-[12px]">{pkg.category}</td>
                  <td className="p-3 text-gray-500 text-[12px]">{pkg.duration}</td>
                  <td className="p-3 text-gray-500 text-[12px]">{pkg.minPax}–{pkg.maxPax}</td>
                  <td className="p-3 font-bold text-biru text-[13px]">Rp {pkg.price.toLocaleString()}</td>
                  <td className="p-3"><StarRating value={pkg.rating || 0} /></td>
                  <td className="p-3 text-gray-600 font-semibold">{pkg.totalBookings}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusColors[pkg.status]}`}>{pkg.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[440px] max-w-[90%] shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add Tour Package</h2>
            <div className="space-y-3">
              {[
                { ph: "Package Name *", key: "name", type: "text" },
                { ph: "Destination *", key: "destination", type: "text" },
                { ph: "Duration (e.g. 5 Days 4 Nights) *", key: "duration", type: "text" },
                { ph: "Price (Rp) *", key: "price", type: "number" },
                { ph: "Min Pax", key: "minPax", type: "number" },
                { ph: "Max Pax", key: "maxPax", type: "number" },
              ].map(({ ph, key, type }) => (
                <input key={key} type={type} placeholder={ph}
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                  value={formData[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                />
              ))}
              <select
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option>Beach & Culture</option>
                <option>Adventure</option>
                <option>Cultural</option>
              </select>
              <select
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option>Active</option>
                <option>Seasonal</option>
                <option>Inactive</option>
              </select>
              <textarea placeholder="Description"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm resize-none"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <div className="flex gap-2 pt-2">
                <button onClick={handleAdd} className="bg-biru text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm font-semibold">Save</button>
                <button onClick={() => setShowModal(false)} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}