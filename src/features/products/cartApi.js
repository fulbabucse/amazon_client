const { default: apiSlice } = require("../api/apiSlice");

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postCart: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),
    getOrdersByEmail: builder.query({
      query: (email) => ({
        url: `/orders/${email}`,
      }),
      providesTags: ["Orders"],
    }),
    updateQuantity: builder.mutation({
      query: (data) => ({
        url: `/orders/update-quantity/${data.productId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  usePostCartMutation,
  useGetOrdersByEmailQuery,
  useUpdateQuantityMutation,
  useRemoveFromCartMutation,
} = cartApi;
