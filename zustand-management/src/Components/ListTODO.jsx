import React from "react";
import useTODOStore from "../Store/Store";

function ListTODO() {
  const todos = useTODOStore((state) => state.todos);
  const deleteTODO = useTODOStore((state) => state.deleteTODO);

  const handleDelete = (index) => {
    // useTODOStore.getState().deleteTODO(index);
    console.log(index, deleteTODO);
    deleteTODO(index);
  };
  return (
    <div>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div key={index}>
              <li>{todo}</li>
              <button onClick={() => handleDelete(index)}>delete todo</button>
            </div>
          ))
        ) : (
          <p>No todos</p>
        )}
      </ul>
    </div>
  );
}

export default ListTODO;
