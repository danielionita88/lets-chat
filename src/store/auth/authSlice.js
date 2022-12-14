import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { likePost } from "../posts/postSlice";
import authService from "./authService";
import s3Service from "../s3/s3Service";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.registerUser(user);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await authService.loginUser(user);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  authService.logoutUser();
});

export const updateUser = createAsyncThunk(
  "auth/update",
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      if (userData.profilePicture) {
        const pictureUrl = await s3Service.uploadPicture(
          userData.profilePicture,
          token
        );
        return await authService.updateUser(
          { ...userData, profilePicture: pictureUrl },
          token
        );
      }
      return await authService.updateUser(userData, token);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = "";
      })
      .addCase(likePost.fulfilled, (state, action) => {
        if(state.user.likes.includes(action.payload.postId)){
          const updatedLikes = state.user.likes.filter(id => id!== action.payload.postId)
          state.user.likes = updatedLikes
          localStorage.setItem('user', JSON.stringify(state.user))
        }else{
        state.user.likes.push(action.payload.postId)
        localStorage.setItem('user', JSON.stringify(state.user))
        }
      })
  },
});

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
