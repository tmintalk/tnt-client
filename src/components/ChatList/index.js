import { useState, useEffect } from "react";
import axios from "axios";
import useChat from "../../useChat";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import { getRoomId } from "../../actions/hash.js";

import {
  IoPersonAddOutline,
  IoSearchCircle,
  IoChatboxOutline,
} from "react-icons/io5";

import "./index.scss";
import { useSelector } from "react-redux";
const SOCKET_SERVER_URL =
  "http://ec2-13-125-111-9.ap-northeast-2.compute.amazonaws.com";
const ChatList = () => {
  const [users, setUsers] = useState();
  const [messages, setMessages] = useState();
  const { user } = useSelector((state) => state);

  if (user.data) {
    console.log(user?.data.nickname);
    // console.log(getRoomId(user.data.nickname, "abc"));
  }
  // 임시 roomId
  // const roomId = "test1";
  useState(() => {
    (async () => {
      const resp = await axios.get("/users");
      setUsers(resp.data);
    })();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(`/chat/allMessages`);
      const result = response.data.messages;
      // console.log(result[0]);
      setMessages(result);
    };
    fetchMessages();
  }, []);

  const GetLastMessage = (roomId) => {
    const roomMessages = messages.filter((message) => message.room === roomId);
    const len = roomMessages.length;
    return roomMessages.length > 0 ? roomMessages[len - 1].body : null;
  };
  const GetLastDate = (roomId) => {
    const roomMessages = messages.filter((message) => message.room === roomId);
    const len = roomMessages.length;
    if (roomMessages.length <= 0) return null;
    else {
      let date = new Date(roomMessages[len - 1].timeStamp);
      return date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
    }
  };

  return (
    <>
      {users && (
        <>
          <div className="chat-header-container">
            {/* <div className='header-text'>TnT</div> */}
            {/* <img className="header-title" src='../../commons/img/TnT.png'/> */}
            <img
              src={require("../../commons/img/TnT.png").default}
              alt="title"
            />
          </div>
          <div class="chat-search-box-container">
            <input
              type="text"
              class="form-control"
              placeholder="   search your friend"
            />
            <span class="input-group-btn">
              <button class="search-btn" type="button">
                {" "}
                <IoSearchCircle className="search-icon" />
              </button>
            </span>
          </div>

          <div className="chat-ant-list">
            <List
              itemLayout="horizontal"
              dataSource={users}
              renderItem={(item) => (
                <Link
                  to={`/chat/${
                    user?.data
                      ? getRoomId(user.data.nickname, item.nickname)
                      : ""
                  }`}
                >
                  {user?.data ? (
                    GetLastMessage(
                      getRoomId(user.data.nickname, item.nickname)
                    ) ? (
                      <List.Item>
                        <div className="list-friend-container">
                          <div className="list-profile-container">
                            <div className="list-friend-profile"></div>
                            <div className="list-chat-content">
                              <div className="list-friend-name">
                                {item.nickname}
                              </div>

                              <div className="list-chat-content">
                                {GetLastMessage(
                                  getRoomId(user.data.nickname, item.nickname)
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="chat-date">
                            {GetLastDate(
                              getRoomId(user.data.nickname, item.nickname)
                            )}
                          </div>
                        </div>
                      </List.Item>
                    ) : null
                  ) : (
                    ""
                  )}
                </Link>
              )}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ChatList;
