import "./App.css";
import AddTODO from "./Components/AddTODO";
import ListTODO from "./Components/ListTODO";

function App() {
  const a = 1;
  const b = 2;
  return (
    <>
      {a === 1 ? (
        <h1> Hello I am from A</h1>
      ) : b === 2 ? (
        <h1> Hello I am from B</h1>
      ) : (
        <h1> Hello I am from C</h1>
      )}
      <AddTODO />
      <ListTODO />
    </>
  );
}

export default App;
