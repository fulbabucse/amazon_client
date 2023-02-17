import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const SingleReviewCard = ({ review }) => {
  const [showMore, setShowMore] = useState(false);
  const {
    name,
    user_image,
    user_join_date,
    rating,
    message,
    reviewed_date,
    product_images,
  } = review;

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {parseInt(rating) >= i + 1 ? (
          <FaStar />
        ) : parseInt(rating) >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <article className="border p-3">
      <div className="flex items-center space-x-4">
        <img className="w-10 h-10 rounded-full" src={user_image} alt="" />
        <div className="space-y-1 font-medium dark:text-white">
          <p>
            {name}
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              Joined on {user_join_date}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-1 text-sm">
          <p className="text-red-500 flex items-center">{ratingStar}</p>
          <p>({rating})</p>
        </div>
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
          Thinking to buy another one!
        </h3>
      </div>
      <footer className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed on <span>{reviewed_date}</span>
        </p>
      </footer>

      <div className="flex flex-wrap gap-2 mb-3">
        {product_images?.map((image, index) => (
          <div key={index}>
            <div className="w-20 h-20">
              <img src={image} alt={name} className="w-full h-full" />
            </div>
          </div>
        ))}
      </div>
      <p className="mb-2 text-primary font-medium text-justify font-openSans text-sm duration-500 transition-all ease-in-out">
        {showMore ? message : `${message.slice(0, 100)}`}
      </p>
      <button
        onClick={() => setShowMore(!showMore)}
        className="block text-sm text-[#007185] font-medium hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer"
      >
        {showMore ? " Show less" : " Show more"}
      </button>
    </article>
  );
};

export default SingleReviewCard;
