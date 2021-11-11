import ProfileAnswerList from "../../components/ProfileAnswerList";
import MyProfileCard from "../../components/MyProfileCard";
import ProfileQuestionGrid from "../../components/ProfileQuestionGrid";
import ConsumptionPattern from '../../components/ConsumptionPattern';

const MyPage = () => {
  return (
    <>
      <MyProfileCard />
      <ConsumptionPattern />
      <ProfileQuestionGrid />
    </>
  );
};

export default MyPage;
