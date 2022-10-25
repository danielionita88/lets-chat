import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const searchFriends = async (searchData) => {
  let response
  if (!searchData.searchSubmited) {
    response = await axios.get(API_URL + `?search=${searchData.userInput}&limit=5`)
  }else{
    response = await axios.get(API_URL + `?search=${searchData.userInput}&limit=20`);
  }
  return response.data;
};

const userService = {
  searchFriends,
};

export default userService;
