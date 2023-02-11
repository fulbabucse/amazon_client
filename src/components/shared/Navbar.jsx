import React, { useState } from "react";
import {
  MdOutlineLanguage,
  MdOutlineFavoriteBorder,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiGitCompare, BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userDrop, setUserDrop] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <div>
      <div className="bg-secondary w-full text-white">
        <div className="py-2 flex justify-between px-20 items-center border-b border-b-gray-500">
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
              <select class="text-white bg-transparent text-sm focus-visible:outline-none text-center rounded-none">
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
              <select class="text-white bg-transparent text-sm focus-visible:outline-none text-center rounded-none">
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
        <div className="flex items-center gap-16 px-20 py-5">
          <div>
            <Link to="/" className="text-2xl font-semibold">
              Crafty Commerce
            </Link>
          </div>
          <div className="w-[480px]">
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
          <div className="flex items-center justify-end gap-6">
            <Link to="/compare">
              <div className="flex items-center gap-1">
                <BiGitCompare className="text-3xl font-medium" />
                <h3 className="text-xs">
                  Compare <br /> Product
                </h3>
              </div>
            </Link>
            <Link to="/favorite-wishlist">
              <div className="flex items-center gap-1">
                <MdOutlineFavoriteBorder className="text-3xl font-medium" />
                <h3 className="text-xs">
                  Favorite <br /> Wishlist
                </h3>
              </div>
            </Link>
            <div class="relative inline-block text-left">
              <button onClick={() => setUserDrop(!userDrop)}>
                <div className="flex items-center gap-1">
                  <AiOutlineUserAdd className="text-3xl font-medium" />
                  <h3 className="text-xs text-start">
                    Log In <br /> My Account
                  </h3>
                </div>
              </button>

              {/* Drop */}
              {userDrop && (
                <>
                  <div
                    class={`absolute -right-10 z-10 mt-5 w-40 text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ease-in-out`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      <Link
                        onClick={() => setUserDrop(!userDrop)}
                        to="/sign-in"
                        class="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/sign-up"
                        onClick={() => setUserDrop(!userDrop)}
                        class="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                      >
                        Sign Up
                      </Link>
                      <Link
                        to="/"
                        onClick={() => setUserDrop(!userDrop)}
                        class="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-2"
                      >
                        Orders
                      </Link>
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => setUserDrop(!userDrop)}
                          class="text-gray-700 block w-full px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-3"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

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
          <div class="relative">
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
                  class={`absolute z-10 mt-5 w-full text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ease-in-out`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <h1 className="text-primary">Hello</h1>
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
  );
};

export default Navbar;
