import { useSelector } from "react-redux";

import { Image } from 'antd';
import { getFormatDate } from "../../services/time";
import { IoChevronDown, IoArrowBack } from "react-icons/io5";

import './index.scss'


const ProfileCard = () => {
  const { user } = useSelector((state) => state);

  return (
    <>

      <div className="header-container"> 
        <button class="back-btn" type="button"> <IoArrowBack className="back-icon" /></button>
        {/* <div className='header-text'>TnT</div> */}
        {/* <img className="header-title" src='../../commons/img/TnT.png'/> */}
        <img src={require("../../commons/img/TnT.png").default} alt="title"/>
        <div class="empty"></div>
      </div>
      <div className="profile-container"> 
        <div className="friend-profile-photo"></div>
        {/* <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        /> */}
        <div className="friend-name">{`${user?.data?.nickname}`}</div> 
        {/* <div className="subscription-date">{`가입일자: ${getFormatDate(user?.data?.createdAt)}`}</div>         */}
       
        {/* <p>{`닉네임: ${user?.data?.nickname}`}</p> */}
        {/* <p>{`가입일자: ${getFormatDate(user?.data?.createdAt)}`}</p> */}
        <div className="btn-container">
          <button class="following-btn" type="button"> 
            <div className="following-text"> following </div>
            <IoChevronDown className="following-icon" />
          </button>
          <button class="message-btn" type="button"> 
            <div className="message-text">message </div> 
          </button>
        </div>
      
      </div>



    </>
  );
};

export default ProfileCard;
