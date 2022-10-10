import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentsService from "./commentService";

const initialState = {
  comments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createComment = createAsyncThunk(
  "comments/create",
  async (commentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await commentsService.createComment(commentData, token);
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

export const getComments = createAsyncThunk(
  "comments/get",
  async (postId, thunkAPI) => {
    try {
      return await commentsService.getComments(postId);
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

export const deleteComment = createAsyncThunk(
  "comments/delete",
  async (commentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await commentsService.deleteComment(commentData, token);
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

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
      resetComments: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createComment.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createComment.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.comments.unshift(action.payload);
        })
        .addCase(createComment.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
        .addCase(getComments.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getComments.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          const comments = [...state.comments, ...action.payload]
          state.comments = [...new Set(comments.map(comment => JSON.stringify(comment)))].map(comment => JSON.parse(comment))
        })
        .addCase(getComments.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
        .addCase(deleteComment.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteComment.fulfilled, (state, action) => {console.log(action.payload)
          state.isLoading = false;
          state.isSuccess = true;
          state.comments = state.comments.filter(
            (comment) => comment._id !== action.payload.comment_id
          );
        })
        .addCase(deleteComment.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
    }
})

export const { resetComments } = commentsSlice.actions;
export default commentsSlice.reducer;
