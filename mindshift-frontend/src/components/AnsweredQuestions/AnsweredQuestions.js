import React from "react";
import GetAnswer from '../GetAnswer/GetAnswer';
import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AnsweredQuestions = () => {
    const [questions, setQuestions] = useState([])
    var game_id = localStorage.getItem('played_game_id')
    const getQuestionsUrl = "http://127.0.0.1:8000/api/v1/questions/get_questions";

    useEffect(() => {
        axios
        .post(getQuestionsUrl, {
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
        }, [game_id]);
        
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