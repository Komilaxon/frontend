import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/base-url";

const token = localStorage.getItem("token");
const baseQueryHeaders = token ? { Authorization: `${token}` } : undefined;

export const getMe = createApi({
  reducerPath: "getCategories",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});
