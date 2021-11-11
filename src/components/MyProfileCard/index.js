import { useSelector } from "react-redux";

import { Image } from 'antd';
import { getFormatDate } from "../../services/time";

import './index.scss'


const MyProfileCard = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <div className="myprofile-header-container"> 
        내 프로필
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
          <div className="my-post">내가 쓴 글</div>
        </div>
      </div>

    </>
  );
};

export default MyProfileCard;
