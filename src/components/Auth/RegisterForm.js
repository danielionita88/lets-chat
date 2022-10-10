import { useState } from "react";
import { toast } from "react-toastify";
import "./Auth.css";

const RegisterForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      props.onRegister({
        firstName,
        lastName,
        email,
        password
      });
    } else {
      toast.error("Passwords do not match!")
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="loginForm">
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={firstName}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        onChange={changeHandler}
      />
      <input
        type="email"
        placeholder="Your e-mail"
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
      <input
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={changeHandler}
      />
      <button className="formButton">Sign Up</button>
      <button
        className="formButton"
        onClick={props.onCancelRegister}
        style={{ backgroundColor: "red" }}
      >
        Cancel
      </button>
    </form>
  );
};

export default RegisterForm;
