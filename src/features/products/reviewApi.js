const { default: apiSlice } = require("../api/apiSlice");

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: (data) => ({
        url: `products/review`,
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["Review"],
    }),
    getProductReviews: builder.query({
      query: (id) => ({
        url: `products/review/${id}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
      }),
      providesTags: ["Review"],
    }),
  }),
});

export const { usePostReviewMutation, useGetProductReviewsQuery } = productApi;
