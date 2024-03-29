import { createBrowserRouter } from "react-router-dom";
import Uploads from "../admin/components/Form/Uploads";
import AdminHome from "../admin/pages/AdminHome";
import AdminProducts from "../admin/pages/AdminProducts";
import Messages from "../admin/pages/Messages";
import Profile from "../admin/pages/Profile";
import Users from "../admin/pages/Users";
import ProductDetails from "../components/shared/ProductDetails";
import Admin from "../layouts/Admin";
import Root from "../layouts/Root";
import AllHistory from "../pages/AllHistory";
import BestSeller from "../pages/BestSeller";
import Books from "../pages/Books";
import Cart from "../pages/Cart";
import ComingSoon from "../pages/ComingSoon";
import Contact from "../pages/Contact";
import Fashion from "../pages/Fashion";
import Home from "../pages/Home";
import NewRelease from "../pages/NewRelease";
import Orders from "../pages/Orders";
import OurShop from "../pages/OurShop";
import Billing from "../pages/payments/Billing";
import Cancel from "../pages/payments/Cancel";
import Success from "../pages/payments/Success";
import Products from "../pages/Products";
import Search from "../pages/Search";
import TodayDeals from "../pages/TodayDeals";
import Account from "../pages/users/Account";
import SignIn from "../pages/users/SignIn";
import SignUp from "../pages/users/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-shop", element: <OurShop /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products/:categoryName/:category", element: <Products /> },
      { path: "/products/:category", element: <Products /> },
      { path: "/product/:category/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },
      { path: "/:coming", element: <ComingSoon /> },
      { path: "/books", element: <Books /> },
      { path: "/fashions", element: <Fashion /> },
      { path: "/best-sellers", element: <BestSeller /> },
      { path: "/new-releases", element: <NewRelease /> },
      { path: "/today-deals", element: <TodayDeals /> },
      { path: "/history", element: <AllHistory /> },
      {
        path: "/payments/success",
        element: (
          <PrivateRoute>
            <Success />
          </PrivateRoute>
        ),
      },
      {
        path: "/payments/cancel",
        element: (
          <PrivateRoute>
            <Cancel />
          </PrivateRoute>
        ),
      },

      // {
      //   path: "/compare-product",
      //   element: (
      //     <PrivateRoute>
      //       <Compare />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/wishlist-product",
      //   element: (
      //     <PrivateRoute>
      //       <Favorite />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/your-account/orders-history",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "admin",
    element: (
      <AdminRoute>
        <Admin />,
      </AdminRoute>
    ),
    children: [
      { path: "/admin", element: <AdminHome /> },
      { path: "products", element: <AdminProducts /> },
      { path: "users", element: <Users /> },
      { path: "profile", element: <Profile /> },
      // { path: "uploads", element: <Uploads /> },
      { path: "messages", element: <Messages /> },
    ],
  },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/billing_address",
    element: (
      <PrivateRoute>
        <Billing />
      </PrivateRoute>
    ),
  },
]);

export default router;
