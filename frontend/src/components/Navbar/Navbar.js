import './navbar.css'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    axios
    .post("http://127.0.0.1:8000/api/v1/users/get_user", {
        user_id: localStorage.getItem('user_id'),
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
        }
    })

    .then((response) => {
        console.log(response.data.users[0])
        const s = response.data.users[0]
        setInfo(s)
    });
    }, []);

    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate("/page");
    }
    return (
        <nav className='user-navbar'>
              <img id='nav-logo' src={ require('../assets/logo.png') } onClick={handleClick}/>
            <ul className='user-nav-links'>
                <div className='links'><CustomLink to={"/rewards"}>Rewards</CustomLink></div>
                <div className="vl"></div>
                <div className='user-profile-nav'>
                      <div className='user-profile-info'>
                        <h5>{info.name}</h5><br/>
                        <div id='points'><p>{info.points} Points</p><div id='coins'></div></div>
                      </div>
                      <div className='user-profile-img'>
                        <img src={info.profile_img} id='profile-img'/>
                      </div>
                </div>
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