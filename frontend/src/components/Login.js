import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const Login = () => {
  const email = useRef(0);
  const password = useRef(0);
  const navigate = useNavigate();

    function login() {
        axios
          .post("http://127.0.0.1:8000/api/v1/login", {
            email: email.current.value,
            password: password.current.value,
        })

        .then((res) => {
          console.log(res.data)
            if(res.data["message"] == "The email must be a valid email address."){
              alert("The email must be a valid email address.");
              password.current.value = "";
            }else if(res.data['message'] == "Unauthorized"){
                alert("User Not Found")
                password.current.value = "";
            }else if (res.data["user"]) {
              localStorage.setItem("user_id", res.data["user"]["_id"]);
              navigate("/page");
            }
        });
    }

  return (
    <center>
      <div className="form">
        <input type="email" placeholder="email" ref={email} />
        <input
          type="password"
          placeholder="password"
          ref={password}
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