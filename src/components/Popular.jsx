import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import PopularProductCard from "./shared/PopularProductCard";

const Popular = ({ data, id, title }) => {
  const prevSlide = () => {
    document.getElementById(id).scrollLeft -= 800;
  };
  const nextSlide = () => {
    document.getElementById(id).scrollLeft += 800;
  };
  return (
    <div className="lg:px-4">
      <div className="bg-white pt-3 px-3 relative group pb-5 hover:pb-[3px]">
        <h1 className="text-xl text-center lg:text-start font-medium text-primary">
          {title}
        </h1>

        <div className="hidden group-hover:block">
          <div
            className={`absolute left-3 right-3 top-[${50}%] flex justify-between items-center z-10 `}
          >
            <button
              onClick={prevSlide}
              className="h-20 w-10 rounded-md bg-white text-primary focus:border-2 focus:border-[#007185] flex justify-center items-center font-bold p-1"
            >
              <BsChevronLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="h-20 w-10 rounded-md bg-white text-primary focus:border-2 focus:border-[#007185] flex justify-center items-center font-bold p-1"
            >
              <BsChevronRight size={30} />
            </button>
          </div>
        </div>

        <div
          id={id}
          className="flex gap-4 group-hover:overflow-x-auto mt-2 scroll-smooth overflow-hidden transition-transform duration-500 ease-in-out"
        >
          {data?.slice(0, 15)?.map((product) => (
            <PopularProductCard product={product} key={product?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
