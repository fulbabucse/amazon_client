import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import billingSlice from "../features/products/billingSlice";
import filterSlice from "../features/products/filterSlice";
import productSlice from "../features/products/productSlice";
import searchSlice from "../features/products/searchSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    filter: filterSlice,
    products: productSlice,
    searchFilter: searchSlice,
    billing: billingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
