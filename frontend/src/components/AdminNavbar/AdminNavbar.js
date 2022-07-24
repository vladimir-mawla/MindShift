import './navbar.css'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate("/admin");
    }
    return (
        <nav className='navbar'>
            <img id='nav-logo' src={ require('../assets/logo.png') } onClick={handleClick}/>
            <ul className='nav-links'>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                <li><Link to={"/employees"}>Employees</Link></li>
                <li><Link to={"/add_game"}>Add Game</Link></li>
                <li><Link to={"/add_badge"}>Add Badge</Link></li>
                <li><Link to={"/add_points"}>Add points</Link></li>
                <li><Link to={"/add_reward"}>Add Rewards</Link></li>
            </ul>
            
        </nav>
    )
}

export default AdminNavbar;