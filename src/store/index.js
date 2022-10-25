import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import postReducer from "./posts/postSlice";
import commentReducer from "./comments/commentSlice";
import userReducer from "./user/userSlice";


const store = configureStore({
  reducer: { auth: authReducer, posts: postReducer, comments: commentReducer, user: userReducer },
});

export default store;
