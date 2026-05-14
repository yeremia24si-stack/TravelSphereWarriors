import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

// ---- Lazy imports (pages dimuat hanya saat dibutuhkan) ----
const Dashboard    = React.lazy(() => import("./pages/Dashboard"));
const Customers    = React.lazy(() => import("./pages/Customers"));
const Bookings     = React.lazy(() => import("./pages/Bookings"));
const TourPackages = React.lazy(() => import("./pages/TourPackages"));
const Payments     = React.lazy(() => import("./pages/Payments"));

// Auth pages
const Login    = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot   = React.lazy(() => import("./pages/auth/Forgot"));

// Error page
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const NotFound  = () => <ErrorPage code="404" description="Page Not Found" />;

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* ===== MainLayout routes (Sidebar + Header) ===== */}
        <Route element={<MainLayout />}>
          <Route path="/"               element={<Dashboard />} />
          <Route path="/customers"      element={<Customers />} />
          <Route path="/bookings"       element={<Bookings />} />
          <Route path="/tour-packages"  element={<TourPackages />} />
          <Route path="/payments"       element={<Payments />} />
        </Route>

        {/* ===== AuthLayout routes (centered card, no sidebar) ===== */}
        <Route element={<AuthLayout />}>
          <Route path="/login"    element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot"   element={<Forgot />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;