import { List } from "antd";
import { useSelector } from "react-redux";

import './index.scss'
import PostCard from "../PostCard";

const ProfileQuestionList = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user.data && (
        <>
          <div className="ant-list">
            <List
              itemLayout="vertical"
              size="small"
              dataSource={user.data.Posts}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                >
                  <div className="list-postcard-container">
                    <PostCard isShow={true} item={item}/>
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

export default ProfileQuestionList;
