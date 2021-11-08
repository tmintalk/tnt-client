import { useState } from "react";
import axios from "axios";

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

const ChatList = () => {
  const [users, setUsers] = useState();
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
                <List.Item>
                  {/*
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<p href="https://pnt.design">{item.nickname}</p>}
                />
                */}
                  <div className="list-friend-container">
                    <div className="list-profile-container">
                      <div className="list-friend-profile"></div>
                      <div className="list-chat-content">
                        <div className="list-friend-name">{item.nickname}</div>
                        <div className="list-chat-content">
                          {" "}
                          여기에 채팅 내용{" "}
                        </div>
                      </div>
                    </div>
                    <div className="chat-date"> 2021.11.09 </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ChatList;
