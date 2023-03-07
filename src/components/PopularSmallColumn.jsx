import React from "react";
import { Link } from "react-router-dom";

const PopularSmallColumn = ({ data, cardTitle }) => {
  const products = data?.slice(0, 3);
  return (
    <div className="bg-white p-3">
      <h1 className="text-[18px] font-openSans font-bold">{cardTitle}</h1>
      <div className="flex flex-col gap-3 mt-3">
        {products?.map(({ _id, title, thumbnail, price }) => (
          <div key={_id} className="flex gap-3">
            <div className="w-24 h-28">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <Link
                to={`/product/${_id}`}
                className="text-lg leading-5 font-light"
              >
                {title}
              </Link>
              <p className="text-xl">
                ${((price / 100) * (100 - 5)).toFixed(0)}
                <sup className="text-sm">00</sup>
                <del className="text-sm ml-2">{price}</del>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSmallColumn;
