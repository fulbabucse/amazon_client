import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const PopularProductCard = ({ product }) => {
  const { _id, title, price, images, category } = product;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSLide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-gray-100 rounded-md relative group h-full">
      <button className="absolute z-10 text-[#C9563C] font-normal top-2 right-2 hidden group-hover:block duration-300 ease-in-out">
        <MdFavoriteBorder size={25} />
      </button>
      {price > 300 && (
        <div className="absolute z-10 bg-[#F8B567] text-primary top-3 left-3 rounded-full p-1 text-xs">
          {price > 300 && <p>-20%</p>}
        </div>
      )}

      <div className="w-[250px] lg:w-[240px] m-auto relative group">
        <Link to={`/product/${category}/${_id}`}>
          <div className="h-[300px] rounded-t-md bg-center bg-cover duration-500">
            <img
              src={images[currentIndex]}
              alt={title}
              className="w-full h-full transition-transform ease-out duration-500 rounded-t-md"
            />
          </div>
        </Link>

        <div className="absolute bottom-3 right-0 left-0 hidden group-hover:block">
          <div className="flex items-center justify-center gap-1">
            {images?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSLide(index)}
                className={`transition-all w-2 h-2 bg-[#C9563C] rounded-full ${
                  currentIndex === index ? "p-1" : "bg-opacity-50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
