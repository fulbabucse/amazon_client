import { Button, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../features/auth/authSlice";
import { useSaveToDatabaseMutation } from "../../features/auth/userApi";
import useToken from "../../hooks/useToken";
import convertBase64 from "../../utils/convertBase64";

const SignUp = () => {
  const dispatch = useDispatch();
  const [saveToDB] = useSaveToDatabaseMutation();
  const [image, setImage] = useState("");
  const [userData, setUserData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
    setUserData(userInfo);
    dispatch(createUser({ email: data.email, password: data.password }));
  };

  const userInfo = { ...userData, photo: image };
  useEffect(() => {
    if (image.length > 10) {
      saveToDB(userInfo);
      reset();
    }
  }, [image]);

  if (token) {
    return navigate("/");
  }

  let setError = "";

  if (error === "Firebase: Error (auth/email-already-in-use).") {
    setError = "This Email already exists !!";
  } else if (
    error ===
    "Firebase: Password should be at least 6 characters (auth/weak-password)."
  ) {
    setError = "Password should be at least 6 characters";
  }

  return (
    <div className="max-w-md mx-auto my-10 p-4 rounded-md shadow-md bg-white">
      <h1 className="text-primary text-center text-2xl font-medium font-radio-canada mb-5">
        Create Account
      </h1>
      <form onSubmit={handleSubmit(handleCreateUser)} className="space-y-4">
        <div className="relative flex w-full flex-wrap items-stretch">
          <Input
            label="Your name"
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-400 text-xs font-medium">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="relative flex w-full flex-wrap items-stretch">
          <Input
            label="Email Address"
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-xs font-medium">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="relative flex w-full flex-wrap items-stretch">
          <Input
            type="password"
            label="Password"
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
        <div className="relative flex w-full flex-wrap items-stretch">
          <Input
            type="file"
            label="Profile Photo"
            {...register("photo", {
              required: "Photo URL is required",
            })}
          />
          {errors.photo && (
            <p className="text-red-400 text-xs font-medium">
              {errors.photo?.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <Button
            type="submit"
            fullWidth
            className="block px-4 py-2 text-sm bg-[#FFC940] text-primary transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-1 mt-4 text-sm">
        <p className="text-red-500 text-center text-xs">{setError}</p>
      </div>
      <div className="flex items-center justify-center gap-1 mt-4 text-sm">
        <p>Already have an account?</p>
        <Link to="/sign-in" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
