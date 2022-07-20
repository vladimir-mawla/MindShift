import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const AddGame = () => {

  
    useEffect(() => {
    axios
    .post("http://127.0.0.1:8000/api/v1/games/add_game", {

    })

    .then((response) => {
        console.log(response.data.games)
    });
    }, []);

};
export default AddGame;