import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineProject, AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

const Sidebar = () => {
  const nav = [
    {
      id: 1,
      name: "Home",
      link: "/",
      icon: <AiOutlineHome size={25} />,
    },
    {
      id: 2,
      name: "Profile",
      link: "profile",
      icon: <FaUserCircle size={25} />,
    },
    {
      id: 3,
      name: "Products",
      link: "products",
      icon: <AiOutlineProject size={25} />,
    },
    {
      id: 4,
      name: "Users",
      link: "users",
      icon: <MdNotifications size={25} />,
    },
  ];
  return (
    <div className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 text-white">
      <li className="list-none flex justify-center items-center gap-1 px-3 pt-4">
        <BsFillCartCheckFill size={25} />
        <Link to="/admin" className="font-medium text-xl capitalize text-white">
          Amazon
        </Link>
      </li>
      <hr className="my-6" />

      {nav.map(({ icon, name, link }) => (
        <li key={name} className="list-none px-3">
          <NavLink
            to={`${link}`}
            className={({ isActive }) =>
              isActive
                ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-3"
                : "text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-3 hover:bg-gray-700 hover:bg-opacity-20"
            }
          >
            {icon} <span>{name}</span>
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default Sidebar;
