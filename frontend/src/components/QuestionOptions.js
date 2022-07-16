import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextBox from "./TextBox";

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


    if(question_type === 0){
        return(
            <TextBox />
        )
    }else if(question_type === 1){
        return(
         <div>

         </div>   
        )
    }else if(question_type === 2){
        return(
         <div>

         </div>   
        )
    }
};
export default QuestionOptions;