import CommentItem from './CommentItem'

const CommentsList = (props) => {

  return (
    <ul className='commentsList'>
      {props.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment}/>
      ))}
    </ul>
  );
};

export default CommentsList;
