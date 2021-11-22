import React, { useEffect, useState, useRef } from "react";
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
import { Link } from "react-router-dom";
import Users from "../Users";
import UserAvatar from "../UserAvatar";
import axios from "axios";

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
  const [friendInfo, setFriendInfo] = useState();
  const messagesEndRef = useRef();
  useEffect(() => {
    const splitNames = roomId?.split(" and ");
    const friend =
      splitNames[0] === user?.data?.nickname ? splitNames[1] : splitNames[0];
    setFriendName(friend);
    const fetchFriend = async () => {
      const response = await axios.get(`users/find/${friend}`);
      const result = response.data;
      setFriendInfo(result);
      console.log(result);
    };
    fetchFriend();
  }, [user?.data]);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [messages]);

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
      {/* <div className="header-container">
        채팅화면
        <div class="empty"></div>
      </div> */}

      <div class="chatRoom-container">
        <div class="chatRoom-chatbox">
          <div className="chatRoom-middle">
            <ol className="chatRoom-chatting-container">
              {messages.map((message, i) => (
                <li key={i}>
                  <ChatMessage
                    message={message}
                    messages={messages}
                    index={i}
                    curUser={curUser}
                    friendInfo={friendInfo}
                    thumbnailUrl={friendInfo?.thumbnailUrl}
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
          <div ref={messagesEndRef} />

          <div class="chatRoom-top-bar">
            <button class="back-btn" type="button" onClick={goBack}>
              {" "}
              <IoArrowBack className="back-icon" />
            </button>
            <div className="chatRoom-profile">
              <Link to={`/users/${friendInfo?.id}`}>
                <img
                  src={`${
                    friendInfo?.thumbnailUrl
                      ? friendInfo?.thumbnailUrl
                      : "https://buob-profile.s3.ap-northeast-2.amazonaws.com/default/002.png"
                  }`}
                  class="chatRoom-profile-photo"
                ></img>
              </Link>
              <div class="chatRoom-counterperson"> {friendName} </div>
            </div>
            {/* <div class="chatRoom-menu">
              <button class="menu-btn" type="button">
                {" "}
                <IoEllipsisVertical className="menu-icon" />
              </button>
            </div> */}
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
