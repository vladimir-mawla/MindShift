import './addreward.css';
import React from "react";
import Button from "../Button/Button";
import { useRef } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AddReward = () => {
    const name = useRef(0)
    const description = useRef(0)
    const points = useRef(0)


  function submit() {
    axios
    .post("http://127.0.0.1:8000/api/v1/rewards/add_reward", {
        name: name.current.value,
        description: description.current.value,
        needed_points: points.current.value,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Accept: 'application/json'
      }
    })
    .then(()=>{
      alert("Reward Added")
      window.location.reload()
    })

  }
    return (
      <div className='add-container'>
      <AdminNavbar />
            <div className='rewards-container'>
              <div className="rewards-form">
                  <div className="select-box">
                    <label>Reward Name</label>
                    <input ref={name} type="text"></input>
                  </div>
                  <div className="select-box">
                    <label>Reward Description</label>
                    <input ref={description} type="text"></input>
                  </div>
                  <div className="select-box">
                    <label>Reward Points</label>
                    <input ref={points} type="text"></input>
                  </div>

                  <Button onClick={() => { submit(); }} text={'SUBMIT'} className='rewards-button' />
                </div>
            </div>
      </div>
    )
};
export default AddReward;