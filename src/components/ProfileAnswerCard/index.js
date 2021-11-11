import React, { useState } from 'react'

import { Modal } from 'antd';
import './index.scss'

import {
  IoChevronDown,
  IoChevronUp
} from "react-icons/io5";

const ProfileAnswerCard = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpened, setOpened] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  }
  const Opened = () => {
    setOpened(!isOpened)
  }

  return (
    <>
      {/* <div className="question" onClick={showModal}>
        <div className="text">Question: {props?.question}</div>
      </div>

      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <div>
          {props?.answer}
        </div>
      </Modal> */}
      <div className="my-question-card" onClick={Opened} >
        <div className="question-line">
            {props?.question}
          <div className="down-icon">
            {isOpened ? <IoChevronUp className="icon"/>
              : <IoChevronDown className="icon"/>
            }

          </div>
        </div>
        {isOpened ?
          <div className="question-answer-container">
            <div className="question-answer">{props?.answer}</div>
          </div>
          : <></>
        }
      </div>
    </>
  )
}

export default ProfileAnswerCard;