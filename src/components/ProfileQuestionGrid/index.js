import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "./index.scss";
import ProfileAnswerCard from "../ProfileAnswerCard";

const ProfileQuestionGrid = () => {
  const { user } = useSelector(state => state)
  const [, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("/questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="consumption-pattern-container">
        <div className="title"> 오늘의 질문에 이렇게 답했어요! </div>
        <div className="my-question-list-container">
          {
            user.data?.Answers.length !== 0
            ?
            user.data.Answers.map(answer => (
              <ProfileAnswerCard
                question={answer.Question.text}
                answer={answer.answer}
              />
            ))
            // TODO: 유미야 고쳐죠
            : <div>없음없음</div>
          }
        </div>
      </div>
    </>
  );
};

export default ProfileQuestionGrid;
