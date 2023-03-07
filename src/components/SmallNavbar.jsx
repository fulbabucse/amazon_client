import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../assets/icons/amazon_logo_white.png";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { FaTimes, FaBars } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useGetOrdersByEmailQuery } from "../features/products/cartApi";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../assets/icons/cart.png";
import { useGetCategoriesQuery } from "../features/categories/categoryApi";
import { getSearchValue } from "../features/products/searchSlice";

const SmallNavbar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [subCategory, setSubCategory] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { email, name },
  } = useSelector((state) => state.auth);
  const { data: orders } = useGetOrdersByEmailQuery(email);
  const { data } = useGetCategoriesQuery();

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
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
    <>
      <div className="relative">
        <div className="bg-primary p-4 flex justify-between items-center w-full">
          <div className="flex items-center gap-3 text-white relative">
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="flex items-center"
            >
              <div className="flex items-center gap-1">
                <FaBars className="text-white text-lg duration-500 transition-all ease-in-out" />
              </div>
            </button>
            <div className="w-20 mt-2">
              <Link to="/">
                <img src={brandLogo} alt="Amazon" className="w-full" />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {email ? (
              <Link to="/account" className="flex items-center text-white">
                <span className="text-sm font-openSans">
                  {name?.split(" ")[0]}
                </span>
                <AiOutlineUser size={30} />
              </Link>
            ) : (
              <Link to="/sign-in" className="flex items-center text-white">
                <span className="text-sm font-openSans">Sign In</span>
                <AiOutlineUser size={30} />
              </Link>
            )}
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
                <h3 className="text-[15px] font-semibold absolute -right-7 bottom-0 text-white">
                  Cart
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-primary px-4 pb-4">
          <form onSubmit={handleSubmit} className="flex items-center">
            <div className="bg-gray-200 rounded-l-md">
              <select
                name="category"
                className="form-select appearance-none
      block
      w-10
      px-3
      py-[7.5px]
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
              className="w-full py-2 px-4 text-sm text-primary focus:outline-none"
              placeholder="Search here..."
            />
            <button className="bg-[#febd69] hover:bg-opacity-95 text-xl text-primary py-2 px-4 rounded-r-md">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <div className="bg-[#3A495D] overflow-x-auto w-full flex items-center gap-[10px] text-white px-4 py-1.5 ">
          <div>
            <Link
              to="/our-shop"
              className="block transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Our Shop
            </Link>
          </div>
          <div className="inline-block">
            <Link
              to="/best-sellers"
              className="block transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Best sellers
            </Link>
          </div>
          <div>
            <Link
              to="/today-deals"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Today's Deals
            </Link>
          </div>
          <div>
            <Link
              to="/books"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Books
            </Link>
          </div>
          <div>
            <Link
              to="/fashions"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Fashions
            </Link>
          </div>

          {/* <li className="list-none">
            <Link
              to="/customer-service"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Customer service
            </Link>
          </li>
          <div>
            <Link
              to="/best-sellers"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Best sellers
            </Link>
          </div>
          <div>
            <Link
              to="/new-releases"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              New Releases
            </Link>
          </div>
          <div>
            <Link
              to="/today-deals"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Today's Teals
            </Link>
          </div>
          <div>
            <Link
              to="/books"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Books
            </Link>
          </div>
          <div>
            <Link
              to="/fashion"
              className="transition-colors duration-300 transform hover:text-[#C9563C] capitalize font-radio-canada text-[13px]"
            >
              Fashion
            </Link>
          </div> */}
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
                  {email ? (
                    <Link
                      to="/account"
                      onClick={() => setOpenCategory(!openCategory)}
                      className="flex items-center text-white"
                    >
                      <span className="text-sm font-openSans">
                        Your Account
                      </span>
                      <AiOutlineUser size={30} />
                    </Link>
                  ) : (
                    <Link
                      to="/sign-in"
                      onClick={() => setOpenCategory(!openCategory)}
                      className="flex items-center text-white"
                    >
                      <span className="text-sm font-openSans">Sign In</span>
                      <AiOutlineUser size={30} />
                    </Link>
                  )}
                </div>
                <div className="text-white absolute left-4 bottom-4 text-start leading-[8px]">
                  <h3 className="font-medium">Browse</h3>
                  <h1 className="text-xl font-semibold font-openSans">
                    Amazon
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
                              onClick={() => setOpenCategory(!openCategory)}
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
    </>
  );
};

export default SmallNavbar;
