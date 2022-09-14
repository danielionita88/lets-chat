import ChatList from "./ChatList";
import "./Chat.css";

const FRIENDS_DUMMIES = [
  { id: "f1", first_name: "Mark", last_name: "Whalberg", online: false },
  { id: "f2", first_name: "Johhny", last_name: "Depp", online: true },
  { id: "f3", first_name: "Al", last_name: "Pacinno", online: true },
  { id: "f4", first_name: "Bugs", last_name: "Bunny", online: false },
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
