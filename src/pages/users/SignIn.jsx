import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../features/auth/authSlice";
import useToken from "../../hooks/useToken";
import styles from "./signIn.module.css";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";

const SignIn = () => {
  const [needHelp, setNeedHelp] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const {
    user: { email },
    error,
  } = useSelector((state) => state.auth);

  const [token] = useToken(email);

  const handleSignUser = (data) => {
    dispatch(signInUser({ email: data.email, password: data.password }));
  };

  if (token && email) {
    return navigate("/");
  }

  let setError;

  if (error === "Firebase: Error (auth/user-not-found).") {
    setError = "User dose not exists!!";
  } else if (error === "Firebase: Error (auth/wrong-password).") {
    setError = "You are entering the wrong password";
  }

  return (
    <div className={styles.signContainer}>
      <div className="w-full px-4 lg:px-0 max-w-sm lg:mx-auto pt-10 lg:pt-28">
        <div className="px-4 pt-4 rounded-sm border border-gray-300">
          <h1 className="text-primary text-2xl font-medium font-radio-canada mb-5">
            Sign in
          </h1>
          <form onSubmit={handleSubmit(handleSignUser)} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-[13px] font-bold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full py-[3px] border-[1px] border-[#a6a6a6] border-t-[#949494] lowercase px-2 text-base rounded-[3px] outline-none focus-within:border-[#e77600] focus-within:shadow-inputShadow duration-100 text-gray-700"
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                id="email"
              />
              {errors.email && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="text-gray-700 text-[13px] font-bold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full py-[3px] border-[1px] border-[#a6a6a6] border-t-[#949494] lowercase px-2 text-base rounded-[3px] outline-none focus-within:border-[#e77600] focus-within:shadow-inputShadow duration-100 text-gray-700"
                id="password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                fullWidth
                className="w-full py-[6px] text-sm font-normal rounded-[3px] bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-[#F3CC6D] border-[1px] border-[#a6a6a6] active:border-[#a6a6a6] active:shadow-inputShadow transition-all ease-linear duration-100"
              >
                Continue
              </button>
            </div>
            <div>
              <button
                onClick={() => setNeedHelp(!needHelp)}
                type="button"
                className="flex items-center"
              >
                {needHelp ? <MdArrowDropDown /> : <MdArrowRight />}

                <span className="text-blue-800 text-[13px] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C">
                  Need help?
                </span>
              </button>
              {needHelp && (
                <div className="ml-4 leading-[18px] duration-100">
                  <button
                    type="button"
                    className="text-end text-blue-800 text-[13px] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C"
                  >
                    Forgot your password?
                  </button>
                  <br />
                  <button
                    type="button"
                    className="text-end text-blue-800 text-[13px] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C"
                  >
                    Other issues with Sign-In?
                  </button>
                </div>
              )}
            </div>
          </form>

          <div className="flex items-center justify-center gap-1 my-4 text-sm">
            <p className="text-red-500 text-center text-xs">{setError}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 mt-4 text-sm">
          <p className="h-[1px] lg:w-[103px] w-[50px] bg-gray-300"></p>
          <p className="text-[#565959]">New to Crafty Commerce?</p>
          <p className="h-[1px] lg:w-[103px] w-[50px] bg-gray-300"></p>
        </div>
        <div>
          <Link to="/sign-up">
            <button className="w-full py-[6px] text-sm font-normal rounded-[3px] bg-gradient-to-t from-[#f7f8fa] to-[#e7e9ec] hover:bg-[#E2E5EB] border-[1px] border-[#a6a6a6] active:border-[#a6a6a6] active:shadow-inputShadow transition-all ease-linear duration-100 text-center mt-3">
              Create your Crafty Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
