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
      providesTags: ["Product"],
    }),
    getProductsByCategory: builder.query({
      query: (category) => ({
        url: `/products/all/${category}`,
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    postBookProduct: builder.mutation({
      query: (data) => ({
        url: "/products/book/post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getBooks: builder.query({
      query: () => ({
        url: "/products/books/get",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
  usePostBookProductMutation,
  useGetBooksQuery,
} = productApi;
