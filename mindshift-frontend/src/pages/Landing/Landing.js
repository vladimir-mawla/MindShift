import './landing.css'
import React from "react";
import Login from "../../components/Login/Login"

const Landing = () => {

    return(
        <div>
            <div className='hero'>
                <div className='logo'>
                    <img alt='logo' id='logo' src={ require('../../assets/white-logo.png') } />
                </div>
                <div className='form'>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Landing;