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
  }),
});

export const { usePostCartMutation } = cartApi;
