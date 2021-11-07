import React from 'react'
import './index.scss';


const QuestionCard = () => {
  return (
    <div className="card-container">
      <div className="card">         
        <div className="card-text-high">후회되는</div>
        <div className="card-text">지출이 있어? 😢</div>
      </div>      
      <div className="card">         
        <div className="card-text">오늘의</div>
        <div className="card-text-high">Flex는? 💸</div>
      </div>      
    </div>
    
    
  )
}

export default QuestionCard;