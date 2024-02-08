import React from 'react'
import { useGetUsersQuery } from '../../services/api/usersApiSlice'

const UsersList = () => {

  const {data: users, isSuccess, isLoading, isError, error} = useGetUsersQuery(); 
  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    if ('data' in error) {
      content = <p className="errmsg">{(error as { data: { message: string } }).data.message}</p>;
    } else if ('message' in error) {
      content = <p className="errmsg">{error.message}</p>;
    } else {
      content = <p className="errmsg">An error occurred.</p>;
    }
  }

  

  return content;
}

export default UsersList