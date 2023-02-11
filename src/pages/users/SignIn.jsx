import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillLockFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUser = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-md mx-auto my-10 p-4 rounded-md shadow-md">
      <h1 className="text-primary text-center text-2xl font-medium font-radio-canada mb-5">
        Sign in Account
      </h1>
      <form onSubmit={handleSubmit(handleSignUser)} className="space-y-4">
        <div class="relative flex w-full flex-wrap items-stretch">
          <span class="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <AiOutlineMail />
          </span>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Email"
            class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded text-sm border-0 shadow focus:bg-white focus:ring-1 outline-none focus:outline-none w-full pl-10"
          />
          {errors.email && (
            <p className="text-red-400 text-xs font-medium">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div class="relative flex w-full flex-wrap items-stretch">
          <span class="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <BsFillLockFill />
          </span>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
            class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded text-sm border-0 shadow focus:bg-white focus:ring-1 outline-none focus:outline-none w-full pl-10"
          />
          {errors.password && (
            <p className="text-red-400 text-xs font-medium">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium font-radio-canada py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-1 mt-4 text-sm">
        <p>New customer?</p>
        <Link to="/sign-up" className="text-blue-500 hover:underline">
          Start here
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
