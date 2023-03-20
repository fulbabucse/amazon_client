import apiSlice from "../api/apiSlice";
import { getUser } from "./authSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    saveToDatabase: builder.mutation({
      query: (data) => ({
        url: `/users/${data.email}`,
        method: "PUT",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(getUser(data?.email));
      },
    }),
    sendMessage: builder.mutation({
      query: (data) => ({
        url: `/admin/contact/send-message`,
        method: "POST",
        body: data,
      }),
    }),
    getMessages: builder.query({
      query: () => ({
        url: `/admin/contact/send-message`,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/users/all",
        headers: {
          authorization: `Bearer ${localStorage.getItem("amazon_token")}`,
        },
      }),
    }),
  }),
});

export const {
  useSaveToDatabaseMutation,
  useGetUsersQuery,
  useSendMessageMutation,
  useGetMessagesQuery,
} = userApi;
