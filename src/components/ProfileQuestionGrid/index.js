import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "./index.scss";
import ProfileAnswerCard from "../ProfileAnswerCard";

const ProfileQuestionGrid = () => {
  const { user } = useSelector(state => state)
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (user?.data?.Answers) {
      let questions = {};

      if (user?.data?.Answers?.length !== 0) {
        user?.data?.Answers?.map(answer => {
          let text = answer?.Question?.text;
          if (questions.hasOwnProperty(answer?.Question?.text)) {
            questions[text].push(answer?.answer);
          } else {
            questions[text] = [answer?.answer];
          }
        })
  
        setQuestions([questions]);
      }
    }
    
  }, [user?.data?.Answers]);

  return (
    <>
      <div className="consumption-pattern-container">
        <div className="title"> 오늘의 질문에 이렇게 답했어요! </div>
        <div className="my-question-list-container">
          {
            (questions !== 0)
            ?
            questions.map(question => {
              let key = Object.keys(question)[0]
              return(
                <ProfileAnswerCard
                  question={key}
                  answers={question[key]}
                />
              )
            })
            // TODO: 유미야 고쳐죠
            : <div className = "no-answer"> 아직 답변한 질문이 없어요.😥 </div>
          }
        </div>
      </div>
    </>
  );
};

export default ProfileQuestionGrid;
