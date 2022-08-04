import './landing.css'
import React from "react";
import Login from "../Login/Login"

const Landing = () => {

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