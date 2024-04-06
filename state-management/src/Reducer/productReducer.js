const initialState = {
  products: [
    {
      id: 1,
      title: "Post 1",
      body: "This is post 1",
    },
  ],
};
function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        products: [...state.products, action.post],
      };
    default:
      return state;
  }
}

export default productReducer;
