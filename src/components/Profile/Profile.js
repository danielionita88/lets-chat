import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import { getPosts, reset as resetPosts } from "../../store/posts/postSlice";
import Posts from "../Feed/Posts/Posts";
import FriendsContainer from "./FriendsContainer/FriendsContainer";
import PicturesContainer from "./PicturesContainer/PicturesContainer";
import LoadingSpinner from "../UI/LoadingSpinner";
import "./Profile.css";

const Profile = () => {
  const {user} = useSelector(state => state.auth)
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  const [showPosts, setShowPosts] = useState(true);
  const [showPictures, setShowPictures] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getPosts());
    dispatch(resetPosts());
  }, [isError, message, dispatch]);

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

  const logoutHandler = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/auth')
  };
  
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTop">
          <div className="profileTopUserInfo">
            <div className="profileUserInfo">
              <img src="assets/dwayne.jpeg" alt="big profile" />
              <span className="profileUsername">{user.first_name} {user.last_name}</span>
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
          {isLoading ? <LoadingSpinner/> : (showPosts && <Posts posts={posts}/>) }
          {showFriends && <FriendsContainer />}
          {showPictures && <PicturesContainer />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
