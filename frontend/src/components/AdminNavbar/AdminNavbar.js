import './navbar.css'
import React from 'react';
import Button from '../Button/Button';
import axios from 'axios';
import { Link, useNavigate, useMatch, useResolvedPath } from 'react-router-dom';

export default function AdminNavba() {
    const navigate = useNavigate()

    const logout = () => {
      axios.post("http://127.0.0.1:8000/api/v1/logout", {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              Accept: 'application/json'
          }
      })
  }

    const handleClick = (event) => {
        navigate("/admin");
    }
    return (
        <nav className='admin-navbar'>
          <div className='admin-upper-nav'></div>
            <img id='admin-nav-logo' src={ require('../assets/logo.png') } onClick={handleClick}/>
            <ul className='admin-nav-links'>
                <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
                <CustomLink to={"/employees"}>Employees</CustomLink>
                <CustomLink to={"/add_game"}>Add Game</CustomLink>
                <CustomLink to={"/add_badge"}>Add Badge</CustomLink>
                <CustomLink to={"/add_points"}>Add points</CustomLink>
                <CustomLink to={"/add_reward"}>Add Rewards</CustomLink>
            </ul>
            <Button text={'LOGOUT'} onClick={()=>{logout()}} className='admin-logout' /> 
            
        </nav>
    )
}
function CustomLink({ to, children, ...props  }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "admin-active" : "admin-inactive"}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}
