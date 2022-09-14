import ChatFriend from './ChatFriend';

const ChatList = props => {
    return <ul>
        {props.friends.map(friend => <ChatFriend key={friend.id} friend={friend}/>)}
    </ul>
}

export default ChatList;