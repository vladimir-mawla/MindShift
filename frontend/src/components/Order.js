import React from "react";
import axios from "axios";

const Request = ({props}) => {

    useEffect(() => {
        axios
        .post("http://127.0.0.1:8000/api/v1/orders/add_order"), {
            user_id:blank,
            reward_id:blank,
            company_id:blank,
            
        }
    }, [])
    
    return(
        <div>
            <input type='text'></input>
        </div>
    )

}

export default Request;