import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AddPoints = () => {
    const user = useRef(null)
    const points = useRef(null)
    const [employees, setEmployees] = useState([])
        
    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/users/get_users", {
            company_id: localStorage.getItem("company_id")
        })
        .then((response) => {
            const s = response.data.users;
            setEmployees(s);
            
        });
    }, [])
    
    function incremenet(){
        axios
        .post("http://127.0.0.1:8000/api/v1/users/points_control", {
            user_id: user.current.value,
            points: points.current.value,
        })
        .then((response)=> {
            alert(`Assigned ${points.current.value} points to the selected user`)
            user.current.value=""
            points.current.value=""
        })
    }
    

    return (
        <>
        <AdminNavbar />
        <label htmlFor="empolyees">Choose an employee:</label>
        <select ref={user} name="employees" placeholder="select">
            {employees.map((employee, index) => (
                <option key={index} value={employee.id}>{employee.name}</option>
            ))}
        </select><br/>
        <label>Assign points:</label>
        <input ref={points} type="text"/><br/>
        <Button text={"Assign"} onClick={incremenet}/>
        </>
    )
};
export default AddPoints;