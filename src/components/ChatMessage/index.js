import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserAvatar from "../UserAvatar";
import "./index.css";
import "./index.scss";
import { Tag } from "antd";

const ChatMessage = ({
  message,
  messages,
  index,
  friendInfo,
  thumbnailUrl,
}) => {
  const [isCurUser, setIsCurUser] = useState(false);
  const { user } = useSelector((state) => state);
  const [isdiffTime, setIsdiffTime] = useState(true);
  const [isdiffTime2, setIsdiffTime2] = useState(true);
  const prevDate = new Date(messages[index - 1]?.timeStamp).getDate();
  useEffect(() => {
    if (user?.data) {
      setIsCurUser(message.senderName === user.data.nickname);
    }
  }, [user?.data]);

  useEffect(() => {
    isTimeDifferent();
    isTimeDifferent2();
  }, []);

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
        (date.getMonth() + 1) +
        "월 " +
        date.getDate() +
        "일 ";
      return dateStr;
    } else {
      return 0;
    }
  };
  const isTimeDifferent = () => {
    const isSenderSame =
      messages[index - 1]?.senderName === message?.senderName;
    const isMinSame =
      new Date(messages[index - 1]?.timeStamp).getMinutes() ==
      new Date(message.timeStamp).getMinutes();
    const isHourSame =
      new Date(messages[index - 1]?.timeStamp).getHours() ==
      new Date(message.timeStamp).getHours();
    const isDateSame =
      new Date(messages[index - 1]?.timeStamp).getDate() ==
      new Date(message.timeStamp).getDate();
    if (isSenderSame && isHourSame && isMinSame && isDateSame) {
      // console.log("same Time");
      setIsdiffTime(false);
    } else {
      // console.log("diff Time");
      setIsdiffTime(true);
    }
  };
  const isTimeDifferent2 = () => {
    const isSenderSame =
      messages[index + 1]?.senderName === message?.senderName;
    const isMinSame =
      new Date(messages[index + 1]?.timeStamp).getMinutes() ==
      new Date(message.timeStamp).getMinutes();
    const isHourSame =
      new Date(messages[index + 1]?.timeStamp).getHours() ==
      new Date(message.timeStamp).getHours();
    const isDateSame =
      new Date(messages[index + 1]?.timeStamp).getDate() ==
      new Date(message.timeStamp).getDate();
    if (isSenderSame && isHourSame && isMinSame && isDateSame) {
      // console.log("same Time2");
      setIsdiffTime2(false);
    } else {
      // console.log("diff Time2");
      setIsdiffTime2(true);
    }
  };

  return (
    <>
      {newDate(new Date(message.timeStamp)) ? (
        <div className="chatMessage-newDate-container">
          <div className="chatMessage-newDate">
            {newDate(new Date(message.timeStamp))}
          </div>
        </div>
      ) : null}
      <div
        className={`${
          isCurUser ? "chatMessage-my-message" : "chatMessage-received-message"
        }`}
      >
        {!isCurUser &&
          (isdiffTime ? (
            <div className="chatMessage-avatar-container">
              <UserAvatar
                user={message.user}
                friendInfo={friendInfo}
                thumbnailUrl={thumbnailUrl}
              ></UserAvatar>
            </div>
          ) : (
            <div className="chatMessage-nonavatar-container"></div>
          ))}

        <div className="chatMessage-body-container">
          {!isCurUser && isdiffTime && (
            <div className="chatMessage-user-name">{message.user.name}</div>
          )}
          <div
            className={`${
              isdiffTime ? "chatMessage-body" : "chatMessage-body sametime"
            }`}
          >
            {message.body}
          </div>
        </div>
        {isdiffTime2 && (
          <div className="chatMessage-date">
            {dateFrame(new Date(message.timeStamp))}
          </div>
        )}
      </div>
    </>
  );
};

export default ChatMessage;
