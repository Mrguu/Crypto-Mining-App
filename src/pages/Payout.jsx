import React from "react";
import plansbg from "../images/plansbg.jpg";
import InsideNav from "../components/InsideNav";
import "../styles/Payout.css";

function Payout() {
  return (
    <div
      className="PayoutContainer"
      style={{ backgroundImage: `url(${plansbg})` }}>
      <InsideNav />
      <h1 className="PayoutContect">This System Doesn't Start Yet!</h1>
    </div>
  );
}

export default Payout;
