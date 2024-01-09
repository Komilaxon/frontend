import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/base-url";

export const skills = createApi({
  reducerPath: "getSkills",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => "/skills",
    }),

    postSkills: builder.mutation({
      query: ({ skill, id }) => ({
        url: `/skills/${id}`,
        method: "POST",
        body: skill,
      }),
    }),
  }),
});

export const { useGetSkillsQuery, usePostSkillsMutation } = skills;
