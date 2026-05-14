import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  /* navigate, state & handleChange */
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* process form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        // Redirect ke dashboard jika login sukses
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* error & loading status */
  const errorInfo = error ? (
    <div className="bg-red-50 border border-red-200 mb-5 px-4 py-3 text-sm text-red-600 rounded-xl flex items-center gap-2">
      <span className="text-lg">⚠️</span>
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-blue-50 border border-blue-100 mb-5 px-4 py-3 text-sm text-biru rounded-xl flex items-center gap-2">
      <svg className="animate-spin w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      Mohon tunggu, sedang memproses...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-1 text-center">Welcome Back 👋</h2>
      <p className="text-center text-sm text-gray-400 mb-6">Sign in to your Travel Sphere account</p>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:border-biru focus:ring-1 focus:ring-biru transition-colors"
            placeholder="e.g. emilys"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:border-biru focus:ring-1 focus:ring-biru transition-colors"
            placeholder="********"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
            <input type="checkbox" className="accent-biru" /> Remember me
          </label>
          <Link to="/forgot" className="text-biru hover:underline font-medium">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-biru hover:bg-blue-600 disabled:opacity-60 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-300 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Signing in...
            </>
          ) : (
            <>✈️ Sign In</>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="text-biru hover:underline font-semibold">
          Register here
        </Link>
      </p>

      {/* Hint for demo */}
      <div className="mt-4 p-3 bg-blue-50 rounded-xl text-[11px] text-gray-500 text-center">
        Demo: username <b>emilys</b> / password <b>emilyspass</b>
      </div>
    </div>
  );
}