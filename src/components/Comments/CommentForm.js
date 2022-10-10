import { useRef } from "react";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import "./CommentForm.css";

const CommentForm = (props) => {
  const { user } = useSelector((state) => state.auth);
  const userInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCreateComment({
      user: user._id,
      description: userInputRef.current.value,
    });
    userInputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className="commentForm">
      <div className="formLeft">
        <img
          className="profilePicture"
          src={
            user.profilePicture ? user.profilePicture : "assets/default.jpeg"
          }
          alt="profile"
        />
      </div>
      <div className="formCenter">
        <input
          className="commentInput"
          type="textarea"
          placeholder="Write a comment"
          ref={userInputRef}
        />
      </div>
      <div className="formRight">
        <button className="submitCommentButton" type="submit">
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
