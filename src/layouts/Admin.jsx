import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../admin/Navbars/Sidebar";
import TopNavbar from "../admin/Navbars/TopNavbar";

const Admin = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[280px] h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 mt-3">
        <div>
          <TopNavbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
