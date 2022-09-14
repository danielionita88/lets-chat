import Posts from "../Feed/Posts/Posts";
import FriendsContainer from "./FriendsContainer/FriendsContainer";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTop">
          <div className="profileUserInfo">
            <img src="assets/dwayne.jpeg" alt="big profile" />
            <span className="profileUsername">Dwayne Johnson</span>
            <span className="profileFriendsCounter">999 Friends</span>
          </div>
          <hr />
          <div className="profileOptions">
            <div className="profileOption">
              <span>Posts</span>
            </div>
            <div className="profileOption">
              <span>Friends</span>
            </div>
            <div className="profileOption">
              <span>Pictures</span>
            </div>
          </div>
        </div>
        <div className="profileCenter">
          {/* <Posts /> */}
          <FriendsContainer/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
