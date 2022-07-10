import './styles/landing.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return(
        <div>
            <Navbar />
            <div className='hero'>
                <div className='logo'>
                    <img id='logo' src={ require('./assets/logo.jpeg') } />
                </div>
                <div className='links'>
                    <Button text={"Login"} className={"login-btn"} onClick={() => { navigate('/login') }}/><br/>
                    <Button text={"Signup"} className={"login-btn"} onClick={() => { navigate('/register') }}/>
                </div>
            </div>
        </div>
    )
}

export default Landing;