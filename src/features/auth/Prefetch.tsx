import { store } from "../../redux/store";
import { notesApiSlice } from "../../services/api/notesApiSlice";
import { usersApiSlice } from "../../services/api/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    return () => {
      console.log("unsubscribing");
      notes.unsubscribe();
      users.unsubscribe();
    };
  }, []);

  return <Outlet />;
};
export default Prefetch;