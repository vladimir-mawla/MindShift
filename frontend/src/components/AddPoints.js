import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const AddPoints = () => {
    const employee = useRef(null)
    const points = useRef(null)
    const [employees, setEmployees] = useState([])
        
    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/users/get_users", {
            company_id: localStorage.getItem("company_id")
        })
        .then((response) => {
            const s = response.data.users;
            console.log(s)
            setEmployees(s);
        });
    }, [])

    function incremenet(){
        axios
        .post("http://127.0.0.1:8000/api/v1/users/get_users", {
            user_id: employee.current.value,
            points: points.current.value,
        })
    }
    

    return (
        <>
        <label htmlFor="empolyees">Choose an employee:</label>
        <select name="employees">
            {employees.map((employee, index) => (
                <option ref={employee} key={index} value={employee.id}>{employee.name}</option>
            ))}
        </select><br/>
        <label>Assign points:</label>
        <input ref={points} type="text"/><br/>
        <Button text={"Assign"}/>
        </>
    )
};
export default AddPoints;