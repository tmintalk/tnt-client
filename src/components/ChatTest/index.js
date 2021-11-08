import { useSelector } from "react-redux";

import { Image } from 'antd';
import { getFormatDate } from "../../services/time";

import './index.scss'


const ChatTest = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <h1> hihihihi </h1>
    </>
  );
};

export default ChatTest;
