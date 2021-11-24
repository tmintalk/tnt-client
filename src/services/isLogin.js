import axios from "axios";
import Cookies from "js-cookie";

const isLogin = async () => {
  let token = Cookies.get('Authorization');
  if (!token) return false;

  try {
    await axios.get('/auth/me', {
      headers: {
        Authorization: token
      }
    })
    return true;
  } catch (error) {
    return false;
  }
}
export default isLogin;