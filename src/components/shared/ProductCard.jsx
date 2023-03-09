import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SmallTimer from "./SmallTimer";

const ProductCard = ({ product, index }) => {
  const { _id, title, price, rating, brand, images, category } = product;
  const [currentIndex, setCurrentIndex] = useState(0);

  const { pathname } = useLocation();

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
      {pathname === "/best-sellers" && (
        <button
          className="text-white absolute z-10 w-12 bg-[#c45500] font-normal duration-300 ease-in-out"
          style={{ clipPath: `polygon(0 0, 100% 0%, 84% 100%, 0% 100%)` }}
        >
          #{index + 1}
        </button>
      )}

      {pathname === "/today-deals" && (
        <button
          className="text-white w-32 py-[2px] pl-1 absolute z-10 bg-[#c45500] font-normal duration-300 ease-in-out"
          style={{ clipPath: `polygon(0 0, 100% 0%, 84% 100%, 0% 100%)` }}
        >
          <SmallTimer />
        </button>
      )}
      {price > 300 && (
        <div className="absolute z-10 bg-[#F8B567] text-primary top-3 right-3 rounded-full p-1 text-xs">
          {price > 300 && <p>-20%</p>}
        </div>
      )}

      <div
        className={`${
          pathname === "/our-shop" ? "h-[250px]" : "h-[300px]"
        }  w-full m-auto relative group`}
      >
        <div className="w-full h-full bg-center bg-cover duration-500">
          <img
            src={images[currentIndex]}
            alt={title}
            className="h-full w-full transition-transform ease-out duration-500"
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

      <Link to={`/product/${category}/${_id}`}>
        <div className="p-3 space-y-3">
          <p className="text-xs text-red-500">{brand}</p>
          <h3 className="text-[16px] font-openSans text-[#007185] font-medium group-hover:text-[#C9563C] leading-6 duration-500 group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#C9563C]">
            {pathname === "/our-shop"
              ? `${title?.length > 35 ? `${title?.slice(0, 38)}...` : title}`
              : title}
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

export default ProductCard;
