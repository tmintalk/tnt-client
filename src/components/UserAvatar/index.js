import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const UserAvatar = ({ user, thumbnailUrl, friendInfo }) => {
  return (
    <>
      <Link to={`/users/${friendInfo?.id}`}>
        <img
        src={thumbnailUrl}
        alt={user.name}
        title={user.name}
        className={"avatar"}
      ></img>
      </Link>
      
    </>
  );
};

export default UserAvatar;
