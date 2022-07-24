import './navbar.css'
import React from 'react';
import { Link, useNavigate, useMatch, useResolvedPath } from 'react-router-dom';

export default function AdminNavba() {
    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate("/admin");
    }
    return (
        <nav className='navbar'>
            <img id='nav-logo' src={ require('../assets/logo.png') } onClick={handleClick}/>
            <ul className='nav-links'>
                <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
                <CustomLink to={"/employees"}>Employees</CustomLink>
                <CustomLink to={"/add_game"}>Add Game</CustomLink>
                <CustomLink to={"/add_badge"}>Add Badge</CustomLink>
                <CustomLink to={"/add_points"}>Add points</CustomLink>
                <CustomLink to={"/add_reward"}>Add Rewards</CustomLink>
            </ul>
            
        </nav>
    )
}
function CustomLink({ to, children, ...props  }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}
