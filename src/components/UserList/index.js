import { useState, createElement } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MessageOutlined } from "@ant-design/icons";
import { List, Avatar, Button, Space } from "antd";

const IconText = ({ icon, text }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const UserList = () => {
  const [users, setUsers] = useState();
  const roomName = "Test1";
  useState(() => {
    (async () => {
      const resp = await axios.get("/users");
      setUsers(resp.data);
    })();
  }, []);

  const forTest = (item) => {
    console.log("users", users);
  };
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
                <Button onClick={forTest}>데이타 확인</Button>
                <Link to="/chat">
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
