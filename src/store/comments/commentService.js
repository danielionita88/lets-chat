import axios from "axios";

const API_URL = "http://localhost:8080/api/comments/";

const createComment = async (commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL+ commentData.post, commentData, config);
  return response.data;
};

const getComments = async (postId) => {
  const response = await axios.get(API_URL + postId);
  return response.data;
};

const updateComment = async (commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL+commentData.commentId, commentData, config);
  return response.data;
};

const deleteComment = async (commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: commentData,
  };

  const response = await axios.delete(API_URL + commentData.commentId, config);

  return response.data;
};

const commentsService = {
  createComment,
  getComments,
  deleteComment,
  updateComment
};

export default commentsService;
