import { useEffect, useMemo, useState } from "react";
import { UseAPIData } from "../Context/UseAPIData";
import sortUsers from "../Utils/sortUsers";
import DeleteUser from "./DeleteUser";

function UserList() {
  const users = UseAPIData();

  const [usersData, setUsersData] = useState(users);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  const sortedUser = useMemo(() => sortUsers(usersData), [usersData]);

  const deleteUser = (id) => {
    // Filter out the user with the specified ID
    const updatedUserData = usersData.filter((user) => user.id !== id);
    // Update the user data
    setUsersData(updatedUserData);
  };

  return (
    <>
      {sortedUser.map((user, index) => {
        return (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.username}</p>
            </div>
            {/* Pass the deleteUser function to the DeleteUser component */}
            <DeleteUser userId={user.id} deleteUser={deleteUser}>
              Delete
            </DeleteUser>
          </div>
        );
      })}
    </>
  );
}

export default UserList;
