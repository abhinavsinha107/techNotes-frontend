import { useGetUsersQuery } from '../../services/api/usersApiSlice'
import User from './User';
import { IUser } from '../../types';

const UsersList = () => {
  const {
    data: users,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetUsersQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
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
      const tableContent = users.length
        ? users.map((user: IUser) => <User key={user._id} user={user} />)
        : null;

      content = (
        <table className="table table--users">
          <thead className="table__thead">
            <tr>
              <th scope="col" className="table__th user__username">
                Username
              </th>
              <th scope="col" className="table__th user__roles">
                Roles
              </th>
              <th scope="col" className="table__th user__edit">
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

export default UsersList