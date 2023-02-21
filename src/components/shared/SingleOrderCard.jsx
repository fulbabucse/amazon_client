import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  useRemoveFromCartMutation,
  useUpdateQuantityMutation,
} from "../../features/products/cartApi";

const SingleOrderCard = ({ order }) => {
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
    <div className="py-4 pl-3 flex border-b border-b-gray-400">
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
          <p>
            <span className="text-gray-700 text-[15px]">Department:</span>
            <span className="text-[#007600] text-[15px] cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-[#007600] ml-1.5 capitalize">
              {department}
            </span>
          </p>
          <p>
            <span className="text-gray-700 text-[15px]">Category:</span>
            <Link
              to={`/products/${department}/${category}`}
              className="text-[#007600] text-[15px] cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-[#007600] ml-1.5 capitalize"
            >
              {category?.split("-").join(" ")}
            </Link>
          </p>
          {brand && (
            <p>
              <span className="text-gray-700 text-[15px]">brand:</span>
              <span className="text-[#007600] text-[15px] cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-[#007600] ml-1.5 capitalize">
                {brand}
              </span>
            </p>
          )}
          <small className="text-[#007600] font-bold">In Stock</small>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center rounded-lg gap-1 bg-[#F0F2F2] pl-2 cursor-pointer">
              <label className="text-[12px]" htmlFor="quantity">
                Qty:
              </label>
              <select
                id="quantity"
                onChange={(e) => {
                  handleQuantity(e.target.value);
                }}
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
              <button
                onClick={handleRemove}
                className="text-[#007600] text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#007600]"
              >
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
        <p className="text-end font-bold">${price?.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SingleOrderCard;
