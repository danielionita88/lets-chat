import { useRef } from "react";
import "./Auth.css";

const LoginForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const onSubmitHandler = (e) =>{
    e.preventDefault()
    const email = emailInputRef.current.value 
    const password = passwordInputRef.current.value
    props.onLogin({email, password},'login' )
  };

  return (
    <form onSubmit={onSubmitHandler} className="loginForm">
      <input type="email" placeholder="Your email" ref={emailInputRef} />
      <input
        type="password"
        placeholder="Your password"
        ref={passwordInputRef}
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
