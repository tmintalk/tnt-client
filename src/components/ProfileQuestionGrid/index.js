import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "./index.scss";
import ProfileAnswerCard from "../ProfileAnswerCard";

const ProfileQuestionGrid = () => {
  const { user } = useSelector(state => state)
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("/questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className = "partition"></div>
      <div className="question-title"> 오늘의 질문에 이렇게 답했어요! </div>
      <div className="question-list-container">
        {/* <div className="first-line">
          <div className="first-question">
            <div className="first-text"> 후회되는 지출이 있어?😥 </div>
          </div>
          <div className="second-question">  
            <div className="second-text"> 오늘의 FLEX는?💸 </div>
          </div>
        </div>
        <div className="second-line">
          <div className="third-question">
            <div className="third-text"> 의도하지 않았던
지출이 있어?😥 </div>
          </div>
          <div className="last-question">
            <div className="last-text"> 마지막 질문은?💸 </div>
          </div>          
        </div> */}
          {
            user.data &&
              user.data.Answers.map(answer => (
                <ProfileAnswerCard 
                  question={answer.Question.text}
                  answer={answer.answer}
                />
              ))
          }
      </div>
    </>
  );
};

export default ProfileQuestionGrid;
