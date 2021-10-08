import { useSelector } from "react-redux";


const Header = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <h1>Header</h1>
      {user.data && <h2>현재 사용자: {user?.data?.nickname}</h2>}
    </>
  );
};

export default Header;
