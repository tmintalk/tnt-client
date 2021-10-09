import { useState } from 'react';
import axios from 'axios';

import { List, Avatar, Button } from 'antd';

const UserList = () => {
  const [users, setUsers] = useState();

  useState(() => {
    (async() => {
      const resp = await axios.get('/users');
      setUsers(resp.data);
    })();
  }, []);

  return (
    <>
      {users &&
      <>
        <h2>친구 목록</h2>
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<p href="https://pnt.design">{item.nickname}</p>}
              />
              <Button shape="round">Chat</Button>
            </List.Item>
          )}
        />
      </>
      }
    </>
  )
}

export default UserList;