import React from "react";
import "./index.scss";
import { IoPaperPlaneOutline } from "react-icons/io5";
const NewMessageForm = ({
  newMessage,
  handleNewMessageChange,
  handleStartTyping,
  handleStopTyping,
  handleSendMessage,
}) => {
  return (
    <>
      <div className="new-message-container">
        <form className="new-message-form">
          <input
            type="text"
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Send a message..."
            className="new-message-input-field"
            onKeyPress={handleStartTyping}
            onKeyUp={handleStopTyping}
          />
          <a href="#new-message">
            <button
              class="new-message-submit-btn"
              type="submit"
              onClick={handleSendMessage}
            >
              {" "}
              <IoPaperPlaneOutline className="send-icon" />
            </button>
          </a>
        </form>
      </div>
    </>
  );
};

export default NewMessageForm;
