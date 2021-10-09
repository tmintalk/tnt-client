import { useState } from 'react';
import axios from 'axios';

import { List, Avatar } from 'antd';

const UserList = () => {
  const [users, setUsers] = useState();

  useState(() => {
    (async() => {
      const resp = await axios.get('/users');
      console.log('users', resp)
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
                title={<a href="https://ant.design">{item.nickname}</a>}
              />
            </List.Item>
          )}
        />
      </>
      }
    </>
  )
}

export default UserList;