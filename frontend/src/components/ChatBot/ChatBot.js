import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import { FaTimes } from 'react-icons/fa';

const ChatBot = () => {
  const [inputs, setInputs] = useState(null);
  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(false);
  const input = useRef(0);

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        if(active){
          event.preventDefault();
          handleInput();
          setInputs(1);
      }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const humanMessage = document.querySelector("#message2");

    let greet = [
      "Hello|Hi|hello|hi",
    ];
    let set1 = new RegExp(greet);
    if (set1.test(input.current.value)) {
      // const status = document.querySelector(".chatbot-status");
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      setTimeout(() => {
        botMessage.innerHTML = "<div class='chatbot-bot-message'>Hello There how are you doing today?</br>For Rules, type \"Rules\"</br>For Rules, type \"Rules\"</div>";
      }, 1000);
    }


  };

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