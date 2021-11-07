import React from 'react'
import './index.scss';

import PostList from "../PostList";
import QuestionCard from '../QuestionCard';


const Post = () => {
  return (
    <>
      <div className="header-container"> 
        {/* <div className='header-text'>TnT</div> */}
        {/* <img className="header-title" src='../../commons/img/TnT.png'/> */}
        <img src={require("../../commons/img/TnT.png").default}/>
      </div>
      <div className="question-container">
        <div className="greeting-text">Hi Taewoo!</div>
        <div className="question-text">오늘의 소비는 어땠어?</div>
        <QuestionCard/>
      </div>
      {/* <PostForm /> */}
      <div className="post-container">
        <PostList />
      </div>
      
    </>
  )
}

export default Post;