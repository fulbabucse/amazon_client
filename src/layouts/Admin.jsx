import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../admin/Navbars/Sidebar";
import Stats from "../admin/Navbars/Stats";
import TopNavbar from "../admin/Navbars/TopNavbar";

const Admin = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[280px] h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 m-3">
        <div>
          <TopNavbar />
          <Stats />
        </div>
        <div className="mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
