import './landing.css'
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div className='hero'>
                <div className='logo'>
                    <img id='logo' src={ require('../assets/white-logo.png') } />
                </div>
                <div className='links'>
                    <Button text={"Login"} className={"form-btn"} onClick={() => { navigate('/login') }}/><br/>
                    <Button text={"Signup"} className={"form-btn"} onClick={() => { navigate('/register') }}/>
                </div>
            </div>
        </div>
    )
}

export default Landing;