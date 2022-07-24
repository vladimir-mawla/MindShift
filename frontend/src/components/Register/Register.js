import './form.css';
import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const Register = () => {
  const name = useRef(0);
  const country = useRef(0);
  const city = useRef(0);
  const description = useRef(0);
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
          password: description.current.value,
          password: country.current.value,
          password: city.current.value,
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
          } else if (message == "The password must be at least 6 characters.") {
            alert("The password must be at least 6 characters.");
            password.current.value = "";
          }
        });
    }
  }

  return (
    <center>
      <div className="form">
        <input type="text" placeholder="Name" ref={name} />
        <input type="text" placeholder="Your Country of Residence" ref={country} />
        <input type="text" placeholder="City" ref={city} />
        <input type="text" placeholder="Your job position/role" ref={job_title} />
        <input type="text" placeholder="One-Line Description" ref={description} />
        <input type="email" placeholder="Email" ref={email} />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          autoComplete="on"
        />
        <Button
          text={"Signup"}
          className={"form-btn"}
          onClick={() => {
            register();
          }}
        />
        <p>
          <Link className="goto-link" to={"/login"}>Already have an account?</Link>
        </p>
      </div>
    </center>
  );
};
export default Register;