import React, { useState } from 'react';
import './Chatbot.css';
import mascot from '../assets/dear-mascot.png'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(process.env.REACT_APP_IFRAME_URL);
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {/* 챗봇 버튼 */}
      <button className="chatbot-toggle" onClick={toggleChat}>
        <img 
          src={mascot} 
          alt="명지전문대학 챗봇" 
          className="chatbot-mascot"
        />
      </button>

      {/* 챗봇 iframe */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>명지전문대학 챗봇</h3>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <iframe
            src = {process.env.REACT_APP_IFRAME_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="명지전문대학 챗봇"
            style={{ border: 'none' }}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot; 