import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input, Button, Checkbox, Card } from 'antd';
import { LOG_IN_REQUEST } from '../../reducers/user';

const UserCard = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onFinish = (values) => {
    const { email, password, remember } = values;

    // remember 처리
    if (remember) {}

    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        email,
        password
      }
    })
  }

  return (
    <>
      {user.data
      ? 
      <>
        <h2>상세 페이지</h2>
      </>
      :
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>로그인 유지</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
      }
    </>
  )
}

export default UserCard;