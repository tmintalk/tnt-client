import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { useSelector } from "react-redux";
import axios from "axios";

const URL = "http://localhost:5000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const { user } = useSelector((state) => state);

  const socketRef = useRef();

  useEffect(() => {
    const fetchChatUsers = async () => {
      const response = await axios.get(`${URL}/rooms/${roomId}/users`);
      const result = response.data.users;
      setUsers(result);
    };
    fetchChatUsers();
  }, [roomId]);

  useEffect(() => {
    if (!user) {
      return;
    }
    //User profile url 변경 필요
    socketRef.current = socketIOClient(URL, {
      query: {
        roomId,
        name: user.name,
        profile:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
    });
    socketRef.current.on("connect", () => {
      console.log(`${socketRef.current.id} connected!`);
    });
    socketRef.current.on("user join", (user) => {
      if (user.id === socketRef.current.id) return;
      setUsers((users) => users.filter((u) => u.id !== user.id));
    });
    socketRef.current.on("user leave", (user) => {
      if (user.id === socketRef.current.id) return;
      setUsers((users) => [...users.user]);
    });
    socketRef.current.on("new message", (message) => {
      const Message = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, Message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, user]);

  const sendMessage = (messageBody) => {
    if (!socketRef.current) return;

    socketRef.current.emit("new message", {
      body: messageBody,
      senderId: socketRef.current.id,
      user: user,
    });
  };
  return {
    messages,
    sendMessage,
    user,
    users,
  };
};
export default useChat;
