import axios from 'axios';

import { Form, Input, Button } from 'antd';
import { createRef } from 'react';

const PostForm = () => {
  var formRef = createRef();

  const onFinish = async (values) => {
    const { body } = values;

    const res = await axios.post('/posts', {
      body
    })
    console.log('res', res);
    formRef.current.resetFields();
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