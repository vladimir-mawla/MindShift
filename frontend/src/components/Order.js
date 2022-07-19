import React, { useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const Request = ({props}) => {

    useEffect(() => {

        axios
        .post("http://127.0.0.1:8000/api/v1/orders/add_order", {
            user_id:"blank",
            reward_id:"blank",
            company_id:"blank",
            
        })
    }, [])
    
    return(
        <div>
            <h3>Add your comment bellow</h3>
            <p>For example: Your day off, Your dinner time, Your favorite coffee, etc...</p>
            <input type='text' placeholder="Add your comment"></input>
            <Button text={"Submit"} className={"form-btn"} />
        </div>
    )

}

export default Request;