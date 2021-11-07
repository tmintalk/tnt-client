import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Modal, Input, Form, Button } from 'antd';
import "./index.scss";
import { GET_ME_REQUEST } from "../../reducers/user";

const { TextArea } = Input;

const QuestionCard = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  }

  const answerQuestion = async (values) => {
    const { answer } = values;

    const res = await axios.post(`/questions/answer/${props?.id}`, {
      answer
    });

    if (res.status === 200) {
      dispatch({
        type: GET_ME_REQUEST
      })
    }

    form.resetFields();
    setIsModalVisible(false);
  }
  
  return (
    <>
      <div className="card" onClick={showModal}>
        <div className="card-text">{props?.text}</div>
      </div>

      <Modal 
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={answerQuestion}
        >
          <Form.Item 
            name="answer"
            label={props?.text}
          >
            <TextArea showCount maxLength={100} rows={4} />
            {/* <button onClick={answerQuestion}>talk</button> */}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              talk
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default QuestionCard;
