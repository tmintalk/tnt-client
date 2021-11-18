import { useSelector } from "react-redux";
import Login from "../../components/Login";
import Post from "../../components/Post";
import Footer from '../../components/Footer';

const Home = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user.data ? <><Post /><Footer/></> : <Login />}
    </>
  );
};

export default Home;
