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
    }),
  }),
});

export const { useCreatePaymentSessionMutation } = paymentsApi;
