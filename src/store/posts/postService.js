import axios from "axios";

const API_URL = "http://localhost:8080/api/posts/";
const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const createPost = async (postData, token) => {
  const response = await axios.post(API_URL, postData, config(token));
  return response.data;
};

const getPosts = async (token) => {
  const response = await axios.get(API_URL, config(token));
  return response.data;
};

const deletePost = async (postId, token) => {
  const response = await axios.delete(API_URL + postId, config(token));

  return response.data;
};

const likePost = async (likeData, token) => {
  const response = await axios.patch(
    API_URL + likeData.post_id + "/like",
    likeData,
    config(token)
  );
  return response.data;
};

const postsService = {
  getPosts,
  createPost,
  deletePost,
  likePost,
};

export default postsService;
