import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";

function App() {
  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {
      console.log("something went wrong");
      throw error;
    }
  }
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Posts"],
    queryFn: getPosts,
    refetchOnWindowFocus: false,
    refetchInterval: 1500,
    staleTime: 1500,
  });

  return (
    <>
      {isLoading && <h1>Loading...</h1>}

      {isError && <h1>Error</h1>}

      {posts?.length > 0 &&
        posts.map((user) => (
          <div key={user.id}>
            <h1>{user.title}</h1>
            <p>{user.body}</p>
          </div>
        ))}
    </>
  );
}

export default App;
