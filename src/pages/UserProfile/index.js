import UserProfileCard from "../../components/UserProfileCard";
import UserProfileQuestionGrid from "../../components/UserProfileQuestionGrid";
import { useSelector } from "react-redux";
import FriendConsumptionPattern from "../../components/FriendConsumptionPattern";

const FriendProfile = (props) => {
  const { id } = props.match.params;
  const { user } = useSelector((state) => state);
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <>
      <UserProfileCard id={id} goBack={goBack} curUser={user?.data} />
      <FriendConsumptionPattern id={id} />
      <UserProfileQuestionGrid id={id} />
    </>
  );
};

export default FriendProfile;
