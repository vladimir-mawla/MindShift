import './addbadge.css';
import React from "react";
import Button from '../Button/Button'
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AddBadge = () => {
    const user = useRef(null)
    const badge = useRef(null)
    const [employees, setEmployees] = useState([])
    const [badges, setBadges] = useState([])
    const getUsersUrl = "http://127.0.0.1:8000/api/v1/users/get_users";
    const getBadgesUrl = "http://127.0.0.1:8000/api/v1/badges/get_badges";
    const addBadgesUrl = "http://127.0.0.1:8000/api/v1/users/add_badge";

    useEffect(() => {
        axios
            .post(getUsersUrl, {
                company_id: localStorage.getItem("company_id")},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })
            .then((response) => {
                const s = response.data.users;
                setEmployees(s);

            });
    }, [])
    useEffect(() => {
        axios
            .get(getBadgesUrl, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })

            .then((response) => {
                const s = response.data.badges;
                setBadges(s);

            });
    }, [])

    function addBadge() {
        axios
            .post(addBadgesUrl, {
                user_id: user.current.value,
                badge: badge.current.value,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    Accept: 'application/json'
                }
            })
            .then((response) => {
                alert('Assigned badge to the selected employee')
                user.current.value = ""
                badge.current.value = ""
            })
    }


    return (
        <div className='add-container'>
            <AdminNavbar />
            <div className='badge-container'>
                <div className='badge-form'>
                    <div className='badge-select-box'>
                        <label htmlFor="empolyees">Choose an employee:</label>
                        <select ref={user} name="employees">
                            {employees.map((employee, index) => (
                                <option key={index} value={employee.id}>{employee.name}</option>
                            ))}
                        </select><br />
                    </div>
                    <div className='badge-select-box'>
                        <label htmlFor="badges">Choose an award:</label>
                        <select ref={badge} name="badges">
                            {badges.map((badge, index) => (
                                <option key={index} value={badge.badge}>{badge.name}</option>
                            ))}
                        </select><br />
                    </div>
                    <Button onClick={addBadge} text={'ASSIGN'} className='badge-button' />

                </div>
            </div>
        </div>
    )
};
export default AddBadge;