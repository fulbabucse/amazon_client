import { Breadcrumbs, Button, Input } from "@material-tailwind/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const TopNavbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between items-center">
      <div>
        <Breadcrumbs className="pl-0 pb-0">
          <Link to="/admin" className="opacity-60">
            Home
          </Link>
          <p className="capitalize">{pathname.split("/").slice(-1)}</p>
        </Breadcrumbs>
        <p className="capitalize text-xl text-primary font-semibold">
          {pathname.split("/").slice(-1)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-54">
          <Input label="Type here" />
        </div>
        <div>
          <Button
            variant="text"
            className="flex items-center gap-1 text-gray-700 px-3"
          >
            <FaUserCircle size={20} />
            <p className="uppercase text-sm">Sign In</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
