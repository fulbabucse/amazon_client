import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Blogs from "../pages/Blogs";
import Cart from "../pages/Cart";
import Compare from "../pages/Compare";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import OurShop from "../pages/OurShop";
import SignIn from "../pages/users/SignIn";
import SignUp from "../pages/users/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-shop", element: <OurShop /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/compare-product",
        element: (
          <PrivateRoute>
            <Compare />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist-product",
        element: (
          <PrivateRoute>
            <Favorite />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);

export default router;
