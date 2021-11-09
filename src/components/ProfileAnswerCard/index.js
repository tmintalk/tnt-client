import React, { useState } from 'react'

import { Modal } from 'antd';
import './index.scss'

const ProfileAnswerCard = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  }

  return (
    <>
      <div className="question" onClick={showModal}>
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
      </Modal>
    </>
  )
}

export default ProfileAnswerCard;