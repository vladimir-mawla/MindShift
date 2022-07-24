import './addoptions.css'
import React from "react";
import axios from "axios";
import Button from "../Button/Button";
import ListOptions from '../ListOptions/ListOptions'
import { useRef, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate } from 'react-router-dom';
const AddOptions = () => {
  const [options, setOptions] = useState([])
  const input = useRef(0);
  const navigate = useNavigate();

  
  async function submit() {
    setOptions([...options, input.current.value])
    const question_id = localStorage.getItem("question_id");
    await axios
      .post("http://127.0.0.1:8000/api/v1/question_options/add_option", {
        question_id: question_id,
        option: input.current.value,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Accept: 'application/json'
      }
      })

      .then((response) => {
        input.current.value = "";

      });
  }

 
  return (
    <>
      <AdminNavbar />
      <div className='options-box'>
        <form>
          <div className='input-box'>
            <label>Option {options.length + 1}</label>
            <input ref={input} type="text"></input>
          </div>
          <div>
          <a onClick={() => {submit()} }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add
          </a>
          </div>
          <div>
          <a onClick={() => {navigate('/add_game')}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Finish
          </a>
          </div>
        </form>
        <ListOptions options={options} />
      </div>

    </>
  );
};
export default AddOptions;