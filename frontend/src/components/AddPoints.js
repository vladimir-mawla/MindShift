import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const AddPoints = () => {
    const [employees, setEmployees] = useState([])

    function increment() {
        axios
        .post("http://127.0.0.1:8000/api/v1/users/get_users", {
            company_id: localStorage.getItem("company_id")
        })
        .then((response) => {
            const s = response.data.users;
            setEmployees(s);
        });

    }

    return (
        <>
        </>
    )
};
export default AddPoints;