import { useRef } from "react";
import "./Auth.css";

const RegisterForm = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

    if (password === confirmPassword) {
      props.onRegister(
        {
          firstName,
          lastName,
          email,
          password,
        },
        "register"
      );
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="loginForm">
      <input type="text" placeholder="First Name" ref={firstNameInputRef} />
      <input type="text" placeholder="Last Name" ref={lastNameInputRef} />
      <input type="email" placeholder="Your e-mail" ref={emailInputRef} />
      <input
        type="password"
        placeholder="Your password"
        ref={passwordInputRef}
      />
      <input
        type="password"
        placeholder="Confirm password"
        ref={confirmPasswordInputRef}
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
