import "./PostItem.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const PostItem = (props) => {
  const { first_name, last_name, description, createdAt} = props.post;
  let date = new Date(createdAt)
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date.getMonth()
  );
  
  const dateNumber = date.getDate();
  const time = date.toLocaleTimeString();

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
          <img src="assets/dwayne.jpeg" alt="something that was shared" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postIcon"><ThumbUpIcon htmlColor="blue" /></span>
            <span className="postIcon"><CommentIcon htmlColor="grey" /></span>
            <span className="postIcon"><ShareIcon /></span>
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
