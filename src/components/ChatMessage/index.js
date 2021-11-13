import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserAvatar from "../UserAvatar";
import "./index.css";
import "./index.scss";
import { Tag } from "antd";

const ChatMessage = ({ message, messages, index, curUser }) => {
  const [isCurUser, setIsCurUser] = useState(false);
  const { user } = useSelector((state) => state);
  const dateStr = null;
  const prevDate = new Date(messages[index - 1]?.timeStamp).getDate();
  useEffect(() => {
    if (user?.data) {
      setIsCurUser(message.senderName === user.data.nickname);
    }
  }, [user?.data]);

  const dateFrame = (date) => {
    let hours =
      date.getHours() > 12
        ? `오후 ${date.getHours() - 12}시`
        : `오전 ${date.getHours()}시`;
    let miniutes = date.getMinutes() + "분";
    return hours + " " + miniutes;
  };
  const newDate = (date) => {
    if (prevDate !== date.getDate()) {
      const dateStr =
        date.getFullYear() +
        "년 " +
        date.getMonth() +
        "월 " +
        date.getDate() +
        "일 ";
      return dateStr;
    } else {
      return 0;
    }
  };
  return (
    <>
      {newDate(new Date(message.timeStamp)) ? (
        <div className="chatMessage-newDate-container">
          <div className="chatMessage-newDate">
            <Tag>{newDate(new Date(message.timeStamp))}</Tag>
          </div>
        </div>
      ) : null}
      <div
        className={`${
          isCurUser ? "chatMessage-my-message" : "chatMessage-received-message"
        }`}
      >
        {!isCurUser && (
          <div className="chatMessage-avatar-container">
            <UserAvatar user={message.user}></UserAvatar>
          </div>
        )}

        <div className="chatMessage-body-container">
          {!isCurUser && (
            <div className="chatMessage-user-name">{message.user.name}</div>
          )}
          <div className="chatMessage-body">{message.body}</div>
        </div>
        <div className="chatMessage-date">
          {dateFrame(new Date(message.timeStamp))}
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
