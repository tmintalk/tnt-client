import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const URL = "http://localhost:5000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(URL, {
      query: { roomId },
    });
    socketRef.current.on("connect", () => {
      console.log(`${socketRef.current.id} connected!`);
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
  }, [roomId]);

  const sendMessage = (messageBody) => {
    if (!socketRef.current) return;

    socketRef.current.emit("new message", {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };
  return {
    messages,
    sendMessage,
  };
};
export default useChat;
