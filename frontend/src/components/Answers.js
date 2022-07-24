import React from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

const Answers = () => {
    const [games, setGames] = useState([])
    useEffect(() => {

        axios
        .post("http://127.0.0.1:8000/api/v1/played_games/get_played_games", {
            user_id: localStorage.getItem("employee_id")
        })
        .then((response) => {
            console.log(response.data)
            //localStorage.setItem("game_id", response.data.games.id)
        })

    }, []);

}

export default Answers;