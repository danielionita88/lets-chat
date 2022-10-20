import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../store/posts/postSlice";
import Comments from "../../Comments/Comments";
import "./PostItem.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const PostItem = (props) => {
  const { user } = useSelector((state) => state.auth);
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();

  const {
    _id: postId,
    description,
    imageUrl,
    comments,
    likes,
    createdAt,
    user: { _id: userId, firstName, lastName, profilePicture },
  } = props.post;

  let date = new Date(createdAt);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date.getMonth()
  );
  const dateNumber = date.getDate();
  const time = date.toLocaleTimeString();

  const deletePostHandler = () => {
    dispatch(deletePost(postId));
  };

  const likePostHandler = () => {
    dispatch(likePost({postId, userId}));
  };

  const toggleCommentsHandler = () => {
    setShowComments(!showComments)
  }

  const liked = user.likes.includes(postId);

  return (
    <li className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img
            src={profilePicture ? profilePicture : "assets/default.jpeg"}
            alt="profile"
          />
          <span className="postUsername">
            {firstName} {lastName}
          </span>
          <span className="postDate">
            {month} {dateNumber}, {time}
          </span>
        </div>
        <div className="postCenter">
          <span>{description}</span>
          {imageUrl && <img src={imageUrl} alt="shared" />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {user._id === userId && (
              <span
                className="postIcon"
                onClick={deletePostHandler}
              >
                <DeleteForeverIcon htmlColor="red" />
              </span>
            )}
            <span onClick={likePostHandler} className="postIcon">
              {liked ? <ThumbUpIcon htmlColor="blue" /> : <ThumbUpOffAltIcon htmlColor="blue"/>}
            </span>
            <span className="postIcon" onClick={toggleCommentsHandler}>
              <CommentIcon htmlColor="grey" />
            </span>
            <span className="postIcon">
              <ShareIcon />
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postInfo" onClick={toggleCommentsHandler}>{comments.length} comments</span>
            <span className="postInfo">{likes.length} likes</span>
          </div>
        </div>
        {showComments && <Comments postId={postId}/>}
      </div>
    </li>
  );
};

export default PostItem;
