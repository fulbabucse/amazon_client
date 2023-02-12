const { default: apiSlice } = require("../api/apiSlice");

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "products",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
