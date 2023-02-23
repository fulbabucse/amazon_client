import apiSlice from "../api/apiSlice";

const billingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postBilling: builder.mutation({
      query: (data) => ({
        url: "/orders/billings",
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["Billing"],
    }),
    getBillingAddress: builder.query({
      query: (email) => ({
        url: `/orders/billings/${email}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
      }),
      providesTags: ["Billing"],
    }),
  }),
});

export const { usePostBillingMutation, useGetBillingAddressQuery } = billingApi;
