import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <div className="navigationMenu">
      <div className="navigationLeft">
        <span className="logo">Let'sChat</span>
      </div>
      <div className="navigationCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search friends or posts"
          />
        </div>
      </div>
      <div className="navigationRight">
        <span className="navigationMenuItem">
          <HomeIcon />
        </span>
        <span className="navigationMenuItem">
          <NotificationsIcon />
          <span className="navigationMenuIconBadge">1</span>
        </span>
        <span className="navigationMenuItem">
          <img
            src="/assets/dwayne-the-rock.jpeg"
            alt="profile"
            className="navigationMenuImg"
          />
        </span>
      </div>
    </div>
  );
};

export default NavigationMenu;
