import Share from "./Share/Share";
import Posts from "./Posts/Posts";
import "./Feed.css";

const Feed = () => {

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
