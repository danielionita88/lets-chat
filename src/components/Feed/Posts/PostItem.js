import { useSelector, useDispatch } from "react-redux";
import {deletePost} from '../../../store/posts/postSlice'
import "./PostItem.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const PostItem = (props) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { user_id, _id : postId,first_name, last_name, description, imageUrl, createdAt } = props.post;

  let date = new Date(createdAt);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date.getMonth()
  );
  const dateNumber = date.getDate();
  const time = date.toLocaleTimeString();

  const deletePostHandler = (postId) => {
    dispatch(deletePost(postId))
  };

  return (
    <li className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img src="assets/dwayne.jpeg" alt="profile" />
          <span className="postUsername">
            {first_name} {last_name}
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
            {user._id === user_id && (
              <span className="postIcon" onClick={() => deletePostHandler(postId)}>
                <DeleteForeverIcon htmlColor="red" />
              </span>
            )}
            <span className="postIcon">
              <ThumbUpIcon htmlColor="blue" />
            </span>
            <span className="postIcon">
              <CommentIcon htmlColor="grey" />
            </span>
            <span className="postIcon">
              <ShareIcon />
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">x comments</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
