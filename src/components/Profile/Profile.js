import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser, resetUser } from "../../store/auth/authSlice";
import { resetPosts } from "../../store/posts/postSlice";
import Posts from "../Feed/Posts/Posts";
import FriendsContainer from "./FriendsContainer/FriendsContainer";
import PicturesContainer from "./PicturesContainer/PicturesContainer";
import EditContainer from "./EditContainer/EditContainer";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./Profile.css";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const [showPictures, setShowPictures] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showPostsHandler = () => {
    setShowPosts(true);
    setShowPictures(false);
    setShowFriends(false);
  };
  const showFriendsHandler = () => {
    setShowPosts(false);
    setShowPictures(false);
    setShowFriends(true);
  };
  const showPicturesHandler = () => {
    setShowPosts(false);
    setShowPictures(true);
    setShowFriends(false);
  };

  const showEditFormHandler = () => {
    setShowEditForm(true);
  };
  const hideEditFormHandler = () => {
    setShowEditForm(false);
  };

  const pictureSelectHandler = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedPicture(selectedFile);
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(resetUser());
    dispatch(resetPosts());
    navigate("/auth");
  };

  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTop">
          <div className="profileTopUserInfo">
            <div className="profileUserInfo">
              <form className="profilePictureContainer">
                <img
                  src={
                    selectedPicture
                      ? URL.createObjectURL(selectedPicture)
                      : "/assets/dwayne.jpeg"
                  }
                  alt="big profile"
                />
              </form>
              <span className="profileUsername">
                {user.first_name} {user.last_name}
              </span>
              <span className="profileFriendsCounter">999 Friends</span>
            </div>
            <div className="profileUserDetails">
              <h4>User Information</h4>
              <div className="userDetailsItem">
                <span className="userDetailKey">Location: </span>
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
              <button onClick={logoutHandler}> LogOut </button>
              <button onClick={showEditFormHandler}>Edit</button>
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
          {showPosts && <Posts />}
          {showFriends && <FriendsContainer />}
          {showPictures && <PicturesContainer />}
          {showEditForm && <EditContainer onClose={hideEditFormHandler} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
