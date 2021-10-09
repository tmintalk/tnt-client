import axios from 'axios';
import { useCookies } from 'react-cookie';

import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [, setCookie] = useCookies(['Authorization']);

  const onFinish = async (values) => {
    const { email, password, nickname } = values;

    const res = await axios.post('/auth/join', {
      email,
      password,
      nickname
    })
    console.log('res', res)


    setCookie('Authorization', res.data.token, { path: '/', maxAge: 24 * 60 * 60 });
    window.location.href = "/"  
  }

  return (
    <>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Nickname"
          name="nickname"
          rules={[{ required: true, message: '닉네임을 입력해주세요!' }]}
        >
          <Input />
        </Form.Item>
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>
      </Form>
      <Link to="/">로그인</Link>
    </>
  )
}

export default SignupForm