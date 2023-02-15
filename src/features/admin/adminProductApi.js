import apiSlice from "../api/apiSlice";

const adminProductApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminAllProducts: builder.query({
      query: ({ page, size }) => ({
        url: `products/admin/all?page=${page}&size=${size}`,
      }),
    }),
  }),
});

export const { useGetAdminAllProductsQuery } = adminProductApi;
