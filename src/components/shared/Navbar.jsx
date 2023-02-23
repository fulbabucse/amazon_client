import React, { Fragment, useState } from "react";
import cartIcon from "../../assets/icons/cart.png";
import brandLogo from "../../assets/icons/amazon_logo_white.png";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import SmallNavbar from "../SmallNavbar";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
import { useGetCategoriesQuery } from "../../features/categories/categoryApi";
import { useGetOrdersByEmailQuery } from "../../features/products/cartApi";
import { getSearchValue } from "../../features/products/searchSlice";

const Navbar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const {
    user: { email, name, photoURL, isAdmin },
  } = useSelector((state) => state.auth);

  const { data } = useGetCategoriesQuery();
  const { data: orders } = useGetOrdersByEmailQuery(email);

  const [open, setOpen] = useState(1);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        localStorage.removeItem("cc_token");
      })
      .catch((err) => console.log(err));
  };

  const quantity = orders?.reduce((total, current) => {
    return parseFloat(total) + parseFloat(current.quantity);
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const searchValue = form.search.value;

    dispatch(getSearchValue({ category, searchValue }));
    navigate(
      `/search?q_d=${category
        ?.toLowerCase()
        ?.split("'")
        ?.join("_")
        ?.split(" ")
        ?.join("_")}&q_k=${searchValue}`
    );
  };

  return (
    <div>
      <div className="lg:hidden">
        <SmallNavbar />
      </div>
      <div className="hidden lg:block">
        <div className="bg-secondary w-full text-white hidden lg:block">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="w-28">
              <Link to="/">
                <img src={brandLogo} alt="Amazon" className="w-full" />
              </Link>
            </div>
            <div className="w-[640px]">
              <form onSubmit={handleSubmit} className="flex items-center group">
                <div className="bg-gray-200 rounded-l-md">
                  <select
                    name="category"
                    className="form-select appearance-none
      block
      w-32
      px-3
      py-[10px]
      rounded-l-md
      h-full
      text-[14px]
      font-normal
      text-gray-700
      bg-transparent
 bg-clip-padding bg-no-repeat
      transition
      ease-in-out
      m-0 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected>All Department</option>
                    {data?.map((category, index) => (
                      <option key={index} value={category?.category_name}>
                        {category?.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  name="search"
                  className="w-full py-[10.4px] px-4 text-sm text-primary focus:outline-none"
                  placeholder="Search here..."
                />
                <button
                  type="submit"
                  className="bg-[#febd69] text-primary py-2 px-4 rounded-r-md"
                >
                  <AiOutlineSearch size={25} />
                </button>
              </form>
            </div>
            <div className="flex items-center gap-6">
              <Menu
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <button>
                    <div className="flex items-center gap-1">
                      {email && photoURL ? (
                        <div className="w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src={photoURL}
                            alt={name}
                          />
                        </div>
                      ) : (
                        <AiOutlineUserAdd className="text-3xl font-medium" />
                      )}
                      <h3 className="text-sm text-start font-semibold font-openSans">
                        {email
                          ? `Hello, ${name?.split(" ")[0]}`
                          : "Hello, Log In"}
                        <br />
                        <span className="font-bold">Account & Lists</span>
                      </h3>
                    </div>
                  </button>
                </MenuHandler>
                <MenuList className="mt-4">
                  <div className="p-2 w-96">
                    <div className="w-52 mx-auto flex flex-col items-center justify-center">
                      {email && name ? (
                        <button
                          className="block px-4 py-2 text-sm bg-[#FFC940] text-primary transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          {name}
                        </button>
                      ) : (
                        <Link
                          to="/sign-in"
                          className=" block px-4 py-2 text-sm bg-[#FFC940] text-white transition-colors duration-200 ease-in-out rounded-md text-center"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Sign In
                        </Link>
                      )}

                      {isAdmin && email && (
                        <Link to="/admin" className="mt-2">
                          <button
                            className="block px-4 py-2 text-sm bg-indigo-500 text-white transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            Admin
                          </button>
                        </Link>
                      )}

                      {!email && (
                        <div className="flex items-center justify-center gap-1 mt-2 text-sm">
                          <p>New customer?</p>
                          <Link
                            to="/sign-up"
                            className="text-blue-500 hover:underline"
                          >
                            Start here
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 mt-3 border-t border-t-gray-300">
                      <div className="mt-3">
                        <Link
                          to="/"
                          className="text-primary hover:text-[#C9563C] text-start w-full px-4 py-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-[#C9563C]"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Account
                        </Link>
                        {email && (
                          <div>
                            <button
                              onClick={() => handleSignOut()}
                              type="button"
                              className="text-primary hover:text-[#C9563C] text-start w-full px-4 py-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-[#C9563C]"
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-3"
                            >
                              Sign out
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="mt-2 border-l border-l-gray-200">
                        <div className="flex flex-col">
                          <Link
                            to="/orders"
                            className="text-primary hover:text-[#C9563C] text-start w-full px-4 py-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-[#C9563C]"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            Orders
                          </Link>
                          <Link
                            to="/compare-product"
                            className="text-primary hover:text-[#C9563C] text-start w-full px-4 py-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-[#C9563C]"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            Compare Product
                          </Link>
                          <Link
                            to="/wishlist-product"
                            className="text-primary hover:text-[#C9563C] text-start w-full px-4 py-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-[#C9563C]"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            Wishlist Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </MenuList>
              </Menu>

              <Link to="/cart">
                <div className="flex relative mr-8">
                  <div>
                    <img src={cartIcon} alt="" />
                    <span
                      className={`text-[#C9563C] font-roboto text-[15px] absolute font-bold ${
                        quantity > 9 && email
                          ? "left-[11px] -top-[9px]"
                          : "left-[17px] -top-2"
                      }`}
                    >
                      {email ? quantity : 0}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-semibold absolute -right-7 bottom-0">
                    Cart
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-primary w-full text-white py-[8px] flex items-center gap-2">
          <div className="px-4">
            <div className="relative group">
              <button
                onClick={() => setOpenCategory(!openCategory)}
                className="flex items-center gap-14"
              >
                <div className="flex items-center gap-1">
                  <FaBars className="text-white text-lg group-hover:text-[#C9563C] duration-500 transition-all ease-in-out" />
                  <h1 className="font-radio-canada font-medium group-hover:text-[#C9563C] duration-500 transition-all ease-in-out">
                    All
                  </h1>
                </div>
              </button>

              {/* Drop */}

              <div
                className={`${
                  openCategory
                    ? "translate-x-0 opacity-100 z-40 ease-linear"
                    : "-translate-x-[9999px] opacity-0 z-40 ease-out"
                } left-0 flex fixed top-0 bottom-0 shadow-xl w-full text-primary transition-opacity duration-1000`}
              >
                <div className="w-[350px]">
                  <div className="w-full flex justify-between items-center px-5 bg-primary text-white text-center relative">
                    <button
                      onClick={() => {
                        navigate("/sign-in");
                        setOpenCategory(!openCategory);
                      }}
                      className="w-full flex py-2 items-center gap-2 text-[22px] font-openSans font-semibold"
                    >
                      <FaUserCircle size={25} />
                      <span>Hello, Sign In</span>
                    </button>
                    <button
                      onClick={() => setOpenCategory(!openCategory)}
                      className={`${
                        openCategory ? "z-40" : undefined
                      } text-white absolute -right-10`}
                    >
                      <FaTimes size={25} />
                    </button>
                  </div>
                  <div className="left-0 block fixed top-12 bottom-0 shadow-xl bg-white w-[350px] py-4 px-6 text-primary transition-all duration-700 ease-in-out overflow-hidden flex-row flex-nowrap overflow-y-auto">
                    <Fragment>
                      <div className="space-y-3">
                        {data?.map(({ category_name, sub_category }, index) => (
                          <Accordion key={index} open={open === index + 1}>
                            <AccordionHeader
                              className="text-[17px]"
                              onClick={() => handleOpen(index + 1)}
                            >
                              {category_name}
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="flex flex-col space-y-2">
                                {sub_category?.map(({ name, link }, index) => (
                                  <Link
                                    key={index}
                                    to={`/products/${category_name
                                      .split(" ")
                                      .join("-")
                                      .toLowerCase()}/${link}`}
                                    onClick={() =>
                                      setOpenCategory(!openCategory)
                                    }
                                    className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                                  >
                                    {name}
                                  </Link>
                                ))}
                              </div>
                            </AccordionBody>
                          </Accordion>
                        ))}
                      </div>
                    </Fragment>

                    <div>
                      <h1 className="text-xl mt-10 text-primary font-black]">
                        Help & Settings
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-black opacity-75 flex-1 transition-opacity duration-500 ease-in-out"
                  onClick={() => setOpenCategory(!openCategory)}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Home
            </Link>

            <Link
              to="/our-shop"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Our Shop
            </Link>

            <Link
              to="/books"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Books
            </Link>
            <Link
              to="/fashions"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Fashions
            </Link>

            <Link
              to="/blogs"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Blogs
            </Link>

            <Link
              to="/customer-service"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Customer service
            </Link>
            <Link
              to="/best-sellers"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Best sellers
            </Link>
            <Link
              to="/new-releases"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              New Releases
            </Link>
            <Link
              to="/today-deals"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Today's Deals
            </Link>

            <Link
              to="/contact"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[15px]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
