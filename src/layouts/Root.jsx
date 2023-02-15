import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
