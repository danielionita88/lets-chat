import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/home");
  };

  const goProfileHandler = () => {
    navigate("/profile");
  };

  return (
    <div className="navigationMenu">
      <div className="navigationLeft">
        <span onClick={goHomeHandler} className="logo">
          Let'sChat
        </span>
      </div>
      <div className="navigationRight">
        <span onClick={goHomeHandler} className="navigationMenuItem">
          <HomeIcon />
        </span>
        <span className="navigationMenuItem">
          <NotificationsIcon />
          <span className="navigationMenuIconBadge">1</span>
        </span>
        <span onClick={goProfileHandler} className="navigationMenuItem">
          <img
              src={
                user.profilePicture
                  ? user.profilePicture
                  : "/assets/default.jpeg"
              }
              alt="profile"
              className="navigationMenuImg"
            />
        </span>
      </div>
    </div>
  );
};

export default NavigationMenu;
