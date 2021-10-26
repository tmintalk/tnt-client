import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { List, Avatar, Button } from "antd";

const ChatList = () => {
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
                <div style="font-weight:bold;">Chat</div>
              </List.Item>
            )}
          />
        </>
      )}
    </>
  );
};

export default ChatList;
