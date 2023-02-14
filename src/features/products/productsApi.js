const { default: apiSlice } = require("../api/apiSlice");

// http://localhost:5000/products?start=10&end=50&page=1&size=5&rating=4
const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ start, end, page, size, rating }) => ({
        url: `products?start=${start}&end=${end}&page=${page}&size=${size}&rating=${rating}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
