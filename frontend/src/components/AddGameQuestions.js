import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

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
    })
    if (question_type.current.value == 1 || question_type.current.value == 2) {
        navigate("../add_options");
      }
  }
    return (
        <div className="container">
                    <select name="type" ref={question_type}>
                        <option value={0}>Text</option>
                        <option value={1}>Radio</option>
                        <option value={2}>Checkbox</option>
                    </select>
            <input ref={question} type="text" placeholder="Question"></input>
            <input ref={correct_answer} type="text" placeholder="Correct answer"></input>
            <input ref={points} type="text" placeholder="Question points"></input>
            <Button text={"Submit"} className={"form-btn"} onClick={() => { submit(); }}/>
        </div>
    )
};
export default AddGameQuestion;