import React from "react";
import Button from "../Button/Button";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const GetOrders = ({user_id}) => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([])


  
    useEffect(() => {
    axios
    .post("http://127.0.0.1:8000/api/v1/orders/get_orders", {
        user_id: user_id
    })

    .then((response) => {
        const s = response.data.orders;
        setOrders(s);
    });
    }, []);

    const markDone = (event) => {
        axios
        .post("http://127.0.0.1:8000/api/v1/orders/mark_order_done", {
            order_id: event.currentTarget.id,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        })

    }

    return (
        <div className="orders">
            {orders && orders.length > 0 ? 
                <ul>
                {orders.map((order, index) => (
                    <>
                <li key={index} className='order'>
                    <p>{order.request}</p>
                    <a id={order.id} onClick={markDone}>x</a>
                </li>
                </>
                ))} </ul> : 'No requests from this user'
            }
        </div> 
    );
};
export default GetOrders;