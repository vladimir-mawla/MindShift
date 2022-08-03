import './addgamequestions.css'
import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AddGameQuestion = () => {
    const navigate = useNavigate()
    const question = useRef(0)
    const correct_answer = useRef(0)
    const points = useRef(0)
    const question_type = useRef(0)

  function submit() {
    axios
    .post("http://127.0.0.1:8000/api/v1/questions/add_question", {
        question: question.current.value,
        correct_answer: correct_answer.current.value,
        points: points.current.value,
        game_id: localStorage.getItem('game_id'),
        question_type: question_type.current.value,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
        }
    })
    .then((response)=> {
        localStorage.setItem("question_id", response.data.question.id)
        question.current.value = ""
        correct_answer.current.value = ""
        axios
        .post("http://127.0.0.1:8000/api/v1/games/add_game_points", {
            points: points.current.value,
            game_id: localStorage.getItem('game_id'),
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        })
        axios
        .post("http://127.0.0.1:8000/api/v1/games/add_game_questions", {
            game_id: localStorage.getItem('game_id'),
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        })
        .then(()=>{
            points.current.value= ""
        })
    })
    if (question_type.current.value == 1 || question_type.current.value == 2) {
        navigate("../add_options");
      }
  }
    return (
        <div className='add-container'>
        <AdminNavbar />
        <div className="games-container">
            <div className='games-form'>
                <div className="games-select-box">
                    <label>Question Type</label>
                    <select name="type" ref={question_type}>
                        <option value={0}>Text</option>
                        <option value={1}>Radio</option>
                        <option value={2}>Checkbox</option>
                    </select>
                </div>
                <div className="games-select-box">
                    <label>Question</label>
                    <input ref={question} type="text"></input>
                </div>
                <div className="games-select-box">
                    <label>Correct Answer</label>
                    <input ref={correct_answer} type="text"></input>
                </div>
                <div className="games-select-box">
                    <label>Question Points</label>
                    <input ref={points} type="text"></input>
                </div>
                <Button text={'ADD'} className='games-button' onClick={() => { submit(); }} />
                    
            </div>
        </div>
        </div>
    )
};
export default AddGameQuestion;