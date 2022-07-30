import './addgame.css';
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Popup from '../PopUp/PopUp';
import AdminNavba from '../AdminNavbar/AdminNavbar';

const Games = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [games, setGames] = useState([])


    const handleClick = (event) => {
        localStorage.setItem('game_id', event.currentTarget.id);
        navigate("/questions");
    }

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/v1/games/get_games", {
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

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <div className="add-game-container">
                <AdminNavba />
                <div className='add-game'>
                    <div className='add-game-title'>
                        <h1>Games</h1>
                        <Button text={'ADD GAME'} className={'admin-add'} onClick={togglePopup} />
                    </div>
                    <div className='admin-game-cards'>
                        {games.map((game) => (
                            <div className='add-game-card' id={game.id} key={game.id} onClick={handleClick}>
                                <div className='admin-game-info'>
                                    <h2>OFFICE QUIZ #{game.id}</h2>
                                    <p>Added {game.created_at.slice(8, 10)} {game.created_at.slice(5, 7)} at {game.created_at.slice(11, 16)}</p>
                                </div>
                                <div className='admin-game-contents'>
                                    <Button text={'OPEN'} className='admin-open' />
                                    <div className='admin-game-vl'></div>
                                    <Button text={'DELETE'} className='admin-delete' />
                                </div>
                            </div>
                        ))}
                    </div>
                    {isOpen && <Popup
                        content={<>
                            <AddGame />
                        </>}
                        handleClose={togglePopup}
                    />}
                </div>
            </div>
        </>
    );
};
export default Games;

const AddGame = () => {
    const element = useRef(0)
    const name = useRef(0)
    const description = useRef(0)
    const points = useRef(0)
    const navigate = useNavigate()
    var s;
    
  function encode() {
    var file = element.current.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      s = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function submit() {
    axios
    .post("http://127.0.0.1:8000/api/v1/games/add_game", {
        name: name.current.value,
        description: description.current.value,
        points: points.current.value,
        img: s,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Accept: 'application/json'
      }
    })
    .then((response) => {
        localStorage.setItem('game_id', response.data.game.id)
        navigate('/add_options')
      });

  }
    return (
        <div className='game-popup-container'>
        <div className="popup-form">
            <div className="popup-select-box">
                <label>Reward Name</label>
                <input ref={name} type="text"></input>
            </div>
            <div className="popup-select-box">
                <label>Reward Description</label>
                <input ref={description} type="text"></input>
            </div>
            <div className="popup-select-box">
                <label>Reward Points</label>
                <input ref={points} type="text"></input>
            </div>
            <div className="popup-select-box">
                <label>Reward Image</label>
                <input ref={element} type="file" onChange={() => { encode(); }}></input>
            </div>
            <Button onClick={() => { submit(); }} text={'SUBMIT'} className='game-popup-button' />
        </div>
    </div>
    )
};
