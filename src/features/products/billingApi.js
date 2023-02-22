import apiSlice from "../api/apiSlice";

const billingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postBilling: builder.mutation({
      query: (data) => ({
        url: "/orders/billings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Billing"],
    }),
    getBillingAddress: builder.query({
      query: (email) => ({
        url: `/orders/billings/${email}`,
      }),
      providesTags: ["Billing"],
    }),
  }),
});

export const { usePostBillingMutation, useGetBillingAddressQuery } = billingApi;
