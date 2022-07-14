import './styles/games.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const Game = () => {
    var game_id = localStorage.getItem('game_id')
    return (
        <div>
            <h1>{game_id}</h1>
        </div>
    );
};
export default Game;