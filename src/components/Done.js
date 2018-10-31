import React from "react";
import '../styles/FinancialPlan.css';
import '../styles/Thanks.css';
import { MdChat } from 'react-icons/md';
import '../styles/App.css';

import tickIcon from "../images/tick.png";
import callIcon from "../images/done/phone-advice.png";
import expertIcon from "../images/done/expert.png";
import truckIcon from "../images/done/truck.png";
import phoneImage from '../images/done/contact/phone.png';
import emailImage from "../images/done/contact/email.png";

export const Done = () => {

  const processTimeline = (
    <div className="Rectangle-20">
      <div className="continue">And so it goes from now:</div>
      <div className="up-to">up to 1 day</div>
      <div className="two-weeks">2 weeks</div>
      <div className="by-arrangement">by arrangement</div>
      <img src={tickIcon} className="calculate" />
      <div className="Line-7" />
      <img src={callIcon} className="advice" />
      <img src={expertIcon} className="on-site" />
      <img src={truckIcon} className="installation" />
      <div className="Line-6" />
      <div className="next-steps-title-blue">Calculate</div>
      <div className="next-steps-blue">recommended price & individual financial plan</div>
      <div className="next-steps-title-advice">Advice</div>
      <div className="next-steps-advice">by telephone for detailed system layout </div>
      <div className="next-steps-title-on-site">On-site</div>
      <div className="next-steps-on-site">expertise appointment</div>
      <div className="next-steps-title-installation">Installation</div>
      <div className="next-steps-installation">of the new solar system</div>
    </div>
  );

  const contactButtons = (
    <div>
      <div className="call-button">
        <img src={phoneImage} className="phone-image"/>
        Call us
      </div>
      <div className="email-button">
        <img src={emailImage} className="email-image"/>
        Email us
      </div>
      <div className="chat-button">
        <MdChat size={20}/>
        Live Chat
      </div>
    </div>
  );

  return (
    <div className="done-rectangle">
      <div className="awesome">
          Fantastisch! < br/>
          Du bist auf dem Weg unabhängig von Stromanbietern zu werden.
      </div>
      <div className="searching">
          Wir leiten deine Anfrage an unseren Partner weiter. Dieser wird sich in den kommenden Tagen telefonisch
          bei dir melden um deine Anlage noch besser zu verstehen. Danke für deine Gedult.
      </div>

      {processTimeline}

      <div className="more-questions">
        <div className="more-questions-grey">Du hast noch Fragen? </div>
        <div className="more-questions-blue">Wir freuen uns auf deine Fragen!</div>
      </div>

      {contactButtons}

    </div>
  )
};
