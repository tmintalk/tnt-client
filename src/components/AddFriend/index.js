import { useSelector } from "react-redux";
import "./index.scss";

import {
  IoSearchOutline,
  IoPersonAddOutline
} from "react-icons/io5";
const AddFriend = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      <div className="addFriend-header-container">
        {/* <img
          src={require("../../commons/img/TnT.png").default}
          alt="title"
        /> */}
        친구 추가
      </div>
      
      <div className="addFriend-search-container">
        <div className="search-button">
          <IoSearchOutline className="search-icon" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            class="form-control"
            placeholder="search your friend"
          />                
        </div>
      </div>

      
      <div className="addFriend-container">
        <div className="list-profile-container">
          <div className="list-friend-profile"></div>
          <div className="list-friend-name">
            유저네임
          </div>
        </div>
        <div className="addfriend-button">
          <IoPersonAddOutline className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default AddFriend;
