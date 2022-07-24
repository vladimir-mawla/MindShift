import './addgame.css';
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AddGame = () => {
    const element = useRef(0)
    const name = useRef(0)
    const description = useRef(0)
    const points = useRef(0)
    var s;
    
  function encode() {
    var file = element.current.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      s = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function submit() {
    axios
    .post("http://127.0.0.1:8000/api/v1/games/add_game", {
        name: name.current.value,
        description: description.current.value,
        points: points.current.value,
        img: s,
    })
    .then((response) => {
        console.log(response.data)
        localStorage.setItem('game_id', response.data.game.id)
      });

  }
    return (
      <>
      <AdminNavbar />
        <div className="game-box">
          <form>
            <div className="input-box">
              <label>Game Name</label>
              <input ref={name} type="text"></input>
            </div>
            <div className="input-box">
              <label>Game Description</label>
            <input ref={description} type="text"></input>
            </div>
            <div className="input-box">
              <label>Game Points</label>
            <input ref={points} type="text"></input>
            </div>
            <div className="input-box">
              <label>Game Image</label>
            <input ref={element} type="file" onChange={() => {encode();}}></input>
            </div>
            
            <a onClick={() => { submit(); }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
            </form>
        </div>
        </>
    )
};
export default AddGame;