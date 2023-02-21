import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../features/products/billingSlice";

const Billing = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.billing);
  const {
    user: { email },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleSaveAddress = (data) => {
    data.preventDefault();
  };

  return (
    <div className="bg-white min-h-[100vh] pb-6">
      <div className="bg-gradient-to-b from-[#DDD] to-[#FFF] py-4 border-b border-b-gray-300">
        <h1 className="text-center text-[24px] font-medium">
          Checkout ( <span className="text-[#008296]">2 items</span>)
        </h1>
      </div>
      <div className="flex gap-4 max-w-screen-lg mx-auto mt-3">
        <div className="flex-1 w-full">
          <h1 className="text-xl font-semibold text-[#C9563C]">
            Enter a new Shipping address
          </h1>
          <div className="border border-gray-300 p-5 rounded-[10px] mt-2 lg:pr-48">
            <form onSubmit={handleSaveAddress}>
              <label
                className="text-black text-[13px] font-bold mb-2"
                htmlFor="countries"
              >
                Country/Region
              </label>
              <select
                id="countries"
                class="w-full text-[14px] py-1.5 capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
              >
                {countries?.map((country) => (
                  <option value="US" key={country?.cca3}>
                    {country?.name?.common}
                  </option>
                ))}
              </select>
              <div className="mt-2">
                <label
                  className="text-black text-[13px] font-bold mb-2"
                  htmlFor="name"
                >
                  Full name (First and Last name)
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                />
              </div>
              <div className="mt-2">
                <label
                  className="text-black text-[13px] font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  defaultValue={email}
                  disabled
                  className="w-full py-[3px] focus:bg-[#F7FEFF] lowercase border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                />
              </div>
              <div className="mt-2">
                <label
                  className="text-black text-[13px] font-bold mb-2"
                  htmlFor="street"
                >
                  Street address
                </label>
                <input
                  type="text"
                  id="street"
                  className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                />
              </div>
              <div className="mt-2">
                <label
                  className="text-black text-[13px] font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                />
              </div>
              <div className="mt-2">
                <label
                  className="text-black text-[13px] font-bold mb-2"
                  htmlFor="state_province_region"
                >
                  State / Province / Region
                </label>
                <input
                  type="text"
                  id="state_province_region"
                  className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                />
              </div>
              <div className="mt-2">
                <label
                  className="text-black text-[13px] font-bold mb-2"
                  htmlFor="zip_code"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip_code"
                  className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                />
              </div>
              <div className="mt-2">
                <label
                  className="text-black text-[13px] font-bold mb-2"
                  htmlFor="phone_number"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                />
              </div>
              <button
                type="submit"
                style={{ fontSize: "13px", fontWeight: "500" }}
                className="py-[3px] mt-3 bg-[#FFD814] hover:bg-[#F7CA00] focus:bg-[#F0b800] capitalize border-[1px] border-[#F2C200] px-3 text-base rounded-[10px] outline-none focus-within:border-[#008296] focus-within:shadow-selectShadow duration-100 text-black"
              >
                Use this address
              </button>
            </form>
          </div>
        </div>
        <div className="w-64">
          <h1>Total</h1>
        </div>
      </div>
    </div>
  );
};

export default Billing;
