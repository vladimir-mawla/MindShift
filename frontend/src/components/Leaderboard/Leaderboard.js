import './leaderboard.css'
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import ChatBot from '../ChatBot/ChatBot';
import Pusher from "pusher-js"

const Leaderboard = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/leaderboards/get_leaderboard",{
            company_id: localStorage.getItem("company_id"),
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
            
        })
    
        .then((response) => {
            const s = response.data.users;
            setUsers(s);
        });

        var pusher = new Pusher('ccb92aa552693d2a8867', {
            cluster: 'ap2'
          });      
          var channel = pusher.subscribe('my-channel');
          channel.bind('my-event', data => {
    
            setUsers(data.message[0])
          });
        }, []);
        console.log(users)
        users.sort((a,b) => b.points - a.points);
    return (
        <>
            <Navbar />
            <ChatBot />
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
        </>
    );
};
export default Leaderboard;