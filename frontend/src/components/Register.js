import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const Register = () => {


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