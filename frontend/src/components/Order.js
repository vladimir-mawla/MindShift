import React, { useEffect, useRef } from "react";
import axios from "axios";
import Button from "./Button";

const Request = ({props}) => {
    const order = useRef(0);
    const submit = () => {

        axios
        .post("http://127.0.0.1:8000/api/v1/orders/add_order", {
            user_id: localStorage.getItem("user_id"),
            reward_id: localStorage.getItem("reward_id"),
            company_id:"blank",
            request: order.current.value
            
        })
}
    return(
        <div>
            <h3>Add your comment bellow</h3>
            <p>For example: Your day off, Your dinner time, Your favorite coffee, etc...</p>
            <input ref={order} type='text' placeholder="Add your comment"></input>
            <Button text={"Submit"} className={"form-btn"} onClick={() => {submit();}}/>
        </div>
    )

}

export default Request;