import { useState, createElement } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { MessageOutlined } from "@ant-design/icons";
import { List, Avatar, Button, Space } from "antd";
import { getRoomId } from "../../actions/hash.js";

const IconText = ({ icon, text }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const UserList = () => {
  const [users, setUsers] = useState();
  const { user } = useSelector((state) => state);

  if (user.data) {
    console.log(user?.data.nickname);
    console.log(getRoomId(user.data.nickname, "abc"));
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
          <h2>친구 목록</h2>
          <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<p href="https://pnt.design">{item.nickname}</p>}
                />
                <Link
                  to={`/chat/${
                    user?.data
                      ? getRoomId(user.data.nickname, item.nickname)
                      : ""
                  }`}
                >
                  <IconText
                    icon={MessageOutlined}
                    key="list-vertical-message"
                  />
                </Link>
              </List.Item>
            )}
          />
        </>
      )}
    </>
  );
};

export default UserList;
