import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";

const AdminRoute = ({ children }) => {
  const {
    user: { email, isAdmin },
    isLoading,
  } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isLoading) {
    return <Spinner />;
  }

  if (email && isAdmin) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
