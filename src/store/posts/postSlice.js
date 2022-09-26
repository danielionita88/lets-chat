import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postService";

const initialState = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createPost = createAsyncThunk(
  "posts/create",
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postsService.createPost(postData, token)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postsService.getPosts(token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(createPost.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.posts.push(action.payload)
    })
    .addCase(createPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    })
    .addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.posts = action.payload;
    })
    .addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    })
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
