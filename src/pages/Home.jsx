import React from "react";
import "../styles/Home.css";
import homebg from "../images/homebg.jpg";
import D10 from "../images/D10.png";
import hero7 from "../images/hero7.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="homeContainer"
      style={{ backgroundImage: `url(${homebg})` }}>
      <div className="homeLeft">
        <div className="getD10">
          <img src={D10} alt="" />
          <h3>START CLOUD MINING SING UP TO GET FREE $10 </h3>
        </div>
        <div className="leftTitle">
          <h1>ScamMiner is Simple & Secure Way to Enter Crypto Mining.</h1>
          <p>
            Looking for easy to use Scam Mining site. Trusted By
            <br /> 100K Bitcoin Miners.
          </p>
          <Link to="LogIn&LogOut">
            <button>Start Mining</button>
          </Link>
        </div>
      </div>
      <div className="homeRight">
        <img src={hero7} alt="" />
      </div>
    </div>
  );
}

export default Home;
