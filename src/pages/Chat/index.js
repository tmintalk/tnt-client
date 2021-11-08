import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import io from "socket.io-client";
import UserList from "../../components/UserList";
import ChatRoom from "../../components/ChatRoom";
import "./index.css";

const Chat = () => {
  return (
    <>
      <div>이것은 채팅 페이지입니다.(유미누님이 할 것)</div>
    </>
  );
};

export default Chat;
