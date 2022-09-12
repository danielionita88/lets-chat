const Friend = (props) => {
  return (
    <li>
      {props.friend.first_name} {props.friend.last_name}
    </li>
  );
};

export default Friend;
