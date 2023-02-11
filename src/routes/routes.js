import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Blogs from "../pages/Blogs";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import OurShop from "../pages/OurShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-shop", element: <OurShop /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/favorite", element: <Favorite /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router;
