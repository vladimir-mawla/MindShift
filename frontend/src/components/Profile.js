import './styles/profile.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Popup from './PopUp';

const Profile = () => {
    const [info, setInfo] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/users/get_user", {
            user_id: localStorage.getItem('user_id')
        })
    
        .then((response) => {
            console.log(response.data.users[0])
            const s = response.data.users[0]
            setInfo(s)
        });
        }, []);

        return (
            <div>
                <Navbar />
                <div className='profile-container'>
                    <img src={info.profile_img} className='profile-img'/>
                    <div className='profile-form'>
                        <h1>{info.name}</h1>
                        <h2><strong>points:</strong> {info.points}</h2>
                        <h2><strong>email:</strong> {info.email}</h2>
                        <h2><strong>job title:</strong> {info.job_title}</h2>
                    </div>
                </div>
                <button onClick={togglePopup}>Edit Profile</button>
                {isOpen && <Popup
                    content={<>
                        <b>Edit Profile</b>
                        <div className='edit-profile'>
                            <input type="text" placeholder="Name"/><br/>
                            <input type="text" placeholder="Email"/><br/>
                            <input type="text" placeholder="Position"/><br/>
                            <button>Done</button>
                        </div>
                        
                    </>}
                    handleClose={togglePopup}
                    />}
            </div>
        )

};
export default Profile;