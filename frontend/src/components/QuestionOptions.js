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
        })

        .then((response) => {
            setOptions(response.data["options"]);
        });
    }, [props.question_id]);




    return(
        <div>
            {options.map((option) => (
              (question_type === 0) ? <input onChange={(e) => props.setName(e.target.value)} id={props.question_id} type={"text"} /> :
              (question_type === 1) ? <div><input onChange={(e) => props.setName(e.target.value)} type="radio" name={option.question_id} value={option.option} />{option.option} </div>:
              (question_type === 2) ? <div><input onChange={(e) => props.setName(e.target.value)} type="checkbox" name={option.question_id} value={option.option} />{option.option} </div>:
              ''
            ))}
        </div>
    )
};
export default QuestionOptions;