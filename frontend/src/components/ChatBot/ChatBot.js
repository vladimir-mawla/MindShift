import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import { FaTimes } from 'react-icons/fa';

const ChatBot = () => {


  return (
    <>
      <div className={clicked ? "chatbot" : "hidden"}>
        <span className="close-chatbot" onClick={()=>{setClicked(false)}}><FaTimes /></span>
        <div className="chatbot-wrapper">
          <div className="chatbot-content">
            <div className="chatbot-header">
              <div className="chatbot-img">
              </div>
              <div className="chatbot-right">
                <div className="chatbot-name">ChatBot</div>
                <div className="chatbot-status"></div>
              </div>
            </div>
            <div className="chatbot-main">
              <div className="chatbot-main_content">
                <div className="chatbot-messages">
                  <div className={inputs ? "chatbot-human-message" : "hello"} id="message2"></div>
                  <div id="message1"></div>
                </div>
              </div>
            </div>
            <div className="chatbot-bottom">
              <div className="chatbot-btm">
                <div className="chatbot-input">
                  <input
                    ref={input}
                    onChange={()=> {setActive(1)}}
                    type="text"
                    id="input"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="chatbot-btn">
                <button disabled={!active} className='chat-submit' onClick={() => {handleInput(); setInputs(1); setActive(0)}}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className={!clicked ? "chat" : "hidden"} onClick={()=>setClicked(true)}>
        <img id='bot' src={require('../assets/chatbot.jpg')} />
      </div>
    </>
  );
};

export default ChatBot;