import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  searchResults: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const searchFriends = createAsyncThunk(
  "auth/searchFriends",
  async (searchData, thunkAPI) => {
    try {
      return await userService.searchFriends(searchData);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.searchResults = [];
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFriends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.searchResults = action.payload;
      })
      .addCase(searchFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.searchResults = [];
      });
  },
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
