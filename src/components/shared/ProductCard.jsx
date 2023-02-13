import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { _id, title, price, rating, brand, images } = product;
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSLide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

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

      <div className="max-w-[640px] h-[250px] w-full m-auto relative group">
        <div className="w-full h-full rounded-t-md bg-center bg-cover duration-500">
          <img
            src={images[currentIndex]}
            alt={title}
            className="h-full transition-transform ease-out duration-500 rounded-t-md"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-3">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full shadow bg-white/80 text-primary hover:bg-white hidden group-hover:block cursor-pointer"
          >
            <BsChevronLeft size={15} />
          </button>
          <button
            onClick={nextSlide}
            className="p-1 rounded-full shadow bg-white/80 text-primary hover:bg-white hidden group-hover:block cursor-pointer"
          >
            <BsChevronRight size={15} />
          </button>
        </div>

        <div className="absolute bottom-3 right-0 left-0 hidden group-hover:block">
          <div className="flex items-center justify-center gap-1">
            {images?.map((_, index) => (
              <button
                onClick={() => goToSLide(index)}
                className={`transition-all w-2 h-2 bg-[#C9563C] rounded-full ${
                  currentIndex === index ? "p-1" : "bg-opacity-50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

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
