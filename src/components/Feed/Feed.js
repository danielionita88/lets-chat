import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getPosts } from "../../store/posts/postSlice";
import Share from "./Share/Share";
import Posts from "./Posts/Posts";
import LoadingSpinner from "../UI/LoadingSpinner";
import "./Feed.css";

const Feed = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getPosts(user.token));
  }, [user, posts, isError, message, dispatch]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {isLoading ? (
          <LoadingSpinner />
        ) : posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <p>No posts found!</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
