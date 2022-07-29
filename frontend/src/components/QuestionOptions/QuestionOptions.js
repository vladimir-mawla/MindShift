import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const QuestionOptions = (props) => {
    const [options, setOptions] = useState([]);
    const question_type = props.question_type;
    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/question_options/get_options", {
            question_id: props.question_id,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        })

        .then((response) => {
            setOptions(response.data["options"]);
        });
    }, [props.question_id]);




    return(
        <div>
            {options.map((option, index) => (
              (question_type === 1) ? <div className='radio' key={index}><input onChange={(e) => props.setName(e.target.value)} type="radio" name={option.question_id} value={option.option} />{option.option} </div>:
              (question_type === 2) ? <div className='checkbox' key={index}><input onChange={(e) => props.setName(e.target.value)} type="checkbox" name={option.question_id} value={option.option} />{option.option} </div>:
              ''
            ))}
        </div>
    )
};
export default QuestionOptions;