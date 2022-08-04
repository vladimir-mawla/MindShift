import './leaderboard.css'
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pusher from "pusher-js"

const Leaderboard = () => {
    const [users, setUsers] = useState([])
    const getLeaderboardUrl = "http://127.0.0.1:8000/api/v1/leaderboards/get_leaderboard";

    useEffect(() => {
        axios
        .post(getLeaderboardUrl,{
            company_id: localStorage.getItem("company_id")},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
            
        })
    
        .then((response) => {
            const s = response.data.users;
            setUsers(s);
        });
        // Getting the data from pusher:
        var pusher = new Pusher('ccb92aa552693d2a8867', {
            cluster: 'ap2'
          });      
          var channel = pusher.subscribe('my-channel');
          channel.bind('my-event', data => {
    
            setUsers(data.message[0])
          });
        }, []);
        // sorting the state to display the leaderboard
        users.sort((a,b) => b.points - a.points);
    return (
        <>
            <div className="leaderboard">
                    {users.map((user, index) => (

                        <div className='top-user' key={index}>
                            <div className='top-user-img'>
                                <div className='rank'>
                                    <h3>#{index +1}</h3>
                                </div>
                                <img src={user.profile_img} className='leader-profile-img'/>
                            </div>
                            <div className='leader-profile-info'>
                                <h5>{user.name}</h5><br/>
                                <div className='leader-points'><div className='coins'></div><p>{user.points} Points</p></div>
                            </div>
                        </div>
                    ))}

                </div>
        </>
    );
};
export default Leaderboard;