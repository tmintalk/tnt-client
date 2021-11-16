import axios from 'axios';
import { useCookies } from 'react-cookie';

import { Form, Input, Button, Upload } from 'antd';
import { Link } from 'react-router-dom';

import './index.scss';

const SignupForm = () => {
  const [, setCookie] = useCookies(['Authorization']);

  const onFinish = async (values) => {
    const { email, password, nickname, image } = values;
    const thumbnailUrl = image?.file?.response?.uri;

    const res = await axios.post('/auth/join', {
      thumbnailUrl,
      email,
      password,
      nickname
    })

    setCookie('Authorization', res.data.token, { path: '/', maxAge: 24 * 60 * 60 });
    window.location.href = "/"  
  }

  return (
    <>

      <div className="signup-header-container"> 
        {/* <div className='header-text'>TnT</div> */}
        {/* <img className="header-title" src='../../commons/img/TnT.png'/> */}
        <img src={require("../../commons/img/TnT.png").default} alt="title"/>
      </div>
      <div className="signup-container">
        <div className="signup-greeting-text">
          <div className="greeting-text-first">
            안녕하세요! <br/> TnT 입니다.
          </div>
          <div className="greeting-text-second">
            서비스 이용을 위해 회원가입이 필요해요.
          </div>
        </div>
        <div className="signup-profile-photo"></div>
        <div className="signup-form-container">
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="썸네일 이미지"
              name="image"
            >
              <Upload 
                name="image"
                action={'http://ec2-13-125-111-9.ap-northeast-2.compute.amazonaws.com/uploads'}
              >
                <button>선택</button>
              </Upload>
            </Form.Item>
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
            <div className='join-and-login'>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  회원가입
                </Button>
              </Form.Item>
              <Link to="/">
                <div className="link-to-login">로그인</div>
              </Link>
            </div>
          </Form>
        </div>
        {/* <Link to="/">로그인</Link> */}
      </div>
    </>
  )
}

export default SignupForm