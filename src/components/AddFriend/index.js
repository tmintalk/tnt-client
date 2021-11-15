import { useEffect, useState } from 'react';
import axios from 'axios'

import {
  IoSearchOutline,
  IoPersonAddOutline
} from "react-icons/io5";
import "./index.scss";
import { Link } from 'react-router-dom';

const AddFriend = (props) => {
  const { nickname } = props.match.params;
  console.log(nickname);
  const [user, setUser] = useState();

  useEffect(() => {
    if (nickname) {
      axios.get(`/users/find/${nickname}`)
        .then(res => {
          setUser(res.data);
          console.log(res.data);
        })
    }
  }, [])
  
  return (
    <>
      {user ?
        <>
          <div className="addFriend-header-container">
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

          <Link to={`/users/${user?.id}`}>
            <div className="addFriend-container">
              <div className="list-profile-container">
                <div className="list-friend-profile"></div>
                <div className="list-friend-name">
                  {user?.nickname}
                </div>
              </div>
              <div className="addfriend-button">
                <IoPersonAddOutline className="search-icon" />
              </div>
            </div>
          </Link>
        </>
      :
      <h3>TODO</h3>
      }
    </>
  );
};

export default AddFriend;
