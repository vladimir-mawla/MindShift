import './games.css';
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import ChatBot from '../ChatBot/ChatBot';

const Games = () => {
    const navigate = useNavigate();
    const [games, setGames] = useState([])

    
    const handleClick = (event) => {
        localStorage.setItem('game_id', event.currentTarget.id);
        navigate("/questions");
    }
  
    useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/api/v1/games/get_games",{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
        }
    })

    .then((response) => {
        const s = response.data.games;
        console.log(response.data.games)
        setGames(s);
    });
    }, []);

  
    return (
        <div className="container">
            <Navbar />
            <ChatBot />
            <div className="game">
                {games.map((game) => (
                <div key={game.id}>
                <ul className="cards">
                    <li id={game.id} onClick={handleClick}>
                        <a href="" className="card">
                            <img src={game.img} className="card-image" alt="" />
                            <div className="card-overlay">
                                <div className="card-header">
                                    <svg className="card-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                    <div className="card-header-text">
                                        <div className='dis'>
                                            <div className='name'><h3 className="card-title">{game.name}</h3></div>
                                            <div className='points'><h3>{game.points}</h3></div>
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
export default Games;