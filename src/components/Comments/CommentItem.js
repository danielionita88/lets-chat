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
    _id: commentId,
    description,
    post,
    user: { _id: userId, firstName, lastName, profilePicture },
  } = props.comment;

  const isAuthor = userId === user._id;

  const deleteCommentHandler = () => {
    dispatch(deleteComment({commentId, postId: post}))
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
          src={profilePicture ? profilePicture : "assets/default.jpeg"}
          alt="profile"
        />
      </div>
      <div className="commentCenter">
        <span className="username">
          {firstName} {lastName}
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
