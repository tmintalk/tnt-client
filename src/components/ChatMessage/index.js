import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";

const ChatMessage = ({ message, curUser }) => {
  const [isCurUser, setIsCurUser] = useState(false);
  const { user } = useSelector((state) => state);
  useEffect(() => {
    console.log("message list", message);
    if (user?.data) {
      setIsCurUser(message.senderName === user.data.nickname);
      console.log("isCurUser", message.senderName === user.data.nickname);
    }
  }, [user?.data]);

  return (
    <div
      className={`message-item ${
        isCurUser ? "my-message" : "received-message"
      }`}
    >
      {!isCurUser && <div className="message-avatar-container">avatar</div>}

      <div className="message-body-container">
        {!isCurUser && (
          <div className="message-user-name">{message.user.name}</div>
        )}
        <div className="message-body">{message.body}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
