import axios from 'axios';

import { Form, Input, Button } from 'antd';
import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { GET_POSTS_REQUEST } from '../../reducers/posts';

const PostForm = () => {
  var formRef = createRef();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { body } = values;

    await axios.post('/posts', {
      body
    })
    formRef.current.resetFields();

    dispatch({
      type: GET_POSTS_REQUEST
    })
  }

  return (
    <>
      <Form
        ref={formRef}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="body"
          rules={[{ required: true, message: '내용을 입력해주세요' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            작성
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default PostForm