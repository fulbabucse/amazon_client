import apiSlice from "../api/apiSlice";

const paymentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentSession: builder.mutation({
      query: (data) => ({
        url: "/payments/create-checkout-session",
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["Payment"],
    }),
    getOrders: builder.query({
      query: () => ({
        url: `/payments/completed-orders`,
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
      }),
      providesTags: ["Payment"],
    }),
  }),
});

export const { useCreatePaymentSessionMutation, useGetOrdersQuery } =
  paymentsApi;
