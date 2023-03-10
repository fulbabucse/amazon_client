import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { useRemoveAfterPurchaseMutation } from "../../features/products/cartApi";

const Success = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [deleteAfterPurchase] = useRemoveAfterPurchaseMutation();

  useEffect(() => {
    if (pathname === "/payments/success") {
      deleteAfterPurchase(email);
    }
  }, [deleteAfterPurchase, email]);

  return (
    <div className="bg-gray-100 h-screen w-full lg:max-w-sm flex justify-center items-center mx-auto rounded-md px-4 lg:px-0">
      <div className="bg-white p-6 rounded-md md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <button
              onClick={() => navigate("/")}
              className="px-12 bg-[#C9563C] hover:bg-opacity-90 text-white font-semibold py-3"
            >
              GO BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
