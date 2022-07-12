import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const Games = () => {
    const navigate = useNavigate();
    const [games, setGames] = useState([])
  
    useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/api/v1/games/get_games", {
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
            <div className="game">
                {games.map((game) => (
                    <div className="game" key={game.id}>
                <ul class="cards">
                    <li>
                        <a href="" class="card">
                            <img src="https://i.imgur.com/oYiTqum.jpg" class="card-image" alt="" />
                            <div class="card-overlay">
                                <div class="card-header">
                                    <svg class="card-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                    <div class="card-header-text">
                                        <h3 class="card-title">{game.name}</h3>            
                                        <span class="card-status">{game.created_at}</span>
                                    </div>
                                </div>
                                <p class="card-description">{game.description}</p>
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