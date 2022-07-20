import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const AddGameQuestion = () => {

    return (
        <div className="container">
                    <select name="type" ref={question_type}>
                        <option value="1">Text</option>
                        <option value="2">Radio</option>
                        <option value="3">Checkbox</option>
                    </select>
            <input ref={question} type="text" placeholder="Question"></input>
            <input ref={correct_answer} type="text" placeholder="Correct answer"></input>
            <input ref={points} type="text" placeholder="Question points"></input>
            <Button text={"Submit"} className={"form-btn"} onClick={() => { submit(); }}/>
        </div>
    )
};
export default AddGameQuestion;