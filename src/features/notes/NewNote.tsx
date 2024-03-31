import { useGetUsersQuery } from "../../services/api/usersApiSlice";
import NewNoteForm from "./NewNoteForm";

const NewNote = () => {
  const {
    data: users,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetUsersQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content = null;

  if (isLoading) content = <p>Loading...</p>;

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

  if (isSuccess) {
    content = users ? <NewNoteForm users={users} /> : <p>Loading...</p>;
  }

  return content;
};

export default NewNote;