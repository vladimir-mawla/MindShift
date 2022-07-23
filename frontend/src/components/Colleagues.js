import './styles/games.css';
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const Colleagues = () => {
    const navigate = useNavigate();
    const [colleagues, setColleagues] = useState([])
  
    useEffect(() => {
    axios
    .post("http://127.0.0.1:8000/api/v1/gained_rewards/get_colleagues", {
        company_id: localStorage.getItem('company_id')
    })

    .then((response) => {
        const s = response.data.users;
        console.log(response.data.users)
        setColleagues(s);
    });
    }, []);

  
    return (
        <div></div>
    );
};
export default Colleagues;