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
  const [showComments, setShowComments] = useState(true);
  const dispatch = useDispatch();

  const {
    _id: post_id,
    description,
    image_url,
    comments,
    likes,
    createdAt,
    user_id: { _id: creator_id, first_name, last_name, profile_picture },
  } = props.post;

  let date = new Date(createdAt);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date.getMonth()
  );
  const dateNumber = date.getDate();
  const time = date.toLocaleTimeString();

  const deletePostHandler = () => {
    dispatch(deletePost(post_id));
  };

  const likePostHandler = () => {
    dispatch(likePost({post_id, user_id:user._id}));
  };

  const toggleCommentsHandler = () => {
    setShowComments(!showComments)
  }

  const liked = user.likes.includes(post_id);

  return (
    <li className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img
            src={profile_picture ? profile_picture : "assets/default.jpeg"}
            alt="profile"
          />
          <span className="postUsername">
            {first_name} {last_name}
          </span>
          <span className="postDate">
            {month} {dateNumber}, {time}
          </span>
        </div>
        <div className="postCenter">
          <span>{description}</span>
          {image_url && <img src={image_url} alt="shared" />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {user._id === creator_id && (
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
            <span className="postIcon">
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
        {showComments && <Comments/>}
      </div>
    </li>
  );
};

export default PostItem;
