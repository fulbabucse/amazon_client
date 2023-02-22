const { default: apiSlice } = require("../api/apiSlice");

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postCart: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
        headers: {
          "content-type": "application/json",
        },
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
        headers: {
          "content-type": "application/json",
        },
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
    removeAfterPurchase: builder.mutation({
      query: (email) => ({
        url: `/orders/after-purchase/${email}`,
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
  useRemoveAfterPurchaseMutation,
} = cartApi;
