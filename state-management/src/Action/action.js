import { ADD_POST } from "../Constants/constant";
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}
