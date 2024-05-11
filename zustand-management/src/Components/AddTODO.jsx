import React from "react";
import useTODOStore from "../Store/Store";

function AddTODO() {
  const [inputValue, setInputValue] = React.useState("");
  const addTODO = useTODOStore((state) => state.addTODO);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTODO(inputValue);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTODO;
