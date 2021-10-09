import { useSelector } from "react-redux";
import Login from "../../components/Login";
import Post from "../../components/Post";
import UserList from "../../components/UserList";

const Home = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <Login />
      {user.data && (
        <>
          <UserList />
          <Post />
        </>
      )}
    </>
  );
};

export default Home;
