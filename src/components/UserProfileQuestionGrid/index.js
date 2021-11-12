import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.scss";
import ProfileAnswerCard from "../ProfileAnswerCard";

const UserProfileQuestionGrid = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (props.id) {
      axios.get(`/users/${props.id}`)
        .then(res => {
          console.log(res.data);
          setUser(res.data);
        })
    }
  }, [props?.id])

  return (
    <>
      <div className="consumption-pattern-container">
        <div className="title"> 오늘의 질문에 이렇게 답했어요! </div>
        <div className="my-question-list-container">
          {
            user &&
              user?.Answers.map(answer => (
                <ProfileAnswerCard
                  question={answer.Question.text}
                  answer={answer.answer}
                />
              ))
          }
        </div>
      </div>
    </>
  );
};

export default UserProfileQuestionGrid;
