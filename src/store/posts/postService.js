import axios from "axios";

const API_URL = "http://localhost:8080/api/posts/";

const getPosts = async (userId) => {
  const response = await axios.get(API_URL, userId);
  return response.data;
};

const postsService = {
  getPosts,
};

export default postsService;
