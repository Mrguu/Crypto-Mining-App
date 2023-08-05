import React from "react";
import "../styles/Miningwork.css";
import miningworkbg from "../images/homebg.jpg";
import hero4 from "../images/hero4.png";
import pawn3 from "../images/pawn3.png";

function Miningwork() {
  return (
    <div
      className="miningWorkContainer"
      style={{ backgroundImage: `url(${miningworkbg})` }}>
      <div className="miningtitle">
        <h1>HOW DOES CLOUD MINING WORKS?</h1>
      </div>
      <div className="boxContainer">
        <div className="startbox">
          <div className="box1">
            <div className="data1">
              <h3>THE MINING PROCESS BEGINS</h3>
              <p>We are super transparent, You will see live bitcoin mining.</p>
            </div>
            <img src={pawn3} alt="" />
          </div>
          <div className="box2">
            <div className="data2">
              <h3>RECEIVE DAILY YOUR MINED BITCOINS</h3>
              <p>
                Withdraw your bitcoin at any time, No minimum payout for premium
                users.
              </p>
            </div>
            <img src={pawn3} alt="" />
          </div>
        </div>
        <div className="centerbox">
          <img src={hero4} alt="" />
        </div>
        <div className="endbox">
          <div className="box3">
            <div className="data3">
              <h3>YOU REGISTER ON Easy Mining</h3>
              <p>
                Register using your bitcoin wallet address, It takes only 1
                minute.
              </p>
            </div>
            <img src={pawn3} alt="" />
          </div>
          <div className="box4">
            <div className="data4">
              <h3>START IN 24 HOURS</h3>
              <p>
                No need to buy, deliver and set up hardware. There are no
                associated risks or headaches. Just buy tokens
              </p>
            </div>
            <img src={pawn3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Miningwork;
