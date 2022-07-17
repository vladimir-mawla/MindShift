import './styles/leaderboard.css'
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
            setUsers(s);
        });
        }, []);
        console.log(users)
        users.sort((a,b) => b.points - a.points);
    return (
        <table className='leaderboard'>
            <tr>
                <td className='title'>Name</td>
                <td className='title'>Points</td>
            </tr>
                {users.map((user, index) => (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.points}</td>
                    </tr>
                ))}
            
        </table>
    );
};
export default Leaderboard;