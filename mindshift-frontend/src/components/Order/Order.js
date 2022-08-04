import './order.css';
import React, { useRef } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import ChatBot from '../ChatBot/ChatBot';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';


const Request = () => {
    const navigate = useNavigate();
    const order = useRef(0);
    const addOrderUrl = "http://127.0.0.1:8000/api/v1/orders/add_order";

    const submit = () => {

        axios
        .post(addOrderUrl, {
            user_id: localStorage.getItem("user_id"),
            reward_id: localStorage.getItem("reward_id"),
            company_id: localStorage.getItem("company_id"),
            order: order.current.value},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
            
        })
        .then(()=>{
            alert("Request submitted")
            navigate('/page')
        })
}
    return(
        <>
        <Navbar link={"MAIN PAGE"} to={"page"}/>
        <ChatBot />
        <div className="order-box">
            <div className='order'>
                
                <h3>Add your request below</h3>
                <p>For example: Your day off, Your dinner time, Your favorite coffee, etc...</p>
                <div className="input-box">
                    <label>Add Your Request:</label>
                    <input ref={order} type='text'></input>
                </div>
                <Button onClick={() => {submit();}} text={'SUBMIT'}
                    />
            </div>
        </div>
        </>
    )

}

export default Request;