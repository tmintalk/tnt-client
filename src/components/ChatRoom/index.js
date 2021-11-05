import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import useChat from "../../useChat";
import ChatMessage from "../ChatMessage";
import NewMessageForm from "../NewMessageForm";
import io from "socket.io-client";
import "./index.css";

const ChatRoom = (props) => {
  console.log(props.match);
  const { roomId } = props.match.params;
  const { messages, user, users, sendMessage } = useChat(roomId);

  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <div className="chat-room-top-bar">
        <h1 className="room-name">Room: {roomId}</h1>
      </div>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li key={i}>
              <ChatMessage message={message}></ChatMessage>
            </li>
          ))}
        </ol>
      </div>
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleSendMessage={handleSendMessage}
      ></NewMessageForm>
    </div>
  );
};

export default ChatRoom;
