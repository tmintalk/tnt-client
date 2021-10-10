import { useSelector } from "react-redux";
import Login from "../../components/Login";
import Post from "../../components/Post";

const Home = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user.data ? <Post /> : <Login />}
    </>
  );
};

export default Home;
