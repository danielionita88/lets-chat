import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, updateComment } from "../../store/comments/commentSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/CheckCircle";
import "./CommentItem.css";

const CommentItem = (props) => {
  const { user } = useSelector((state) => state.auth);
  const userInputRef = useRef();
  const [hover, setHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const {
    _id: commentId,
    description,
    post,
    user: { _id: userId, firstName, lastName, profilePicture },
  } = props.comment;

  const isAuthor = userId === user._id;

  const deleteCommentHandler = () => {
    dispatch(deleteComment({ commentId, postId: post }));
  };

  const updateCommentHandler = () => {
    dispatch(updateComment({
      commentId,
      description: userInputRef.current.value
    }))
  };

  const onEditHandler = () => {
    setIsEditing(true);
  };

  const onCancelEditHandler = () => {
    setIsEditing(false);
  };

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
        {isEditing ? (
          <input
            className="commentInput"
            type="textarea"
            placeholder="Write a comment"
            ref={userInputRef}
            defaultValue={description}
          />
        ) : (
          <span className="commentDescription">{description}</span>
        )}
      </div>
      <div className="commentRight">
        {hover && isAuthor && !isEditing && (
          <div>
            <span onClick={deleteCommentHandler}>
              <DeleteIcon className="commentIcon" fontSize="small" />
            </span>
            <span className="commentIcon">
              <EditIcon onClick={onEditHandler} fontSize="small" />
            </span>
          </div>
        )}
        {isEditing && (
          <div>
            <span className="commentIcon">
              <CancelIcon onClick={onCancelEditHandler} fontSize="small" />
            </span>
            <span className="commentIcon">
              <CheckIcon onClick={updateCommentHandler} fontSize="small" />
            </span>
          </div>
        )}
      </div>
    </li>
  );
};

export default CommentItem;
