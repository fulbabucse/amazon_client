import React, { Fragment, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { FaTimes, FaBars } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const SmallNavbar = () => {
  const [openCategory, setOpenCategory] = useState(false);

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="relative">
        <div className="bg-primary p-4 flex justify-between items-center w-full">
          <div className="flex items-center gap-3 text-white">
            <button onClick={() => setOpenCategory(!openCategory)}>
              <FaBars size={20} />
            </button>
            <Link to="/" className="text-[15px]">
              Crafty Commerce
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              onClick={() => setOpenCategory(!openCategory)}
              to="/sign-in"
              className="flex items-center text-white"
            >
              <span className="text-sm font-openSans">Sign In</span>
              <AiOutlineUser size={30} />
            </Link>
            <Link to="/cart">
              <BsCart2 className="text-white" size={30} />
            </Link>
          </div>
        </div>
        <div className="bg-primary px-4 pb-4">
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
        <div className="bg-[#3A495D] flex items-center gap-4 text-white border-l border-l-gray-400 px-4 py-3">
          <Link
            to="/"
            className="transition-colors duration-300 transform hover:text-yellow-500 capitalize font-openSans text-[16px]"
          >
            Home
          </Link>

          <Link
            to="/our-shop"
            className="transition-colors duration-300 transform hover:text-yellow-500 capitalize font-openSans text-[16px]"
          >
            Our Shop
          </Link>

          <Link
            to="/blogs"
            className="transition-colors duration-300 transform hover:text-yellow-500 capitalize font-openSans text-[16px]"
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            className="transition-colors duration-300 transform hover:text-yellow-500 capitalize font-openSans text-[16px]"
          >
            Contact
          </Link>
        </div>

        <div
          className={`${
            openCategory
              ? "translate-x-0 opacity-100 z-40 ease-in"
              : "-translate-x-[9999px] opacity-0 z-40 ease-out"
          } left-0 flex fixed top-0 bottom-0 shadow-xl w-full text-primary transition-opacity duration-1000`}
        >
          <div className="w-[280px]">
            <div className="w-full h-[130px] flex justify-between items-center px-5 bg-primary text-white text-center relative z-40">
              <div className="w-full">
                <div className="absolute top-5 right-5">
                  <Link
                    onClick={() => setOpenCategory(!openCategory)}
                    to="/sign-in"
                    className="flex items-center text-white"
                  >
                    <span className="text-sm font-openSans">Sign In</span>
                    <AiOutlineUser size={25} />
                  </Link>
                </div>
                <div className="text-white absolute left-4 bottom-4 text-start leading-[8px]">
                  <h3 className="font-medium">Browse</h3>
                  <h1 className="text-xl font-semibold font-openSans">
                    Crafty Commerce
                  </h1>
                </div>
              </div>
              <button
                onClick={() => setOpenCategory(!openCategory)}
                className={`${
                  openCategory ? "z-40" : undefined
                } text-white absolute -right-10 top-10`}
              >
                <FaTimes size={25} />
              </button>
            </div>
            <div className="left-0 block fixed top-32 bottom-0 shadow-xl bg-white w-[280px] py-4 px-6 text-primary transition-all duration-700 ease-in-out overflow-hidden flex-row flex-nowrap overflow-y-auto z-40">
              <Fragment>
                <div className="space-y-1">
                  <Accordion open={open === 1}>
                    <AccordionHeader
                      onClick={() => handleOpen(1)}
                      className="text-[15px]"
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
                      className="text-[15px]"
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
                      className="text-[15px]"
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
                      className="text-[15px]"
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
                      className="text-[15px]"
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
                      className="text-[15px]"
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
                      className="text-[15px]"
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
                      className="text-[15px]"
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
                      className="text-[15px]"
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
    </>
  );
};

export default SmallNavbar;
