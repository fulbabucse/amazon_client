import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import HistoryCard from "./shared/HistoryCard";

const History = () => {
  const data = JSON.parse(localStorage.getItem("browsing_history"));
  const prevSlide = () => {
    document.getElementById("history").scrollLeft -= 800;
  };
  const nextSlide = () => {
    document.getElementById("history").scrollLeft += 800;
  };

  return (
    <div>
      <div className="bg-white relative group pb-5 hover:pb-[3px]">
        <div className="hidden group-hover:block">
          <div
            className={`absolute left-0 right-0 top-[35%] flex justify-between items-center z-10 `}
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
          id="history"
          className="flex gap-4 group-hover:overflow-x-auto mt-2 scroll-smooth overflow-hidden transition-transform duration-500 ease-in-out"
        >
          {data
            ?.sort((a, b) => a.createAt - b.createAt)
            ?.map((product) => (
              <HistoryCard product={product} key={product?._id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default History;
