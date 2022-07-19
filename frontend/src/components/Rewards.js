import './styles/rewards.css'
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Rewards = () => {
    const navigate = useNavigate();
    const [rewards, setRewards] = useState([]);

    const handleClick = (event) => {
        localStorage.setItem('reward_id', event.currentTarget.id);
        navigate("/order");
    }

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/api/v1/rewards/get_rewards")

      .then((response) => {
        const s = response.data.rewards;
        setRewards(s);
      });

  }, []);

  return (
    <div className="container">
        <Navbar />
        <div className="game">
            {rewards.map((reward) => (
                <div className="game" key={reward.id}>
            <ul className="cards">
                <li id={reward.id} onClick={handleClick}>
                    <a href="" className="card">
                        <img src={reward.img} className="card-image" alt="" />
                        <div className="card-overlay">
                            <div className="card-header">
                                <svg className="card-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                <div className="card-header-text">
                                    <div className='dis'>

                                        <div><h3 className="card-title">{reward.name}</h3></div>
                                        <div><h3>{reward.needed_points}</h3></div>
                                    </div>            
                                    <span className="card-status">{reward.created_at.slice(5,10)} at {reward.created_at.slice(11,16)}</span>
                                </div>
                            </div>
                            <p className="card-description">{reward.description}</p>
                        </div>
                    </a>      
                </li>
            </ul>
        </div>
            ))}
        </div>
    </div>
);
};

export default Rewards;