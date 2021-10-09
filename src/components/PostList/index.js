import { useState, createElement } from "react";
import axios from "axios";

import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { getFormatDate } from "../../services/time";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const PostList = () => {
  const [posts, setPosts] = useState();

  useState(() => {
    (async () => {
      const resp = await axios.get("/posts");
      console.log("posts", resp);
      setPosts(resp.data);
    })();
  }, []);

  return (
    <>
      {posts && (
        <>
          <List
            itemLayout="vertical"
            size="small"
            dataSource={posts}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />}
                  title={<p>{item?.User?.nickname}</p>}
                  description={<p>{`작성시간: ${getFormatDate(item?.createdAt)}`}</p>}
                />
                {item.body}
              </List.Item>
            )}
          />
          ,
        </>
      )}
    </>
  );
};

export default PostList;
