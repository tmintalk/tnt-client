import { useState } from "react";

import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS_REQUEST } from "../../reducers/posts";
import { Link } from "react-router-dom";

import { IoHeart, IoChatboxOutline } from "react-icons/io5";

import './index.scss'

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
          <div className="ant-list">
            <List
              itemLayout="vertical"
              size="small"
              dataSource={posts.data}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                // actions={[
                //   <div onClick={() => onClickChat(item?.id)}>
                //     {showNameList.includes(item?.id) ? (
                //       <IconText
                //         icon={LikeFilled}
                //         key="list-verticall-star-filled"
                //       />
                //     ) : (
                //       <IconText
                //         icon={LikeOutlined}
                //         key="list-vertical-star-o"
                //       />
                //     )}
                //   </div>,
                //   <Link to="/chat">
                //     <IconText
                //       icon={MessageOutlined}
                //       key="list-vertical-message"
                //     />
                //   </Link>,
                // ]}
                >
                  {/* <List.Item.Meta
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
                {item.body} */}
                  <div className="list-postcard-container">
                    <div className="list-post-container">
                      <div className="list-post-profile"></div>
                      <div className="list-post-content">
                        <div className="list-post-name">
                          {showNameList.includes(item?.id)
                            ? item?.User?.nickname
                            : item?.id}
                        </div>
                        <div className="sentence">
                          <div className="list-post-text">
                            spent
                          </div>
                          {/* 금액데이터 */}
                          <div className="list-post-money">
                            12,000won
                          </div>
                        </div>

                        <div className="sentence">
                          <div className="list-post-text">
                            for
                          </div>
                          {/* 상품데이터 */}
                          <div className="list-post-item">
                            4 cups of Americano
                          </div>
                        </div>

                        <div className="sentence">
                          <div className="list-post-text">
                            and
                          </div>
                          {/* 소비종류데이터 */}
                          <div className="list-post-kind">
                            FLEX!
                          </div>
                        </div>

                        <div className="list-post-story">{item.body}</div>
                        <div className="list-icon-container">
                          <div onClick={() => onClickChat(item?.id)}>
                            {showNameList.includes(item?.id) ? (
                              // <IconText
                              //   icon={LikeFilled}
                              //   key="list-verticall-star-filled"
                              // />
                              <IoHeart className="heart-active"/>
                            ) : (
                              // <IconText
                              //   icon={LikeOutlined}
                              //   key="list-vertical-star-o"
                              // />
                              <IoHeart className="heart-inactive"/>
                            )}
                          </div>
                          <Link to="/chat">
                            {/* <IconText
                              icon={MessageOutlined}
                              key="list-vertical-message"
                            /> */}
                            <IoChatboxOutline className="chatbox-icon"/>
                          </Link>
                        </div>
                      </div>
                    </div>
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
