import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const HistoryCard = ({ product }) => {
  const { _id, title, price, rating, brand, images, category } = product;

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
    <div className="bg-white rounded-md relative h-full historyCard">
      {price > 300 && (
        <div className="absolute z-10 bg-[#F8B567] text-primary top-3 right-3 rounded-full p-1 text-xs">
          {price > 300 && <p>-20%</p>}
        </div>
      )}

      <div className={`historyCard m-auto relative`}>
        <div className="historyCard h-[220px] bg-center bg-cover duration-500">
          <img
            src={images[0]}
            alt={title}
            className="h-full historyCard transition-transform ease-out duration-500"
          />
        </div>
      </div>

      <Link to={`/product/${category}/${_id}`}>
        <div className="p-3">
          <p className="text-xs text-red-500">{brand}</p>
          <h3 className="text-[16px] font-openSans text-[#007185] font-medium leading-6 duration-500]">
            {title?.length > 50 ? `${title?.slice(0, 50)}...` : title}
          </h3>
          <button className="flex items-center text-[#C9563C] text-sm">
            {ratingStar} <span className="ml-1">({rating})</span>
          </button>
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            {price > 300 ? (
              <p className="text-red-500">
                ${((price / 100) * 80)?.toFixed(2)}{" "}
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

export default HistoryCard;
