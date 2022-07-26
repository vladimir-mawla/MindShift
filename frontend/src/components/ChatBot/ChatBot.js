import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import { FaTimes } from 'react-icons/fa';

const ChatBot = () => {
  const [inputs, setInputs] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickable, setClickable] = useState(false);
  const input = useRef(0);

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        if(input.current.value){
          event.preventDefault();
          handleInput();
          setInputs(true);
          setClickable(false);
      }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  if( clicked && !inputs){
    const status = document.querySelector(".chatbot-status");
    status.innerHTML="<div class='grey'>Offline</div> "
  }

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const humanMessage = document.querySelector("#message2");

    let greet = [
      "Hello|Hi|hello|hi|Hey|hey",
    ];
    let set1 = new RegExp(greet);
    if (set1.test(input.current.value)) {
      const status = document.querySelector(".chatbot-status");
      status.innerHTML="<div class='green'>Online</div>"
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      setTimeout(() => {
        botMessage.innerHTML = "<div class='chatbot-bot-message'>Hey There! Hope you are scoring well today!</br>For Rules, type \"Rules\".</br>For Navigation, type your desired location.</div>";
      }, 1000);
    }

    let bye = [
      "Bye|bye|Goodbye|goodbye|See you later|see you later|See you|see you",
    ];
    let set2 = new RegExp(bye);
    if (set2.test(input.current.value)) {
      const status = document.querySelector(".chatbot-status");
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      setTimeout(async () => {
        botMessage.innerHTML = "<div class='chatbot-bot-message'>Bye, have a nice day</div>";
        status.innerHTML="<div class='grey'>Offline</div> "
      }, 1000);

    }

    let thanks = [
      "Thanks|thanks|thank you|Thank you|Thank You|thank you very much|thank you very much",
    ];
    let set3 = new RegExp(thanks);
    if (set3.test(input.current.value)) {
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      setTimeout(() => {
        botMessage.innerHTML = "<div class='chatbot-bot-message'>You are welcome</div>";
      }, 1000);
    }

    let check_up = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let set4 = new RegExp(check_up);
    if (set4.test(input.current.value)) {
      const status = document.querySelector(".chatbot-status");
      status.innerHTML="<div class='green'>Online</div>"
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      setTimeout(() => {
        botMessage.innerHTML = "<div class='chatbot-bot-message'>I am fine, thank you</div>";
      }, 1000);
    }

    let rules = [
      "Rules|rules",
    ];
    let set5 = new RegExp(rules);
    if (set5.test(input.current.value)) {
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      const status = document.querySelector(".chatbot-status");
      status.innerHTML="<div class='green'>Online</div>"
      setTimeout(() => {
        botMessage.innerHTML = "<div class='chatbot-bot-message'>The game rules are simple:</br><ol><li>You can't leave empty answers.</li><li>You can't play a game twice.</li></ol> If admins detect any cheating attempt, you will be kicked out of the application.</div>";
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|Good|good|I'm good|i'm good|great|Great",
    ];
    let set6 = new RegExp(response);
    if (set6.test(input.current.value)) {
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      const status = document.querySelector(".chatbot-status");
      status.innerHTML="<div class='green'>Online</div>"
      setTimeout(() => {
        botMessage.innerHTML =
          "<div class='chatbot-bot-message'>please choose a movie from the list(minions, doctor strange, jurassic world, thor, sonic, spider-man, dog, the lost city, morbius</div>";
        }, 1000);
    }

    let location = [
      "Leaderboards|Rewards|Profile|Games|Colleagues|Page|leaderboards|rewards|profile|games|colleagues|page",
    ];
    let set7 = new RegExp(location);
    let target = input.current.value;
    if (set7.test(target)) {
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      const status = document.querySelector(".chatbot-status");
      status.innerHTML="<div class='green'>Online</div>"
      setTimeout(() => {
        botMessage.innerHTML = `<div class='chatbot-bot-message'>Here is your link <a color='blue' href="http://localhost:3000/${target}">Click here to go to ${target}</a></div>`;
      }, 1000);
    }

    let name = [
      "What's your name|what's your name|What is your name|what is your name|who are you|Who are you|name|Name",
    ];
    let set8 = new RegExp(name);
    if (set8.test(input.current.value)) {
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      const status = document.querySelector(".chatbot-status");
      status.innerHTML="<div class='green'>Online</div>"
      setTimeout(() => {
        botMessage.innerHTML = "<div class='chatbot-bot-message'>MindShift</div>";
      }, 1000);
    }

    let age = [
      "How old are you|how old are you|age|Age",
    ]; //adding the age-question
    let set9 = new RegExp(age);
    if (set9.test(input.current.value)) {
      // if the input contains some question
      botMessage.innerHTML = "<div class='chatbot-bot-message'>Typing...</div>";
      const status = document.querySelector(".chatbot-status");
      status.innerHTML="<div class='green'>Online</div>"
      setTimeout(() => {
        botMessage.innerHTML = "<div class='chatbot-bot-message'>I've been around so long i can remember</div>";
      }, 1000);
    }
    humanMessage.innerHTML = input.current.value; // display the input
    input.current.value = "";
  };

  return (
    <>
      <div className={clicked ? "chatbot" : "hidden" }>
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
                    onChange={()=>{setClickable(true)}}
                    type="text"
                    id="input"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="chatbot-btn">
                <button disabled={!clickable} className='chat-submit' onClick={() => {handleInput(); setInputs(true); }}>
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