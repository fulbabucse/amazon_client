import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SingleOrderCard from "../components/shared/SingleOrderCard";
import SmallOrderCard from "../components/shared/SmallOrderCard";
import { useGetOrdersByEmailQuery } from "../features/products/cartApi";

const Cart = () => {
  const navigate = useNavigate();
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data } = useGetOrdersByEmailQuery(email);

  const price = data?.reduce((total, current) => {
    return parseFloat(total) + parseFloat(current.price);
  }, 0);

  const quantity = data?.reduce((total, current) => {
    return parseFloat(total) + parseFloat(current.quantity);
  }, 0);

  return (
    <div>
      {data?.length > 0 ? (
        <div className="bg-white lg:bg-transparent">
          <div className="lg:hidden">
            <div className="w-full">
              <div className="bg-white p-4 space-y-2">
                <div className="leading-[22px]">
                  <h1 className="flex justify-between">
                    <span>Shipping fee</span> <span>$10</span>
                  </h1>
                  <h1 className="flex justify-between">
                    <span>Total</span> <span>${(price + 10)?.toFixed(2)}</span>
                  </h1>
                </div>
                <button className="block px-4 py-2.5 w-full text-[16px] bg-[#FFD814] text-primary transition-colors hover:bg-opacity-80 border-2 border-[#FFD814] focus:border-2 focus:border-[#008296] duration-200 ease-in-out rounded-md text-center focus:button-shadow ">
                  Proceed to checkout ({quantity} items)
                </button>
              </div>
            </div>

            <div className="pb-3">
              {data?.map((order) => (
                <SmallOrderCard key={order?._id} order={order} />
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex flex-wrap gap-4 px-4 my-4">
              <div className="flex-1 bg-white p-4">
                <div className="border-b border-b-gray-400 pb-3 flex justify-between items-center">
                  <h1 className="text-xl lg:text-2xl font-semibold text-primary font-radio-canada">
                    Shopping Cart
                  </h1>
                  <p>Price</p>
                </div>
                <div className="mt-3">
                  {data?.map((order) => (
                    <SingleOrderCard key={order?._id} order={order} />
                  ))}

                  <div>
                    <h3 className="text-end text-[20px] text-gray-800 mt-1">
                      Subtotal ({quantity} items): ${price?.toFixed(2)}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-72">
                <div className="bg-white p-4 space-y-2">
                  <div className="leading-[22px]">
                    <h1 className="flex justify-between">
                      <span>Items</span> <span>{quantity}P</span>
                    </h1>
                    <h1 className="flex justify-between">
                      <span>Shipping fee</span> <span>$10</span>
                    </h1>
                    <h1 className="flex justify-between">
                      <span>Total</span>{" "}
                      <span>${(price + 10)?.toFixed(2)}</span>
                    </h1>
                  </div>
                  <button className="block px-4 py-2 w-full text-sm bg-[#FFC940] text-primary transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center">
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center gap-6">
          <h1 className="text-2xl font-semibold text-[#565959]">
            Your Cart is Empty !!
          </h1>
          <div>
            <button
              onClick={() => navigate("/")}
              className="block px-4 py-2 w-full text-sm bg-[#FFC940] text-primary transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center"
            >
              Back to Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
