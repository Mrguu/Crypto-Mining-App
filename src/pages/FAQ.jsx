import React from "react";
import "../styles/FAQ.css";
import FAQbg from "../images/FAQbg.jpg";

function FAQ() {
  return (
    <div className="FAQContainer" style={{ backgroundImage: `url(${FAQbg})` }}>
      <div className="faqtitle">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here you can find our top frequently asked questions. Please let us
          know if you have any queries regarding our mining platform and FAQs.
        </p>
      </div>
      <div className="contentContainer">
        <div className="content1">
          <h3>How to get start?</h3>
          <p>
            You need to purchase at least one plan. The machines are managed by
            us, so you don't need to learn anything. You need to deposit first
            then click "Buy plan" to active the plan. After purchased, the plan
            will take effect in 24 hours automaticlly.The output will be settled
            every 24 hours, and you can withdraw it at any time.
          </p>
        </div>
        <div className="content1">
          <h3>How to deposite?</h3>
          <p>
            We only accept cryptocurrency, such as: BTC, ETH, USDT, LTC and
            other crypto currencies. Deposit process: Deposit - select the
            crypto currencies - enter the amount - pay for it
          </p>
        </div>
        <div className="content1">
          <h3>How to withdraw money?</h3>
          <p>
            Click “My Account” to fill in the USDT wallet address first, click
            "Withdraw Now" to withdraw, we will process it for you as soon as
            possible after receiving your request（within 24 hours）. The USDT
            withdrawal fee is $1 each time. The minimum withdrawal amount is
            $100.
          </p>
        </div>
        <div className="content1">
          <h3>is there any hidden fees?</h3>
          <p>
            There is no any hidden terms and additional.After you purchase a
            plan, we promise not to charge you any fees.
          </p>
        </div>
        <div className="content1">
          <h3>can I get refund?</h3>
          <p>we implement 100% no quibble refund policy</p>
        </div>
        <div className="content1">
          <h3>Is the platform legal?</h3>
          <p>
            We are a legal company called COIN LIST BLOCKCHAIN TECHNOLOGY
            LIMITED"Company number 14073067"The UK government has granted us the
            following operating licenses: Nature of business (SIC) 64205 -
            Activities of financial services holding companies 64301 -
            Activities of investment trusts 64304 - Activities of open-ended
            investment companies 64991 - Security dealing on own account. You
            can view our financial situation through the following links to the
            UK government website
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
