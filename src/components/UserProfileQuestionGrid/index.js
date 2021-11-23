import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.scss";
import ProfileAnswerCard from "../ProfileAnswerCard";

const UserProfileQuestionGrid = (props) => {
  const [, setUser] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (props.id) {
      axios.get(`/users/${props.id}`)
        .then(res => {
          setUser(res.data);
              
          if (res?.data?.Answers?.length !== 0) {
            let questions = {};

            res?.data?.Answers?.map(answer => {
              let text = answer?.Question?.text;
              if (questions.hasOwnProperty(answer?.Question?.text)) {
                questions[text].push(answer?.answer);
              } else {
                questions[text] = [answer?.answer];
              }
            })
  
            setQuestions([questions]);
          }
        })
    }
  }, [props?.id])

  return (
    <>
      <div className="consumption-pattern-container">
        <div className="title"> 오늘의 질문에 이렇게 답했어요! </div>
        <div className="my-question-list-container">
          {
            (questions?.length !== 0) ?
              questions?.map(question => {
                let key = Object.keys(question)[0]
                return (
                  <ProfileAnswerCard
                    question={key}
                    answers={question[key]}
                  />
                )
              })
              : <div className = "no-answer"> 아직 답변한 질문이 없어요.😥 </div>
          }
        </div>
      </div>
    </>
  );
};

export default UserProfileQuestionGrid;
