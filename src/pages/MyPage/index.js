import ProfileAnswerList from "../../components/ProfileAnswerList";
import MyProfileCard from "../../components/MyProfileCard";
import ProfileQuestionGrid from "../../components/ProfileQuestionGrid";
import ConsumptionPattern from '../../components/ConsumptionPattern';
import MyPostList from '../../components/MyPostList';
import Footer from '../../components/Footer';

import './index.scss'

const MyPage = () => {
  return (
    <>
      <MyProfileCard />
      <div className="mypage-bottom-container">
        <ConsumptionPattern />
        <ProfileQuestionGrid />
        <MyPostList />
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
