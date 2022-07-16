import React from "react";
import axios from "axios";

const Answer = ({props}) => {

    useEffect(() => {

        axios
        .post("http://127.0.0.1:8000/api/v1/answers/add_answer", {
            answer: props.answer,
            question_id: props.question_id,
            user_id: user_id,
            game_id: game_id
        })

    }, []);

}

export default Answer;