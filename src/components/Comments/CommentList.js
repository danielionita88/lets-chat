import CommentItem from "./CommentItem";

const CommentList = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
