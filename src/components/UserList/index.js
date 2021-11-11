import { useState } from "react";
import axios from "axios";

import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import { getRoomId } from "../../actions/hash.js";

import {
  IoPersonAddOutline,
  IoSearchOutline,
  IoChatboxOutline,
} from "react-icons/io5";

import "./index.scss";
import { useSelector } from "react-redux";

const UserList = () => {
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
          <div className="user-header-container">
            {/* <img
              src={require("../../commons/img/TnT.png").default}
              alt="title"
            /> */}
            친구 목록
          </div>
          <div className="full-container">
            <div className="search-container">
              <div className="search-bar">
                <input
                  type="text"
                  class="form-control"
                  placeholder="search your friend"
                />
                {/* serach button */}
                <div className="search-button">
                  <IoSearchOutline className="search-icon" />
                </div>
              </div>
              {/* 친구추가 버튼 */}
              <div className="add-friend">
                <IoPersonAddOutline />
              </div>
            </div>

            <div className="user-ant-list">
              <div className="ant-list-user">
                <List
                  itemLayout="horizontal"
                  dataSource={users}
                  renderItem={(item) => (
                    <List.Item>
                      <div className="user-list-friend-container">
                        {/* <div className="list-profile-container">
                          <div className="list-friend-profile"></div>
                          <div className="list-friend-content">
                            <div className="list-friend-name">{item.nickname}</div>
                          </div>
                        </div>
                        <div className="list-icon-container">
                          <Link
                            to={`/chat/${user?.data
                              ? getRoomId(user.data.nickname, item.nickname)
                              : ""
                              }`}
                          >
                            <button class="chat-btn" type="button">
                              {" "}
                              <IoChatboxOutline className="chatbox-icon" />
                            </button>
                          </Link>
                        </div> */}
                        <div className="list-profile-container">
                          <div className="list-friend-profile"></div>
                          <div className="list-friend-name">{item.nickname}</div>
                        </div>
                        <Link
                          to={`/chat/${user?.data
                            ? getRoomId(user.data.nickname, item.nickname)
                            : ""
                            }`}
                        >
                          <div class="chat-btn" type="button">
                            {" "}
                            <IoChatboxOutline className="chatbox-icon" />
                          </div>
                        </Link>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserList;
