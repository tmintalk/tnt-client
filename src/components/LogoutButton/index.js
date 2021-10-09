import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../../reducers/user";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const [,,removeCookie] = useCookies(['Authorization']);

  const Logout = () => {
    dispatch({
      type: LOG_OUT_REQUEST
    });

    removeCookie('Authorization');
  }

  return (
    <button 
      onClick={Logout}
    >
      LogOut
    </button>
  )
}

export default LogoutButton;