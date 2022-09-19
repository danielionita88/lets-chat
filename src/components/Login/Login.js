import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./Login.css";

const Login = () => {
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
          <RegisterForm />
          {/* <LoginForm/> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
