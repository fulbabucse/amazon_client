import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Blogs from "../pages/Blogs";
import Cart from "../pages/Cart";
import Compare from "../pages/Compare";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import OurShop from "../pages/OurShop";
import SignIn from "../pages/users/SignIn";
import SignUp from "../pages/users/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-shop", element: <OurShop /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/compare-product", element: <Compare /> },
      { path: "/wishlist-product", element: <Favorite /> },
      { path: "/cart", element: <Cart /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);

export default router;
