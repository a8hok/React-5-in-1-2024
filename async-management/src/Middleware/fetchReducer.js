import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// use it in store
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => "/users",
    }),
    getById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    insertUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});


// use it in component level
export const {
  useFetchUserQuery,
  useInsertUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
