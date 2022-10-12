import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser, resetUser } from "../../store/auth/authSlice";
import { resetPosts } from "../../store/posts/postSlice";
import Posts from "../Feed/Posts/Posts";
import FriendsContainer from "./FriendsContainer/FriendsContainer";
import PicturesContainer from "./PicturesContainer/PicturesContainer";
import EditContainer from "./EditContainer/EditContainer";
import "./Profile.css";

const Profile = () => {
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const [showPictures, setShowPictures] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Profile updated succesfully");
    }

    dispatch(resetUser());
  }, [isError, message, isSuccess, dispatch]);

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

  const logoutHandler = () => {
    dispatch(resetUser());
    dispatch(resetPosts());
    dispatch(logoutUser());
    navigate("/auth",{replace: true})
  }

  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTop">
          <div className="profileTopUserInfo">
            <div className="profileUserInfo">
              <form className="profilePictureContainer">
                <img
                  src={
                    user.profilePicture
                      ? user.profilePicture
                      : "/assets/default.jpeg"
                  }
                  alt="big profile"
                />
              </form>
              <span className="profileUsername">
                {user.firstName} {user.lastName}
              </span>
              <span className="profileFriendsCounter">999 Friends</span>
            </div>
            <div className="profileUserDetails">
              <h4>User Information</h4>
              <div className="userDetailsItem">
                <span className="userDetailKey">Location: </span>
                <span className="userDetailValue">
                  {user.currentLocationCity}, {user.currentLocationCountry}
                </span>
              </div>
              <div className="userDetailsItem">
                <span className="userDetailKey">From: </span>
                <span className="userDetailValue">
                  {user.fromCity} {user.fromCountry}
                </span>
              </div>
              <div className="userDetailsItem">
                <span className="userDetailKey">Relationship Status: </span>
                <span className="userDetailValue">{user.relationship}</span>
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
