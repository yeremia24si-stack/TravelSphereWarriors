import { useState } from "react";
import { Link } from "react-router-dom";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Simulate sending reset link
    setSent(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">
        Forgot Your Password? 🔑
      </h2>
      <p className="text-sm text-gray-400 mb-6 text-center">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 mb-4 px-4 py-3 text-sm text-red-600 rounded-xl flex items-center gap-2">
          <span>⚠️</span> {error}
        </div>
      )}

      {sent ? (
        <div className="text-center py-6">
          <span className="text-5xl block mb-4">📬</span>
          <p className="text-hijau font-semibold text-base mb-1">Reset link sent!</p>
          <p className="text-gray-400 text-sm mb-6">
            Check your email <b>{email}</b> for the password reset link.
          </p>
          <Link
            to="/login"
            className="inline-block bg-biru hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300 text-sm"
          >
            Back to Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:border-biru focus:ring-1 focus:ring-biru transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-biru hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-300"
          >
            ✉️ Send Reset Link
          </button>
        </form>
      )}

      <p className="text-center text-sm text-gray-500 mt-5">
        Remember your password?{" "}
        <Link to="/login" className="text-biru hover:underline font-semibold">
          Back to Login
        </Link>
      </p>
    </div>
  );
}