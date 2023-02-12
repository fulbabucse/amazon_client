import React, { Fragment, useEffect, useState } from "react";
import {
  MdOutlineLanguage,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState([]);

  const [open, setOpen] = useState(1);
  const dispatch = useDispatch();

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

  useEffect(() => {
    fetch("cate.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="lg:hidden">
        <SmallNavbar />
      </div>
      <div className="hidden lg:block">
        <div className="bg-secondary w-full text-white hidden lg:block">
          <div className="py-2 flex justify-between px-16 items-center border-b border-b-gray-500">
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
                <select className="text-white bg-transparent text-sm focus-visible:outline-none text-center rounded-none">
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
                <select className="text-white bg-transparent text-sm focus-visible:outline-none text-center rounded-none">
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
          <div className="flex items-center justify-between px-16 py-5">
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
                          className="block px-4 py-2 text-sm bg-yellow-600 text-white transition-colors duration-200 ease-in-out rounded-md text-center"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          {name}
                        </button>
                      ) : (
                        <Link
                          to="/sign-in"
                          className=" block px-4 py-2 text-sm bg-yellow-600 text-white transition-colors duration-200 ease-in-out rounded-md text-center"
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
                            className=" block px-4 py-2 text-sm bg-yellow-600 text-white transition-colors duration-200 ease-in-out rounded-md text-center"
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
                          className="text-gray-700 hover:text-yellow-600 text-start w-full px-4 py-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-yellow-500"
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
                              className="text-gray-700 hover:text-yellow-600 text-start w-full px-4 py-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-yellow-500"
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
                            className="text-gray-700 hover:text-yellow-600 text-start w-full px-4 py-1 text-sm hover:underline hover:underline-offset-4 hover:decoration-yellow-500"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            Orders
                          </Link>
                          <Link
                            to="/compare-product"
                            className="text-gray-700 hover:text-yellow-600 text-start w-full px-4 py-1 text-sm hover:underline hover:underline-offset-4 hover:decoration-yellow-500"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            Compare Product
                          </Link>
                          <Link
                            to="/wishlist-product"
                            className="text-gray-700 hover:text-yellow-600 text-start w-full px-4 py-1 text-sm hover:underline hover:underline-offset-4 hover:decoration-yellow-500"
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
                {openCategory ? (
                  <>
                    <MdOutlineKeyboardArrowUp className="text-white text-2xl transition-transform duration-300 ease-in-out" />
                  </>
                ) : (
                  <>
                    <MdOutlineKeyboardArrowDown className="text-white text-2xl transition-transform duration-300 ease-in-out" />
                  </>
                )}
              </button>

              {/* Drop */}
              {openCategory && (
                <>
                  <div
                    className={`absolute z-10 mt-5 w-full text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ease-in-out`}
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div
                      className="lg:left-0 lg:block lg:fixed lg:top-[168px] lg:bottom-0 lg:overflow-y-auto lg:flex-row lg:flex-nowrap lg:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative lg:w-80 z-10 py-4 px-6 text-primary"
                      role="none"
                    >
                      <Fragment>
                        {categories?.map(
                          ({ category_name, sub_category }, index) => (
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
                                <div className="flex flex-col">
                                  {sub_category?.map(
                                    ({ name, link }, index) => (
                                      <Link
                                        key={index}
                                        to={link}
                                        className="transition-colors font-medium duration-300 transform hover:text-gray-900 dark:hover:text-gray-200 text-start capitalize"
                                      >
                                        {name}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </AccordionBody>
                            </Accordion>
                          )
                        )}
                        {/* <Accordion open={open === 2} animate={customAnimation}>
                          <AccordionHeader
                            className="text-sm"
                            onClick={() => handleOpen(2)}
                          >
                            Women's Fashion
                          </AccordionHeader>
                          <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3} animate={customAnimation}>
                          <AccordionHeader
                            className="text-sm"
                            onClick={() => handleOpen(3)}
                          >
                            Kid's Fashion
                          </AccordionHeader>
                          <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 4} animate={customAnimation}>
                          <AccordionHeader
                            className="text-sm"
                            onClick={() => handleOpen(4)}
                          >
                            Girl's Fashion
                          </AccordionHeader>
                          <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 5} animate={customAnimation}>
                          <AccordionHeader
                            className="text-sm"
                            onClick={() => handleOpen(5)}
                          >
                            Boy's Fashion
                          </AccordionHeader>
                          <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 6} animate={customAnimation}>
                          <AccordionHeader
                            className="text-sm"
                            onClick={() => handleOpen(6)}
                          >
                            Home and Kitchen
                          </AccordionHeader>
                          <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 7} animate={customAnimation}>
                          <AccordionHeader
                            className="text-sm"
                            onClick={() => handleOpen(7)}
                          >
                            Movies and Television
                          </AccordionHeader>
                          <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 8} animate={customAnimation}>
                          <AccordionHeader
                            className="text-sm"
                            onClick={() => handleOpen(8)}
                          >
                            Electronics
                          </AccordionHeader>
                          <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                          </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 9} animate={customAnimation}>
                          <AccordionHeader
                            className="text-sm"
                            onClick={() => handleOpen(9)}
                          >
                            Computers
                          </AccordionHeader>
                          <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                          </AccordionBody>
                        </Accordion> */}
                      </Fragment>
                    </div>
                  </div>
                </>
              )}
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
