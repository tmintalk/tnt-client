import { useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IoHeart } from "react-icons/io5";
import { getRoomId } from "../../actions/hash.js";
import "./index.scss";

const MyPostCard = (props) => {
  const { user } = useSelector((state) => state);
  const [curUser, setCurUser] = useState();

  // useState(() => {
  //   if (!posts.data) {
  //     dispatch({
  //       type: GET_POSTS_REQUEST,
  //     });
  //   }
  // }, [posts]);

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

  return (
    <>
      <div className="myprofile-postcard">
        <img
          src={`${
            props?.item?.User?.thumbnailUrl
              ? props?.item?.User?.thumbnailUrl
              : "https://buob-profile.s3.ap-northeast-2.amazonaws.com/default/002.png"
          }`}
          alt="thumbnail"
          className="list-post-profile"
        />
        <div className="list-post-content">
          <div className="list-post-name">{props?.item?.User?.nickname}</div>
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

          {props?.item?.imageUrl && (
            <img src={props?.item?.imageUrl} alt="post" />
          )}

          <div className="list-post-story">{props?.item?.description}</div>
          <div className="list-icon-container">
            <div className="heart">
              <IoHeart className="heart-active" />
            </div>
            <div className="liked-number">{props?.item?.count}</div>
          </div>
          {props?.item?.Likes.length !== 0 &&
            props.item.Likes.map((like) => {
              return <div>{like.User.nickname} 님이 좋아하셨습니다.</div>;
            })}
        </div>
      </div>
    </>
  );
};

export default MyPostCard;
