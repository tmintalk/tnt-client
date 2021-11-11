import axios from 'axios';
import { useCookies } from 'react-cookie';

import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import './index.scss';


const LoginForm = () => {
  const [, setCookie] = useCookies(['Authorization']);

  const onFinish = async (values) => {
    const { email, password } = values;

    const res = await axios.post('/auth/login', {
      email,
      password,
    })

    setCookie('Authorization', res.data.token, { path: '/', maxAge: 24 * 60 * 60 });
    window.location.href = "/"  
  }

  return (
    <>
    
      <div className="login-header-container"> 
        <div className="login-signup-text"> Sign Up </div> 
      </div>
      <div className="login-container">
        <div className="login-greeting-text"> 안녕하세요! <br/> TnT 입니다</div>
        <div className="login-greeting-text2"> 서비스 이용을 위해 로그인이 필요해요. </div>
        <div className="login-form-container">
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
            <div className="login-and-join">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  로그인
                </Button>
              </Form.Item>
              <Link to="/join">
                <div className="login-link-to-join"> 회원가입 </div>
              </Link>
            </div>
          </Form>
        </div>

      </div>
    </>
  )
}

export default LoginForm