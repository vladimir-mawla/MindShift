import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";

const Landing = () => {


    return(
        <div>
            <Navbar />
            <div className='hero'>
                <div className='logo'>
                    <h1>LOGO Goes Here</h1>
                </div>
                <div>
                    <h1>Form Goes Here</h1>
                </div>
            </div>
        </div>
    )
}

export default Landing;