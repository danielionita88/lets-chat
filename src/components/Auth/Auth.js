import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const submitFormHandler = (data, option) => {
    if (option === "register") {
      fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          password: data.password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    } else {
      fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
  };

  const createAccountHandler = () => {
    setIsLogin(false);
  };
  const cancelRegisterHandler = () => {
    setIsLogin(true);
  };

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
          {isLogin ? (
            <LoginForm
              onLogin={submitFormHandler}
              onCreateAccount={createAccountHandler}
            />
          ) : (
            <RegisterForm
              onRegister={submitFormHandler}
              onCancelRegister={cancelRegisterHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
