import React from "react";
import "../styles/Fund.css";
import InsideNav from "../components/InsideNav";
import Fundbg from "../images/fundbg.jpg";
import bitcoin from "../images/bitcoin.png";
import usdt from "../images/USTD.png";
import LTC from "../images/LTC.png";
import ETH from "../images/ETH.png";
import dogecoin from "../images/dogecoin.png";
import TRX from "../images/TRX.png";

function Fund() {
  const handler = () => {
    alert("System doesn't start yet!");
  };
  return (
    <div
      className="fundContainer"
      style={{ backgroundImage: `url(${Fundbg})` }}>
      <InsideNav />
      <div className="TopContect">
        Special offer only for this month: Every payment more than500 USD, you
        will get20% extra USD
        <br />
        For example ：If you deposit500 USDyour account will be added600 USD
        <br />
        Special offer only for this month: Every payment more than2000 USD, you
        will get30% extra USD
      </div>
      <div className="Payment">
        <div className="Box">
          <h2>
            BTC <br />
            (BTC Chain)
          </h2>
          <img src={bitcoin} alt="" />
          <button onClick={handler}>Deposite Now</button>
        </div>
        <div className="Box">
          <h2>USDT.TRC20</h2>
          <img src={usdt} alt="" />
          <button onClick={handler}>Deposite Now</button>
        </div>
        <div className="Box">
          <h2>USDT.BEP20</h2>
          <img src={usdt} alt="" />
          <button onClick={handler}>Deposite Now</button>
        </div>
        <div className="Box">
          <h2>USDT.ERC20</h2>
          <img src={usdt} alt="" />
          <button onClick={handler}>Deposite Now</button>
        </div>
        <div className="Box">
          <h2>LTC</h2>
          <img src={LTC} alt="" />
          <button onClick={handler}>Deposite Now</button>
        </div>
        <div className="Box">
          <h2>ETH</h2>
          <img src={ETH} alt="" />
          <button onClick={handler}>Deposite Now</button>
        </div>
        <div className="Box">
          <h2>DOGE COIN</h2>
          <img src={dogecoin} alt="" />
          <button onClick={handler}>Deposite Now</button>
        </div>
        <div className="Box">
          <h2>TRX</h2>
          <img src={TRX} alt="" />
          <button onClick={handler}>Deposite Now</button>
        </div>
      </div>
    </div>
  );
}

export default Fund;
