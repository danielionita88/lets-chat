import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    getPosts: () => {}
  }
});
export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
