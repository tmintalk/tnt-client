import { useSelector } from "react-redux";

import { Image } from 'antd';
import { getFormatDate } from "../../services/time";

import './index.scss'


const MyProfileCard = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <div className="myprofile-header-container"> 
        {/* <button class="back-btn" type="button"> <IoArrowBack className="back-icon" /></button> */}
        {/* <div className='header-text'>TnT</div> */}
        {/* <img className="header-title" src='../../commons/img/TnT.png'/> */}
        <img src={require("../../commons/img/TnT.png").default} alt="title"/>
      </div>
      <div className="my-profile-container"> 
        <div className="my-profile-photo"></div>
        {/* <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        /> */}

        <div className="my-profile-content">
          <div className="my-name">{`${user?.data?.nickname}`}</div> 
          {/* <div className="subscription-date">{`가입일자: ${getFormatDate(user?.data?.createdAt)}`}</div>         */}
          <div className="my-email"> here-email@ipryuk.plz </div>
        </div>
      </div>

    </>
  );
};

export default MyProfileCard;
