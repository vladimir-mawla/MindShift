import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GetAnswer = (props) => {
    const [answers, setAnswers] = useState([]);
    const getUserAnswerUrl = "http://127.0.0.1:8000/api/v1/answers/get_user_answer";
    useEffect(() => {
        axios
            .post(getUserAnswerUrl, {
                question_id: props.question_id,
                user_id: localStorage.getItem('employee_id')},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })

            .then((response) => {
                setAnswers(response.data);
            });
    }, [props.question_id]);


    return (
        <div>
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