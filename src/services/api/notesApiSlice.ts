import { apiSlice } from "../apiSlice";

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "/notes",
    }),
  }),
});

export const { useGetNotesQuery } = notesApiSlice;
