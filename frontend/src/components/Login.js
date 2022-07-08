import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

    function login() {

        const navigate = useNavigate();
        const login_email = document.getElementById("login_email");
        const login_password = document.getElementById("login_password");

        axios
          .post("http://127.0.0.1:8000/api/v1/login", {
            email: login_email.value,
            password: login_password.value,
        })

    }

  return (
    <center>
      <div className="form">
        <input type="email" placeholder="email" id="login_email" />
        <input
          type="password"
          placeholder="password"
          id="login_password"
          autoComplete="on"
        />
        <Button
          text={"Login"}
          className={"login-btn"}
          onClick={() => {
            login();
          }}
        />
        <p className="goto-link">
          <Link to={"/signup"}>Create Account</Link>
        </p>
      </div>
    </center>
  );
};
export default Login;