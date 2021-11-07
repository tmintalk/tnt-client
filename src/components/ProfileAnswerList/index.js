import React from 'react';
import { useSelector } from 'react-redux';
import ProfileAnswerCard from '../ProfileAnswerCard';

const ProfileAnswerList = () => {
  const { user } = useSelector(state => state);

  return (
    <>
      {
        user.data &&
          user.data.Answers.map(answer => (
            <ProfileAnswerCard 
              question={answer.Question.text}
              answer={answer.answer}
            />
          ))
      }
    </>
  )
}

export default ProfileAnswerList;