import apiSlice from "../api/apiSlice";

const adminProductApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminAllProducts: builder.query({
      query: ({ page, size }) => ({
        url: `products/admin/all?page=${page}&size=${size}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
      }),
    }),
  }),
});

export const { useGetAdminAllProductsQuery } = adminProductApi;
