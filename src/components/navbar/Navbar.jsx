import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import homeSvg from "../../assets/home.svg";
import codingSvg from "../../assets/coding.svg";
import dietSvg from "../../assets/diet.svg";
import mailSvg from "../../assets/mail.svg";
import "./Navbar.css";

const Navbar = ({ auted }) => {
  return (
    <>
      {auted ? (
        <div>
          <div className="nav">
            <div>
              <Link to="/home" className="nav-logo">
                <h1 className="receip"><img src="https://www.edamam.com/assets/img/logo.png" alt="" /> RECEIP</h1> 
              </Link>
            </div>
            <ul>
              <li>
                <Link to="/home" className="nav-link">
                  ABOUT
                </Link>
              </li>
              
              <li>
                <a
                  href="https://github.com/abdurrahmankucuk90"
                  target="_blank"
                  className="nav-link"
                >
                  GITHUB
                </a>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  LOGOUT
                </Link>
              </li>
            </ul>
          </div>
            <Outlet />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Navbar;
