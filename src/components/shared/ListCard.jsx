import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListCard = ({ product }) => {
  const { _id, title, price, rating, brand, category, thumbnail, department } =
    product;
  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar className="text-[16px]" />
        )}
      </span>
    );
  });

  const discountedPrice = (price / 100) * (100 - 5);
  return (
    <Link
      to={`/product/${category}/${_id}`}
      className="flex justify-center items-center gap-2 lg:gap-4 group bg-white rounded-md"
    >
      <div className="w-40 lg:w-64 h-[250px] rounded-l-md">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full lg:h-[250px] rounded-l-md"
        />
      </div>
      <div className="flex-1 lg:py-4 py-2 pr-1">
        <div>
          <h1 className="hidden lg:block text-[18px] lg:text-[22px] font-openSans text-[#007185] font-medium group-hover:text-[#C9563C] leading-[24px] duration-500 ">
            {title}
          </h1>

          <h1 className="lg:hidden text-[18px] lg:text-[22px] font-openSans text-[#007185] font-medium group-hover:text-[#C9563C] leading-[24px] duration-500 ">
            {title?.length > 30 ? `${title?.slice(0, 30)}...` : title}
          </h1>
          <button className="flex items-center text-[#C9563C] text-sm lg:text-xl">
            {ratingStar} <span className="ml-1">({rating})</span>
          </button>
          <span className="text-primary font-medium ml-2 mt-3 relative">
            <span className="text-3xl">$</span>
            <span className="text-3xl">
              {discountedPrice?.toFixed(2)?.split(".")[0]}
            </span>
            <span className="absolute -right-6 -top-5 text-lg">
              {discountedPrice?.toFixed(2)?.split(".")[1]}
            </span>
          </span>
          <p>
            <span className="text-gray-700 text-[15px]">Department:</span>
            <span className="text-[#007600] text-[15px] cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-[#007600] ml-1.5 capitalize">
              {department ? department : "Unknown"}
            </span>
          </p>
          <p>
            <span className="text-gray-700 text-[15px]">Category:</span>
            <Link
              to={`/products/${department}/${category}`}
              className="text-[#007600] text-[15px] cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-[#007600] ml-1.5 capitalize"
            >
              {category?.split("-").join(" ")}
            </Link>
          </p>
          {brand && (
            <p>
              <span className="text-gray-700 text-[15px]">brand:</span>
              <span className="text-[#007600] text-[15px] cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-[#007600] ml-1.5 capitalize">
                {brand}
              </span>
            </p>
          )}
          <small className="text-[#007600] font-bold">In Stock</small>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
