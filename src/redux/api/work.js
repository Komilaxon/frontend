import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/base-url";

const token = localStorage.getItem("token");
const baseQueryHeaders = token ? { Authorization: `${token}` } : undefined;

export const works = createApi({
  reducerPath: "works",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: baseQueryHeaders }),
  endpoints: (builder) => ({
    getWorks: builder.query({
      query: ({ user_id }) => `/works/${user_id}`,
    }),
    getWorksByOffersCount: builder.query({
      query: () => "/bestworks",
    }),
    getWorksByTitle: builder.query({
      query: ({ title }) => `/works${title}`,
    }),
    getWorkBySum: builder.query({
      query: ({ from, to }) => `/works/by_sum?from=${from}&to=${to}`,
    }),
    postWork: builder.mutation({
      query: ({ work, user_id }) => ({
        url: `/works/${user_id}`,
        method: "POST",
        body: work,
      }),
    }),
    updateWork: builder.mutation({
      query: ({ work, id }) => ({
        url: `works/${id}`,
        method: "PUT",
        body: work,
      }),
    }),
  }),
});

export const {
  useGetWorksByOffersCountQuery,
  useGetWorksByTitleQuery,
  useGetWorksQuery,
  usePostWorkMutation,
  useUpdateWorkMutation,
} = works;
