import { useState } from "react";
import PageHeader from "../components/PageHeader";

const generateCustomers = () => {
  const loyalties = ["Bronze", "Silver", "Gold"];
  const names = [
    "Andi Pratama", "Siti Rahayu", "Budi Setiawan", "Dewi Anggraini",
    "Rizky Nugroho", "Maya Sari", "Hendra Wijaya", "Rina Kusuma",
    "Fajar Hidayat", "Intan Permata",
  ];
  const cities = ["Jakarta", "Surabaya", "Bandung", "Medan", "Makassar", "Bali", "Yogyakarta", "Semarang"];
  const customers = [];
  for (let i = 1; i <= 30; i++) {
    customers.push({
      customerId: i,
      customerName: names[i % names.length],
      email: `traveler${i}@gmail.com`,
      phone: `0812${String(i).padStart(4, "0")}${String(i * 2).padStart(4, "0")}`,
      city: cities[i % cities.length],
      totalTrips: Math.floor(1 + Math.random() * 15),
      loyalty: loyalties[i % 3],
    });
  }
  return customers;
};

const initialCustomers = generateCustomers();

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    customerName: "", email: "", phone: "", city: "", loyalty: "Bronze",
  });

  const handleAddCustomer = () => {
    if (!formData.customerName || !formData.email || !formData.phone || !formData.city) {
      alert("Harap isi semua field!");
      return;
    }
    const newCustomer = {
      customerId: customers.length + 1,
      totalTrips: 0,
      ...formData,
    };
    setCustomers([...customers, newCustomer]);
    setShowModal(false);
    setFormData({ customerName: "", email: "", phone: "", city: "", loyalty: "Bronze" });
  };

  const filtered = customers.filter(
    (c) =>
      c.customerName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageHeader title="Customers" breadcrumb={["Travel Sphere", "Customers"]}>
        <button
          onClick={() => setShowModal(true)}
          className="bg-biru text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
        >
          + Add Customer
        </button>
      </PageHeader>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 bg-white p-2.5 w-full max-w-sm rounded-xl outline-none text-sm focus:border-biru transition-colors shadow-sm"
        />
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-[0_1px_8px_rgba(0,0,0,0.06)] overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead className="bg-gray-50">
            <tr>
              {["ID", "Name", "Email", "Phone", "City", "Trips", "Loyalty"].map((h) => (
                <th key={h} className="p-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.customerId} className="border-t hover:bg-gray-50 transition-colors">
                <td className="p-3 text-gray-400 text-[12px]">#{String(c.customerId).padStart(4, "0")}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://avatar.iran.liara.run/public/${c.customerId}`}
                      className="w-8 h-8 rounded-full"
                      alt={c.customerName}
                    />
                    <span className="font-semibold text-gray-800">{c.customerName}</span>
                  </div>
                </td>
                <td className="p-3 text-gray-500">{c.email}</td>
                <td className="p-3 text-gray-500">{c.phone}</td>
                <td className="p-3 text-gray-600 font-medium">{c.city}</td>
                <td className="p-3">
                  <span className="font-bold text-biru">{c.totalTrips}</span>
                  <span className="text-gray-400 text-[11px] ml-1">trips</span>
                </td>
                <td className="p-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                    ${c.loyalty === "Gold"   ? "bg-yellow-100 text-yellow-700" : ""}
                    ${c.loyalty === "Silver" ? "bg-gray-100 text-gray-600"     : ""}
                    ${c.loyalty === "Bronze" ? "bg-orange-100 text-orange-700" : ""}
                  `}>
                    {c.loyalty === "Gold" ? "🥇" : c.loyalty === "Silver" ? "🥈" : "🥉"} {c.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-8 text-sm">No customers found.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 max-w-[90%] shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Customer</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Full Name"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              />
              <input type="email" placeholder="Email"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input type="text" placeholder="Phone Number"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input type="text" placeholder="City"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <select
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.loyalty}
                onChange={(e) => setFormData({ ...formData, loyalty: e.target.value })}
              >
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
              </select>
              <div className="flex gap-2 pt-2">
                <button onClick={handleAddCustomer} className="bg-biru text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm font-semibold">Save</button>
                <button onClick={() => setShowModal(false)} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}