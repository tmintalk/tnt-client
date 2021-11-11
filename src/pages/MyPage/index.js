import ProfileAnswerList from "../../components/ProfileAnswerList";
import MyProfileCard from "../../components/MyProfileCard";
import ProfileQuestionGrid from "../../components/ProfileQuestionGrid";
import ConsumptionPattern from '../../components/ConsumptionPattern';

import './index.scss'

const MyPage = () => {
  return (
    <>
      <MyProfileCard />
      <div className="mypage-bottom-container">
        <ConsumptionPattern />
        <ProfileQuestionGrid />
      </div>
    </>
  );
};

export default MyPage;
