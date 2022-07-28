import React from "react";
import Button from "../Button/Button";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const GetOrders = ({user_id, name}) => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([])


  
    useEffect(() => {
    axios
    .post("http://127.0.0.1:8000/api/v1/orders/get_orders", {
        user_id: user_id,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
        }
    })

    .then((response) => {
        const s = response.data.orders;
        console.log(s)
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
            .then(()=>{
                window.location.reload()
            })
        })

    }

    return (
        <div className="orders">
            {orders.length > 0 ? 
                <ul>
                {orders.map((order, index) => (
                    <>
                <li key={index} className='order'>
                    <p>{order.order}</p>
                    <div id={order.id} className='mark' onClick={markDone}>x</div>
                </li>
                </>
                ))} </ul> : `No requests from ${name}`
            }
        </div> 
    );
};
export default GetOrders;