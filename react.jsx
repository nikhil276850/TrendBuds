import React from "react";
import "./signup and login/login.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {
  return (
    <div className="container">
      <div className="cardbox">
        <div className="upperimage">
          <img src="signup and login/bg-login.png" alt="Background" />
        </div>
        <div className="heading">
          <h1>
            <span style={{ color: "hsl(244, 75%, 57%)" }}>Welcome</span> Back
          </h1>
        </div>
        <div className="login__inputs">
          <div className="input-group">
            <label htmlFor="email" className="login__label">
              Email
            </label>
            <input
              className="login__input"
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input
              className="login__input"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <div className="subscriptionhub">
          <div className="logo">
            <i className="bi bi-bell-fill" />
            <div>
              <b>Annual Plan</b>
              <p>₹550/year</p>
            </div>
          </div>
          <div className="anchor">
            <a href="#">Change</a>
          </div>
        </div>
        <div className="login_button">
          <button>
            <a className="gotosite" href="index.html">
              <b>Login</b>
            </a>
          </button>
        </div>
        <div className="signup_link">
          <a href="signup.html">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

