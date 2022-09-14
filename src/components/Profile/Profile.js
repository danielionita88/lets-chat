import { useState } from "react";
import Posts from "../Feed/Posts/Posts";
import FriendsContainer from "./FriendsContainer/FriendsContainer";
import PicturesContainer from './PicturesContainer/PicturesContainer'
import "./Profile.css";

const Profile = () => {
  const [showPosts, setShowPosts] = useState(true)
  const [showPictures, setShowPictures] = useState(false)
  const [showFriends, setShowFriends] = useState(false)

  const showPostsHandler = () => {
    setShowPosts(true);
    setShowPictures(false);
    setShowFriends(false)
  }
  const showFriendsHandler = () => {
    setShowPosts(false);
    setShowPictures(false);
    setShowFriends(true)
  }
  const showPicturesHandler = () => {
    setShowPosts(false);
    setShowPictures(true);
    setShowFriends(false)
  }
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTop">
          <div className="profileTopUserInfo">
          <div className="profileUserInfo">
            <img src="assets/dwayne.jpeg" alt="big profile" />
            <span className="profileUsername">Dwayne Johnson</span>
            <span className="profileFriendsCounter">999 Friends</span>
          </div>
          <div className="profileUserDetails">
            <h4>User Information</h4>
            <div className="userDetailsItem">
            <span className="userDetailKey">City: </span>
            <span className="userDetailValue">Chicago</span>
            </div>
            <div className="userDetailsItem">
            <span className="userDetailKey">From: </span>
            <span className="userDetailValue">Paris, France</span>
            </div>
            <div className="userDetailsItem">
            <span className="userDetailKey">Relationship Status: </span>
            <span className="userDetailValue">Single</span>
            </div>
          </div>
          </div>
          <hr />
          <div className="profileOptions">
            <div onClick={showPostsHandler} className="profileOption">
              <span>Posts</span>
            </div>
            <div onClick={showFriendsHandler} className="profileOption">
              <span>Friends</span>
            </div>
            <div onClick={showPicturesHandler} className="profileOption">
              <span>Pictures</span>
            </div>
          </div>
        </div>
        <div className="profileCenter">
        {showPosts && <Posts/>}
        {showFriends && <FriendsContainer/>}
        {showPictures && <PicturesContainer/>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
