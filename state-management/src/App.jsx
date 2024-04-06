import { connect } from "react-redux";
import "./App.css";
import AddPost from "./components/AddPost";

function App({ posts }) {
  return (
    <>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
      <AddPost />
    </>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    posts: state.posts.posts,
  };
}

// export default App;
export default connect(mapStateToProps)(App);
