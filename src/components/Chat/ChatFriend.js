import './ChatFriend.css'

const ChatFriend = (props) => {
  return (
    <li className="friend">
      <div className='profileImg'>
        <img src="assets/dwayne.jpeg" alt="profile" />
      <span className='onlineBadge'/>
      </div>
      {props.friend.firstName} {props.friend.lastName}
    </li>
  );
};

export default ChatFriend;
