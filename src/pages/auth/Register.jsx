import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate register success (no real API)
    setSuccess(true);
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-1 text-center">Create Your Account ✨</h2>
      <p className="text-center text-sm text-gray-400 mb-6">Join Travel Sphere and start managing your trips</p>

      {error && (
        <div className="bg-red-50 border border-red-200 mb-4 px-4 py-3 text-sm text-red-600 rounded-xl flex items-center gap-2">
          <span>⚠️</span> {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 mb-4 px-4 py-3 text-sm text-hijau rounded-xl flex items-center gap-2">
          <span>✅</span> Registration successful! Redirecting to login...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:border-biru focus:ring-1 focus:ring-biru transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:border-biru focus:ring-1 focus:ring-biru transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:border-biru focus:ring-1 focus:ring-biru transition-colors"
            placeholder="********"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:border-biru focus:ring-1 focus:ring-biru transition-colors"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-biru hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-300"
        >
          🌏 Create Account
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-biru hover:underline font-semibold">
          Sign in
        </Link>
      </p>
    </div>
  );
}