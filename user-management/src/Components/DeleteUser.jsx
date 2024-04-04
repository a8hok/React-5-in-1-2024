import React from "react";

function DeleteUser({ userId, deleteUser }) {
  const handleDelete = () => {
    deleteUser(userId);
  };
  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteUser;
