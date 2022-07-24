import './navbar.css'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate("/page");
    }
    return (
        <nav className='navbar'>
            <img id='nav-logo' src={ require('../assets/logo.png') } onClick={handleClick}/>
            <ul className='nav-links'>
                <li><Link to={"/leaderboards"}>Leaderboard</Link></li>
                <li><Link to={"/rewards"}>Rewards</Link></li>
                <li><Link to={"/profile"}>Profile</Link></li>
                <li><Link to={"/games"}>Games</Link></li>
                <li><Link to={"/c"}>Colleagues</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navbar;