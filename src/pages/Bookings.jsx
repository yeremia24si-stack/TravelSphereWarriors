import { useState } from "react";
import PageHeader from "../components/PageHeader";

const generateBookings = () => {
  const statuses = ["Confirmed", "Pending", "Cancelled"];
  const packages = [
    "Bali Explorer 5D4N", "Raja Ampat Diving", "Lombok Beach Escape",
    "Java Heritage Tour", "Komodo Island 4D3N", "Flores Adventure",
    "Bromo Sunrise Trek", "Wakatobi Snorkeling",
  ];
  const customers = [
    { id: 1, name: "Andi Pratama" }, { id: 2, name: "Siti Rahayu" },
    { id: 3, name: "Budi Setiawan" }, { id: 4, name: "Dewi Anggraini" },
    { id: 5, name: "Rizky Nugroho" },
  ];
  const bookings = [];
  for (let i = 1; i <= 30; i++) {
    const cust = customers[i % customers.length];
    const pkg = packages[i % packages.length];
    bookings.push({
      bookingId: `BKG-${2000 + i}`,
      customerId: cust.id,
      customerName: cust.name,
      packageName: pkg,
      status: statuses[i % 3],
      totalPrice: Math.floor(2000000 + Math.random() * 8000000),
      bookingDate: `2025-${String(Math.floor(1 + (i % 12))).padStart(2, "0")}-${String(Math.floor(1 + (i % 28))).padStart(2, "0")}`,
      travelDate: `2025-${String(Math.floor(3 + (i % 10))).padStart(2, "0")}-${String(Math.floor(1 + (i % 28))).padStart(2, "0")}`,
      pax: Math.floor(1 + (i % 6)),
    });
  }
  return bookings;
};

const initialBookings = generateBookings();

const statusStyles = {
  Confirmed: "bg-green-100 text-green-700",
  Pending:   "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function Bookings() {
  const [bookings, setBookings] = useState(initialBookings);
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [formData, setFormData] = useState({
    customerId: "", customerName: "", packageName: "",
    status: "Pending", totalPrice: "", bookingDate: "", travelDate: "", pax: 1,
  });

  const handleAdd = () => {
    if (!formData.customerName || !formData.packageName || !formData.totalPrice || !formData.bookingDate || !formData.travelDate) {
      alert("Harap isi semua field!");
      return;
    }
    const newBooking = {
      bookingId: `BKG-${2000 + bookings.length + 1}`,
      ...formData,
      customerId: parseInt(formData.customerId) || bookings.length + 1,
      totalPrice: parseInt(formData.totalPrice),
      pax: parseInt(formData.pax),
    };
    setBookings([newBooking, ...bookings]);
    setShowModal(false);
    setFormData({ customerId: "", customerName: "", packageName: "", status: "Pending", totalPrice: "", bookingDate: "", travelDate: "", pax: 1 });
  };

  const statuses = ["All", "Confirmed", "Pending", "Cancelled"];
  const filtered = filterStatus === "All" ? bookings : bookings.filter((b) => b.status === filterStatus);

  return (
    <div>
      <PageHeader title="Bookings" breadcrumb={["Travel Sphere", "Bookings"]}>
        <button
          onClick={() => setShowModal(true)}
          className="bg-biru text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
        >
          + Add Booking
        </button>
      </PageHeader>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm w-fit mb-4">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={[
              "px-4 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-150 border-none cursor-pointer",
              filterStatus === s ? "bg-biru text-white shadow" : "text-gray-500 bg-transparent hover:text-gray-700",
            ].join(" ")}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-[0_1px_8px_rgba(0,0,0,0.06)] overflow-x-auto">
        <table className="w-full text-sm min-w-[800px]">
          <thead className="bg-gray-50">
            <tr>
              {["Booking ID", "Customer", "Package", "Pax", "Status", "Total Price", "Booking Date", "Travel Date"].map((h) => (
                <th key={h} className="p-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.bookingId} className="border-t hover:bg-gray-50 transition-colors">
                <td className="p-3 font-mono text-[12px] text-biru font-semibold">{b.bookingId}</td>
                <td className="p-3">
                  <div>
                    <p className="font-semibold text-gray-800 text-[13px]">{b.customerName}</p>
                    <p className="text-[11px] text-gray-400">ID: {b.customerId}</p>
                  </div>
                </td>
                <td className="p-3 text-gray-600 text-[12px] max-w-[160px]">{b.packageName}</td>
                <td className="p-3 text-center font-bold text-gray-700">{b.pax}</td>
                <td className="p-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[b.status]}`}>
                    {b.status}
                  </span>
                </td>
                <td className="p-3 font-bold text-gray-800">Rp {b.totalPrice.toLocaleString()}</td>
                <td className="p-3 text-gray-500 text-[12px]">{b.bookingDate}</td>
                <td className="p-3 text-gray-500 text-[12px]">{b.travelDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-8 text-sm">No bookings found.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[420px] max-w-[90%] shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Booking</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Customer Name"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              />
              <input type="text" placeholder="Customer ID"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.customerId}
                onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
              />
              <input type="text" placeholder="Package Name"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.packageName}
                onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
              />
              <input type="number" placeholder="Number of Pax" min="1"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.pax}
                onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
              />
              <select
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Cancelled</option>
              </select>
              <input type="number" placeholder="Total Price (Rp)"
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                value={formData.totalPrice}
                onChange={(e) => setFormData({ ...formData, totalPrice: e.target.value })}
              />
              <div>
                <label className="text-[11px] text-gray-500 font-medium mb-1 block">Booking Date</label>
                <input type="date"
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                  value={formData.bookingDate}
                  onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                />
              </div>
              <div>
                <label className="text-[11px] text-gray-500 font-medium mb-1 block">Travel Date</label>
                <input type="date"
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-biru text-sm"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                />
              </div>
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