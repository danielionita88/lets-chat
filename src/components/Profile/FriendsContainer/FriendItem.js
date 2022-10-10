const FriendItem = (props) => {
  const { firstName, lastName, profilePicture } = props.friend;

  return (
    <li className="friendItem">
      <img
        src={profilePicture}
        alt="small-profile"
      />
      <span>
        {firstName} {lastName}
      </span>
     <button className="addButton">+</button>
     <button className="removeButton">-</button>
    </li>
  );
};

export default FriendItem;
