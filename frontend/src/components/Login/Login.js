import './form.css';
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const Login = () => {
  const email = useRef(0);
  const password = useRef(0);
  const navigate = useNavigate();

  function login() {
    if (email.current.value == "" || password.current.value == "") {
      alert("You should fill all fields");
    } else {
      axios
        .post("http://127.0.0.1:8000/api/v1/login", {
          email: email.current.value,
          password: password.current.value,
        })

        .then((res) => {
          if (res.data["user"]) {
            localStorage.setItem("user_id", res.data.user.id);
            localStorage.setItem("company_id", res.data.user.company_id);
            navigate("/page");
          }
        })
        .catch((error) => {
          let message = error.response.data.message;
          if (message == "The email must be a valid email address.") {
            alert("The email must be a valid email address.");
            password.current.value = "";
          } else if (message == "Unauthorized") {
            alert("User Not Found");
            password.current.value = "";
          }
        });
    }
  }

  return (
    <div className="login-box">
      <form>
        <h2>Login</h2>

        <div className="user-box">
          <input type="email" ref={email} />
          <label>Email</label>
        </div>

        <div className="user-box">
          <input type="password" ref={password} autoComplete="on" />
          <label>Password</label>
        </div>

        <a href="#" onClick={() => { login() }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </a>
        <p>
          <Link className="goto-link" to={"/login"}>Don't have an account?</Link>
        </p>
      </form>


    </div>
  );
};
export default Login;