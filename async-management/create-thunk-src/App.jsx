import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./Fetcher/userFetcher";

const App = () => {
  const dispatch = useDispatch();
  const { list, error, status } = useSelector((state) => state.user);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);

  return (
    <div className="App">
      <h1>User List</h1>
      <ul>
        {status === "loading" && <h1>Loading...</h1>}
        {list.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {status === "error" && <h1>Error: {error}</h1>}
      </ul>
    </div>
  );
};

export default App;

App.jsx;
