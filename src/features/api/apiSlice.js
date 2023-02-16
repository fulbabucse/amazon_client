import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crafty-commerce-server.vercel.app",
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
