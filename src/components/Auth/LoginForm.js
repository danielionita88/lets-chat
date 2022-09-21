import { useState } from "react";
import "./Auth.css";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onLogin(formData, "login");
  };

  return (
    <form onSubmit={onSubmitHandler} className="loginForm">
      <input
        type="email"
        placeholder="Your email"
        name="email"
        value={email}
        onChange={changeHandler}
      />
      <input
        type="password"
        placeholder="Your password"
        name="password"
        value={password}
        onChange={changeHandler}
      />
      <button className="formButton">Log In</button>
      <button
        className="formButton"
        style={{ backgroundColor: "green" }}
        onClick={props.onCreateAccount}
      >
        Create new account
      </button>
    </form>
  );
};

export default LoginForm;
