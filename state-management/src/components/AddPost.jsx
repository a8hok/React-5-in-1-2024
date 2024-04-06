import { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../Action/action";

function AddPost({ addPostInfo }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(e.target.title.value);
    setBody(e.target.body.value);

    const id = 2;

    addPostInfo({ id, title, body });
    console.log(title, body);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <input type="text" name="body" id="body" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addPostInfo: (post) => dispatch(addPost(post)),
  };
}

export default connect(null, mapDispatchToProps)(AddPost);
