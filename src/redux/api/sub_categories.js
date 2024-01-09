import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/base-url";

export const sub_categories = createApi({
  reducerPath: "getsub_categories",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: () => "/sub_categories",
    }),
  }),
});

export const { useGetSubCategoriesQuery } = sub_categories;
