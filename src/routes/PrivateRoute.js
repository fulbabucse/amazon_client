import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import SmallSpinner from "../components/shared/SmallSpinner";

const PrivateRoute = ({ children }) => {
  const {
    user: { email },
    isLoading,
  } = useSelector((state) => state.auth);

  const location = useLocation();

  if (isLoading) {
    return <SmallSpinner />;
  }

  if (email) {
    return children;
  }

  return <Navigate to={`/sign-in`} state={{ from: location }} replace />;
};

export default PrivateRoute;
