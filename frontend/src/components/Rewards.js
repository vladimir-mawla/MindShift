import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Rewards = () => {
    const [rewards, setRewards] = useState([]);

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
            {games.map((game) => (
                <div className="game" key={game.id}>
            <ul className="cards">
                <li id={game.id} onClick={handleClick}>
                    <a href="" className="card">
                        <img src={game.img} className="card-image" alt="" />
                        <div className="card-overlay">
                            <div className="card-header">
                                <svg className="card-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                <div className="card-header-text">
                                    <div className='dis'>

                                        <div><h3 className="card-title">{game.name}</h3></div>
                                        <div><h3>{game.points}</h3></div>
                                    </div>            
                                    <span className="card-status">{game.created_at.slice(5,10)} at {game.created_at.slice(11,16)}</span>
                                </div>
                            </div>
                            <p className="card-description">{game.description}</p>
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