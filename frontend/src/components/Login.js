import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
            ;
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