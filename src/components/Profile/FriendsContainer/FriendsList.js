import FriendItem from './FriendItem'

const FriendsList = (props) => {
    return <ul>
        {props.friends.map(friend => <FriendItem key={friend._id} friend={friend}/> )}
    </ul>
}

export default FriendsList;