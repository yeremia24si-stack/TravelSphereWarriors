import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

// 🔍 IMPROVISASI 1: Search Modal — klik input search → muncul modal popup
export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const suggestions = ["Dashboard Overview", "Orders List", "Customer Data", "Revenue Report", "Settings"];
    const filtered = suggestions.filter(s =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div id="header-container" className="flex justify-between items-center p-4 bg-white shadow-sm rounded-xl mb-4">
                {/* Search Bar */}
                <div id="search-bar" className="relative w-full max-w-lg">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search Here..."
                        readOnly
                        onClick={() => setShowModal(true)}
                        className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none cursor-pointer"
                    />
                    <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                </div>

                {/* Icon & Profile Section */}
                <div id="icons-container" className="flex items-center space-x-4">
                    <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                        <FaBell />
                        <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">
                            50
                        </span>
                    </div>
                    <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
                        <FcAreaChart />
                    </div>
                    <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
                        <SlSettings />
                    </div>

                    {/* Profile Section */}
                    <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                        <span id="profile-text">
                            Hello, <b>Afzan Baitul Akmal</b>
                        </span>
                        <img
                            id="profile-avatar"
                            src="https://avatar.iran.liara.run/public/28"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* 🔍 IMPROVISASI 1: Search Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-24"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-poppins font-bold text-lg text-gray-700">Search</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-700 transition"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Input dalam modal */}
                        <div className="relative mb-4">
                            <input
                                type="text"
                                autoFocus
                                placeholder="Cari menu, halaman, laporan..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg p-3 pr-10 outline-none focus:border-hijau transition"
                            />
                            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* Hasil pencarian */}
                        <ul className="space-y-2">
                            {filtered.length > 0 ? (
                                filtered.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 hover:text-hijau cursor-pointer transition text-gray-600"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <FaSearch className="text-sm text-gray-300" />
                                        {item}
                                    </li>
                                ))
                            ) : (
                                <li className="text-center text-gray-400 py-4">Tidak ada hasil ditemukan</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}