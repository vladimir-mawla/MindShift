import './employees.css';
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Popup from '../PopUp/PopUp';
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import GetOrders from '../GetOrders/GetOrders';
import axios from "axios";
import { FaTrophy, FaUsers, FaGamepad, FaCoffee, FaTrash } from 'react-icons/fa';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const Employees = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState();


    const handleClick = (event) => {
        localStorage.setItem('employee_id', event.currentTarget.id);
        navigate("/played_games");
    }

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/v1/users/get_colleagues", {
                company_id: localStorage.getItem('company_id'),
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })

            .then((response) => {
                const s = response.data.users;
                setEmployees(s);
            });
    }, []);

    const removeEmployee = (event) => {
        axios
            .post("http://127.0.0.1:8000/api/v1/users/delete_user", {
                user_id: id,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })

            .then((response) => {
                window.location.reload();
            });
    }

    const togglePopup = (event) => {
        setIsOpen(!isOpen);
        setId(event.currentTarget.id)
    }

    employees.sort((a, b) => b.points - a.points);
    return (
        <div className='employee-comp'>
            <AdminNavbar />
            <div className="employees-container">
                {employees.map((c) => (

                    <div className='employee' key={c.id}>
                        <span className="delete-icon" id={c.id} onClick={togglePopup}><FaTrash /></span>
                        <div id={c.id} className="co-card" onClick={handleClick}>
                            <div className="additional">
                                <div className="user-card">
                                    <div className="level center">
                                        <img className='badge' src={c.badge} />
                                    </div>
                                    <div className="points center">
                                        {c.points} Points
                                    </div>
                                    <img width="110" height="110" src={c.profile_img} role="img" aria-labelledby="title desc" className="center"
                                    />
                                </div>
                                <div className="more-info">
                                    <h1>{c.name}</h1>
                                    <div className="coords">
                                        <span>{c.email}</span>
                                        <span>Joined {c.created_at.slice(5, 7) == '01' ? "January" :
                                            c.created_at.slice(5, 7) == '02' ? "February" :
                                                c.created_at.slice(5, 7) == '03' ? "March" :
                                                    c.created_at.slice(5, 7) == '04' ? "April" :
                                                        c.created_at.slice(5, 7) == '05' ? "May" :
                                                            c.created_at.slice(5, 7) == '06' ? "June" :
                                                                c.created_at.slice(5, 7) == '07' ? "July" :
                                                                    c.created_at.slice(5, 7) == '08' ? "August" :
                                                                        c.created_at.slice(5, 7) == '09' ? "September" :
                                                                            c.created_at.slice(5, 7) == '10' ? "October" :
                                                                                c.created_at.slice(5, 7) == '11' ? "November" :
                                                                                    c.created_at.slice(5, 7) == '12' ? "December" : ""} {c.created_at.slice(0, 4)}</span>
                                    </div>
                                    <div className="coords">
                                        <span>{c.job_title}</span>
                                        <span>{c.city}, {c.country}</span>
                                    </div>
                                    <div className="stats">
                                        <div>
                                            <div className="title">Awards</div>
                                            <i><FaTrophy /></i>
                                            <div className="value">{c.gained_rewards.length}</div>
                                        </div>
                                        <div>
                                            <div className="title">Matches</div>
                                            <i><FaGamepad /></i>
                                            <div className="value">{c.games.length}</div>
                                        </div>
                                        <div>
                                            <div className="title">Pals</div>
                                            <i><FaUsers /></i>
                                            <div className="value">{employees.length}</div>
                                        </div>
                                        <div>
                                            <div className="title">Coffee</div>
                                            <i><FaCoffee /></i>
                                            <div className="value infinity">∞</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="general">
                                <h1>{c.name}</h1>
                                <p>{c.description}</p>
                                <span className="more">Mouse over the card for more info</span>
                            </div>
                        </div>
                        <GetOrders name={c.name} user_id={c.id}/>
                    </div>
                    
                ))}

            </div>
            {isOpen && <Popup
                    content={<>
                        <b>Are you sure you want to remove this user?</b><br/>
                        <Button className={'popup-button'} text={'Yes'} onClick={removeEmployee} />
                        <Button className={'popup-button'} text={'No'} onClick={togglePopup} />

                    </>}
                    handleClose={togglePopup}
                />}
        </div>
    );
};
export default Employees;