import React from 'react'
import './index.scss';

import PostList from "../PostList";
import QuestionList from '../QuestionList';


const Post = () => {
  return (
    <>
      <div className="header-container"> 
        {/* <div className='header-text'>TnT</div> */}
        {/* <img className="header-title" src='../../commons/img/TnT.png'/> */}
        <img src={require("../../commons/img/TnT.png").default} alt="title"/>
      </div>
      <QuestionList />
      <div className="post-container">
        <PostList />
      </div>
      
    </>
  )
}

export default Post;