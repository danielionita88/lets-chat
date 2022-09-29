import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, resetPosts} from "../../../store/posts/postSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "../../UI/LoadingSpinner";
import PostsList from "./PostsList";
import "./Posts.css";

const Posts = (props) => {
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getPosts());
    dispatch(resetPosts())
  }, [isError, message,dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="postsContainer">
      {posts.length > 0 ? (
        <PostsList posts={posts} />
      ) : (
        <p>You have no posts!</p>
      )}
    </div>
  );
};

export default Posts;
