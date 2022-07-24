import './order.css';
import React, { useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const Request = ({props}) => {
    const order = useRef(0);
    const submit = () => {

        axios
        .post("http://127.0.0.1:8000/api/v1/orders/add_order", {
            user_id: localStorage.getItem("user_id"),
            reward_id: localStorage.getItem("reward_id"),
            company_id: localStorage.getItem("company_id"),
            request: order.current.value
            
        })
}
    return(
        <>
        <Navbar />
        <div className="order-box">
            <form>
                
                <h3>Add your comment bellow</h3>
                <p>For example: Your day off, Your dinner time, Your favorite coffee, etc...</p>
                <div className="input-box">
                    <label>Add Your Comment</label>
                    <input ref={order} type='text'></input>
                </div>
                <a onClick={() => {submit();}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
        </>
    )

}

export default Request;