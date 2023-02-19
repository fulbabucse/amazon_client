const { default: apiSlice } = require("../api/apiSlice");

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postCart: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
    }),
    getOrdersByEmail: builder.query({
      query: (email) => ({
        url: `/orders/${email}`,
      }),
    }),
  }),
});

export const { usePostCartMutation, useGetOrdersByEmailQuery } = cartApi;
