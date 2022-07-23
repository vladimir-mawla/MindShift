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
            console.log(response.data.users[0])
            const s = response.data.users[0]
            setInfo(s)
        });
        }, []);

        return (
            <div>
                <Navbar />
                <img src={info.profile_img} />
                <h1>{info.name}</h1>
                <h2>points: {info.points}</h2>
                <h2>email: {info.email}</h2>
                <h2>job title: {info.job_title}</h2>
            </div>
        )

};
export default Profile;