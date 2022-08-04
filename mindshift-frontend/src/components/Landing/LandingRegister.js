import './landing.css'
import React from "react";
import Register from "../Register/Register"

const Landing = () => {

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