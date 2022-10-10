import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import s3Service from "../s3/s3Service";
import postsService from "./postService";
import { createComment, deleteComment } from "../comments/commentSlice";

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
      const { description, picture } = postData;
      const token = thunkAPI.getState().auth.user.token;
      if (picture) {
        const pictureUrl = await s3Service.uploadPicture(picture, token);
        return await postsService.createPost(
          { imageUrl: pictureUrl, description },
          token
        );
      }
      return await postsService.createPost({ description }, token);
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

export const getPosts = createAsyncThunk("posts/get", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await postsService.getPosts(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

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
        const likedPost = state.posts.find(
          (post) => post._id === action.payload.postId
        );
        if (likedPost.likes.includes(action.payload.userId)) {
          likedPost.likes = likedPost.likes.filter(
            (id) => id !== action.payload.userId
          );
        } else {
          likedPost.likes.push(action.payload.userId);
        }
      })
      .addCase(likePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        const post = state.posts.find(
          (post) => post._id === action.payload.post
        );
        post.comments.push(action.payload._id);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        const post = state.posts.find(
          (post) => post._id === action.payload.postId
        );
        post.comments = post.comments.filter(id => id !== action.payload.commentId)
      });
  },
});

export const { resetPosts } = postsSlice.actions;
export default postsSlice.reducer;
