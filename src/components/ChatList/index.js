import { useState, useEffect } from "react";
import axios from "axios";
import useChat from "../../useChat";
import { List, Avatar, Badge } from "antd";
import { Link } from "react-router-dom";
import { getRoomId } from "../../actions/hash.js";

import { IoSearchOutline } from "react-icons/io5";

import {
  IoPersonAddOutline,
  IoSearchCircle,
  IoChatboxOutline,
} from "react-icons/io5";

import "./index.scss";
import { useSelector } from "react-redux";
// const SOCKET_SERVER_URL =
  // "http://ec2-13-125-111-9.ap-northeast-2.compute.amazonaws.com";
const SOCKET_SERVER_URL = "http://localhost:5000";
const ChatList = () => {
  const [users, setUsers] = useState();
  const [sortedUsers, setSortedUsers] = useState([]);
  const [messages, setMessages] = useState();
  const [myReadCnt, setMyReadCnt] = useState();
  const [unreadNum, setUnreadNum] = useState(0);
  const { user } = useSelector((state) => state);

  useState(() => {
    (async () => {
      const resp = await axios.get(`${SOCKET_SERVER_URL}/users`);
      setUsers(resp.data);
      console.log(resp.data);
    })();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(`${SOCKET_SERVER_URL}/chat/allMessages`);
      const result = response.data.messages;
      setMessages(result);
    };
    fetchMessages();
    const fetchReadCnt = async () => {
      const response = await axios.get(
        `${SOCKET_SERVER_URL}/chat/${user?.data?.nickname}/readCnt`
      );
      const result = response.data.myReadCnt;
      console.log("fetchReadCnt", user?.data?.nickname,result);
      setMyReadCnt(result);
    };
    fetchReadCnt();
  }, [user?.data]);

  useEffect(() => {
    //유저마다 대화했던 최근 메세지만 모은 arr
    if (!users || !user?.data) return;
    let LastMessages = users?.map((u) => {
      const roomId = getRoomId(user?.data?.nickname, u.nickname);

      const userMessages = messages?.filter(
        (message) => message.room == roomId
      );
      const len = userMessages?.length;
      if (len > 0) {
        return userMessages[len - 1];
      }
    });
    LastMessages = LastMessages?.filter((m) => m !== undefined);
    LastMessages?.sort((a, b) => {
      a = new Date(a.timeStamp);
      b = new Date(b.timeStamp);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    const matchUsers = LastMessages?.map((u) => {
      const splitNames = u.room.split(" and ");
      const friendName =
        splitNames[0] === user?.data?.nickname ? splitNames[1] : splitNames[0];
      return users.find((e) => e.nickname === friendName);
    });
    // console.log("matchUsers", matchUsers);
    setSortedUsers(matchUsers);
  }, [users, user?.data, messages]);

  const GetLastMessage = (roomId) => {
    const roomMessages = messages.filter((message) => message.room === roomId);
    const len = roomMessages.length;
    // console.log(roomId, len);
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
  const GetUnreadMessage = (roomId) => {
    const roomMessages = messages.filter((message) => message.room === roomId);
    const totalNum = roomMessages.length;
    console.log("myReadCnt",myReadCnt)
    if (myReadCnt?.find((i) => i.roomId == roomId)) {
      const readNum = myReadCnt?.find((i) => i.roomId == roomId)?.messageCnt;
      setUnreadNum(totalNum - readNum);
      console.log("totalNum",totalNum)
      return totalNum - readNum;
    } else if(myReadCnt.length === 0){
      return totalNum;
    }
    else{
      return null;
    }
  };

  return (
    <>
      {sortedUsers && (
        <>          
          <div className="chat-list-full-container">
            <div className="chat-ant-list">
              <List
                itemLayout="horizontal"
                dataSource={sortedUsers}
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
                              <Link to={`users/${item.id}`}>
                              <img src={item?.thumbnailUrl} alt="chag" className="list-friend-profile" onClick={(e)=>e.stopPropagation}/>
                              </Link>
                              <div className="list-chat-content">
                                <div className="list-friend-name">
                                  {item.nickname}
                                </div>
                                <div className="list-chat-text">
                                  {GetLastMessage(
                                    getRoomId(user.data.nickname, item.nickname)
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="chat-right-container">
                              <div className="chat-date">
                                {GetLastDate(
                                  getRoomId(user.data.nickname, item.nickname)
                                )}
                              </div>
                              <div className="chat-unread">
                                <Badge
                                  count={GetUnreadMessage(
                                    getRoomId(user.data.nickname, item.nickname)
                                  )}
                                  style={{
                                    backgroundColor: "#7b61ff",
                                  }}
                                />
                              </div>
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
          </div>
          <div className="user-header-container">채팅</div>
        
        </>
      )}
    </>
  );
};

export default ChatList;
