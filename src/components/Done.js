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
      <div className="continue">Was als nächstes passiert:</div>
      <div className="up-to">Bis 1 Tag</div>
      <div className="two-weeks">2 Wochen</div>
      <div className="by-arrangement">auf Termin</div>
      <img src={tickIcon} className="calculate" />
      <div className="Line-7" />
      <img src={callIcon} className="advice" />
      <img src={expertIcon} className="on-site" />
      <img src={truckIcon} className="installation" />
      <div className="Line-6" />
      <div className="next-steps-title-blue">Analyse</div>
      <div className="next-steps-blue">Flächen & Kosten</div>
      <div className="next-steps-title-advice">Beratung </div>
      <div className="next-steps-advice">Persönlich & Kompetent</div>
      <div className="next-steps-title-on-site">Vor Ort Termin</div>
      <div className="next-steps-on-site">Detailplanung</div>
      <div className="next-steps-title-installation">Installation</div>
      <div className="next-steps-installation">of the new solar system</div>
    </div>
  );

  const contactButtons = (
    <div>

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
        <div className="more-questions-grey">Du hast noch Fragen? Wir freuen uns auf deine Fragen!</div>
        <div className="more-questions-grey">Sende uns eine Email an info@nachbarstrom.eu or oder rufe uns an unter 015123473011 </div>
      </div>

      {contactButtons}

    </div>
  )
};
