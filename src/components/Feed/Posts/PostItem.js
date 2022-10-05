import { useSelector, useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../store/posts/postSlice";
import "./PostItem.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const PostItem = (props) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    _id: postId,
    description,
    image_url,
    comments,
    likes,
    createdAt,
    user_id: { _id: user_id, first_name, last_name, profile_picture },
  } = props.post;

  let date = new Date(createdAt);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date.getMonth()
  );
  const dateNumber = date.getDate();
  const time = date.toLocaleTimeString();

  const deletePostHandler = (postId) => {
    dispatch(deletePost(postId));
  };

  const likePostHandler = (postId) => {
    dispatch(likePost(postId));
  };

  const liked = user.likes.includes(postId);

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
            {user._id === user_id && (
              <span
                className="postIcon"
                onClick={() => deletePostHandler(postId)}
              >
                <DeleteForeverIcon htmlColor="red" />
              </span>
            )}
            <span onClick={() => likePostHandler(postId)} className="postIcon">
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
            <span className="postCommentText">{comments.length} comments</span>
            <span className="postCommentText">{likes.length} likes</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
