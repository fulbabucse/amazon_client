const { default: apiSlice } = require("../api/apiSlice");

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ start, end, page, size, rating }) => ({
        url: `products?start=${start}&end=${end}&page=${page}&size=${size}&rating=${rating}`,
      }),
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: "/products/all",
      }),
    }),
    getProductsByCategory: builder.query({
      query: (category) => ({
        url: `/products/all/${category}`,
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
} = productApi;
