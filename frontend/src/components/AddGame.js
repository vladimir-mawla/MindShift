import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const AddGame = () => {

  function submit() {
    axios
    .post("http://127.0.0.1:8000/api/v1/games/add_game", {
        name: name.current.value,
        description: description.current.value,
        points: points.current.value,
        img: s,
    })

    .then((response) => {
        console.log(response.data.games)
    });
  }
    return (
        <div className="container">
            <input ref={name} type="text" placeholder="Game name"></input>
            <input ref={description} type="text" placeholder="Game description"></input>
            <input ref={points} type="text" placeholder="Game points"></input>
            <input ref={element} type="file" onChange={() => {encode();}}></input>
            <Button text={"Submit"} className={"form-btn"} onClick={() => { submit(); }}/>
        </div>
    )
};
export default AddGame;