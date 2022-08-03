import './form.css';
import React from "react";
import Button from "../Button/Button";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const Register = () => {
  const name = useRef(0);
  const job_title = useRef(0);
  const email = useRef(0);
  const password = useRef(0);
  const navigate = useNavigate();

  function register() {
    if (email.current.value == "" || password.current.value == "" || name.current.value == "") {
      alert("You should fill all fields");
    } else {
      axios
        .post("http://127.0.0.1:8000/api/v1/register", {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
          job_title: job_title.current.value,
        })

        .then((res) => {
          if (res.data["user"]) {
            localStorage.setItem("user_id", res.data.user.id);
            localStorage.setItem("company_id", res.data.user.company_id);
            localStorage.setItem('token', res.data.authorisation.token);
            navigate("/page");
          }
        })
        .catch((error) => {
          let message = error.response.data.message;
          if (message == "The email must be a valid email address.") {
            alert("The email must be a valid email address.");
            password.current.value = "";
          } else if (message == "The password must be at least 6 characters.") {
            alert("The password must be at least 6 characters.");
            password.current.value = "";
          }
        });
    }
  }

  return (
    <div className='login-form'>
      <h1>REGISTER</h1>

      <div className='login-input'>
        <label>Name</label>
        <input type="email" ref={name} />
      </div>

      <div className='login-input'>
        <label>Email</label>
        <input type="email" ref={email} />
      </div>

      <div className='login-input'>
        <label>Position</label>
        <input type="email" ref={job_title} />
      </div>

      <div className='login-input'>
        <label>Password</label>
        <input type="password" ref={password} autoComplete="on" />
      </div>

      <Button text={'Register'} onClick={()=>{register()}}/>
      <p>
        Already have an account? <Link  to={"/login"}>Login</Link>
      </p>
  </div>
  );
};
export default Register;