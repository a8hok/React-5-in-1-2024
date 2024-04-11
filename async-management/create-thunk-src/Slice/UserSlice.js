import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../Fetcher/userFetcher";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = "fullfilled";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    });
  },
});

export default userSlice.reducer;
