import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const QuestionOptions = (props) => {
  const [options, setOptions] = useState([]);

    axios
      .post("http://127.0.0.1:8000/api/v1/question_options/get_options", {
        question_id: props.question_id,
      })

      .then((response) => {
        setOptions(response.data["options"]);
      });
  
};
export default QuestionOptions;