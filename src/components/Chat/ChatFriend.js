import './ChatFriend.css'

const ChatFriend = (props) => {
  return (
    <li className="friend">
      <div className='profileImg'>
        <img src="assets/dwayne.jpeg" alt="profile" />
      <span className='onlineBadge'/>
      </div>
      {props.friend.first_name} {props.friend.last_name}
    </li>
  );
};

export default ChatFriend;
