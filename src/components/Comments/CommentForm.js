import { useRef } from "react";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import "./CommentForm.css";

const CommentForm = () => {
  const { user } = useSelector((state) => state.auth);
  const userInputRef = useRef();

  const submitHandler = () => {
    
  }

  return (
    <form onSubmit={submitHandler}className="commentForm">
      <img className='profilePicture'
        src={user.profile_picture ? user.profile_picture : "assets/default.jpeg"}
        alt="profile"
      />
      <input
        className="commentInput"
        type="textarea"
        placeholder="Write a comment"
        ref={userInputRef}
      />
      <button className='submitCommentButton'type="submit">
        <SendIcon />
      </button>
    </form>
  );
};

export default CommentForm;
