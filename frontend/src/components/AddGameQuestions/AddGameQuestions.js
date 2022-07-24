import './addgamequestions.css'
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
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
    })
    .then((response)=> {
        localStorage.setItem("question_id", response.data.question.id)
        question.current.value = ""
        correct_answer.current.value = ""
        points.current.value = ""
    })
    if (question_type.current.value == 1 || question_type.current.value == 2) {
        navigate("../add_options");
      }
  }
    return (
        <>
        <AdminNavbar />
        <div className="game-questions-box">
            <form>
                <div className="select-box">
                    <label>Question Type</label>
                    <select name="type" ref={question_type}>
                        <option value={0}>Text</option>
                        <option value={1}>Radio</option>
                        <option value={2}>Checkbox</option>
                    </select>
                </div>
                <div className="input-box">
                    <label>Question</label>
                    <input ref={question} type="text"></input>
                </div>
                <div className="input-box">
                    <label>Correct Answer</label>
                    <input ref={correct_answer} type="text"></input>
                </div>
                <div className="input-box">
                    <label>Question Points</label>
                    <input ref={points} type="text"></input>
                </div>
                <a onClick={() => { submit(); }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
        </>
    )
};
export default AddGameQuestion;