import React from 'react'

const ProfileAnswerCard = (props) => {
  return (
    <>
      <h2>Question: {props?.question}</h2>
      <h3>Answer: {props?.answer}</h3>
    </>
  )
}

export default ProfileAnswerCard;