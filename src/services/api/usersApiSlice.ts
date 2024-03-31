import { apiSlice } from "../apiSlice";
import { IUser } from "../../types";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "/users",
      providesTags: ["User"],
    }),
    getUserById: builder.query<IUser, string>({
      query: (id) => `/users/${id}`,

      providesTags: ["User"],
    }),
    addNewUser: builder.mutation({
      query: (body: {
        username: string;
        password: string;
        roles: string[];
      }) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (body: {
        id: string;
        username: string;
        password?: string;
        roles: string[];
        active: boolean;
      }) => ({
        url: "/users",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "/users",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddNewUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApiSlice;
