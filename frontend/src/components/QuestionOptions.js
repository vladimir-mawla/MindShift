import React from "react";
import { useState, useEffect } from "react";
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
    }, []);

      
    return (
        <div>
            {question_type === 0 ? <input type='text' />
            : question_type === 1 ? <input type='checkbox' />
            : question_type === 2 ? <input type='radio' />
            :""
            }
        </div>
    )
};
export default QuestionOptions;