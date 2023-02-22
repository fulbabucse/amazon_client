import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router";
import SmallSpinner from "../../components/shared/SmallSpinner";
import { useCreatePaymentSessionMutation } from "../../features/payments/paymentsApi";
import {
  useGetBillingAddressQuery,
  usePostBillingMutation,
} from "../../features/products/billingApi";
import { useGetOrdersByEmailQuery } from "../../features/products/cartApi";

const Billing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [message, setMessage] = useState("");
  const {
    user: { email, name },
  } = useSelector((state) => state.auth);

  const { data, isLoading } = useGetOrdersByEmailQuery(email);
  const [postPayment, { data: paymentsData, isSuccess: paymentsSuccess }] =
    useCreatePaymentSessionMutation();

  const [postBillingAddress, { isError, error, isSuccess, data: postSuccess }] =
    usePostBillingMutation();

  const { data: billingAddresses, isLoading: billingLoading } =
    useGetBillingAddressQuery(email);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  const price = data?.reduce((total, current) => {
    return parseFloat(total) + parseFloat(current.price);
  }, 0);

  const quantity = data?.reduce((total, current) => {
    return parseFloat(total) + parseFloat(current.quantity);
  }, 0);

  const handlePayment = () => {
    if (!billingAddresses?.email) {
      toast.error("Complete the Shipping Address before !!");
      return;
    }

    postPayment(billingAddresses);
  };

  useEffect(() => {
    if (paymentsSuccess) {
      window.location = paymentsData.url;
    }
  }, [paymentsSuccess, paymentsData]);

  const handleSaveAddress = (data) => {
    setMessage("");
    const billingInfo = { ...data, name, email };
    postBillingAddress(billingInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      setMessage(postSuccess?.message);
    }

    if (isError) {
      setMessage(error?.data?.message);
    }
  }, [isError, error, isSuccess, postSuccess]);

  if (isLoading || billingLoading) {
    return <SmallSpinner />;
  }

  const shipping = billingAddresses?.country === "Bangladesh" ? 3.0 : 17.0;
  const totalWithOutTax = price + shipping;
  const tax = billingAddresses?.country === "Bangladesh" ? 1.0 : 7.0;

  const total = totalWithOutTax + tax;

  return (
    <div className="bg-white min-h-[100vh] pb-6">
      <div className="bg-gradient-to-b from-[#DDD] to-[#FFF] py-4 border-b border-b-gray-300">
        <div className="text-center">
          <button
            onClick={() => navigate("/cart")}
            className="text-[24px] font-medium"
            title="Back to Cart"
          >
            Checkout ( <span className="text-[#008296]">{quantity} items</span>)
          </button>
        </div>
      </div>
      <div className="flex gap-4 max-w-screen-lg mx-auto mt-3">
        <div className="flex-1 w-full">
          <h1 className="text-xl font-semibold text-[#C9563C]">
            {billingAddresses?.email === email
              ? "Shipping Address"
              : "Enter a new Shipping Address"}
          </h1>
          <div className="border border-gray-300 p-5 rounded-[10px] mt-2">
            {!billingAddresses?.email && (
              <div>
                <form
                  onSubmit={handleSubmit(handleSaveAddress)}
                  className="lg:pr-32"
                >
                  <div>
                    <label
                      className="text-black text-[13px] font-bold mb-2"
                      htmlFor="countries"
                    >
                      Country/Region
                    </label>
                    <select
                      id="countries"
                      {...register("country", {
                        required: "Country is required",
                      })}
                      className="w-full text-[14px] py-1.5 capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                    >
                      {countries?.map((country) => (
                        <option
                          value={country?.name?.common}
                          key={country?.cca3}
                        >
                          {country?.name?.common}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-[#C9563C] text-xs font-medium">
                        {errors.country?.message}
                      </p>
                    )}
                  </div>
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
                      defaultValue={name}
                      readOnly
                      {...register("name")}
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
                      readOnly
                      {...register("email")}
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
                      {...register("street", {
                        required: "Street is required",
                      })}
                      className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                    />
                    {errors.street && (
                      <p className="text-[#C9563C] text-xs font-medium">
                        {errors.street?.message}
                      </p>
                    )}
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
                      {...register("city", {
                        required: "City is required",
                      })}
                      className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                    />
                    {errors.city && (
                      <p className="text-[#C9563C] text-xs font-medium">
                        {errors.city?.message}
                      </p>
                    )}
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
                      {...register("state_province_region", {
                        required: "State is required",
                      })}
                      id="state_province_region"
                      className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                    />
                    {errors.state_province_region && (
                      <p className="text-[#C9563C] text-xs font-medium">
                        {errors.state_province_region?.message}
                      </p>
                    )}
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
                      {...register("zip_code", {
                        required: "Zip Code is required",
                      })}
                      className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                    />
                    {errors.zip_code && (
                      <p className="text-[#C9563C] text-xs font-medium">
                        {errors.zip_code?.message}
                      </p>
                    )}
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
                      {...register("phone_number", {
                        required: "Phone number is required",
                      })}
                      className="w-full py-[3px] focus:bg-[#F7FEFF] capitalize border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#f0f2f2] focus-within:shadow-selectShadow duration-100 text-gray-700"
                    />
                    {errors.phone_number && (
                      <p className="text-[#C9563C] text-xs font-medium">
                        {errors.phone_number?.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="py-[3px] mt-3 bg-[#FFD814] hover:bg-[#F7CA00] focus:bg-[#F0b800] capitalize border-[1px] border-[#F2C200] px-3 text-base rounded-[10px] outline-none focus-within:border-[#008296] focus-within:shadow-selectShadow duration-100 text-black"
                  >
                    Save Address
                  </button>
                </form>

                <div className="mt-2">
                  {message && (
                    <p className="text-[14px] text-[#C9563C]">{message}</p>
                  )}
                </div>
              </div>
            )}

            {billingAddresses?.email && (
              <div>
                <p>Mr/Ms. {billingAddresses?.name}</p>
                <p>Contact: {billingAddresses?.phone_number}</p>
                <p>Email: {billingAddresses?.email}</p>
                <div className="flex flex-wra items-center gap-1">
                  <p>Location: </p>
                  <div className="flex flex-wrap gap-1">
                    <p>
                      <span>{billingAddresses?.zip_code}</span>
                      <span className="ml-1">{billingAddresses?.street}</span>,
                    </p>
                    <p>{billingAddresses?.city},</p>
                    <p>{billingAddresses?.state},</p>
                    <p>{billingAddresses?.country}.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-80">
          <div className="border border-gray-300 p-5 rounded-[10px]">
            <h1 className="text-gray-800 font-semibold text-xl">
              Order Summary
            </h1>

            <div className="mt-3">
              <p className="flex justify-between items-center text-[14px] text-gray-800">
                <span>Items ({quantity}):</span>
                <span>${price?.toFixed(2)}</span>
              </p>
              <p className="flex justify-between items-center text-[14px] text-gray-800">
                <span>Shipping:</span>
                <span>${shipping}.00</span>
              </p>
              <div className="border-b border-b-gray-300 mb-1.5 w-20 ml-auto"></div>
              <p className="flex justify-between items-center text-[14px] text-gray-800">
                <span>Total before tax:</span>
                <span>{totalWithOutTax}</span>
              </p>
              <p className="flex justify-between items-center text-[14px] text-gray-800">
                <span>Estimate tax to be collect:</span>
                <span>${tax}.00</span>
              </p>
            </div>
            <div className="border-b border-b-gray-300 mb-1.5"></div>
            <h1 className="flex justify-between items-center text-lg font-[500] text-[#C9563C]">
              <span>Total:</span>${total}
            </h1>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={handlePayment}
                // disabled={!billingAddresses?.email}
                style={{ fontSize: "13px", fontWeight: "500" }}
                className="py-[3px] bg-[#FFD814] hover:bg-[#F7CA00] focus:bg-[#F0b800] capitalize border-[1px] border-[#F2C200] px-3 text-base rounded-[10px] outline-none focus-within:border-[#008296] focus-within:shadow-selectShadow duration-100 text-black"
              >
                Payment now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
