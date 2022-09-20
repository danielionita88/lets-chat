import image from '../../../assets/dwayne.jpeg'
import FriendsList from './FriendsList';
import './FriendsContainer.css'

const FRIENDS_DUMMIES = [
  { id: "f1", first_name: "Mark", last_name: "Whalberg",profile_picture: image},
  { id: "f2", first_name: "Johhny", last_name: "Depp", profile_picture: image},
  { id: "f3", first_name: "Al", last_name: "Pacinno", profile_picture: image},
  { id: "f4", first_name: "Bugs", last_name: "Bunny", profile_picture: image},
  { id: "f1", first_name: "Mark", last_name: "Whalberg",profile_picture: image},
  { id: "f2", first_name: "Johhny", last_name: "Depp", profile_picture: image},
  { id: "f3", first_name: "Al", last_name: "Pacinno", profile_picture: image},
  { id: "f4", first_name: "Bugs", last_name: "Bunny", profile_picture: image},
  { id: "f1", first_name: "Mark", last_name: "Whalberg",profile_picture: image},
  { id: "f2", first_name: "Johhny", last_name: "Depp", profile_picture: image},
  { id: "f3", first_name: "Al", last_name: "Pacinno", profile_picture: image},
  { id: "f4", first_name: "Bugs", last_name: "Bunny", profile_picture: image},
  { id: "f1", first_name: "Mark", last_name: "Whalberg",profile_picture: image},
  { id: "f2", first_name: "Johhny", last_name: "Depp", profile_picture: image},
  { id: "f3", first_name: "Al", last_name: "Pacinno", profile_picture: image},
  { id: "f4", first_name: "Bugs", last_name: "Bunny", profile_picture: image},
  { id: "f1", first_name: "Mark", last_name: "Whalberg",profile_picture: image},
  { id: "f2", first_name: "Johhny", last_name: "Depp", profile_picture: image},
  { id: "f3", first_name: "Al", last_name: "Pacinno", profile_picture: image},
  { id: "f4", first_name: "Bugs", last_name: "Bunny", profile_picture: image},
];

const FRIENDS_REQUESTS = [
  { id: "f1", first_name: "Mark", last_name: "Whalberg",profile_picture: image},
  { id: "f2", first_name: "Johhny", last_name: "Depp", profile_picture: image},
]

const FriendsContainer = () => {
  return (
      <div className="friendsContainerWrapper">
        <div>
          <h3>Friends Requests</h3>
          <FriendsList friends = {FRIENDS_REQUESTS}/>
        </div>
        <div>
          <h3>Friends</h3>
        <FriendsList friends={FRIENDS_DUMMIES}/>
        </div>
      </div>
  );
};

export default FriendsContainer;
