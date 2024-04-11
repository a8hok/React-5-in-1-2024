import { useFetchUserQuery, useInsertUserMutation, useUpdateUserMutation } from "./Middleware/fetchReducer";
const App = () => {
  const { data, error, isLoading } = useFetchUserQuery();

  console.log("data--------", useInsertUserMutation());
  console.log("data--------", useUpdateUserMutation());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="App">
      <h1>User List</h1>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default App;

App.jsx;
