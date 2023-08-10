import React, { useState, useEffect } from "react";
import "../styles/InsideNav.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import TocIcon from "@mui/icons-material/Toc";

function InsideNav() {
  const [openLinks, setOpenLinks] = useState(false);

  useEffect(() => {
    let handler = () => {
      setOpenLinks(false);
    };
    document.addEventListener("mouseup", handler);
  });
  return (
    <div className="InsideNavContainer">
      <div className="InsideNavleft">
        <img className="logo" src={logo} alt="" />
        <h1>SCAM</h1>
        <h2>Mining</h2>
      </div>
      <div className="InsideNavRight">
        <div className="NormalLinks">
          <Link to="/Crypto-Mining-App/Main">Dashbord</Link>
          <Link to="/Crypto-Mining-App/Plans">Plans</Link>
          <Link to="/Crypto-Mining-App/Fund">Fund</Link>
          <Link to="/Crypto-Mining-App/Payout">Payout</Link>
          <Link to="/Crypto-Mining-App/Payout">Referral</Link>
        </div>
        <button
          className="btnn"
          onClick={() => {
            setOpenLinks(!openLinks);
          }}>
          <TocIcon />
        </button>
        <div id={openLinks ? "open" : "close"}>
          <ul className="HiddenLinks">
            <Link to="/Crypto-Mining-App/Main">
              <li>Dashbord</li>
            </Link>
            <Link to="/Crypto-Mining-App/Plans">
              <li>Plans</li>
            </Link>
            <Link to="/Crypto-Mining-App/Fund">
              <li>Fund</li>
            </Link>
            <Link to="/Crypto-Mining-App/Payout">
              <li>Payout</li>
            </Link>
            <Link to="/Crypto-Mining-App/Payout">
              <li>Referral</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InsideNav;
