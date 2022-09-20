import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state,{payload})=>{
      state.posts = payload
    },
  },
});
export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
