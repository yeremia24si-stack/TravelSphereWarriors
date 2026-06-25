import { Outlet } from "react-router-dom";
import GuestNavbar from "../components/guest/GuestNavbar";
import GuestFooter from "../components/guest/GuestFooter";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GuestNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <GuestFooter />
    </div>
  );
}