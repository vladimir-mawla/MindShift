import './navbar.css'
import React from 'react';
import { Link, useNavigate, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate("/page");
    }
    return (
        <nav className='navbar'>
            <img id='nav-logo' src={ require('../assets/logo.png') } onClick={handleClick}/>
            <ul className='nav-links'>
                <CustomLink to={"/leaderboards"}>Leaderboard</CustomLink>
                <CustomLink to={"/rewards"}>Rewards</CustomLink>
                <CustomLink to={"/profile"}>Profile</CustomLink>
                <CustomLink to={"/games"}>Games</CustomLink>
                <CustomLink to={"/c"}>Colleagues</CustomLink>
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