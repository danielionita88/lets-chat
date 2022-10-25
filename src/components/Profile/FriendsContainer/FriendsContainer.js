import image from "../../../assets/dwayne.jpeg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, searchFriends } from "../../../store/user/userSlice";
import FriendsList from "./FriendsList";
import SearchResultsPreview from "./SearchResultsPreview";
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
  const [searchSubmited, setSearchSubmited] = useState(false)
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInput.length >= 2) {
      dispatch(searchFriends({userInput, searchSubmited}));
    } else {
      dispatch(resetUser());
      setSearchSubmited(false)
    }
  }, [dispatch, userInput, searchSubmited]);

  const userInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const searchFriendsHandler = (e) => {
    e.preventDefault();
    dispatch(searchFriends({userInput, searchSubmited}));
    setSearchSubmited(true)
  };

  let friends = FRIENDS_DUMMIES
  if(searchSubmited){
    friends = searchResults
  }

  return (
    <div className="friendsContainerWrapper">
      <form onSubmit={searchFriendsHandler} className="searchBar">
        <SearchIcon className="searchIcon" />
        <input
          className="searchInput"
          placeholder="Search friends"
          value={userInput}
          onChange={userInputHandler}
        />
      </form>
      {!searchSubmited && <SearchResultsPreview results={searchResults} />}
      {searchSubmited ? <h3>Search Results</h3> : <h3>Friends</h3>}
      <FriendsList friends={friends} />
  
    </div>
  );
};

export default FriendsContainer;
