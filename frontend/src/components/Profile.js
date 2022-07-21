import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const [info, setInfo] = useState([])
    
    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/users/get_user", {
            user_id: localStorage.getItem('user_id')
        })
    
        .then((response) => {
            console.log(response.data)
            const s = response.data.users
            setInfo(s)
        });
        }, []);

};
export default Profile;