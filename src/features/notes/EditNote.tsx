import { useParams } from "react-router-dom";
import { useGetNoteByIdQuery } from "../../services/api/notesApiSlice";
import { useGetUsersQuery } from "../../services/api/usersApiSlice";
import EditNoteForm from "./EditNoteForm";

const EditNote = () => {
  const { id } = useParams();

  const {
    data: users,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetUsersQuery();

  const {
    data: note,
    isSuccess: isNoteSuccess,
    isLoading: isNoteLoading,
    isError: isNoteError,
    error: noteError,
  } = useGetNoteByIdQuery(id || "");

  let content = null;

  if (isLoading || isNoteLoading) content = <p>Loading...</p>;

  if (isError) {
    if ("data" in error) {
      content = (
        <p className="errmsg">
          {(error as { data: { message: string } }).data.message}
        </p>
      );
    } else if ("message" in error) {
      content = <p className="errmsg">{error.message}</p>;
    } else {
      content = <p className="errmsg">An error occurred.</p>;
    }
  }
  if (isNoteError) {
    if (noteError && "data" in noteError) {
      content = (
        <p className="errmsg">
          {" "}
          {(noteError as { data: { message: string } }).data.message}
        </p>
      );
    } else if (noteError && "message" in noteError) {
      content = <p className="errmsg">{noteError.message}</p>;
    } else {
      content = <p className="errmsg">An error occurred</p>;
    }
  }

  if (isSuccess && isNoteSuccess) {
    content = <EditNoteForm users={users} note={note} />;
  }

  return content;
};
export default EditNote;
