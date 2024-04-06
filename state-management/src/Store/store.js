import { combineReducers, createStore } from "redux";
import postReducer from "../Reducer/postReducer";
import productReducer from "../Reducer/productReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  products: productReducer
});

const store = createStore(rootReducer);

export default store;
