import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import MemberLayout from "./layouts/MemberLayout";

import Loading from "./components/Loading";


// =====================
// ADMIN PAGES
// =====================
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Bookings = React.lazy(() => import("./pages/Bookings"));
const TourPackages = React.lazy(() => import("./pages/Tourpackages"));
const Payments = React.lazy(() => import("./pages/Payments"));
const Components = React.lazy(() => import("./pages/Components"));


// =====================
// AUTH PAGES
// =====================
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));


// =====================
// MEMBER PAGES
// =====================
const MemberDashboard = React.lazy(
  () => import("./pages/member/MemberDashboard")
);

const ExplorePackages = React.lazy(
  () => import("./pages/member/ExplorePackages")
);

const PackageDetail = React.lazy(
  () => import("./pages/member/PackageDetail")
);

const Checkout = React.lazy(
  () => import("./pages/member/Checkout")
);


// =====================
// ERROR
// =====================
const ErrorPage = React.lazy(
  () => import("./components/ErrorPage")
);


const NotFound = () => (
  <ErrorPage
    code="404"
    description="Page Not Found"
  />
);



function App() {

  return (

    <Suspense fallback={<Loading />}>

      <Routes>


        {/* =====================
            ADMIN
        ====================== */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/bookings" element={<Bookings />} />

          <Route 
            path="/tour-packages" 
            element={<TourPackages />} 
          />

          <Route 
            path="/payments" 
            element={<Payments />} 
          />

          <Route 
            path="/components-ui" 
            element={<Components />} 
          />

        </Route>



        {/* =====================
            MEMBER
        ====================== */}
        <Route element={<MemberLayout />}>

          <Route
            path="/member"
            element={<MemberDashboard />}
          />

          <Route
            path="/member/dashboard"
            element={<MemberDashboard />}
          />

          <Route
            path="/member/packages"
            element={<ExplorePackages />}
          />

          <Route
            path="/member/package/:id"
            element={<PackageDetail />}
          />

          <Route
            path="/member/checkout"
            element={<Checkout />}
          />

        </Route>



        {/* =====================
            AUTH
        ====================== */}
        <Route element={<AuthLayout />}>

          <Route 
            path="/login" 
            element={<Login />} 
          />

          <Route 
            path="/register" 
            element={<Register />} 
          />

          <Route 
            path="/forgot" 
            element={<Forgot />} 
          />

        </Route>



        {/* =====================
            NOT FOUND
        ====================== */}
        <Route 
          path="*" 
          element={<NotFound />} 
        />


      </Routes>

    </Suspense>

  );
}


export default App;