import React from "react";
import '../styles/FinancialPlan.css';
import '../styles/Thanks.css';
import '../styles/App.css';
import '../styles/Done.css';

import tickIcon from "../images/tick.png";
import phoneIcon from "../images/done/phone-advice.png";
import expertIcon from "../images/done/expert.png";
import truckIcon from "../images/done/truck.png";
import {Row,Col} from "antd";
import {Button} from "antd";

export const Done = () => {

  const processTimeline = (
    <div className="Rectangle-20">
      <div className="continue">Was als nächstes passiert:</div>
      <div className="up-to">Bis 1 Tag</div>
      <div className="two-weeks">2 Wochen</div>
      <div className="by-arrangement">auf Termin</div>
      <img src={tickIcon} className="calculate" alt="tick" />
      <div className="Line-7" />
        <img src={phoneIcon} className="advice" alt="phone" />
        <img src={expertIcon} className="on-site" alt="expert" />
        <img src={truckIcon} className="installation" alt="truck" />
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

  const buttonStyle = { backgroundColor:"#6770ff", borderColor:"#6770ff" };
  return (
    <div className="done-rectangle">
      <div className="awesome">
          Fantastisch! < br/>
          Du bist auf dem Weg unabhängig von Stromanbietern zu werden.
      </div>
      <div className="searching">
          Wir leiten deine Anfrage an unseren Partner weiter. Dieser wird sich in den kommenden Tagen telefonisch
          bei dir melden um deine Anlage noch besser zu verstehen. Danke für deine Geduld.
      </div>

      {processTimeline}
      <Row style={{ paddingTop: '40px', textAlign: 'left'}}>
        <Col span={6} offset={4}>
          <div>
            <div className="more-questions-grey">Hast du noch Fragen?</div>
              <div className="more-questions-blue">Wir helfen dir gerne weiter</div>
          </div>
        </Col>
        <Col span={4}>
          <Button style={buttonStyle} type="primary" icon="solution" size={"large"}>
            <a style={{color:'white'}} href={"https://www.nachbarstrom.eu/price"} target={"_blank"}> Request Product</a>
          </Button>
        </Col>
        <Col span={4} offset={1}>
          <Button style={buttonStyle} type="primary" icon="mail" size={"large"}>
            <a style={{color: "#FFF"}} href={"https://www.nachbarstrom.eu"} target={"_blank"}>  I have Other Question</a>
          </Button>
        </Col>
      </Row>
    </div>
  )
};
