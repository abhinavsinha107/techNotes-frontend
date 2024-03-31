import {useGetNotesQuery} from "../../services/api/notesApiSlice";
import { INote } from "../../types";
import Note from "./Note";

const NotesList = () => {
  const {
    data: notes,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetNotesQuery(undefined, {
    pollingInterval: 15000,
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

    const tableContent = notes?.length
      ? notes.map((note: INote) => <Note key={note._id} note={note} />)
      : null;

    content = (
      <table className="table table--notes">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th note__status">
              Status
            </th>
            <th scope="col" className="table__th note__created">
              Created
            </th>
            <th scope="col" className="table__th note__updated">
              Updated
            </th>
            <th scope="col" className="table__th note__title">
              Title
            </th>
            <th scope="col" className="table__th note__username">
              Owner
            </th>
            <th scope="col" className="table__th note__edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
}

export default NotesList