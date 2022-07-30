import './addgame.css';
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import AdminNavba from '../AdminNavbar/AdminNavbar';

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
      <>
        <div className="add-game-container">
          <AdminNavba />
          <div className='add-game'>
            <div className='add-game-title'>
              <h1>Games</h1>
              <Button text={'ADD GAME'} className={'admin-add'} />
            </div>
          <div className='admin-game-cards'>
                {games.map((game) => (
                    <div className='add-game-card' id={game.id} key={game.id} onClick={handleClick}>
                        {/* <span className="game-remove-icon" onClick={()=>{console.log('handleClose')}}><h1>x</h1></span> */}
                        <div className='admin-game-info'>
                            <h2>OFFICE QUIZ #{game.id}</h2>
                            <p>Added {game.created_at.slice(8,10)} {game.created_at.slice(5,7)} at {game.created_at.slice(11,16)}</p>
                        </div>
                        <div className='admin-game-contents'>
                            <Button text={'OPEN'} className='admin-open' />
                            <div className='admin-game-vl'></div>
                            <Button text={'DELETE'} className='admin-delete' />
                        </div>
                    </div>
                ))}
                          </div>

                </div>
        </div>
        </>
    );
};
export default Games;