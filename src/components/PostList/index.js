import { useState, createElement } from "react";

import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, LikeFilled } from "@ant-design/icons";
import { getFormatDate } from "../../services/time";
import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS_REQUEST } from "../../reducers/posts";
import { Link } from "react-router-dom";

const IconText = ({ icon, text }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const PostList = () => {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [showNameList, setShowNameList] = useState([]); // TODO: 서버랑 연결

  useState(() => {
    if (!posts.data) {
      dispatch({
        type: GET_POSTS_REQUEST,
      });
    }
  }, [posts]);

  const onClickChat = async (id) => {
    console.log(id);
    const temp_arr = [...showNameList, id];
    temp_arr.push(id);
    setShowNameList(temp_arr);
  };

  console.log(showNameList);

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
                  <div onClick={() => onClickChat(item?.id)}>
                    {showNameList.includes(item?.id) ? (
                      <IconText
                        icon={LikeFilled}
                        key="list-verticall-star-filled"
                      />
                    ) : (
                      <IconText
                        icon={LikeOutlined}
                        key="list-vertical-star-o"
                      />
                    )}
                  </div>,
                  <Link to="/chat">
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />
                  </Link>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={
                        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      }
                    />
                  }
                  title={
                    <p>
                      {showNameList.includes(item?.id)
                        ? item?.User?.nickname
                        : item?.id}
                    </p>
                  }
                  description={
                    <p>{`작성시간: ${getFormatDate(item?.createdAt)}`}</p>
                  }
                />
                {item.body}
              </List.Item>
            )}
          />
        </>
      )}
    </>
  );
};

export default PostList;
