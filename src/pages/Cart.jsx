import React from "react";
import { useSelector } from "react-redux";
import SingleOrderCard from "../components/shared/SingleOrderCard";
import { useGetOrdersByEmailQuery } from "../features/products/cartApi";

const Cart = () => {
  const { price } = useSelector((state) => state.products);
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data: orders } = useGetOrdersByEmailQuery(email);

  console.log(price);

  return (
    <div className="flex gap-4 px-4 min-h-[100vh] my-4">
      <div className="flex-1 bg-white p-4">
        <div className="border-b border-b-gray-400 pb-3 flex justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-semibold text-primary font-radio-canada">
            Shopping Cart
          </h1>
          <p>Price</p>
        </div>
        <div className="mt-3">
          {orders?.map((order) => (
            <SingleOrderCard key={order?._id} order={order} />
          ))}

          <div>
            <h3 className="text-end text-[20px] text-gray-800 mt-1">
              Subtotal ({orders?.length} items): ${price}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-72">
        <div className="bg-white p-4 space-y-2">
          <h1>
            Subtotal ({orders?.length} items): ${price}
          </h1>
          <button className="block px-4 py-2 w-full text-sm bg-[#FFC940] text-primary transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
