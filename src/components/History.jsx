import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
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
      <div className="bg-white relative group pb-5 hover:pb-[3px] hidden lg:block">
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

      {data?.length > 4 && (
        <div className="lg:hidden">
          <div className="bg-white p-4">
            <h1 className="text-[18px] font-openSans font-bold">
              Related to items your browsing history
            </h1>
            <div className="grid grid-cols-2 gap-[2px]">
              {data
                ?.slice(0, 4)
                ?.map(({ _id, thumbnail, price, title, category }) => (
                  <div key={_id} className="bg-gray-100 p-1 rounded-[4px]">
                    <div>
                      <img src={thumbnail} alt={title} />
                    </div>
                    <div>
                      <Link
                        to={`/product/${category}/${_id}`}
                        className="text-sm text-gray-900 leading-4"
                      >
                        {title?.length > 50
                          ? `${title?.slice(0, 50)}...`
                          : title}
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
            <div className="w-full mt-2">
              <Link
                to={`/history?ref=nav_timeline_view_history&tm=${Date.now()}`}
              >
                <button className="text-sm rounded-md w-full border border-gray-300 hover:border-[#007185] py-1.5 hover:bg-[#D2FCFE]">
                  Explore more
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
