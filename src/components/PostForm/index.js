import axios from 'axios';

import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd';
import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { GET_POSTS_REQUEST } from '../../reducers/posts';
import { useHistory } from 'react-router';

import './index.scss'

import {
  IoArrowBack,
} from "react-icons/io5";

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
        <div className="post-write-header-container">
          <div className="back">
            <IoArrowBack />
          </div>
          게시물 작성
          <Form.Item>
            <Button type="primary" htmlType="submit">
              작성
            </Button>
          </Form.Item>
        </div>

        <div className="post-write-container">
          <div className="profile-photo" />
          <div>
            <Form.Item
              name="date"
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>

            <div className="price-container">
              I spent
              <Form.Item
                name="price"
                rules={[{ required: true, message: '가격을 입력해주세요' }]}
              >
                <InputNumber placeholder='가격' />
              </Form.Item>
            </div>

            <div className="product-container">
              for
              <Form.Item
                name="item"
                rules={[{ required: true, message: '내용을 입력해주세요' }]}
              >
                <Input placeholder='상품' />
              </Form.Item>
            </div>

            <div className="flex-container">
              and I  
              <Form.Item name="about" rules={[{ required: true }]}>
                <Select
                  placeholder="feeling"
                  allowClear
                >
                  <Option value="flex">Flex</Option>
                  <Option value="etc">Etc</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="detail-container">
                <Form.Item
                name="description"
                rules={[{ required: false, message: '내용을 입력해주세요' }]}
              >
                <Input.TextArea placeholder="상세설명" />
              </Form.Item>
            </div>
          </div>
        </div>
        {/* <Form.Item>
          <Button type="primary" htmlType="submit">
            작성
          </Button>
        </Form.Item> */}
      </Form>
    </>
  )
}

export default PostForm