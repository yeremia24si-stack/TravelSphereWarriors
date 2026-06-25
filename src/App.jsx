import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import MemberLayout from "./layouts/MemberLayout";
import Loading from "./components/Loading";

// ---- Guest (public) ----
const Home                = React.lazy(() => import("./pages/guest/Home"));
const About               = React.lazy(() => import("./pages/guest/About"));
const PackagesPublic      = React.lazy(() => import("./pages/guest/PackagesPublic"));
const PackageDetailPublic = React.lazy(() => import("./pages/guest/PackageDetailPublic"));
const Contact             = React.lazy(() => import("./pages/guest/Contact"));

// ---- Admin (CRM) ----
const Dashboard    = React.lazy(() => import("./pages/Dashboard"));
const Customers    = React.lazy(() => import("./pages/Customers"));
const Bookings     = React.lazy(() => import("./pages/Bookings"));
const TourPackages = React.lazy(() => import("./pages/TourPackages"));
const Payments     = React.lazy(() => import("./pages/Payments"));
const Components   = React.lazy(() => import("./pages/Components"));

// ---- Member ----
const MemberDashboard = React.lazy(() => import("./pages/member/MemberDashboard"));
const ExplorePackages = React.lazy(() => import("./pages/member/ExplorePackages"));
const PackageDetail   = React.lazy(() => import("./pages/member/PackageDetail"));
const Checkout        = React.lazy(() => import("./pages/member/Checkout"));

// ---- Auth ----
const Login    = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot   = React.lazy(() => import("./pages/auth/Forgot"));

const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const NotFound  = () => <ErrorPage code="404" description="Page Not Found" />;

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* ===== GUEST (public landing) — root "/" ===== */}
        <Route element={<GuestLayout />}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/packages"       element={<PackagesPublic />} />
          <Route path="/packages/:id"   element={<PackageDetailPublic />} />
          <Route path="/contact"        element={<Contact />} />
        </Route>

        {/* ===== ADMIN (CRM) — dipindah ke /admin/* ===== */}
        <Route path="/admin" element={<MainLayout />}>
          <Route index                  element={<Dashboard />} />
          <Route path="customers"       element={<Customers />} />
          <Route path="bookings"        element={<Bookings />} />
          <Route path="tour-packages"   element={<TourPackages />} />
          <Route path="payments"        element={<Payments />} />
          <Route path="components-ui"   element={<Components />} />
        </Route>

        {/* ===== MEMBER — /member/* ===== */}
        <Route path="/member" element={<MemberLayout />}>
          <Route index                  element={<MemberDashboard />} />
          <Route path="explore"         element={<ExplorePackages />} />
          <Route path="package/:id"     element={<PackageDetail />} />
          <Route path="checkout/:id"    element={<Checkout />} />
        </Route>

        {/* ===== AUTH ===== */}
        <Route element={<AuthLayout />}>
          <Route path="/login"    element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot"   element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;