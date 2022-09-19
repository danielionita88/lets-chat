import './Login.css'

const LoginForm = () => {
  return (
    <form className="loginForm">
      <input type="email" placeholder="Your email" />
      <input type="password" placeholder="Your password" />
      <button className="formButton">Log In</button>
      <button className="formButton" style={{ backgroundColor: "green" }}>
        Create new account
      </button>
    </form>
  );
};

export default LoginForm;