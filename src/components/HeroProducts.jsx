import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import SmallHeroProductCard from "./shared/SmallHeroProductCard";

const HeroProducts = () => {
  const { data } = useGetAllProductsQuery();
  const prevSlide = () => {
    document.getElementById("heroSlider").scrollLeft -= 200;
  };
  const nextSlide = () => {
    document.getElementById("heroSlider").scrollLeft += 200;
  };
  return (
    <div className="overflow-x-auto">
      <div className="bg-transparent relative group">
        <div className="hidden group-hover:block">
          <div
            className={`absolute left-3 right-3 top-[45%] flex justify-between items-center z-10 `}
          >
            <button
              onClick={prevSlide}
              className="h-10 w-7 rounded-md bg-white text-primary focus:border-2 focus:border-[#007185] flex justify-center items-center font-bold p-1"
            >
              <BsChevronLeft size={15} />
            </button>
            <button
              onClick={nextSlide}
              className="h-10 w-7 rounded-md bg-white text-primary focus:border-2 focus:border-[#007185] flex justify-center items-center font-bold p-1"
            >
              <BsChevronRight size={15} />
            </button>
          </div>
        </div>

        <div
          id="heroSlider"
          className="flex gap-2 overflow-x-auto mt-2 scroll-smooth transition-transform duration-500 ease-in-out"
        >
          {data?.slice(0, 15)?.map((product) => (
            <SmallHeroProductCard product={product} key={product?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;
