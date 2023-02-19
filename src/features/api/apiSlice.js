import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utils/baseURL";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ["Review", "Product", "Orders"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
