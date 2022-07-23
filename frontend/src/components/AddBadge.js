import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const AddBadge = () => {

    

    return (
        <>
        <label htmlFor="empolyees">Choose an employee:</label>
        <select ref={user} name="employees">
            {employees.map((employee, index) => (
                <option key={index} value={employee.id}>{employee.name}</option>
            ))}
        </select><br/>
        <label htmlFor="badges">Choose an employee:</label>
        <select ref={badge} name="badges">
            {badges.map((badge, index) => (
                <option key={index} value={badge.badge}>{badge.name}</option>
            ))}
        </select><br/>
        <Button text={"Assign"} onClick={addBadge}/>
        </>
    )
};
export default AddBadge;