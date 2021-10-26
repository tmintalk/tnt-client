import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import io from "socket.io-client";
import UserList from "../../components/UserList";
import ChatRoom from "../../components/ChatRoom";
import ChatList from "../../components/ChatList";
import "./index.css";

const socket = io.connect("http://localhost:5000");

const SplitPage = (props) => {
  return (
    <div className="Split">
      <div className="Split-left">{props.left}</div>
      <div className="Split-right">{props.right}</div>
    </div>
  );
};

const Chat = () => {
  return (
    <>
      <SplitPage left={<ChatList />} right={<ChatRoom />} />
    </>
  );
};

export default Chat;
