import image from "../../../assets/dwayne.jpeg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, searchFriends } from "../../../store/user/userSlice";
import FriendsList from "./FriendsList";
import ChatList from "../../Chat/ChatList";
import SearchIcon from "@mui/icons-material/Search";
import "./FriendsContainer.css";

const FRIENDS_DUMMIES = [
  { _id: "f1", firstName: "Mark", lastName: "Whalberg", profilePicture: image },
  { _id: "f2", firstName: "Johhny", lastName: "Depp", profilePicture: image },
  { _id: "f3", firstName: "Al", lastName: "Pacinno", profilePicture: image },
  { _id: "f4", firstName: "Bugs", lastName: "Bunny", profilePicture: image },
];

const FriendsContainer = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInput.length >= 2) {
      dispatch(searchFriends(userInput));
    }else{
      dispatch(resetUser())
    }
  }, [dispatch, userInput]);

  const userInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const searchFriendsHandler = (e) => {
    e.preventDefault();
    dispatch(searchFriends(userInput));
  };

  return (
    <div className="friendsContainerWrapper">
      <form onSubmit={searchFriendsHandler} className="searchBar">
        <SearchIcon className="searchIcon" />
        <input
          type="search"
          className="searchBarInput"
          placeholder="Search friends"
          value={userInput}
          onChange={userInputHandler}
        />
      </form>
      <div>
        <ChatList friends={searchResults} />
      </div>
      <div>
        <h3>Friends</h3>
        <FriendsList friends={FRIENDS_DUMMIES} />
      </div>
    </div>
  );
};

export default FriendsContainer;
