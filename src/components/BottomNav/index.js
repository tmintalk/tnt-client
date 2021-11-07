import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
// 사용할 아이콘 import

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoAdd } from "react-icons/io5";


const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <div>
          <FontAwesomeIcon
            icon="home"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
          {/* <IoHomeOutline
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          /> */}
          {/* <div>
            {activeNav === 1 ?
              <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.8 25.5H17.3V16.2076V15.7076H16.8H11.2H10.7V16.2076V25.5H4.2C3.70258 25.5 3.3 25.0972 3.3 24.6011V13.4098V12.9098H2.8H2.41553C1.96999 12.9098 1.74694 12.371 2.06211 12.0561L13.3636 0.763326C13.3636 0.763308 13.3636 0.76329 13.3636 0.763271C13.7151 0.412243 14.2849 0.412243 14.6364 0.763271C14.6364 0.76329 14.6364 0.763308 14.6364 0.763326L25.9379 12.0561C26.2531 12.371 26.03 12.9098 25.5845 12.9098H25.2H24.7V13.4098V24.6011C24.7 25.0972 24.2974 25.5 23.8 25.5Z" stroke="black" />
                <line x1="8" y1="32" x2="20" y2="32" stroke="black" stroke-width="2" stroke-linecap="round" />
              </svg>

              :
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.8 25.5H16.3V16.2076V15.7076H15.8H10.2H9.7V16.2076V25.5H3.2C2.70258 25.5 2.3 25.0972 2.3 24.6011V13.4098V12.9098H1.8H1.41553C0.969985 12.9098 0.746944 12.371 1.06211 12.0561L12.3636 0.763326C12.3636 0.763308 12.3636 0.76329 12.3636 0.763271C12.7151 0.412243 13.2849 0.412243 13.6364 0.763271C13.6364 0.76329 13.6364 0.763308 13.6364 0.763326L24.9379 12.0561C25.2531 12.371 25.03 12.9098 24.5845 12.9098H24.2H23.7V13.4098V24.6011C23.7 25.0972 23.2974 25.5 22.8 25.5Z" stroke="gray" />
              </svg>
            }
          </div> */}
          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </div>
      </Link>
      <Link to="/users" className="nav-link" onClick={() => setActiveNav(2)}>
        <div>
          <FontAwesomeIcon
            icon="user-group"
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/users" className="nav-link" onClick={() => setActiveNav(2)}>
        <div>
          <div className="center-icon">
          <IoAdd className="center-plus"/>
          </div>
        </div>
      </Link>
      <Link to="/chat" className="nav-link" onClick={() => setActiveNav(3)}>
        <div>
          <FontAwesomeIcon
            icon="message"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/mypage" className="nav-link" onClick={() => setActiveNav(4)}>
        <div>
          <FontAwesomeIcon
            icon="user"
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;