import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate, useRef } from "react-router-dom";

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

        .then((res) => {
            if(res.data["message"] == "The email must be a valid email address."){
              alert("The email must be a valid email address.");
              login_password.value = "";
            }else if(res.data['message'] == "Unauthorized"){
                alert("User Not Found")
            }else if (res.data["user"]) {
              localStorage.setItem("user_id", res.data["user"]["_id"]);
              navigate("/page");
            }
        });
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