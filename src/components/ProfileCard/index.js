import { useSelector } from "react-redux";

import { Image } from 'antd';
import { getFormatDate } from "../../services/time";

const ProfileCard = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <div>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <p>{`닉네임: ${user?.data?.nickname}`}</p>
        <p>{`가입일자: ${getFormatDate(user?.data?.createdAt)}`}</p>
      </div>
    </>
  );
};

export default ProfileCard;
