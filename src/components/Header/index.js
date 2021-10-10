import { useSelector } from "react-redux";

import { PageHeader, Tag } from "antd";
import LogoutButton from "../LogoutButton";

const Header = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="TnT"
        subTitle={
          user?.data ? `유저: ${user.data.nickname}` : `로그인이 필요합니다.`
        }
        tags={user?.data ? <Tag color="blue">일반 유저</Tag> : ''}
        avatar={user?.data && { src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
        extra={user?.data && [<LogoutButton />]}
      />
    </>
  );
};

export default Header;
