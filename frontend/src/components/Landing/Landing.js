import './landing.css'
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login"

const Landing = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div className='hero'>
                <div className='logo'>
                    <img id='logo' src={ require('../assets/white-logo.png') } />
                </div>
                <div className='form'>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Landing;