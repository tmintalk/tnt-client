import { useState, createElement } from "react";
import axios from "axios";

import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { getFormatDate } from "../../services/time";
import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS_REQUEST } from "../../reducers/posts";

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
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useState(() => {
    if (!posts.data) {
      dispatch({
        type: GET_POSTS_REQUEST
      })
    }
  }, [posts]);

  return (
    <>
      {posts.data && (
        <>
          <List
            itemLayout="vertical"
            size="small"
            dataSource={posts.data}
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
