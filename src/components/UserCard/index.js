import { useSelector } from 'react-redux';

import LoginForm from '../LoginForm';

const UserCard = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user.data ? <h2>상세 페이지</h2> : <LoginForm/>}
    </>
  )
}

export default UserCard;