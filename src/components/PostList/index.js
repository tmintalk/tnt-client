import { useState } from "react";

import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS_REQUEST } from "../../reducers/posts";

import './index.scss'
import PostCard from "../PostCard";

const PostList = () => {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useState(() => {
    if (!posts.data) {
      dispatch({
        type: GET_POSTS_REQUEST,
      });
    }
  }, [posts]);

  return (
    <>
      {posts.data && (
        <>
          <div className="ant-list">
            <List
              itemLayout="vertical"
              size="small"
              dataSource={posts.data}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                >
                  <div className="list-postcard-container">
                    <PostCard item={item}/>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PostList;
