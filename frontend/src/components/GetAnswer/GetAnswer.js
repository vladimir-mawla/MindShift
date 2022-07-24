import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const GetAnswer = (props) => {
    const [answers, setAnswers] = useState([]);
    const question_type = props.question_type;
    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/v1/answers/get_user_answer", {
                question_id: props.question_id,
                user_id: localStorage.getItem('employee_id')
            })

            .then((response) => {
                setAnswers(response.data);
            });
    }, []);


    return (
        <div>
            <AdminNavbar />
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        {answer.answer}
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default GetAnswer;