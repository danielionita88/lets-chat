import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const registerUser = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const loginUser = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logoutUser = () => {
  localStorage.removeItem("user");
};

const updateUser = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + userData.userId,
    userData,
    config
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const searchFriends = async (userName) => {
  const response = await axios.get(API_URL + `search?=${userName}`);

  return response.data;
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  searchFriends,
};

export default authService;
