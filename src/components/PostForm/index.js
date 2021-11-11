import axios from 'axios';

import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd';
import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { GET_POSTS_REQUEST } from '../../reducers/posts';
import { useHistory } from 'react-router';

const { Option } = Select;

const PostForm = () => {
  let history = useHistory()
  var formRef = createRef();
  const dispatch = useDispatch();

  const onFinish = async (values) => {

    await axios.post('/posts', values)
    formRef.current.resetFields();

    dispatch({
      type: GET_POSTS_REQUEST
    })

    history.push('/')
  }

  return (
    <>
      <Form
        ref={formRef}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item 
          name="date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="price"
          rules={[{ required: true, message: '가격을 입력해주세요' }]}
        >
          <InputNumber placeholder='가격'/>
        </Form.Item>
        <Form.Item
          name="item"
          rules={[{ required: true, message: '내용을 입력해주세요' }]}
        >
          <Input placeholder='상품'/>
        </Form.Item>
        <Form.Item name="about" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="flex">Flex</Option>
            <Option value="etc">Etc</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="description"
          rules={[{ required: true, message: '내용을 입력해주세요' }]}
        >
          <Input.TextArea placeholder="상세설명"/>
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