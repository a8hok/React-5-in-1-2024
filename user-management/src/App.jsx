import UserList from "./Components/UserList";
import { UserContextProvider } from "./Context/UserContext";

import "./App.css";

function App() {
  return (
    <>
      <UserContextProvider>
        <UserList />
      </UserContextProvider>
    </>
  );
}

export default App;
