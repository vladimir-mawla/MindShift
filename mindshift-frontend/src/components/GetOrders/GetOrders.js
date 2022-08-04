import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GetOrders = ({user_id, name}) => {
    const [orders, setOrders] = useState([])
    const getOrdersUrl = "http://127.0.0.1:8000/api/v1/orders/get_orders";
    const markOrderUrl = "http://127.0.0.1:8000/api/v1/orders/mark_order_done";

  
    useEffect(() => {
    axios
    .post(getOrdersUrl, {
        user_id: user_id},{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
        }
    })

    .then((response) => {
        const s = response.data.orders;
        setOrders(s);
    });
    }, [user_id]);

    // Function to mark order done
    const markDone = (event) => {
        axios
        .post(markOrderUrl, {
            order_id: event.currentTarget.id},{
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
                <li key={index} className='user-order'>
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