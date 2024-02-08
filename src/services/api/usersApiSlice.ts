import { IUser } from "../../types";
import { apiSlice } from "../apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "/users",
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
