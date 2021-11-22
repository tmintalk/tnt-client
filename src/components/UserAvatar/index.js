import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const UserAvatar = ({ user, thumbnailUrl, friendInfo }) => {
  return (
    <>
      <Link to={`/users/${friendInfo?.id}`}>
        <img
          src={`${
            thumbnailUrl
              ? thumbnailUrl
              : "https://buob-profile.s3.ap-northeast-2.amazonaws.com/default/002.png"
          }`}
          alt={user.name}
          title={user.name}
          className={"avatar"}
        ></img>
      </Link>
    </>
  );
};

export default UserAvatar;
