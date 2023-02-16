import { Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../features/products/productsApi";

const ProductDetails = () => {
  const { id } = useParams();
  const [imageURL, setImageURL] = useState("");

  const { data } = useGetSingleProductQuery(id);

  const {
    _id,
    title,
    thumbnail,
    price,
    rating,
    description,
    brand,
    category,
    images = [],
    discountPercentage,
  } = data || {};

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

  const desc = `The MEROKEETY lace cocktail dress is a classic piece that belongs in every woman’s closet. Whether you wear it to a wedding, a holiday party, or on a hot date. This dress you absolutely need for any cocktail party! Its also perfect for you brides out there and all those upcoming showers The all over lace design is fully lined and features a sleeveless design, a high neckline and knee length hem. The soft and stretchy material makes it comfortable to wear to any event while making you look fabulous! Simple wash the dress on a gentle cycle, tumble dry on low and prepare to wow at your next special occasion. Our classy cocktail dress is perfect for every occasion. Whether for prom, homecoming, or graduation, as a guest at a wedding or bridesmaid attire.`;

  const splitDesc = desc.trim().split(".");

  const discountedPrice = (price / 100) * (100 - 5);

  return (
    <div className="px-4 py-6 bg-white">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-6 gap-0">
        <div className="lg:flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex gap-6">
              <div className="flex flex-col gap-1">
                {images?.map((image, index) => {
                  return (
                    <figure
                      key={index}
                      className="cursor-pointer overflow-hidden hover:bg-primaryColor transition-all duration-300"
                    >
                      <img
                        className="w-20 h-20 object-cover object-center rounded hover:scale-110 transition-all duration-1000 ease-in-out transform-gpu"
                        src={image}
                        alt={title}
                        onClick={() => setImageURL(image)}
                      />
                    </figure>
                  );
                })}
              </div>
              <div className="overflow-hidden transition-all duration-300">
                <InnerImageZoom
                  src={imageURL || images[0]}
                  width={400}
                  height={500}
                  hasSpacer={true}
                  zoomSrc={imageURL || images[0]}
                  zoomType="hover"
                  fadeDuration={150}
                  zoomPreload={true}
                  fullscreenOnMobile={false}
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg lg:text-[24px] text-gray-800 border-b border-b-gray-400 pb-3 capitalize">
                {title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex text-[#C9563C] cursor-pointer">
                  {ratingStar}
                </div>
                <p className="text-[#007185] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer">
                  {rating} ratings
                </p>
              </div>
              <p className="text-[#007185] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer">
                10 Answered Question
              </p>
              <div className="text-gray-700 space-y-1">
                <p>
                  Last Price: <del>${price}</del>
                </p>
                <p className="ml-9">
                  Price
                  <span className="text-[#C9563C] font-medium ml-2">
                    ${Math.floor(discountedPrice)}
                  </span>
                </p>
                <p>
                  You Save:
                  <span className="text-[#C9563C] font-medium ml-2">
                    ${Math.ceil((price / 100) * 5)} ({5}%)
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2 w-32">
                <h3>Size:</h3>
                <Select defaultValue="" size="md" label="Select Size">
                  <Option>Small</Option>
                  <Option>Medium</Option>
                  <Option>Large</Option>
                  <Option>X-Large</Option>
                </Select>
              </div>
              <div className="mt-3">
                <h1 className="text-gray-800 font-openSans font-semibold text-xl">
                  About this product:
                </h1>
                <div className="flex flex-col gap-1">
                  {splitDesc?.map((text, index) => (
                    <div key={index} className="flex gap-3">
                      <div>
                        <BsDot size={20} />
                      </div>
                      <p className="text-[15px] text-justify">
                        {text.length > 0 && text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[300px] mt-4 lg:mt-0">
          <div className="p-5 border border-gray-500 rounded-md text-center">
            <p className="text-sm">
              To buy, select <strong>size</strong>
            </p>
            <button className="w-full px-4 py-1 text-sm bg-[#FFC940] text-primary transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center mt-2">
              Add to Cart
            </button>
            <div className="border-b border-b-gray-300 mt-2"></div>
            <button className="w-full px-4 py-1 text-sm text-primary transition-colors bg-opacity-20 font-medium duration-200 hover:bg-[#007185] hover:bg-opacity-10 ease-in-out rounded-md mt-2 border border-gray-500 text-start">
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
