import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../features/products/productSlice";

const SingleOrderCard = ({ order }) => {
  const [productQty, setProductQty] = useState(0);
  const dispatch = useDispatch();
  const {
    brand,
    category,
    productId,
    image,
    product_name,
    quantity,
    price,
    department,
  } = order || {};

  useEffect(() => {
    dispatch(
      getTotalPrice(productQty > 0 ? price * productQty : price * quantity)
    );
  }, [dispatch, price, productQty, quantity]);

  return (
    <div className="pt-4 pb-8 pl-3 flex border-b border-b-gray-400">
      <div className="flex-1 flex gap-6">
        <div className="w-40 h-[200px]">
          <img src={image} alt={product_name} className="w-full h-full" />
        </div>
        <div className="capitalize">
          <Link
            to={`/product/${category}/${productId}`}
            className="text-xl font-medium text-gray-800"
          >
            {product_name}
          </Link>
          <p>{department}</p>
          <p>{category?.split("-").join(" ")}</p>
          <p>{brand}</p>
          <small className="text-[#007600]">In Stock</small>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center rounded-lg gap-1 bg-[#F0F2F2] pl-2 cursor-pointer">
              <label className="text-[12px]" htmlFor="quantity">
                Qty:
              </label>
              <select
                id="quantity"
                onChange={(e) => setProductQty(e.target.value)}
                className="bg-transparent rounded-lg text-gray-600 h-10 w-10  hover:border-gray-400 focus:outline-none appearance-none text-center cursor-pointer py-0"
                defaultValue={quantity}
              >
                {[...Array(10)]?.map((_, index) => (
                  <option
                    key={index}
                    className="overflow-y-scroll"
                    defaultValue={index + 1}
                  >
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="border-l border-l-gray-400 pl-4">
              <button className="text-[#007600] text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#007600]">
                Delete
              </button>
            </div>
            <div className="border-l border-l-gray-400 pl-4">
              <button className="text-[#007600] text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#007600]">
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-20">
        <p className="text-end font-bold">
          ${(productQty > 0 ? price * productQty : price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default SingleOrderCard;
