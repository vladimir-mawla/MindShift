import React from "react";
import GetAnswer from '../GetAnswer/GetAnswer';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AnsweredQuestions = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([])
    var game_id = localStorage.getItem('played_game_id')

    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/questions/get_questions", {
            game_id: game_id},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        })
    
        .then((response) => {
            const s = response.data.questions;
            setQuestions(s);
        });
        }, []);
        
    return (
        <div>
            <AdminNavbar />
            <ol>
                {questions.map((question) => (
                    <div key={question.id}>
                        <li key={question.id}>{question.question} ({question.points} points)</li>
                        <GetAnswer question_id={question.id} />
                    </div>
                ))}
            </ol>
            
        </div>
    );
};
export default AnsweredQuestions;