import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, title, price, rating, brand, thumbnail } = product;

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

  return (
    <div className="bg-white rounded-md relative group h-full">
      <button className="absolute text-[#C9563C] font-normal top-2 right-2 hidden group-hover:block duration-300 ease-in-out">
        <MdFavoriteBorder size={25} />
      </button>
      {price > 300 && (
        <div className="absolute bg-[#F8B567] text-primary top-3 left-3 rounded-full p-1 text-xs">
          {price > 300 && <p>-20%</p>}
        </div>
      )}
      <Link to={`/product/${_id}`}>
        <figure className="lg:h-[250px]">
          <img src={thumbnail} alt={title} className="rounded-t-md h-full" />
        </figure>
      </Link>
      <Link to={`/product/${_id}`}>
        <div className="p-3 space-y-3">
          <p className="text-xs text-red-500">{brand}</p>
          <h3 className="text-[16px] font-openSans text-primary font-medium group-hover:text-[#C9563C] leading-6 duration-500">
            {title?.length > 35 ? `${title?.slice(0, 38)}...` : title}
          </h3>
          <button className="flex items-center text-yellow-500 text-sm">
            {ratingStar} <span className="ml-1">({rating})</span>
          </button>
          <h3 className="text-sm flex items-center">
            {price > 300 ? (
              <p className="text-red-500">
                ${((price / 100) * 80).toFixed(2)}{" "}
                <del className="text-primary">${price}.00</del>
              </p>
            ) : (
              `$${price}.00`
            )}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
