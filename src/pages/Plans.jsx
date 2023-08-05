import React from "react";
import InsideNav from "../components/InsideNav";
import plansbg from "../images/plansbg.jpg";
import "../styles/Plans.css";
import bitcoin from "../images/bitcoin.png";

function Plans() {
  return (
    <div
      className="PlansContainer"
      style={{ backgroundImage: `url(${plansbg})` }}>
      <InsideNav />
      <h3 className="topContect">The plan can be purchased with a $10 bonus</h3>
      <div className="midContect">
        <p>
          One of the advantages of our miners is that you can get your main
          invest money less than 10 days and double your money in 20 days
        </p>
        <p>
          For example if you activate Basic miner with 728 USD, after 20 days
          you can withdraw 0.00302 X 30 = 0.0906 BTC
        </p>
        <p>
          Don’t lose time and active one of the Bitcoin miners today, keep in
          remind that our discounts are limited so hurry up.
        </p>
        <p>You can have the fastest bitcoin miner in 5 minutes:</p>
        <ol>
          <li> Choose one of the below miners</li>
          <li> Click on "Buy Now" button and pay the miner price</li>
          <li>
            Your miner is launched and adds bitcoin to your balance every second
            (until 1 year)
          </li>
          <li>
            Your bitcoin increase every minute and you can withdraw it or buy a
            new bigger miner
          </li>
        </ol>
      </div>
      <div className="mainContect">
        <div className="Card">
          <img src={bitcoin} alt="" />
          <h1>STARTER</h1>
          <h2>$12/365Days</h2>
          <p>Contract duration : 365 days</p>
          <p>Daily mining : 0.0000185BTC ≈ 0.66 $</p>
          <p>Hardware: Antminer S19j</p>
          <p>Monthly mining : 0.000559 BTC ≈ 16.77 $</p>
          <a href="">
            <button>BUY NOW</button>
          </a>
        </div>
        <div className="Card">
          <img src={bitcoin} alt="" />
          <h1>NEW BEGINNER</h1>
          <h2>$100/365Days</h2>
          <p>Contract duration : 365 days</p>
          <p>Daily mining : 0.0000122BTC ≈ 3.66 $</p>
          <p>Hardware: Antminer S19j</p>
          <p>Monthly mining : 0.000366 BTC ≈ 109.8 $</p>
          <a href="">
            <button>BUY NOW</button>
          </a>
        </div>
        <div className="Card">
          <img src={bitcoin} alt="" />
          <h1>BASIC</h1>
          <h2>$320/365Days</h2>
          <p>Contract duration : 365 days</p>
          <p>Daily mining : 0.000121BTC ≈ 36.6 $</p>
          <p>Hardware: Antminer S19j</p>
          <p>Monthly mining : 0.0364 BTC ≈ 1092 $</p>
          <a href="">
            <button>BUY NOW</button>
          </a>
        </div>
        <div className="Card">
          <img src={bitcoin} alt="" />
          <h1>ECONOMY</h1>
          <h2>$728/365Days</h2>
          <p>Contract duration : 365 days</p>
          <p>Daily mining : 0.00336BTC ≈ 100.8 $</p>
          <p>Hardware: Antminer S19j</p>
          <p>Monthly mining : 0.1007 BTC ≈ 3021 $</p>
          <a href="">
            <button>BUY NOW</button>
          </a>
        </div>
        <div className="Card">
          <img src={bitcoin} alt="" />
          <h1>STANDART</h1>
          <h2>$2400/365Days</h2>
          <p>Contract duration : 365 days</p>
          <p>Daily mining : 0.014BTC ≈ 420 $</p>
          <p>Hardware: Antminer S19j</p>
          <p>Monthly mining : 0.42 BTC ≈ 12600 $</p>
          <a href="">
            <button>BUY NOW</button>
          </a>
        </div>
        <div className="Card">
          <img src={bitcoin} alt="" />
          <h1>SENIOR</h1>
          <h2>$6500/365Days</h2>
          <p>Contract duration : 365 days</p>
          <p>Daily mining : 0.0616BTC ≈ 1848 $</p>
          <p>Hardware: Antminer S19j</p>
          <p>Monthly mining : 1.848 BTC ≈ 55440 $</p>
          <a href="">
            <button>BUY NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Plans;
