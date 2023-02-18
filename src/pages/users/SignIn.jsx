import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../features/auth/authSlice";
import useToken from "../../hooks/useToken";

const SignIn = () => {
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

  if (token) {
    return navigate("/");
  }

  let setError;

  if (error === "Firebase: Error (auth/user-not-found).") {
    setError = "User dose not exists!!";
  } else if (error === "Firebase: Error (auth/wrong-password).") {
    setError = "You are entering the wrong password";
  }

  return (
    <div className="max-w-md mx-auto my-10 p-4 rounded-md shadow-md bg-white">
      <h1 className="text-primary text-center text-2xl font-medium font-radio-canada mb-5">
        Sign in Account
      </h1>
      <form onSubmit={handleSubmit(handleSignUser)} className="space-y-4">
        <div className="relative flex w-full flex-wrap items-stretch">
          <Input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            label="Email"
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
            })}
          />
          {errors.password && (
            <p className="text-red-400 text-xs font-medium">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <Button
            type="submit"
            fullWidth
            className="block px-4 py-2 text-sm bg-[#FFC940] text-primary transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center"
          >
            Sign In
          </Button>
        </div>
      </form>

      <div className="flex items-center justify-center gap-1 mt-4 text-sm">
        <p className="text-red-500 text-center text-xs">{setError}</p>
      </div>
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
