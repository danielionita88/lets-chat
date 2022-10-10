import CommentForm from "./CommentForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createComment, getComments } from "../../store/comments/commentSlice";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";
import "./Comments.css";

const Comments = (props) => {
  const dispatch = useDispatch();
  const { comments, isLoading, isError, message } = useSelector(
    (state) => state.comments
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getComments(props.postId));
  }, [dispatch,isError, message, props.postId]);

  const createCommentHandler = (commentData) => {
    dispatch(createComment({ post_id: props.postId, ...commentData }));
  };

  const currentPostComments = comments.filter(comment => comment.post_id === props.postId)

  return (
    <div className="commentsWrapper">
      <hr />
      <CommentForm onCreateComment={createCommentHandler} />
      <hr />
      {isLoading ? <LoadingSpinner /> : <CommentsList comments={currentPostComments} />}
    </div>
  );
};

export default Comments;
