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
                
            </div>
        )

};
export default Profile;