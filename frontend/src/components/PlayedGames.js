import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const PlayedGames = () => {
    const navigate = useNavigate()
    const [games, setGames] = useState([])
    useEffect(() => {

        axios
        .post("http://127.0.0.1:8000/api/v1/played_games/get_played_games", {
            user_id: localStorage.getItem("employee_id")
        })
        .then((response) => {
            setGames(response.data[0][0]['games'])
        })

    }, []);

    const handleClick = (event) => {
        localStorage.setItem('game_id', event.currentTarget.id);
        navigate("/answered_questions");
    }

    return (
        <div className="container">
        <Navbar />
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
    )
}

export default PlayedGames;