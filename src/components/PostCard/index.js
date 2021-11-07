import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS_REQUEST } from "../../reducers/posts";
import { Link } from "react-router-dom";

import { IoHeart, IoChatboxOutline } from "react-icons/io5";
import { getRoomId } from "../../actions/hash.js";
import "./index.scss";

const PostCard = (props) => {
  const { posts, user } = useSelector((state) => state);
  const [curUser, setCurUser] = useState();
  const dispatch = useDispatch();

  const [showNameList, setShowNameList] = useState([]); // TODO: 서버랑 연결

  useState(() => {
    if (!posts.data) {
      dispatch({
        type: GET_POSTS_REQUEST,
      });
    }
  }, [posts]);
  useState(() => {
    if (user.data) {
      console.log("username", user.data.nickname);
      setCurUser({
        name: user.data.nickname,
        picture:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      });
    }
  }, [user.data]);

  const onClickChat = async (id) => {
    const temp_arr = [...showNameList, id];
    temp_arr.push(id);
    setShowNameList(temp_arr);
  };

  return (
    <>
      <div className="list-post-container">
        <div className="list-post-profile"></div>
        <div className="list-post-content">
          <div className="list-post-name">
            {showNameList.includes(props?.item?.id) || props?.isShow
              ? props?.item?.User?.nickname
              : props?.item?.id}
          </div>
          <div className="sentence">
            <div className="list-post-text">spent</div>
            {/* 금액데이터 */}
            <div className="list-post-money">12,000won</div>
          </div>

          <div className="sentence">
            <div className="list-post-text">for</div>
            {/* 상품데이터 */}
            <div className="list-post-item">4 cups of Americano</div>
          </div>

          <div className="sentence">
            <div className="list-post-text">and</div>
            {/* 소비종류데이터 */}
            <div className="list-post-kind">FLEX!</div>
          </div>

          <div className="list-post-story">{props?.item?.body}</div>
          <div className="list-icon-container">
            <div onClick={() => onClickChat(props?.item?.id)}>
              {showNameList.includes(props?.item?.id) ? (
                <IoHeart className="heart-active" />
              ) : (
                <IoHeart className="heart-inactive" />
              )}
            </div>
            {curUser?.name != props?.item?.User?.nickname && (
              <Link
                to={`/chat/${
                  curUser?.name && props?.item?.User?.nickname != curUser?.name
                    ? getRoomId(curUser?.name, props.item?.User?.nickname)
                    : null
                }`}
              >
                <IoChatboxOutline className="chatbox-icon" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
