import './leaderboard.css'
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

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
        <div className="leaderboard-container">
		<div className="leaderboard">
			<div className="head">
				<i className="fas fa-crown"></i>
				<h1>Most Active Employees</h1>
			</div>
			<div className="body">
				<ol>
                {users.map((user, index) => (

                    <li key={index}>
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