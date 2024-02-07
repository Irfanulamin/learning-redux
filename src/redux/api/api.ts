import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: (priority) => ({
        url: `tasks`,
        method: "GET",
        params: { priority },
      }),
      providesTags: ["todo"],
    }),
    addToDos: builder.mutation({
      query: (data) => ({
        url: "task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetToDosQuery, useAddToDosMutation } = baseApi;
