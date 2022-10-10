import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/comments/commentSlice";
import EditIcon from "@mui/icons-material/Edit";
import "./CommentItem.css";

const CommentItem = (props) => {
  const { user } = useSelector((state) => state.auth);
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const {
    _id: comment_id,
    description,
    post_id,
    user_id: { _id: user_id, first_name, last_name, profile_picture },
  } = props.comment;

  const isAuthor = user_id === user._id;

  const deleteCommentHandler = () => {
    dispatch(deleteComment({comment_id, post_id}))
  }

  return (
    <li
      className="comment"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="commentLeft">
        <img
          className="profilePicture"
          src={profile_picture ? profile_picture : "assets/default.jpeg"}
          alt="profile"
        />
      </div>
      <div className="commentCenter">
        <span className="username">
          {first_name} {last_name}
        </span>
        <span className="commentDescription">{description}</span>
      </div>
      <div className="commentRight">
        {hover && isAuthor && (
          <div>
            <button className="deleteCommentButton" onClick={deleteCommentHandler}>X</button>
            <span className="editIcon">
              <EditIcon fontSize="small" />
            </span>
          </div>
        )}
      </div>
    </li>
  );
};

export default CommentItem;
