import ChatList from "./ChatList";
import "./Chat.css";

const FRIENDS_DUMMIES = [
  { id: "f1", firstName: "Mark", lastName: "Whalberg", online: false },
  { id: "f2", firstName: "Johhny", lastName: "Depp", online: true },
  { id: "f3", firstName: "Al", lastName: "Pacinno", online: true },
  { id: "f4", firstName: "Bugs", lastName: "Bunny", online: false },
];

const Chat = () => {
  return (
    <div className="chatContainer">
      <div className="chatWrapper">
        <h4>Online Friends</h4>
        <ChatList friends={FRIENDS_DUMMIES} />
      </div>
    </div>
  );
};

export default Chat;
