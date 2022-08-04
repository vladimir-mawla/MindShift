import './games.css';
import React from "react";
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Games = () => {
    const navigate = useNavigate();
    const [games, setGames] = useState([])
    const getGamesUrl = "http://127.0.0.1:8000/api/v1/games/get_games";
    
    // saving the game id in local storage
    const handleClick = (event) => {
        localStorage.setItem('game_id', event.currentTarget.id);
        navigate("/questions");
    }
  
    useEffect(() => {
    axios
    .get(getGamesUrl,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
        }
    })

    .then((response) => {
        const s = response.data.games;
        setGames(s);
    });
    }, []);

  
    return (
        <>
                {games.map((game) => (
                    <div className='game-card' id={game.id} key={game.id} onClick={handleClick}>
                        <div className='game-info'>
                            <h2>OFFICE QUIZ #{game.id}</h2>
                            <p>Added {game.created_at.slice(8,10)} {game.created_at.slice(5,7)} at {game.created_at.slice(11,16)}</p>
                        </div>
                        <div className='game-contents'>
                            <h4>{game.questions_count} Questions</h4>
                            <div className='game-vl'></div>
                            <div className='points'><h4>Up to {game.points} Points </h4> <div className='game-coins'></div></div>
                        </div>
                    </div>
                ))}
        </>
    );
};
export default Games;