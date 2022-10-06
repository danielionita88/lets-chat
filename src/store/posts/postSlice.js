import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import s3Service from "../s3/s3Service";
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
      const {description, picture} = postData
      const token = thunkAPI.getState().auth.user.token;
      if (picture) {
        const pictureUrl = await s3Service.uploadPicture(picture, token);
        return await postsService.createPost({image_url: pictureUrl, description}, token)
      }
      return await postsService.createPost({description}, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await postsService.getPosts(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (postId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await postsService.deletePost(postId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async (likeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await postsService.likePost(likeData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
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
    resetPosts: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts.unshift(action.payload);
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
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload.id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const likedPostIndex = state.posts.findIndex(post => post._id === action.payload.post_id)
        if(state.posts[likedPostIndex].likes.includes(action.payload.user_id)){
          const updatedLikes = state.posts[likedPostIndex].likes.filter(id => id !== action.payload.user_id) 
          state.posts[likedPostIndex].likes = updatedLikes
        }else{
          state.posts[likedPostIndex].likes.push(action.payload.user_id)
        }
      })
      .addCase(likePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { resetPosts } = postsSlice.actions;
export default postsSlice.reducer;
