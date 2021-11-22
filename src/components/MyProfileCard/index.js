import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton";

import "./index.scss";

const MyProfileCard = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <div className="my-profile-container">
        <img
          src={`${
            user?.data?.thumbnailUrl
              ? user?.data?.thumbnailUrl
              : "https://buob-profile.s3.ap-northeast-2.amazonaws.com/default/002.png"
          }`}
          alt="thumbnail"
          className="my-profile-photo"
        />
        <div className="my-profile-content">
          <div className="my-name">{`${user?.data?.nickname}`}</div>
          <div className="my-email"> {`${user?.data?.email}`} </div>
          {/* <div className="my-post">내가 쓴 글</div> */}
        </div>
      </div>

      <div className="myprofile-header-container">
        내 프로필
        <div className="myprofile-logoutButton">
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default MyProfileCard;
