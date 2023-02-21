import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../features/auth/authSlice";
import { useSaveToDatabaseMutation } from "../../features/auth/userApi";
import useToken from "../../hooks/useToken";
import convertBase64 from "../../utils/convertBase64";
import styles from "./signIn.module.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const [saveToDB] = useSaveToDatabaseMutation();
  const [image, setImage] = useState("");
  const [userData, setUserData] = useState({});

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

  const join_date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleCreateUser = async (data) => {
    const base64 = await convertBase64(data.photo[0]);

    setImage(base64);

    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      join_date,
    };
    dispatch(createUser({ email: data.email, password: data.password }));
    setUserData(userInfo);
  };

  const userInfo = { ...userData, photo: image };
  useEffect(() => {
    if (image.length > 10 && email) {
      saveToDB(userInfo);
    }
  }, [image, email]);

  if (token) {
    return navigate("/");
  }

  let setUserError = "";

  if (error === "Firebase: Error (auth/email-already-in-use).") {
    setUserError = "This Email already exists !!";
  } else if (
    error ===
    "Firebase: Password should be at least 6 characters (auth/weak-password)."
  ) {
    setUserError = "Password should be at least 6 characters";
  }

  return (
    <div className={styles.signContainer}>
      <div className="w-full px-4 lg:px-0 max-w-sm lg:mx-auto pt-10 lg:pt-20">
        <div className="px-4 pt-4 rounded-sm border border-gray-300">
          <h1 className="text-primary text-2xl font-medium font-radio-canada mb-5">
            Create Account
          </h1>
          <form onSubmit={handleSubmit(handleCreateUser)} className="space-y-2">
            <div>
              <label
                className="block text-gray-700 text-[13px] font-bold mb-1"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                className="w-full py-[3px] border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#e77600] focus-within:shadow-inputShadow duration-100 text-gray-700 placeholder:text-[13px]"
                type="text"
                placeholder="First and last name"
                {...register("name", {
                  required: "Name is required",
                })}
                id="name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.name?.message}
                </p>
              )}
            </div>
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
                className="w-full py-[3px] border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#e77600] focus-within:shadow-inputShadow duration-100 text-gray-700 placeholder:text-[13px]"
                id="password"
                placeholder="At least 6 characters"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password length should be 6 character",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: `At least 1 special character, 1 uppercase letter, and Number character make the password stronger`,
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="text-gray-700 text-[13px] font-bold mb-1"
                htmlFor="re_password"
              >
                Re-enter Password
              </label>
              <input
                type="password"
                className="w-full py-[3px] border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#e77600] focus-within:shadow-inputShadow duration-100 text-gray-700"
                id="re_password"
                {...register("re_password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password length should be 6 character",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: `At least 1 special character, 1 uppercase letter, and Number character make the password stronger`,
                  },
                })}
              />
              {errors.re_password && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.re_password?.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-700 text-[13px] font-bold mb-1"
                htmlFor="photo"
              >
                Profile Picture
              </label>
              <input
                className="w-full py-[3px] border-[1px] border-[#a6a6a6] border-t-[#949494] px-2 text-base rounded-[3px] outline-none focus-within:border-[#e77600] focus-within:shadow-inputShadow duration-100 text-gray-700"
                type="file"
                {...register("photo", {
                  required: "Photo is required",
                })}
                id="photo"
                accept=".jpg, .png, .jpeg"
              />
              {errors.photo && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.photo?.message}
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-[6px] text-sm font-normal rounded-[3px] bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-[#F3CC6D] border-[1px] border-[#a6a6a6] active:border-[#a6a6a6] active:shadow-inputShadow transition-all ease-linear duration-100 mt-3"
              >
                Continue
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center gap-1 my-4 text-sm">
            <p className="text-red-500 text-center text-xs">{setUserError}</p>
          </div>

          <div className="flex items-center gap-1 mb-4 text-sm">
            <p>Already have an account?</p>
            <Link to="/sign-in" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
