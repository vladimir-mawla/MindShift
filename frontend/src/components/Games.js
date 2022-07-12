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
              {game}
          </div>
        ))}
        </div>
    </div>
  );
};
export default Games;