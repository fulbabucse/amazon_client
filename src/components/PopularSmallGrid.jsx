import React from "react";
import { Link } from "react-router-dom";

const PopularSmallGrid = ({ data, cardTitle }) => {
  const products = data?.slice(0, 4);
  return (
    <div className="bg-white p-3 space-y-2">
      <h1 className="text-[18px] font-openSans font-bold">{cardTitle}</h1>
      <div className="grid grid-cols-2 gap-[3px]">
        {products?.map(({ _id, thumbnail, title, category }) => (
          <div key={_id}>
            <Link to={`/product/${category}/${_id}`}>
              <img src={thumbnail} alt={title} />
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link
          to="/"
          className="text-[#007185] hover:text-[#C7511F] hover:underline hover:underline-offset-4 hover:decoration-[#C7511F] text-sm"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default PopularSmallGrid;
