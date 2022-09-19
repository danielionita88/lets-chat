import "./Login.css";

const RegisterForm = () => {
  return (
    <form className="loginForm">
      <input type="email" placeholder="Your email" />
      <input type="password" placeholder="Your password" />
      <input type="password" placeholder="Confirm password" />
      <button className="formButton">Sign Up</button>
    </form>
  );
};

export default RegisterForm;
