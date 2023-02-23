const { default: apiSlice } = require("../api/apiSlice");

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postCart: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),
    getOrdersByEmail: builder.query({
      query: (email) => ({
        url: `/orders/${email}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
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
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
      }),
      invalidatesTags: ["Orders"],
    }),
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
      }),
      invalidatesTags: ["Orders"],
    }),
    removeAfterPurchase: builder.mutation({
      query: (email) => ({
        url: `/orders/after-purchase/${email}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
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
