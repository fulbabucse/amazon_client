import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useGetProductsQuery } from "../features/products/productsApi";
import PopularProductCard from "../components/shared/PopularProductCard";

const PopularPC = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const prevSlide = () => {
    document.getElementById("products").scrollLeft -= 800;
  };
  const nextSlide = () => {
    document.getElementById("products").scrollLeft += 800;
  };

  return (
    <div className="lg:px-16">
      <div className="bg-white p-3 rounded-md relative group">
        <h1 className="text-xl text-center lg:text-start font-medium text-primary">
          Popular products in internationally
        </h1>

        <div className="hidden group-hover:block">
          <div
            className={`absolute left-5 right-5 top-[${50}%] flex justify-between items-center z-10 `}
          >
            <button
              onClick={prevSlide}
              className="h-16 w-10 rounded-md bg-white text-primary active:border-2 active:border-primary flex justify-center items-center font-semibold p-1"
            >
              <BsChevronLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="h-16 w-10 rounded-md bg-white text-primary active:border-2 active:border-primary flex justify-center items-center font-semibold p-1"
            >
              <BsChevronRight size={30} />
            </button>
          </div>
        </div>

        <div
          id="products"
          className="flex gap-4 overflow-x-auto mt-2 scroll-smooth"
        >
          {data?.products?.slice(0, 15)?.map((product) => (
            <PopularProductCard product={product} key={product?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPC;
