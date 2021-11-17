import { useEffect, useState, useRef } from "react";
import { IoChevronDown, IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { Link } from 'react-router-dom';
import { getRoomId } from "../../actions/hash.js";

import "./index.scss";

const UserProfileCard = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("cur user name", props.curUser.nickname)
    if (props.id) {
      axios.get(`/users/${props.id}`).then((res) => {
        setUser(res.data);
      });
    }
  }, [props?.id]);

  return (
    <>
      {user && (
        <>
          <div className="friend-profile-card-header-container">
            <button class="back-btn" type="button" onClick={props.goBack}>
              {" "}
              <IoArrowBack className="back-icon" />
            </button>
            {/* <div className='header-text'>TnT</div> */}
            {/* <img className="header-title" src='../../commons/img/TnT.png'/> */}
            <img
              src={require("../../commons/img/TnT.png").default}
              alt="title"
            />
            <div class="empty"></div>
          </div>
          <div className="friend-profile-container">
            <img src={user?.thumbnailUrl} alt="thumbnail" className="firend-profile-photo" />
            {/* <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            /> */}
            <div className="friend-name">{`${user?.nickname}`}</div>
            {/* <div className="subscription-date">{`가입일자: ${getFormatDate(user?.createdAt)}`}</div>         */}

            {/* <p>{`닉네임: ${user?.nickname}`}</p> */}
            {/* <p>{`가입일자: ${getFormatDate(user?.createdAt)}`}</p> */}
            <div className="btn-container">
              <button class="following-btn" type="button">
                <div className="following-text"> following </div>
                <IoChevronDown className="following-icon" />
              </button>
              <Link
                to={`/chat/${
                  props?.curUser?.nickname
                    ? getRoomId(props?.curUser?.nickname, user?.nickname)
                    : ""
                }`}
              >
              <button class="message-btn" type="button">
                <div className="message-text">message </div>
              </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserProfileCard;
