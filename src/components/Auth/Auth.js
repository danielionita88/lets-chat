import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, loginUser, resetUser } from "../../store/auth/authSlice";
import { resetPosts } from "../../store/posts/postSlice";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import "./Auth.css";

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/home");
    }
    dispatch(resetUser());
    dispatch(resetPosts())
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const loginHandler = (formData) => {
    dispatch(loginUser(formData));
  };

  const registerHandler = (formData) => {
    dispatch(registerUser(formData));
  };

  const createAccountHandler = () => {
    setIsLoggingIn(false);
  };
  const cancelRegisterHandler = () => {
    setIsLoggingIn(true);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTop">
          <h2 className="loginLogo">Let'sChat</h2>
          <span className="logoDescription">
            Connect with friends and the world around you on Let'sChat!
          </span>
        </div>
        <div className="loginBottom">
          {isLoggingIn ? (
            <LoginForm
              onLogin={loginHandler}
              onCreateAccount={createAccountHandler}
            />
          ) : (
            <RegisterForm
              onRegister={registerHandler}
              onCancelRegister={cancelRegisterHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
