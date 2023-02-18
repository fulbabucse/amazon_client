import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  useGetProductReviewsQuery,
  usePostReviewMutation,
} from "../../features/products/reviewApi";
import convertBase64 from "../../utils/convertBase64";
import SingleReviewCard from "../shared/SingleReviewCard";

const Reviews = ({ product }) => {
  const {
    user: { email, photoURL, name, join_date },
  } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { rating, price, _id } = product || {};
  const [images, setImages] = useState([]);
  const [reviewData, setReviewData] = useState({});
  const [postReviews] = usePostReviewMutation();
  const { data: reviews } = useGetProductReviewsQuery(_id);

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

  const handleReviewSubmit = (data) => {
    if (data.rating > 5) {
      toast.error("Rating out of 5");
      return;
    }

    Array.from(data.images).forEach(async (image) => {
      const base64 = await convertBase64(image);
      setImages((prev) => [...prev, base64]);
    });

    const review = {
      name,
      email,
      image: photoURL,
      rating: data.rating,
      join_date,
      reviewed_date: new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      message: data.message,
      productId: _id,
    };
    setReviewData(review);
  };

  const review = { ...reviewData, images };
  useEffect(() => {
    if (images.length > 0) {
      postReviews(review);
      reset();
      setImages([]);
    }
  }, [postReviews, images]);

  return (
    <div className="flex flex-wrap lg:gap-10">
      <div className="w-full lg:w-[350px]">
        <div className="flex items-center mb-3">
          <div className="flex text-[#C9563C] cursor-pointer text-[16px]">
            {ratingStar}
          </div>
          <p className="ml-2 text-[16px] font-medium text-gray-800 dark:text-white">
            {rating} out of 5
          </p>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {price + 10} global ratings
        </p>
        {ratingData?.map((item, index) => (
          <div key={index} className="flex items-center mt-2 group">
            <span className="group-hover:text-[#C9563C] group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#C9563C] cursor-pointer text-sm font-medium text-[#007185]">
              {item.rating} star
            </span>
            <div className="group-hover:hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer w-2/4 h-5 mx-4 bg-[#F0F2F2] rounded dark:bg-gray-700 border border-[#FFA41C] border-opacity-50 group-hover:bg-[#FFF6E0] group-hover:border-opacity-90">
              <div
                className="h-[19px] bg-[#FFA41C] rounded-l-sm"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
            <span className="group-hover:text-[#C9563C] group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[#C9563C] cursor-pointer text-sm font-medium text-[#007185]">
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
          <form
            onSubmit={handleSubmit(handleReviewSubmit)}
            className="mt-4 space-y-3"
          >
            <div>
              <Input
                {...register("rating", {
                  required: "Rating is required. and up to 5",
                })}
                label="Rating"
                type="number"
                max="5"
                step="0.01"
              />
              {errors.rating && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.rating?.message}
                </p>
              )}
            </div>
            <div>
              <Input
                {...register("images", {
                  required: "Images is required.",
                })}
                label="Images"
                type="file"
                multiple
              />
              {errors.images && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.images?.message}
                </p>
              )}
            </div>
            <div>
              <Textarea
                {...register("message", {
                  required: "Message is required",
                })}
                label="Message"
              />
              {errors.message && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.message?.message}
                </p>
              )}
            </div>
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
      <div className="w-full lg:flex-1 mt-4 lg:mt-0">
        <h2 className="text-gray-800 font-openSans font-bold text-lg">
          Top Reviews
        </h2>
        <div className="flex flex-col gap-4">
          {reviews?.map((review) => (
            <SingleReviewCard key={review?._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
