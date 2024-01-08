import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/base-url";

const token = localStorage.getItem("token");
const baseQueryHeaders = token ? { Authorization: `${token}` } : undefined;

export const user = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: baseQueryHeaders }),
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => "/getme",
    }),

    postUser: builder.mutation({
      query: ({ user, id }) => ({
        url: `/users/${id}`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetMeQuery, usePostUserMutation } = user;
