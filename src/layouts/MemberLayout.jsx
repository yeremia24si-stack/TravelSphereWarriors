import { Outlet } from "react-router-dom";
import MemberNavbar from "../components/member/MemberNavbar";
import MemberSidebar from "../components/member/MemberSidebar";

export default function MemberLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MemberNavbar />
      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-5">
        <MemberSidebar />
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}