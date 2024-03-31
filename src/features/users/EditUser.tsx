import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../services/api/usersApiSlice";
import EditUserForm from "./EditUserForm";

const EditUser = () => {
  const { id } = useParams();

  const {
    data: user,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetUserByIdQuery(id || "");

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
    content = <EditUserForm user={user} />;
  }

  return content;
};
export default EditUser;
