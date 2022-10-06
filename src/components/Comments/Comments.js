
import CommentForm from "./CommentForm";
import CommentList from './CommentList'
import "./Comments.css";

const Comments = () => {
  return (
    <div className="commentsWrapper">
      <hr />
      <CommentForm />
      <hr />
      {/* <CommentList comments={postComments}/> */}
    </div>
  );
};

export default Comments;
