import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router";
import { getUser } from "./features/auth/authSlice";
import auth from "./firebase/firebase.config";
import router from "./routes/routes";

const App = () => {
  const dispatch = useDispatch();
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        dispatch(getUser(user?.email));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    // dispatch(getUser(email));
  }, [email, dispatch]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
