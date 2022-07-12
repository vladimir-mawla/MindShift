import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

const Games = () => {
  const navigate = useNavigate();


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