import './styles/games.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import QuestionOptions from './QuestionOptions';

const AnsweredQuestions = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([])
    var game_id = localStorage.getItem('played_game_id')

    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/questions/get_questions", {
            game_id: game_id
        })
    
        .then((response) => {
            const s = response.data.questions;
            console.log(response.data.questions);
            setQuestions(s);
        });
        }, []);
        
    return (
        <div>
            <ul>
                {questions.map((question) => (
                    <div key={question.id}>
                        <li key={question.id}>{question.question} ({question.points} points)</li>

                    </div>
                ))}
            </ul>
            
        </div>
    );
};
export default AnsweredQuestions;