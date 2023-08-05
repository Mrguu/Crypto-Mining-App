import React from "react";
import "../styles/Services.css";
import servicesbg from "../images/servicesbg.jpg";
import hero3 from "../images/hero3.png";
import pawn1 from "../images/pawn1.png";
import pawn2 from "../images/pawn2.png";
import pawn3 from "../images/pawn3.png";

function Services() {
  return (
    <div
      className="servicesContainer"
      style={{ backgroundImage: `url(${servicesbg})` }}>
      <h1>OUR SERVICES</h1>
      <h4>
        We provide the best services to our miners, be connected with us, and
        get profited.
      </h4>
      <div className="cubeContainer">
        <div className="startItems">
          <div className="items1">
            <div className="title1">
              <h3>24/7 Support</h3>
              <p>
                We are ready to answer all your questions and advise you 24/7.
                Feel free to reach us anytime.
              </p>
            </div>
            <img src={pawn1} alt="" />
          </div>
          <div className="items2">
            <div className="title2">
              <h3>Expert Team</h3>
              <p>
                Our mining team come from in blockchain industry and IT
                engineers, we have you covered with the knowledge and skills of
                our team. .
              </p>
            </div>
            <img src={pawn2} alt="" />
          </div>
          <div className="items3">
            <div className="title3">
              <h3>accessibility</h3>
              <p>
                Unlike mining hardware, coins are easy to buy. It won't wear out
                or require additional investment to increase powe
              </p>
            </div>
            <img src={pawn3} alt="" />
          </div>
        </div>
        <div className="centerItem">
          <img src={hero3} alt="" />
        </div>
        <div className="endItems">
          <div className="items4">
            <div className="title4">
              <h3>Cloud Mining</h3>
              <p>
                No need to configure equipment at home, no need to manage. We
                help you run the most advanced bitcoin mining machine
              </p>
            </div>
            <img src={pawn1} alt="" />
          </div>
          <div className="items5">
            <div className="title5">
              <h3>Detailed statistics</h3>
              <p>
                We have detailed statistics on your transactions, and you will
                also get all mining data
              </p>
            </div>
            <img src={pawn2} alt="" />
          </div>
          <div className="items6">
            <div className="title6">
              <h3>Data Protection</h3>
              <p>
                We have a strong data security and user privacy protection
                system
              </p>
            </div>
            <img src={pawn3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
