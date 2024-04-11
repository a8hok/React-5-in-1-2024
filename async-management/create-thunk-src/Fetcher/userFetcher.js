import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk
// Type(action type) -> string
// payloadCreator func
// pending, fulfilled, rejected
export const fetchUser = createAsyncThunk("user/fetch", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});
