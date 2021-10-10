import { useSelector } from 'react-redux';

import LoginForm from '../LoginForm';

const Login = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user.data ? <></> : <LoginForm/>}
    </>
  )
}

export default Login;