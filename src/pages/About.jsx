import React from "react";
import "../styles/About.css";
import aboutbg from "../images/aboutbg.jpg";
import hero2 from "../images/hero2.png";
function About() {
  return (
    <div
      className="aboutContainer"
      style={{ backgroundImage: `url(${aboutbg})` }}>
      <div className="aboutLeft">
        <img src={hero2} alt="" />
      </div>
      <div className="aboutRight">
        <h4>KNOW ABOUT US</h4>
        <h1>
          We provide the best services to our miners Be connected with us and
          get profited.
        </h1>
        <p>
          Scam Mining is one of the leading cryptocurrency mining platforms,No
          need to purchase hardware devices, manage devices, offering
          cryptocurrency mining capacities in every range - for newcomers. Our
          mission is to make acquiring cryptocurrencies easy and fast for
          everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
