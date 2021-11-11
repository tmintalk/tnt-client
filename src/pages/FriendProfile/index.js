import ProfileCard from "../../components/ProfileCard";
import ConsumptionPattern from "../../components/ConsumptionPattern";
import ProfileQuestionGrid from "../../components/ProfileQuestionGrid";

const FriendProfile = () => {
  return (
    <>
      {/* <h3> friends page </h3> */}
      <ProfileCard />
      <ConsumptionPattern />
      <ProfileQuestionGrid />
    </>
  );
};

export default FriendProfile;
