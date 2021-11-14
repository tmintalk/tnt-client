import UserProfileCard from "../../components/UserProfileCard";
import ConsumptionPattern from "../../components/ConsumptionPattern";
import UserProfileQuestionGrid from "../../components/UserProfileQuestionGrid";

const FriendProfile = (props) => {
  const { id } = props.match.params;
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <>
      <UserProfileCard id={id} goBack={goBack} />
      <ConsumptionPattern />
      <UserProfileQuestionGrid id={id} />
    </>
  );
};

export default FriendProfile;
