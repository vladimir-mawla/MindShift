import './questions.css';
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import QuestionOptions from '../QuestionOptions/QuestionOptions';
import ChatBot from "../ChatBot/ChatBot";

const Questions = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([])
    const [name, setName] = useState(null);
    var game_id = localStorage.getItem('game_id')
    const getQuestionsUrl = "http://127.0.0.1:8000/api/v1/questions/get_questions";
    const addPlayedGameUrl = "http://127.0.0.1:8000/api/v1/played_games/add_played_game";
    const addAnswerUrl = "http://127.0.0.1:8000/api/v1/answers/add_answer";
    const checkAnswerUrl = "http://127.0.0.1:8000/api/v1/answers/check_answer";
    const pointsControlUrl = "http://127.0.0.1:8000/api/v1/users/points_control";
    const testUrl = "http://127.0.0.1:8000/api/v1/users/test";
    const leaderPusherUrl = "http://127.0.0.1:8000/api/v1/leaderboards/leader_pusher";

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
        
        function gamePlayed(){
            axios
            .post(addPlayedGameUrl, {
                user_id: localStorage.getItem("user_id"),
                game_id: localStorage.getItem("game_id")},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })
        }

        function submitAnswers(id, answer){
            axios
            .post(addAnswerUrl, {
                answer: answer,
                question_id: id,
                user_id: localStorage.getItem("user_id"),
                game_id: localStorage.getItem("game_id")},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })
            .then(()=> {
                axios
                .post(checkAnswerUrl, {
                    question_id: id,
                    user_id: localStorage.getItem("user_id"),
                    answer: answer,
                    game_id: localStorage.getItem("game_id")},{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: 'application/json'
                    }
                })
                .then((response) => {
                    if(response.data["Status"] === "True"){
                        axios
                        .post(pointsControlUrl, {
                            user_id: localStorage.getItem("user_id"),
                            points: response.data["Points"]},{
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                                Accept: 'application/json'
                            }
                        })
                        axios
                        .post(testUrl, {
                            message: localStorage.getItem('company_id')},{
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                                Accept: 'application/json'
                            }
                        })
                        axios
                        .get(leaderPusherUrl, {
                        
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                                Accept: 'application/json'
                            }
                        })
                    }
                    navigate('/page');
                })
            })
        }
    return (
        <>
            <Navbar link={"MAIN PAGE"} to={"page"}/>
            <ChatBot />
            <div className='questions-title'>
                <h1>OFFICE QUIZ #23</h1>
                <h1>{questions.length} QUESTIONS</h1>
            </div>
            <div className='questions-container'>
                <ol>
                    {questions.map((question) => (
                        <div key={question.id} className='element'>
                            <div className='question'>
                                <li key={question.id}>{question.question} ({question.points} points)</li>
                            </div>
                            {(question.question_type === 0) ? <div className='input' ><input onChange={(e) => setName(e.target.value)} id={question.id} type={"text"} /></div> : 
                            <QuestionOptions setName={setName} name={name} question_id={question.id} question_type={question.question_type}/>
                            }
                        </div>
                    ))}
                </ol>
                <div className='questions-button'>
                <Button text={'SUBMIT'} disabled={!name} onClick={() => {
                    gamePlayed(); 
                    const input = document.getElementsByTagName("input")
                    for (var i = 0; i < input.length; i++){

                    if (input[i].type === 'text'){
                        submitAnswers(input[i].id, input[i].value)
                        
                    } else if (input[i].checked === true) {
                        submitAnswers(input[i].name, input[i].value)
                    };
                }}} />
                </div>
            </div>
        </>
    );
};
export default Questions;