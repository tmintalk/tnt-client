import React, { useEffect, useState } from "react";
import {
  IoPaperPlaneOutline,
  IoEllipsisVertical,
  IoArrowBack,
} from "react-icons/io5";

import "./index.scss";
import useChat from "../../useChat";
import ChatMessage from "../ChatMessage";
import useTyping from "../../useTyping";
import NewMessageForm from "../NewMessageForm";
import TypingMessage from "../TypingMessage";
import { useSelector } from "react-redux";
import Users from "../Users";
import UserAvatar from "../UserAvatar";

const ChatRoom = (props) => {
  const { user } = useSelector((state) => state);
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
  const [friendName, setFriendName] = useState("");
  useEffect(() => {
    const splitNames = roomId?.split(" and ");
    const friend =
      splitNames[0] === user?.data?.nickname ? splitNames[1] : splitNames[0];
    setFriendName(friend);
  }, [friendName]);

  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

  const goBack = () => {
    props.history.goBack();
  };
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
    <>
      <div className="chatRoom-header-container">
        <button class="back-btn" type="button" onClick={goBack}>
          {" "}
          <IoArrowBack className="back-icon" />
        </button>
        <img src={require("../../commons/img/TnT.png").default} alt="title" />
        <div class="empty"></div>
      </div>

      <div class="chatRoom-container">
        <div class="chatRoom-chatbox">
          <div class="chatRoom-top-bar">
            <div className="chatRoom-profile">
              <div class="chatRoom-profile-photo"></div>
              <div class="chatRoom-counterperson"> {friendName} </div>
            </div>
            <div class="chatRoom-menu">
              <button class="menu-btn" type="button">
                {" "}
                <IoEllipsisVertical className="menu-icon" />
              </button>
            </div>
          </div>

          <div className="chatRoom-middle">
            <ol className="chatRoom-chatting-container">
              {messages.map((message, i) => (
                <li key={i}>
                  <ChatMessage
                    message={message}
                    curUser={curUser}
                  ></ChatMessage>
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
      </div>
    </>
  );
};

export default ChatRoom;
