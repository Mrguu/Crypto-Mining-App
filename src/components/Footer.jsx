import React from "react";
import "../styles/Footer.css";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="FooterContainer">
      <div>
        <div className="footerItems">
          <div className="footerItem1">
            <div className="contact">
              <img src={logo} alt="" />
              <h3>ScamMining</h3>
            </div>
            <p>
              ScamMining is affordable and easy-to-use cloud mining service. We
              have the cheapest source of renewable electricity in the world.If
              you’re looking to mine Bitcoin or Ethereum, We are a great choice,
              allowing you to mine cryptocurrencies without owning any
              equipment.
            </p>
          </div>
          <div className="footerItem2">
            <h3>Quick Links</h3>
            <ul>
              <li>about</li>
              <li>plans</li>
              <li>blog</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="footerItem3">
            <h3>Useful Links</h3>
            <ul>
              <li>privacy policy</li>
              <li>Terms of Service</li>
              <li>Cookies policy</li>
              <li>Usage policy</li>
            </ul>
          </div>
          <div className="footerItem4">
            <h3>Contact Info</h3>
            <ul>
              <li>support@scammining.email</li>
              <li>
                Unit G1, Capital House 61 Rose Road, Taunggyi, Myanmar, E8 1LL
                (COIN LIST BLOCKCHAIN TECHNOLOGY LIMITED) Company number
                14073067
              </li>
              <li>(+970) 56-897-123</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy; 2023 ScamMining.All rights reserved
      </p>
    </div>
  );
}

export default Footer;
