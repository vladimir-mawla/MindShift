import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const AddReward = () => {
    const element = useRef(0)
    const name = useRef(0)
    const description = useRef(0)
    const points = useRef(0)
    var s;
    

    return (
        <div className="container">
            <input ref={name} type="text" placeholder="Reward name"></input>
            <input ref={description} type="text" placeholder="Reward description"></input>
            <input ref={points} type="text" placeholder="Reward points"></input>
            <input ref={element} type="file" onChange={() => {encode();}}></input>
            <Button text={"Submit"} className={"form-btn"} onClick={() => { submit(); }}/>
        </div>
    )
};
export default AddReward;