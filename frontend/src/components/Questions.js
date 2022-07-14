import './styles/games.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const Questions = () => {
    const [questions, setQuestions] = useState([])
    var game_id = localStorage.getItem('game_id')

    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/questions/get_questions", {
            game_id: game_id
        })
    
        .then((response) => {
            const s = response.data.questions;
            setQuestions(s);
        });
        }, []);

    return (
        <div>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>{question.question} ({question.points} points)</li>
                ))}
            </ul>
        </div>
    );
};
export default Questions;