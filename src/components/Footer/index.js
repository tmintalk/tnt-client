import { GithubOutlined } from '@ant-design/icons'

import './index.scss'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <a href="https://github.com/TheStarkor"><GithubOutlined style={{color:'#ffffff'}}/> github link</a>
      </div>
    </>
  );
};

export default Footer;
