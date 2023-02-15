import React, { Fragment, useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
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
import { FaUserCircle, FaTimes } from "react-icons/fa";
import { useGetCategoriesQuery } from "../../features/categories/categoryApi";

const Navbar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const { data } = useGetCategoriesQuery();

  const [open, setOpen] = useState(1);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const {
    user: { email, name, photoURL, isAdmin },
  } = useSelector((state) => state.auth);

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.7 },
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        localStorage.removeItem("cc_token");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="lg:hidden">
        <SmallNavbar />
      </div>
      <div className="hidden lg:block">
        <div className="bg-secondary w-full text-white hidden lg:block">
          <div className="py-2 flex justify-between px-10 items-center border-b border-b-gray-500">
            <div>
              <h3 className="text-sm">
                Free Shipping over $100 and Free returns
              </h3>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex justify-between items-center gap-2 text-sm border-r border-r-gray-300 pr-4">
                <p>Hotline (+880)</p>
                <a href="tel:01736534295">1736534295</a>
                <a href="tel:01840095590">1840095590</a>
              </div>
              <div className="flex items-center">
                <MdOutlineLanguage />
                <select
                  defaultValue="EN"
                  className="text-white bg-transparent text-sm focus-visible:outline-none text-center rounded-none"
                >
                  <option
                    selected
                    value="EN"
                    className="text-primary text-center rounded-none"
                  >
                    English
                  </option>
                  <option
                    value="BN"
                    className="text-primary text-center rounded-none"
                  >
                    Bangla
                  </option>
                  <option
                    value="SP"
                    className="text-primary text-center rounded-none"
                  >
                    Spanish
                  </option>
                </select>
              </div>
              <div>
                <select
                  defaultValue="USD"
                  className="text-white bg-transparent text-sm focus-visible:outline-none text-center rounded-none"
                >
                  <option
                    selected
                    value="USD"
                    className="text-primary flex items-center text-center rounded-none"
                  >
                    USD
                  </option>
                  <option
                    value="BDT"
                    className="text-primary text-center rounded-none"
                  >
                    BDT
                  </option>
                  <option
                    value="EURO"
                    className="text-primary text-center rounded-none"
                  >
                    EURO
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-10 py-5">
            <div>
              <Link to="/" className="text-2xl font-semibold">
                Crafty Commerce
              </Link>
            </div>
            <div className="w-[640px]">
              <form className="flex items-center">
                <input
                  type="text"
                  name="search"
                  className="w-full py-2 px-4 text-sm text-primary focus:outline-none rounded-l-md"
                  placeholder="Search here..."
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-xl text-primary py-2 px-4 rounded-r-md">
                  <AiOutlineSearch />
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
                      <h3 className="text-xs text-start">
                        {email ? name?.split(" ")[0] : "Log In"} <br /> My
                        Account
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
                <div className="flex items-center gap-1">
                  <AiOutlineShoppingCart className="text-3xl font-medium" />
                  <h3 className="text-xs">
                    <span className="bg-white text-primary h-5 w-5 rounded-full p-1">
                      10
                    </span>
                    <br /> $500
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-primary w-full text-white py-3 flex items-center gap-6">
          <div className="pl-20">
            <div className="relative">
              <button
                onClick={() => setOpenCategory(!openCategory)}
                className="flex items-center gap-14"
              >
                <div className="flex items-center gap-1 text-sm">
                  <BiCategoryAlt className="text-white text-lg" />
                  <h1 className="uppercase font-radio-canada font-medium">
                    Shop Categories
                  </h1>
                </div>
              </button>

              {/* Drop */}

              <div
                className={`${
                  openCategory
                    ? "translate-x-0 opacity-100 z-40 ease-in"
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
                    {/* <Fragment>
                      <div className="space-y-3">
                        {data?.map(({ category_name, sub_category }, index) => (
                          <Accordion
                            key={index}
                            open={open === index + 1}
                            animate={customAnimation}
                          >
                            <AccordionHeader
                              className="text-sm"
                              onClick={() => handleOpen(index + 1)}
                            >
                              {category_name}
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="flex flex-col space-y-2">
                                {sub_category?.map(({ name, link }, index) => (
                                  <Link
                                    key={index}
                                    to={`/products/${link}`}
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
                    </Fragment> */}

                    <Fragment>
                      <div className="space-y-3">
                        <Accordion open={open === 1}>
                          <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="text-[18px]"
                          >
                            Men's Fashion
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/t-shirts`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                T-Shirt
                              </Link>
                              <Link
                                to={`/products/mens-jackets-blazers-coats`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                Jackets, Blazer & Coats
                              </Link>
                              <Link
                                to={`/products/mens-bags-backpack`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                bags & backpack
                              </Link>
                              <Link
                                to={`/products/wallets`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                wallets
                              </Link>
                              <Link
                                to={`/products/belts`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                belts
                              </Link>
                              <Link
                                to={`/products/mens-shoes`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                Shoes
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2}>
                          <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="text-[18px]"
                          >
                            Women's Fashion
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/women-kurtas-kurtis-suits`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                women kurtas kurtis suits
                              </Link>
                              <Link
                                to={`/products/womens-dresses`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                dress materials
                              </Link>
                              <Link
                                to={`/products/sarees`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                sarees
                              </Link>
                              <Link
                                to={`/products/lehenga-cholis`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                lehenga cholis
                              </Link>
                              <Link
                                to={`/products/womens-jackets-coats`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                jackets & Coats
                              </Link>
                              <Link
                                to={`/products/sleepwear`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                sleepwear
                              </Link>
                              <Link
                                to={`/products/womens-shoes`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                shoes
                              </Link>
                              <Link
                                to={`/products/women-watches`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                watches
                              </Link>
                              <Link
                                to={`/products/womens-bags`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                bags & backpack
                              </Link>
                              <Link
                                to={`/products/tops`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                tops
                              </Link>
                              <Link
                                to={`/products/sunglasses`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                sunglasses
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3}>
                          <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className="text-[18px]"
                          >
                            Kid's Fashion
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/diapering`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                diapering
                              </Link>
                              <Link
                                to={`/products/feeding`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                feeding
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 4}>
                          <AccordionHeader
                            onClick={() => handleOpen(4)}
                            className="text-[18px]"
                          >
                            Cosmetics
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/fragrances`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                fragrances
                              </Link>
                              <Link
                                to={`/products/skincare`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                skincare
                              </Link>
                              <Link
                                to={`/products/sunglasses`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                sunglasses
                              </Link>
                              <Link
                                to={`/products/womens-jewellery`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                jewellery
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 5}>
                          <AccordionHeader
                            onClick={() => handleOpen(5)}
                            className="text-[18px]"
                          >
                            Automotive
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/automotive`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                Automotive
                              </Link>
                              <Link
                                to={`/products/motorcycle`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                motorcycle
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 6}>
                          <AccordionHeader
                            onClick={() => handleOpen(6)}
                            className="text-[18px]"
                          >
                            Home and Kitchen
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/furniture`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                furniture
                              </Link>
                              <Link
                                to={`/products/home-decoration`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                home decoration
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 7}>
                          <AccordionHeader
                            onClick={() => handleOpen(7)}
                            className="text-[18px]"
                          >
                            Movies and Television
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/movies`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                movies
                              </Link>
                              <Link
                                to={`/products/tv-shows`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                tv shows
                              </Link>
                              <Link
                                to={`/products/best-sellers`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                best sellers
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 8}>
                          <AccordionHeader
                            onClick={() => handleOpen(8)}
                            className="text-[18px]"
                          >
                            Electronics
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/smartphones`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                Smartphones
                              </Link>
                              <Link
                                to={`/products/lighting`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                lighting
                              </Link>
                              <Link
                                to={`/products/home-audio`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                home audio
                              </Link>
                              <Link
                                to={`/products/camera-photo`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                camera photo
                              </Link>
                              <Link
                                to={`/products/security-and-surveillance`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                security and surveillance
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 9}>
                          <AccordionHeader
                            onClick={() => handleOpen(9)}
                            className="text-[18px]"
                          >
                            Computers
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={`/products/computer accessories`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300
                                hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                computer accessories
                              </Link>
                              <Link
                                to={`/products/laptops`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                laptops
                              </Link>
                              <Link
                                to={`/products/laptop-accessories`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                laptop accessories
                              </Link>
                              <Link
                                to={`/products/monitors`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                monitors
                              </Link>
                              <Link
                                to={`/products/printers`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                printers
                              </Link>
                              <Link
                                to={`/products/scanners`}
                                onClick={() => setOpenCategory(!openCategory)}
                                className="text-primary font-medium transition-colors duration-300  hover:underline hover:text-[#C9563C] text-sm text-start capitalize"
                              >
                                scanners
                              </Link>
                            </div>
                          </AccordionBody>
                        </Accordion>
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
          <div className="flex items-center gap-8 border-l border-l-gray-400 pl-6">
            <Link
              to="/"
              className="transition-colors duration-300 transform hover:text-yellow-500 uppercase font-radio-canada text-sm"
            >
              Home
            </Link>

            <Link
              to="/our-shop"
              className="transition-colors duration-300 transform hover:text-yellow-500 uppercase font-radio-canada text-sm"
            >
              Our Shop
            </Link>

            <Link
              to="/blogs"
              className="transition-colors duration-300 transform hover:text-yellow-500 uppercase font-radio-canada text-sm"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="transition-colors duration-300 transform hover:text-yellow-500 uppercase font-radio-canada text-sm"
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
