import {useState } from "react";
import UserProfileCard from "../../components/UserProfileCard";
import ConsumptionPattern from "../../components/ConsumptionPattern";
import UserProfileQuestionGrid from "../../components/UserProfileQuestionGrid";
import { useSelector } from "react-redux";

const FriendProfile = (props) => {
  const { id } = props.match.params;
  const { user } = useSelector((state) => state);
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <>
      <UserProfileCard id={id} goBack={goBack} curUser={user?.data} />
      <ConsumptionPattern id={id} />
      <UserProfileQuestionGrid id={id} />
    </>
  );
};

export default FriendProfile;
