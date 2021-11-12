import UserProfileCard from "../../components/UserProfileCard";
import ConsumptionPattern from "../../components/ConsumptionPattern";
import UserProfileQuestionGrid from "../../components/UserProfileQuestionGrid";

const FriendProfile = (props) => {
  const { id } = props.match.params;

  return (
    <>
      <UserProfileCard id={id}/>
      <div className="mypage-bottom-container">
        <ConsumptionPattern />
        <UserProfileQuestionGrid id={id} />
      </div>
      
    </>
  );
};

export default FriendProfile;
