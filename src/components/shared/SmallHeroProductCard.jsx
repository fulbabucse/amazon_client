import React from "react";
import { Link } from "react-router-dom";

const SmallHeroProductCard = ({ product }) => {
  const { _id, title, category, thumbnail } = product;

  return (
    <div className="bg-gray-100 rounded-md relative group h-full">
      <div className="w-[120px] m-auto relative group">
        <Link to={`/product/${category}/${_id}`}>
          <div className="h-[150px] rounded-t-md bg-center bg-cover duration-500">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full transition-transform ease-out duration-500 rounded-t-md"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SmallHeroProductCard;
