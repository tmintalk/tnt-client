import React, { useEffect, useState } from "react";
import "./index.scss";

import QuestionCard from "../QuestionCard";
import axios from "axios";
import { useSelector } from "react-redux";

const QuestionList = () => {
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
      <div className="question-container">
        <div className="greeting-text">Hi {user.data?.nickname}</div>
        <div className="question-text">오늘의 소비는 어땠어?</div>
        <div className="card-container">
          {
            questions.length !== 0 
            && questions.map(question => (
              <QuestionCard id={question.id} text={question.text} />
            ))
          } 
        </div>
      </div>
    </>
  );
};

export default QuestionList;
