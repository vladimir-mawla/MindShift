import './colleagues.css';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Colleagues = () => {
    const [colleagues, setColleagues] = useState([])
    const getColleaguesUrl = "http://127.0.0.1:8000/api/v1/users/get_colleagues";

    useEffect(() => {
        axios
            .post(getColleaguesUrl, {
                company_id: localStorage.getItem('company_id')},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })

            .then((response) => {
                const s = response.data.users;
                setColleagues(s);

            });
    }, []);

    colleagues.sort((a, b) => b.points - a.points);
    return (
        <>
            <div className="col-container">
                {colleagues.map((user, index) => (

                    <div key={index} className='col'>
                        <div className='col-profile'>
                            <div className='col-profile-img'><img alt='profile' src={user.profile_img} className='leader-profile-img' /></div>
                            <div className='col-profile-info'>
                                <h5>{user.name}</h5><br />
                                <div className='leader-points'><div className='coins'></div><p>{user.points} Points</p></div>
                            </div>
                        </div>
                        <div className='col-contents'>
                            <h5>{user.games.length} Games</h5>
                            <div className='col-vl'></div>
                            <div className='col-points'><h5> {user.gained_rewards.length} Rewards</h5></div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};
export default Colleagues;