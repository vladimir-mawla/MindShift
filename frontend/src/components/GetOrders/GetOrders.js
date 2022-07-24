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

  
    return (
        <div className="orders">
            {orders.length > 0 ? 
                <ul>
                {orders.map((order, index) => (
                <li key={index} className='order'>
                    <p>{order.request}</p>
                </li>
                ))} </ul> : 'No orders for this user'
            }
        </div> 
    );
};
export default GetOrders;