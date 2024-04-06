const initialState = {
  posts: [
    {
      id: 1,
      title: "Post 1",
      body: "This is post 1",
    },
  ],
};
function postReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    default:
      return state;
  }
}

export default postReducer;
