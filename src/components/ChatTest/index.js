import { useSelector } from "react-redux";

import { getFormatDate } from "../../services/time";
import { IoPaperPlaneOutline, IoEllipsisVertical, IoArrowBack } from "react-icons/io5";

import './index.scss'


const ChatTest = () => {
  const { user } = useSelector((state) => state);

  return (
    <>

      <div className="chatTest-header-container"> 
        <button class="back-btn" type="button"> <IoArrowBack className="back-icon" /></button>
        {/* <div className='header-text'>TnT</div> */}
        {/* <img className="header-title" src='../../commons/img/TnT.png'/> */}
        <img src={require("../../commons/img/TnT.png").default} alt="title"/>
        <div class="empty"></div>
      </div>

      <div class="chatTest-container">
        <div class="chatTest-chatbox">
          <div class="chatTest-top-bar">
            <div className="chatTest-profile">
              <div class="chatTest-profile-photo"></div>
              <div class="chatTest-counterperson"> USERNAME </div>
           </div>
            <div class="chatTest-menu">
              <button class="menu-btn" type="button"> <IoEllipsisVertical className="menu-icon" /></button>
            </div>
          </div>
          <div class="chatTest-middle">
            <div class="chatTest-chatting-container">
              <div class="chatTest-receiving">
                <div class="bubble"> chat message from your friend will be shown here. </div>
                <div class="bubble"> Ah Chatting Hwamyeon why so difficult.</div>
                <div class="bubble"> Ah Chatting Hwamyeon why so difficult.</div>

              </div>
              <div class="chatTest-sending">
                <div className="empty-for-chat"></div>
                <div class="bubble-lower"> Today an e ganung?</div>
                <div class="bubble"> Before Dinner Showboo chija. Give Taewoo Hapiness. </div>
                <div class="bubble"> Before Dinner Showboo chija. Give Taewoo Hapiness. </div>
                <div class="bubble"> Before Dinner Showboo chija. Give Taewoo Hapiness. </div>
              </div>
              <div class="chatTest-typing">
                <div class="writing-bubble">
                  <div class="ellipsis one"></div>
                  <div class="ellipsis two"></div>
                  <div class="ellipsis three"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="chatTest-bottom-bar">
            {/* <div class="chatTest-chat"> */}
              <input type="text" class="chatTest-input-box" placeholder="Type a message..." />
              <button class="chatTest-submit-btn" type="button"> <IoPaperPlaneOutline className="send-icon" /></button>
            {/* </div> */}
          </div>
        </div>
      </div>

    </>
  );
};

export default ChatTest;
