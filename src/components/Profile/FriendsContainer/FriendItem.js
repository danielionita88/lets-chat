const FriendItem = (props) => {
  const { first_name, last_name, profile_picture } = props.friend;

  return (
    <li className="friendItem">
      <img
        src={profile_picture}
        alt="small-profile"
      />
      <span>
        {first_name} {last_name}
      </span>
     <button className="addButton">+</button>
     <button className="removeButton">-</button>
    </li>
  );
};

export default FriendItem;
