import React from "react";
import { Link } from "react-router-dom";

const NewCard = ({ item }) => {
  const { name, image, link } = item;
  return (
    <div className="bg-white p-4 flex flex-col justify-between">
      <h1 className="text-xl font-semibold text-primary leading-6">{name}</h1>
      <Link to={link}>
        <figure className="w-full h-[275px] mt-3">
          <img src={image} alt={name} className="w-full h-full" />
        </figure>
      </Link>
      <div>
        <Link
          to={link}
          className="text-[#007185] hover:text-[#C7511F] hover:underline hover:underline-offset-4 hover:decoration-[#C7511F] text-sm"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default NewCard;
