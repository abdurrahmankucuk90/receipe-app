import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginContainer from "./Login.styled";

import { Navigate } from "react-router-dom";
import './Login.css'

const Login = ({ handleFormValues, submitButton, auted }) => {
  console.log(auted);

  return (
    <>
      <LoginContainer>
        {auted ? (
          <Navigate to="/navbar" />
        ) : (
          <form onClick={() => submitButton()}>
            <h1><img src="https://www.edamam.com/assets/img/logo.png" alt="" /> RECEIP</h1>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                onChange={handleFormValues}
              />
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleFormValues}
              />
            </div>
            <div className="loginButton">
              <button >LOGIN</button>
            </div>
          </form>
        )}
      </LoginContainer>
    </>
  );
};

export default Login;
