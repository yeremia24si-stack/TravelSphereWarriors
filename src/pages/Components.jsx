import { useState } from "react";
import PageHeader from "../components/PageHeader";

// ===== Import semua komponen =====
// 1. Basic
import Button   from "../components/Button";
import Badge    from "../components/Badge";
import Avatar   from "../components/Avatar";
// 2. Layout
import Container from "../components/Container";
import Footer    from "../components/Footer";
// 3. Data Display
import Card            from "../components/Card";
import TourPackageCard from "../components/TourPackageCard";
import StatCard        from "../components/StatCard";
import Table           from "../components/Table";
// 4. Form
import InputField  from "../components/InputField";
import SelectField from "../components/SelectField";
import TextArea    from "../components/TextArea";
// 5. Feedback
import Alert   from "../components/Alert";
import Modal   from "../components/Modal";
import Spinner from "../components/Spinner";

import { FaPlane, FaUsers, FaMoneyBillWave } from "react-icons/fa";

// ---- Section wrapper helper ----
function Section({ title, description, children }) {
  return (
    <div className="mb-10">
      <div className="mb-4 pb-2 border-b border-gray-200">
        <h2 className="text-[16px] font-bold text-gray-800">{title}</h2>
        {description && <p className="text-[12px] text-gray-400 mt-0.5">{description}</p>}
      </div>
      {children}
    </div>
  );
}

// ---- Table sample data ----
const tableHeaders = ["No", "Customer", "Destination", "Status", "Price"];
const tableRows = [
  { id: 1, customer: "Andi Pratama",  destination: "Bali, Indonesia",   status: "Confirmed", price: "Rp 4.200.000" },
  { id: 2, customer: "Siti Rahayu",   destination: "Raja Ampat, Papua", status: "Pending",   price: "Rp 7.500.000" },
  { id: 3, customer: "Budi Setiawan", destination: "Lombok, NTB",       status: "Cancelled", price: "Rp 3.100.000" },
];
const statusColors = { Confirmed: "text-hijau bg-green-50", Pending: "text-kuning bg-yellow-50", Cancelled: "text-merah bg-red-50" };

export default function Components() {
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [formInput, setFormInput]   = useState("");
  const [formSelect, setFormSelect] = useState("");
  const [formArea, setFormArea]     = useState("");

  return (
    <div>
      <PageHeader
        title="Components"
        breadcrumb={["Dashboard", "Components"]}
      />

      {/* ===== 1. BASIC COMPONENT ===== */}
      <Section
        title="1. Basic Component"
        description="Komponen kecil yang sering digunakan berulang — Button, Badge, Avatar"
      >
        {/* Button */}
        <div className="mb-5">
          <p className="text-[12px] text-gray-500 font-semibold mb-2">Button — berbagai type & size</p>
          <div className="flex flex-wrap gap-2 items-center">
            <Button type="primary"   icon="✈️">Book Now</Button>
            <Button type="success"   icon="✅">Confirm</Button>
            <Button type="danger"    icon="🗑️">Cancel</Button>
            <Button type="warning"   icon="⚠️">Pending</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="outline">Outline</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="primary" disabled>Disabled</Button>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <Button type="primary" size="sm">Small</Button>
            <Button type="primary" size="md">Medium</Button>
            <Button type="primary" size="lg">Large</Button>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-5">
          <p className="text-[12px] text-gray-500 font-semibold mb-2">Badge — status & label</p>
          <div className="flex flex-wrap gap-2">
            <Badge type="success">✓ Confirmed</Badge>
            <Badge type="warning">⏳ Pending</Badge>
            <Badge type="danger">✗ Cancelled</Badge>
            <Badge type="primary">✈️ Active</Badge>
            <Badge type="secondary">Inactive</Badge>
            <Badge type="gold">🥇 Gold</Badge>
            <Badge type="silver">🥈 Silver</Badge>
            <Badge type="bronze">🥉 Bronze</Badge>
          </div>
        </div>

        {/* Avatar */}
        <div>
          <p className="text-[12px] text-gray-500 font-semibold mb-2">Avatar — inisial & foto</p>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar name="Andi Pratama" size="sm" />
            <Avatar name="Siti Rahayu" size="md" />
            <Avatar name="Budi Setiawan" size="lg" />
            <Avatar name="Dewi Anggraini" size="xl" />
            <Avatar name="Rizky Nugroho" size="md" showName />
            <Avatar
              name="Travel Admin"
              src="https://avatar.iran.liara.run/public/28"
              size="md"
              showName
            />
          </div>
        </div>
      </Section>

      {/* ===== 2. LAYOUT COMPONENT ===== */}
      <Section
        title="2. Layout Component"
        description="Komponen kerangka halaman — Container, Footer"
      >
        <Container className="bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-biru font-medium">
            🗂️ Ini adalah <b>Container</b> — pembungkus konten dengan padding dan max-width.
          </p>
        </Container>
        <div className="mt-4">
          <p className="text-[12px] text-gray-500 font-semibold mb-2">Footer component:</p>
          <Footer />
        </div>
      </Section>

      {/* ===== 3. DATA DISPLAY COMPONENT ===== */}
      <Section
        title="3. Data Display Component"
        description="Komponen untuk menampilkan data — Card, TourPackageCard, StatCard, Table"
      >
        {/* Card */}
        <div className="mb-5">
          <p className="text-[12px] text-gray-500 font-semibold mb-2">Card</p>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <h3 className="font-bold text-gray-800 mb-1">Card Biasa</h3>
              <p className="text-sm text-gray-500">Ini adalah isi dari Card component. Bisa diisi apa saja sebagai children.</p>
            </Card>
            <Card hover>
              <h3 className="font-bold text-gray-800 mb-1">Card dengan Hover</h3>
              <p className="text-sm text-gray-500">Hover di atas card ini untuk melihat efek shadow dan translate.</p>
            </Card>
          </div>
        </div>

        {/* StatCard */}
        <div className="mb-5">
          <p className="text-[12px] text-gray-500 font-semibold mb-2">StatCard — dashboard KPI</p>
          <div className="grid grid-cols-3 gap-4">
            <StatCard icon={FaPlane}         value="1,284" label="Total Bookings"  trend="+12% (30 days)" up={true}  iconBg="bg-biru"   />
            <StatCard icon={FaUsers}         value="3,620" label="Total Customers" trend="+8% (30 days)"  up={true}  iconBg="bg-hijau"  />
            <StatCard icon={FaMoneyBillWave} value="$94K"  label="Total Revenue"   trend="-3% (30 days)"  up={false} iconBg="bg-kuning" />
          </div>
        </div>

        {/* TourPackageCard */}
        <div className="mb-5">
          <p className="text-[12px] text-gray-500 font-semibold mb-2">TourPackageCard</p>
          <div className="grid grid-cols-2 gap-4">
            <TourPackageCard
              image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=240&fit=crop"
              title="Bali Explorer 5D4N"
              destination="Bali, Indonesia"
              category="Beach & Culture"
              duration="5 Days 4 Nights"
              minPax={2} maxPax={20}
              price={4200000}
              rating={4.8}
              status="Active"
            />
            <TourPackageCard
              image="https://images.unsplash.com/photo-1562084862-94e862b75ab4?w=400&h=240&fit=crop"
              title="Komodo Island 4D3N"
              destination="Labuan Bajo, NTT"
              category="Adventure"
              duration="4 Days 3 Nights"
              minPax={4} maxPax={10}
              price={5900000}
              rating={4.7}
              status="Seasonal"
            />
          </div>
        </div>

        {/* Table */}
        <div>
          <p className="text-[12px] text-gray-500 font-semibold mb-2">Table</p>
          <Table headers={tableHeaders}>
            {tableRows.map((row, index) => (
              <tr key={row.id} className="border-t border-gray-50 hover:bg-gray-50/60 transition-colors">
                <td className="px-5 py-3 text-gray-400 text-[12px]">{index + 1}</td>
                <td className="px-5 py-3 font-semibold text-gray-800 text-[13px]">{row.customer}</td>
                <td className="px-5 py-3 text-gray-500 text-[12px]">{row.destination}</td>
                <td className="px-5 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusColors[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-3 font-bold text-gray-800 text-[13px]">{row.price}</td>
              </tr>
            ))}
          </Table>
        </div>
      </Section>

      {/* ===== 4. FORM COMPONENT ===== */}
      <Section
        title="4. Form Component"
        description="Komponen untuk menerima input dari pengguna — InputField, SelectField, TextArea"
      >
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-4">
            <InputField
              label="Destination"
              name="destination"
              placeholder="e.g. Bali, Indonesia"
              value={formInput}
              onChange={(e) => setFormInput(e.target.value)}
              icon="📍"
              required
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              icon="✉️"
            />
            <InputField
              label="Error State"
              name="error_demo"
              placeholder="Input dengan error"
              error="Field ini wajib diisi"
            />
          </div>
          <div className="space-y-4">
            <SelectField
              label="Loyalty Level"
              name="loyalty"
              value={formSelect}
              onChange={(e) => setFormSelect(e.target.value)}
              placeholder="-- Pilih Level --"
              options={[
                { value: "bronze", label: "🥉 Bronze" },
                { value: "silver", label: "🥈 Silver" },
                { value: "gold",   label: "🥇 Gold"   },
              ]}
              required
            />
            <TextArea
              label="Package Description"
              name="description"
              placeholder="Describe the tour package..."
              value={formArea}
              onChange={(e) => setFormArea(e.target.value)}
              rows={4}
            />
          </div>
        </div>
      </Section>

      {/* ===== 5. FEEDBACK COMPONENT ===== */}
      <Section
        title="5. Feedback Component"
        description="Komponen respon kepada pengguna — Alert, Modal, Spinner"
      >
        {/* Alert */}
        <div className="space-y-3 mb-5">
          <p className="text-[12px] text-gray-500 font-semibold mb-2">Alert — berbagai type</p>
          <Alert type="success" title="Booking Confirmed!"  message="Your booking to Bali has been confirmed." onClose={() => {}} />
          <Alert type="warning" title="Payment Pending"     message="Please complete your payment within 24 hours." onClose={() => {}} />
          <Alert type="danger"  title="Booking Cancelled"   message="Your booking has been cancelled due to non-payment." onClose={() => {}} />
          <Alert type="info"    title="New Tour Available"  message="Check out the new Raja Ampat Diving package!" onClose={() => {}} />
        </div>

        {/* Modal */}
        <div className="mb-5">
          <p className="text-[12px] text-gray-500 font-semibold mb-2">Modal</p>
          <Button type="primary" onClick={() => setModalOpen(true)} icon="🗺️">
            Open Modal
          </Button>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Confirm Booking"
            footer={
              <>
                <Button type="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button type="success"   onClick={() => setModalOpen(false)}>Confirm ✅</Button>
              </>
            }
          >
            <div className="space-y-3">
              <Alert type="info" message="Review your booking details before confirming." />
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Package</span>
                  <span className="font-semibold text-gray-800">Bali Explorer 5D4N</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Customer</span>
                  <span className="font-semibold text-gray-800">Andi Pratama</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Price</span>
                  <span className="font-extrabold text-biru">Rp 4.200.000</span>
                </div>
              </div>
            </div>
          </Modal>
        </div>

        {/* Spinner */}
        <div>
          <p className="text-[12px] text-gray-500 font-semibold mb-3">Spinner — berbagai ukuran & warna</p>
          <div className="flex items-center gap-8 flex-wrap">
            <Spinner size="sm" color="biru"  label="Small" />
            <Spinner size="md" color="hijau" label="Medium" />
            <Spinner size="lg" color="merah" label="Large" />
            <Spinner size="xl" color="biru"  label="Loading..." />
          </div>
        </div>
      </Section>
    </div>
  );
}