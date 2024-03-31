import { apiSlice } from "../apiSlice";
import { INote } from "../../types";

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query<INote[], void>({
      query: () => "/notes",
      providesTags: ["Note"],
    }),
    getNoteById: builder.query<INote, string>({
      query: (id) => `/notes/${id}`,
      providesTags: ["Note"],
    }),
    addNewNote: builder.mutation({
      query: (body: { user: string; title: string; text: string }) => ({
        url: "/notes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Note"],
    }),
    updateNote: builder.mutation({
      query: (body: {
        id: string;
        user: string;
        title: string;
        text: string;
        completed: boolean;
      }) => ({
        url: "/notes",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Note"],
    }),
    deleteNote: builder.mutation({
      query: (body: { id: string }) => ({
        url: "/notes",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useGetNoteByIdQuery,
  useAddNewNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApiSlice;
