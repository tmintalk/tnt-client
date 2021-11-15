import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
// 사용할 아이콘 import

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoAdd } from "react-icons/io5";

const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);

  // 새로고침해도 activeNav state 유지
  useEffect(() => {
    setActiveNav(JSON.parse(window.localStorage.getItem("activeNav")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("activeNav", JSON.stringify(activeNav));
  }, [activeNav]);
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <div>
          <FontAwesomeIcon
            icon="home"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
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
      <Link to="/posts" className="nav-link" onClick={() => setActiveNav(1)}>
        <div>
          <div className="center-icon">
            <IoAdd className="center-plus" />
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
