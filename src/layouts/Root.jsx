import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <div className="px-4 lg:px-0">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
