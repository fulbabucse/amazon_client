import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  useRemoveFromCartMutation,
  useUpdateQuantityMutation,
} from "../../features/products/cartApi";

const SmallOrderCard = ({ order }) => {
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removeCart, { isSuccess }] = useRemoveFromCartMutation();
  const {
    _id,
    brand,
    category,
    productId,
    image,
    product_name,
    quantity,
    price,
    department,
  } = order || {};

  const handleQuantity = (qty) => {
    const data = {
      productId: _id,
      qty,
      price: price * qty,
    };
    if (quantity > 0) {
      updateQuantity(data);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("One Item remove successfully !!");
    }
  }, [isSuccess]);

  const handleRemove = () => {
    removeCart(_id);
  };
  return (
    <div key={_id} className="m-3 bg-[#F7F9FA] px-2 py-3 rounded-[5px]">
      <div className="flex gap-2">
        <div className="w-28">
          <img src={image} alt={product_name} className="rounded-[5px]" />
        </div>
        <div className="flex-1 flex-flex-col">
          <Link
            to={`/product/${category}/${productId}`}
            className="text-[#565959] leading-[1.2rem] text-[16px] mb-1"
          >
            {product_name?.length > 50
              ? `${product_name?.slice(0, 50)}...`
              : product_name}
          </Link>
          <br />
          <span className="text-primary font-medium relative">
            <span className="text-xl text-[#565959]">$</span>
            <Link
              to={`/products/${department}/${category}`}
              className="text-xl"
            >
              {price?.toFixed(2)?.split(".")[0]}
            </Link>
            <span className="absolute -right-4 -top-2 text-[12px] text-[#565959]">
              {price?.toFixed(2)?.split(".")[1]}
            </span>
          </span>
          <div className="leading-4">
            <p>
              <span className="text-gray-700 text-[14px]">Category:</span>
              <Link
                to={`/products/${department}/${category}`}
                className="text-[#007600] text-[14px] cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-[#007600] ml-1.5 capitalize"
              >
                {category?.split("-").join(" ")}
              </Link>
            </p>
            {brand && (
              <p>
                <span className="text-gray-700 text-[14px]">brand:</span>
                <span className="text-[#007600] text-[14px] cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-[#007600] ml-1.5 capitalize">
                  {brand}
                </span>
              </p>
            )}
            <small className="text-[#007600] font-bold">In Stock</small>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1 bg-white rounded-md shadow-sm border border-[#5E5F5F] text-[#5E5F5F] border-opacity-30 pl-2 cursor-pointer w-24">
          <label className="text-[12px]" htmlFor="quantity">
            Qty:
          </label>
          <select
            id="quantity"
            onChange={(e) => {
              handleQuantity(e.target.value);
            }}
            className="bg-white rounded-lg text-gray-600 h-10 w-full  hover:border-gray-400 focus:outline-none appearance-none text-center cursor-pointer py-0"
            defaultValue={quantity}
          >
            {[...Array(10)]?.map((_, index) => (
              <option
                key={index}
                className="flex justify-center"
                defaultValue={index + 1}
              >
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <button
            onClick={handleRemove}
            className="bg-white text-[#5E5F5F] px-4 py-2 rounded-md shadow-sm border border-[#5E5F5F] border-opacity-30 text-[14px]"
          >
            Delete
          </button>
        </div>
        <div className="">
          <button className="bg-white text-[#5E5F5F] px-4 py-2 rounded-md shadow-sm border border-[#5E5F5F] border-opacity-30 text-[14px]">
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallOrderCard;
