import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const Register = () => {
  const name = useRef(0);
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
        })

        .then((res) => {
          if (res.data["user"]) {
            localStorage.setItem("user_id", res.data.user.id);
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
    <center>
      <Navbar />
      <div className="form">
        <input type="text" placeholder="name" ref={name} />
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
            register();
          }}
        />
        <p className="goto-link">
          <Link to={"/signup"}>Create Account</Link>
        </p>
      </div>
    </center>
  );
};
export default Register;