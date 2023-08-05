import React from "react";
import dashbordbg from "./images/dashbordbg.jpg";
import "./styles/Main.css";
import item1 from "./images/item1.png";
import item2 from "./images/item2.png";
import item3 from "./images/item3.png";
import InsideNav from "./components/InsideNav";

function Main() {
  return (
    <div id="Main">
      <InsideNav />
      <div
        className="MainContainer"
        style={{ backgroundImage: `url(${dashbordbg})` }}>
        <div className="topContent">
          <h3>World-class security</h3>
          <p>
            As a wholly owned subsidiary of Digital Currency Group, we offer
            clients the opportunity to tap into our ecosystem. Scam Mining has
            entered into a deep strategic partnership agreement with Coinbase,
            the largest cryptocurrency exchange in the United States. Scam
            Mining already supports direct transfers from Coinbase exchange
            accounts to Scam Mining accounts! If you are also a client of the
            Coinbase exchange, you can choose Coinbase Payments when making
            payments. The funds are supervised by Coinbase, a third-party listed
            company.
          </p>
        </div>
        <div className="BoxsContainer">
          <div className="Boxs">
            <h5>Deposit</h5>
            <div className="Boxinside">
              <img src={item1} alt="" />
              <h3>Balance</h3>
            </div>
            <h2>10 USD</h2>
          </div>
          <div className="Boxs">
            <h5>My Refferrals</h5>
            <div className="Boxinside">
              <img src={item2} alt="" />
              <h3>Referrals Bonus</h3>
            </div>
            <h2>0 USD</h2>
          </div>
          <div className="Boxs">
            <h5>Start Mining</h5>
            <div className="Boxinside">
              <img src={item3} alt="" />
              <h3>BTC Mining</h3>
            </div>
            <h2>Buy Plan To Start</h2>
          </div>
        </div>
        <div className="BottomContent">
          <h2>Purchased Plans</h2>
          <div className="table">
            <div className="Item">
              <h3>Order</h3>
              <p>...</p>
            </div>
            <div className="Item">
              <h3>Plan type</h3>
              <p>...</p>
            </div>
            <div className="Item">
              <h3>Total Days</h3>
              <p>...</p>
            </div>
            <div className="Item">
              <h3>Remaining Days</h3>
              <p>...</p>
            </div>
            <div className="Item">
              <h3>Status</h3>
              <p>...</p>
            </div>
            <div className="Item">
              <h3>Action</h3>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
