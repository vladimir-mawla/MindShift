import './styles/games.css'
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import QuestionOptions from './QuestionOptions';

const Leaderboard = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/v1/leaderboards/get_leaderboard")
    
        .then((response) => {
            const s = response.data.users;
            setUsers([s]);
        });
        }, []);
        console.log(users)
    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <div key={index}>
                        <li>{user.name} ({user.points} points)</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};
export default Leaderboard;