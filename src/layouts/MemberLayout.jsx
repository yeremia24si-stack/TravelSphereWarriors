import React from "react";
import { Outlet } from "react-router-dom";

import MemberNavbar from "../components/member/MemberNavbar";
import MemberSidebar from "../components/member/MemberSidebar";

function MemberLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar Member */}
      <MemberSidebar />

      <div className="flex-1 flex flex-col">

        {/* Navbar Member */}
        <MemberNavbar />

        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default MemberLayout;