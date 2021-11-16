import { useState } from "react";
import axios from "axios";

import { List, Input } from "antd";
import { Link } from "react-router-dom";
import { getRoomId } from "../../actions/hash.js";

import {
  IoSearchOutline,
  IoChatboxOutline,
} from "react-icons/io5";
import { useHistory } from 'react-router';

import "./index.scss";
import { useSelector } from "react-redux";

const UserList = () => {
  let history = useHistory();
  const [users, setUsers] = useState();
  const [search, setSearch] = useState('');
  const { user } = useSelector((state) => state);

  useState(() => {
    (async () => {
      const resp = await axios.get("/users");
      setUsers(resp.data);
    })();
  }, []);

  const doSearch = () => {
    history.push(`/find/${search}`)
  }

  return (
    <>
      {users && (
        <>
          <div className="user-header-container">
            친구 목록
          </div>

          <div className="full-container">
            {/* <div className="search-container">
              <div className="search-button" onClick={doSearch}>
                <IoSearchOutline className="search-icon" />
              </div>
              <div className="search-bar">
                <Input
                  value={search}
                  type="text"
                  className="form-control"
                  placeholder="search your friend"
                  onChange={(e) => {setSearch(e.target.value)}}
                  onPressEnter={doSearch}
                />                
              </div>
            </div> */}

            <div className="user-ant-list">
              <div className="ant-list-user">
                <List
                  itemLayout="horizontal"
                  dataSource={users}
                  renderItem={(item) => (
                    <Link to={`/users/${item.id}`}>
                      <List.Item>
                          <div className="user-list-friend-container">
                            <div className="list-profile-container">
                              <img className="list-friend-profile" src={item.thumbnailUrl} alt="thumbnail" />
                              <div className="list-friend-name">
                                {item.nickname}
                              </div>
                              <div>
                                {item?.sum}
                              </div>
                            </div>
                            <Link
                              to={`/chat/${
                                user?.data
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
                    </Link>
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
