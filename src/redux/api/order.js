import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/base-url";

const token = localStorage.getItem("token");
const baseQueryHeaders = token ? { Authorization: `${token}` } : undefined;

export const order = createApi({
    reducerPath: "order",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: baseQueryHeaders }),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => "/orders",
        }),
        postOrder: builder.mutation({
            query: ({ user_id, order }) => ({
                url: `/orders/${user_id}`,
                method: "POST",
                body: order,
            }),
        }),
    }),
});

export const { useGetOrders, usePostOrderMutation } = order;
