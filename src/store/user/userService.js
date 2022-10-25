import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const searchFriends = async (userName) => {
  const response = await axios.get(API_URL + `?search=${userName}`);

  return response.data;
};

const userService = {
  searchFriends,
};

export default userService;
