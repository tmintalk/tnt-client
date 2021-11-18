import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import io from "socket.io-client";
import UserList from "../../components/UserList";
import ChatRoom from "../../components/ChatRoom";
import "./index.css";
import ChatList from "../../components/ChatList";
import Footer from '../../components/Footer';

const Chat = () => {
  return (
    <>
      {/* <h1> 여기서부터 시작 </h1> */}
      <ChatList />
      <Footer />
    </>
  );
};

export default Chat;
