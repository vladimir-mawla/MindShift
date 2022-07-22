import './styles/navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>MindShift</h1>
            <ul className='nav-links'>
                <li><Link to={"/leaderboards"}>Leaderboard</Link></li>
                <li><Link to={"/rewards"}>Rewards</Link></li>
                <li><Link to={"/profile"}>Profile</Link></li>
                <li><Link to={"/games"}>Games</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navbar;