import image from '../../../assets/dwayne.jpeg'
import FriendsList from './FriendsList';
import './FriendsContainer.css'

const FRIENDS_DUMMIES = [
  { id: "f1", firstName: "Mark", lastName: "Whalberg",profilePicture: image},
  { id: "f2", firstName: "Johhny", lastName: "Depp", profilePicture: image},
  { id: "f3", firstName: "Al", lastName: "Pacinno", profilePicture: image},
  { id: "f4", firstName: "Bugs", lastName: "Bunny", profilePicture: image},
  { id: "f1", firstName: "Mark", lastName: "Whalberg",profilePicture: image},
  { id: "f2", firstName: "Johhny", lastName: "Depp", profilePicture: image},
  { id: "f3", firstName: "Al", lastName: "Pacinno", profilePicture: image},
  { id: "f4", firstName: "Bugs", lastName: "Bunny", profilePicture: image},
  { id: "f1", firstName: "Mark", lastName: "Whalberg",profilePicture: image},
  { id: "f2", firstName: "Johhny", lastName: "Depp", profilePicture: image},
  { id: "f3", firstName: "Al", lastName: "Pacinno", profilePicture: image},
  { id: "f4", firstName: "Bugs", lastName: "Bunny", profilePicture: image},
  { id: "f1", firstName: "Mark", lastName: "Whalberg",profilePicture: image},
  { id: "f2", firstName: "Johhny", lastName: "Depp", profilePicture: image},
  { id: "f3", firstName: "Al", lastName: "Pacinno", profilePicture: image},
  { id: "f4", firstName: "Bugs", lastName: "Bunny", profilePicture: image},
  { id: "f1", firstName: "Mark", lastName: "Whalberg",profilePicture: image},
  { id: "f2", firstName: "Johhny", lastName: "Depp", profilePicture: image},
  { id: "f3", firstName: "Al", lastName: "Pacinno", profilePicture: image},
  { id: "f4", firstName: "Bugs", lastName: "Bunny", profilePicture: image},
];

const FRIENDS_REQUESTS = [
  { id: "f1", firstName: "Mark", lastName: "Whalberg",profilePicture: image},
  { id: "f2", firstName: "Johhny", lastName: "Depp", profilePicture: image},
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
