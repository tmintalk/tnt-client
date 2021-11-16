import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS_REQUEST } from "../../reducers/posts";
import { Link } from "react-router-dom";

import { IoHeart, IoChatboxOutline } from "react-icons/io5";
import { getRoomId } from "../../actions/hash.js";
import "./index.scss";
import axios from "axios";

const PostCard = (props) => {
  const { posts, user } = useSelector((state) => state);
  const [curUser, setCurUser] = useState();
  const dispatch = useDispatch();

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
      //console.log("userId", user.data.id);
      setCurUser({
        name: user.data.nickname,
        picture:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      });
    }
  }, [user.data]);

  const createLike = async (id) => {
    const resp = await axios.post(`/likes/${id}`)  
    console.log(resp);

    dispatch({
      type: GET_POSTS_REQUEST,
    });
  };

  const deleteLike = async (id) => {
    const resp = await axios.delete(`/likes/${id}`)  
    console.log(resp);

    dispatch({
      type: GET_POSTS_REQUEST,
    });
  };

  return (
    <>
      <div className="list-post-container">
        {
          props?.item?.like ?
            props?.item?.User?.id === user?.data?.id ?
              <Link to={`/mypage`}>
                <img src={props?.item?.User?.thumbnailUrl} alt="thumbnail" className="list-post-profile" />
              </Link> :
              <Link to={`/users/${props?.item?.User?.id}`}>
                <img src={props?.item?.User?.thumbnailUrl} alt="thumbnail" className="list-post-profile" />
              </Link>
          : <img src="https://tmi-image.s3.ap-northeast-2.amazonaws.com/profile.png" alt="tumbnail" className="list-post-profile" />
        }
      
        <div className="list-post-content">
          <div className="list-post-name">
            {props?.item?.like
              ? <Link to={`/users/${props?.item?.User?.id}`}>{props?.item?.User?.nickname}</Link>
              : <div>{props?.item?.id}</div>}
          </div>
          <div className="sentence">
            <div className="list-post-text">spent</div>
            {/* 금액데이터 */}
            <div className="list-post-money">{`${props?.item?.price} won`}</div>
          </div>

          <div className="sentence">
            <div className="list-post-text">for</div>
            {/* 상품데이터 */}
            <div className="list-post-item">{props?.item?.item}</div>
          </div>

          <div className="sentence">
            <div className="list-post-text">and I</div>
            {/* 소비종류데이터 */}
            <div className="list-post-kind">{props?.item?.about}</div>
          </div>

          {props?.item?.imageUrl && <img src={props?.item?.imageUrl} alt="post" />}

          <div className="list-post-story">{props?.item?.description}</div>
          <div className="list-icon-container">
            <div>
              {props?.item?.like ? (
                <IoHeart onClick={() => deleteLike(props?.item?.id)} className="heart-active" />
              ) : (
                <IoHeart onClick={() => createLike(props?.item?.id)} className="heart-inactive" />
              )}
            </div>
            {curUser?.name !== props?.item?.User?.nickname && (
              <Link
                to={`/chat/${
                  curUser?.name && props?.item?.User?.nickname !== curUser?.name
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
