import './styles/games.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const Game = () => {
    const [questions, setQuestions] = useState([])
    var game_id = localStorage.getItem('game_id')

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/v1/questions/get_questions", {
            game_id: game_id
        })
    
        .then((response) => {
            const s = response.data.questions;
            setQuestions(s);
        });
        }, []);
        
    return (
        <div>
            <h1>{game_id}</h1>
        </div>
    );
};
export default Game;