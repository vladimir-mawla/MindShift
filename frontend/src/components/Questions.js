import './styles/games.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import QuestionOptions from './QuestionOptions';

const Questions = () => {
    const [questions, setQuestions] = useState([])
    const [name, setName] = useState();
    var game_id = localStorage.getItem('game_id')
    var p;

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
        

        function submitAnswers(id, answer){
            console.log(answer)
            axios
            .post("http://127.0.0.1:8000/api/v1/answers/add_answer", {
                answer: answer,
                question_id: id,
                user_id: localStorage.getItem("user_id"),
                game_id: localStorage.getItem("game_id")
            })
            .then(()=> {
                axios
                .post("http://127.0.0.1:8000/api/v1/answers/check_answer", {
                    question_id: id,
                    user_id: localStorage.getItem("user_id"),
                    answer: answer,
                    game_id: localStorage.getItem("game_id")
                })
                .then((response) => {
                    if(response.data["Status"] === "True"){
                        axios
                        .post("http://127.0.0.1:8000/api/v1/users/points_control", {
                            user_id: localStorage.getItem("user_id"),
                            points: response.data["Points"]
                        })
                    }
                })
            })
        }
        console.log(name)
    return (
        <div>
            <ul>
                {questions.map((question) => (
                    <div key={question.id}>
                        <li key={question.id}>{question.question} ({question.points} points)</li>
                        {(question.question_type === 0) ? <div><input onChange={(e) => setName(e.target.value)} id={question.id} type={"text"} /></div> : 
                        <QuestionOptions setName={setName} name={name} question_id={question.id} question_type={question.question_type}/>
                        }
                    </div>
                ))}
            </ul>
            
            <button disabled={!name} onClick={() => {
                const input = document.getElementsByTagName("input")
                for (var i = 0; i < input.length; i++){

                if (input[i].type === 'text'){
                    submitAnswers(input[i].id, input[i].value)
                    
                } else if (input[i].checked === true) {
                    console.log(input[i])
                    submitAnswers(input[i].name, input[i].value)
                } 
            }}}>Submit</button>
        </div>
    );
};
export default Questions;