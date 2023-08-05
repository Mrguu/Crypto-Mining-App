import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="NavContainer">
      <div className="Navleft">
        <img className="logo" src={logo} alt="" />
        <h1>SCAM</h1>
        <h2>Mining</h2>
      </div>
      <div className="NavRight">
        <Link to="LogIn&LogOut">
          <button>Sign Up</button>
        </Link>
        <Link to="LogIn&LogOut">
          <button>LogIn</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
