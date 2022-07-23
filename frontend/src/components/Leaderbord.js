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
        <>
        <Navbar />
        <div class="leaderboard-container">
		<div class="leaderboard">
			<div class="head">
				<i class="fas fa-crown"></i>
				<h1>Most active Players</h1>
			</div>
			<div class="body">
				<ol>
                {users.map((user, index) => (

                    <li>
                        <mark>{user.name}</mark>
                        <small>{user.points}</small>
                    </li>
                ))}

				</ol>
			</div>
		</div>
	</div>
    </>
    );
};
export default Leaderboard;