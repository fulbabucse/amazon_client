import { Button, Input, Textarea } from "@material-tailwind/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Reviews = ({ product }) => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { rating, price } = product || {};

  const navigate = useNavigate();

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  const ratingData = [
    { rating: 5, percent: 75 },
    { rating: 4, percent: 20 },
    { rating: 3, percent: 10 },
    { rating: 2, percent: 5 },
    { rating: 1, percent: 1 },
  ];

  return (
    <div className="flex gap-10">
      <div className="w-full lg:w-[350px]">
        <div class="flex items-center mb-3">
          <div className="flex text-[#C9563C] cursor-pointer text-[16px]">
            {ratingStar}
          </div>
          <p class="ml-2 text-[16px] font-medium text-gray-800 dark:text-white">
            {rating} out of 5
          </p>
        </div>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
          {price + 10} global ratings
        </p>
        {ratingData?.map((item, index) => (
          <div key={index} class="flex items-center mt-2 group">
            <span class="group-hover:text-[#C9563C] group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#C9563C] cursor-pointer text-sm font-medium text-[#007185]">
              {item.rating} star
            </span>
            <div class="group-hover:hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer w-2/4 h-5 mx-4 bg-[#F0F2F2] rounded dark:bg-gray-700 border border-[#FFA41C] border-opacity-50 group-hover:bg-[#FFF6E0] group-hover:border-opacity-90">
              <div
                class="h-5 bg-[#FFA41C]"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
            <span class="group-hover:text-[#C9563C] group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#C9563C] cursor-pointer text-sm font-medium text-[#007185]">
              {item.percent}%
            </span>
          </div>
        ))}

        <div className="mt-8">
          <h2 className="text-gray-800 font-openSans font-bold text-lg">
            Review this product
          </h2>
          <p className="text-[14px]">
            Share your thoughts with other customers
          </p>
        </div>
        {email && (
          <form className="mt-4 space-y-3">
            <Input label="Rating" type="number" max="5" />
            <Textarea label="Message" />
            <Button type="submit" variant="outlined">
              Enter
            </Button>
          </form>
        )}

        {!email && (
          <div className="mt-4">
            <Button
              type="button"
              variant="outlined"
              onClick={() => navigate("/sign-in")}
            >
              Write a customer review
            </Button>
          </div>
        )}
      </div>
      <div className="w-full lg:flex-1">
        <h2 className="text-gray-800 font-openSans font-bold text-lg">
          Top Reviews
        </h2>
      </div>
    </div>
  );
};

export default Reviews;
