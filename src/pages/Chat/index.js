import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import io from "socket.io-client";

//Socket이 작동을 안하네........
const socket = io.connect("http://localhost:5000");

const Chat = () => {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);
  const { user } = useSelector((state) => state);
  // 상대가 보낸 메세지 수신
  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });
  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };
  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name} : <span>{message}</span>
        </h3>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      //socket.close();
    };
  });

  return (
    <>
      <h1>Socket 테스트 중입니다.</h1>
      <form onSubmit={onMessageSubmit}>
        <h1>Message</h1>
        <div>
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send</button>
      </form>
      <div>
        <h1>Chat log</h1>
        {renderChat()}
      </div>
    </>
  );
};

export default Chat;
