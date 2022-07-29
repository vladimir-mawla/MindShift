import './navbar.css'
import React, {useEffect, useState, useRef } from 'react';
import Button from '../Button/Button';
import axios from 'axios';
import Popup from '../PopUp/PopUp';
import { Link, useNavigate, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar({link, to}) {
    const name = useRef(null)
    const email = useRef(null)
    const element = useRef(null)
    const job_title = useRef(null)
    var s;

  const [info, setInfo] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const toggleEditPopup = () => {
    setIsEditOpen(!isEditOpen);
  }
  function encode() {
    var file = element.current.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      s = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function edit(){
    if( !name.current.value || !email.current.value|| !element.current.value || !job_title.current.value){
        alert("All fields should be filled")
    }else{
        axios
        .post("http://127.0.0.1:8000/api/v1/users/edit_user", {
            user_id: localStorage.getItem('user_id'),
            name: name.current.value,
            email:email.current.value,
            job_title: job_title.current.value,
            profile_img: s,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        })
        .then(() => {
            name.current.value = ''
            email.current.value = ''
            element.current.value = ''
            job_title.current.value = ''
            document.window.reload()
        })
    }
}


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
      <>
        <nav className='user-navbar'>
              <img id='user-nav-logo' src={ require('../assets/logo.png') } onClick={handleClick}/>
            <ul className='user-nav-links'>
                <div className='link' onClick={()=>{navigate(`/${to}`)}}><a>{link}</a></div>
                <div className="vl"></div>
                <div className='user-profile-nav' onClick={togglePopup}>
                      <div className='user-profile-info'>
                        <h5>{info.name}</h5><br/>
                        <div className='points'><p>{info.points} Points</p><div className='coins'></div></div>
                      </div>
                      <div className='user-profile-img'>
                        <img src={info.profile_img} className='profile-img'/>
                      </div>
                </div>
            </ul>
        </nav>
        {isOpen && <Popup
          content={<>
          <div className='popup-profile'>
            <img src={info.profile_img} className='popup-profile-img'/>
            <h2>{info.name}</h2>
            <p>{info.email}</p>
          </div>
          <div className='popup-contents'>
            <h5>{info.gained_rewards.length} Rewards</h5>
              <div className='popup-vl'></div>
              <div className='popup-points'><h5>{info.points} Points</h5><div className='popup-coins'></div></div>
              <div className='popup-vl'></div>
              <h5>{info.games.length} Games</h5>
          </div>
          <div className='popup-buttons'>
            <Button text={'LOGOUT'} className='popup-logout'/>
            <Button text={'EDIT PROFILE'} onClick={toggleEditPopup} className='popup-edit'/>
          </div>
          </>}
          handleClose={togglePopup}
          />}
        {isEditOpen && <Popup
          content={<>
              <h1>Edit Profile</h1>
              <div className='popup-edit-profile'>
                  <input ref={element} type="file" onChange={() => {encode();}}/>
                  <input ref={name} type="text" placeholder="Name"/>
                  <input ref={email} type="text" placeholder="Email"/>
                  <input ref={job_title} type="text" placeholder="Position"/>
                  <Button className={'edit-button'} text={'Done'} onClick={edit}/>
                  
              </div>
              
          </>}
          handleClose={toggleEditPopup}
          />}
          </>
    )
}
