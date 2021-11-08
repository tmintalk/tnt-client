import React, { useEffect, useState } from "react";

import "./index.css";
import useChat from "../../useChat";
import ChatMessage from "../ChatMessage";
import useTyping from "../../useTyping";
import NewMessageForm from "../NewMessageForm";
import TypingMessage from "../TypingMessage";
import Users from "../Users";
import UserAvatar from "../UserAvatar";

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const {
    messages,
    curUser,
    users,
    typingUsers,
    sendMessage,
    startTypingMessage,
    stopTypingMessage,
  } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");

  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    cancelTyping();
    if (!newMessage) {
      alert("내용을 입력하세요");
    } else {
      sendMessage(newMessage);
    }

    setNewMessage("");
  };

  useEffect(() => {
    if (isTyping) startTypingMessage();
    else stopTypingMessage();
  }, [isTyping]);

  return (
    <div className="chat-room-container">
      <div className="chat-room-top-bar">
        <h1 className="room-name">Room: {roomId}</h1>
        {curUser && <UserAvatar user={curUser}></UserAvatar>}
      </div>
      {/* <Users users={users}></Users> */}
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li key={i}>
              <ChatMessage message={message} curUser={curUser}></ChatMessage>
            </li>
          ))}
          {typingUsers.map((user, i) => (
            <li key={messages.length + i}>
              <TypingMessage user={user}></TypingMessage>
            </li>
          ))}
        </ol>
      </div>
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleStartTyping={startTyping}
        handleStopTyping={stopTyping}
        handleSendMessage={handleSendMessage}
      ></NewMessageForm>
    </div>
  );
};

export default ChatRoom;
