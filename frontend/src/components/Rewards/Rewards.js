import './rewards.css'
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import ChatBot from '../ChatBot/ChatBot';
import { Button } from 'framework7-react';

const Rewards = () => {
    const navigate = useNavigate();
    const [rewards, setRewards] = useState([]);

    const handleClick = (event) => {
        localStorage.setItem('reward_id', event.currentTarget.id);
        navigate("/order");
    }

    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/api/v1/rewards/get_rewards", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })

            .then((response) => {
                const s = response.data.rewards;
                setRewards(s);
            });

    }, []);

    return (
        <>
            <Navbar link={"MAIN PAGE"} to={"page"}/>
            <ChatBot />
            <div className="reward">
                {rewards.map((reward, index) => (
                    <div className='reward-card' key={index} >
                        <div className='reward-info'>
                            <h2>{reward.name}</h2>
                            <p>{reward.description}</p>
                        </div>
                        <div className='reward-contents'>
                            <div className='reward-points'>
                                <div className='reward-coins'>
                                </div> 
                                <h4>{reward.needed_points} Points</h4>
                            </div>
                            <Button text={"REDEEM"} id={reward.id} onClick={handleClick} className='redeem'/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Rewards;