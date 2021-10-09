import { useSelector } from 'react-redux';

import LoginForm from '../LoginForm';
import LogoutButton from "../LogoutButton";

const Join = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user.data ? <LogoutButton/> : <LoginForm/>}
    </>
  )
}

export default Join;