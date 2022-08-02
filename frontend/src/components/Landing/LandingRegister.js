import './landing.css'
import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "../Register/Register"

const Landing = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div className='hero'>
                <div className='logo'>
                    <img id='logo' src={ require('../assets/white-logo.png') } />
                </div>
                <div className='form'>
                    <Register />
                </div>
            </div>
        </div>
    )
}

export default Landing;