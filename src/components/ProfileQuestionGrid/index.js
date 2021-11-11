import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "./index.scss";
import ProfileAnswerCard from "../ProfileAnswerCard";

import {
  IoChevronDown,
  IoChevronUp
} from "react-icons/io5";

const ProfileQuestionGrid = () => {
  const { user } = useSelector(state => state)
  const [questions, setQuestions] = useState([]);
  const [isOpened, setOpened] = useState(false);

  const Opened = () => {
    setOpened(!isOpened)
  }

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
          {/* {
            user.data &&
            user.data.Answers.map(answer => (
              <ProfileAnswerCard
                question={answer.Question.text}
                answer={answer.answer}
              />
            ))
          } */}
          <div className="my-question-card">
            <div className="question-line">
              후회되는 지출이 있어?
              <div className="down-icon">
                {isOpened ? <IoChevronUp className="icon" onClick={Opened} /> 
              : <IoChevronDown className="icon" onClick={Opened} /> 
              }
                
              </div>
            </div>
            {isOpened ?
              <div className="question-answer-container">
                <div className="question-answer">첫번째 대답</div>
                <div className="question-answer">두번째 대답</div>
                <div className="question-answer">첫번째 대답</div>
              </div>
              : <></>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileQuestionGrid;
