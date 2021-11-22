import { useState } from "react";
import axios from "axios";

import { List, Input } from "antd";
import { Link } from "react-router-dom";
import { getRoomId } from "../../actions/hash.js";

import { IoSearchOutline, IoChatboxOutline } from "react-icons/io5";
import { useHistory } from "react-router";

import "./index.scss";
import { useSelector } from "react-redux";

const UserList = () => {
  let history = useHistory();
  const [users, setUsers] = useState();
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => state);

  useState(() => {
    (async () => {
      const resp = await axios.get("/users");
      setUsers(resp.data);
    })();
  }, []);

  const doSearch = () => {
    history.push(`/find/${search}`);
  };

  console.log(users);
  return (
    <>
      {users && (
        <>
          <div className="friend-list-full-container">
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
                            <img
                              className="list-friend-profile"
                              // src={item.thumbnailUrl}
                              src={`${
                                item.thumbnailUrl
                                  ? item.thumbnailUrl
                                  : "https://buob-profile.s3.ap-northeast-2.amazonaws.com/default/002.png"
                              }`}
                              alt="thumbnail"
                            />
                            <div className="list-friend-content">
                              {item?.Posts.length !== 0 ? (
                                <>
                                  <div className="list-friend-name">
                                    {item.nickname}님은 최근 소비에
                                  </div>
                                  <div className="list-friend-info">
                                    <div className="list-friend-consume">
                                      {item?.Posts[item.Posts.length - 1].about}
                                    </div>
                                    <div className="list-friend-subtext">
                                      감정을 느끼셨어요!
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="list-friend-name">
                                    {item.nickname}님이
                                  </div>
                                  <div className="list-friend-info">
                                    <div className="list-friend-subtext">
                                      아직까지 등록하신 소비가 없어요:)
                                    </div>
                                  </div>
                                </>
                              )}
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

          <div className="user-header-container">친구 목록</div>
        </>
      )}
    </>
  );
};

export default UserList;
