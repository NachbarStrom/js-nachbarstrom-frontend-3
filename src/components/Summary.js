import React from "react";
import '../styles/FinancialPlan.css';
import { Link } from 'react-router-dom';
import { TiBatteryCharge } from 'react-icons/ti';
import '../styles/Summary.css';
import '../styles/App.css';

import fullCircleIcon from "../images/circle-3-thirds.png";
import numberThreeIcon from "../images/number3.png";
import tickIcon from "../images/tick.png";
import mapMarker from "../images/map-marker.png";
import satelliteScreenshot from "../images/screenshot-satellite.png";
import mapScreenshot from "../images/screenshot-map.png";
import { Progress } from "antd";

export const Summary = props => {
  return (
    <div>
      <div className="summary-rectangle">
        <img src={fullCircleIcon} className="Group-9" />
        <img src={numberThreeIcon} className="number-two" />
        <div className="FINANCIAL-PLAN">
            ZUSAMMENFASSUNG
        </div>
        <div className="Line-3" />
        <div className="Rectangle-15">
          <div className="Your-Property">
            Dein Haus
          </div>
          <div className="addres-line">
            <img src={mapMarker} className="pin" />
            <div className="address-text">{props.address}</div>
          </div>
          <div className="map-images">
            <img src={satelliteScreenshot} className="satelite" />
            <img src={mapScreenshot} className="map-normal" />
          </div>
          <div className="Line-5" />
          <div className="Overall-text">
              Zusammenfassung
          </div>
          <div className="Lorem-ipsum">
              Auf Basis deiner Angaben und unseren Annahmen findest du hier nochmal alle wichtigen Daten im Überblick. Sobald deine Anfrage genauer von uns geprüft wurde, erhältst du eine finale Kalkulation.
            Ut enim ad minim
          </div>
          <div className="System-Size">
            Größe der Anlagem
          </div>
          <div className="summary-system-size">
            <div className="summary-numbers inline-element">7</div>
            <div className="kwp inline-element">kWp</div>
            <div className="summary-numbers inline-element plus-symbol">+</div>
            <div className="summary-battery inline-element">
              <TiBatteryCharge size={60} />
            </div>
          </div>
          <div className="summary-system-size-small">
            <div className="panels-number">= {props.panels} panels</div>
            <div className="panels-number battery-power"> {props.batteryPower}kWh battery</div>
          </div>
          <div className="summary-installation-cost">
            <div className="summary-tiny-title">Installationskosten</div>
            <div className="summary-numbers margin-five">€ 12,900</div>
            <div className="panels-number-average margin-five">Based on avg. €1,140/kWp</div>
          </div>
          <div className="summary-solar-electricity">
            <div className="summary-tiny-title">Erzeugte solar Energie</div>
            <div className="summary-numbers margin-five">2500</div>
            <div className="kwp inline-element">kWh/p.a.</div>
          </div>
          <div className="summary-twenty-years">
            <div className="summary-tiny-title">Ersparnis nach 20 Jahren</div>
            <div className="summary-numbers margin-five">€ 21,000</div>
            <div className="panels-number-average margin-five">€ 1,050 per year</div>
          </div>
        </div>

        <div>
          <Progress
            className="ninety-percent-image"
            type="circle"
            percent={props.energyIndependencePercentage}
            width={95}
            strokeColor={"#4B53FF"}
            strokeWidth={8}
            showInfo={false}
          />
          <div className="ninety-percent-image">
            <div className="center-element">
              <div className="ninety">{props.energyIndependencePercentage}</div>
              <div className="percentage">%</div>
              <div className="energy-inc">Autark</div>
            </div>
          </div>

          <div className="first-check">
            <img src={tickIcon} className="checked-approved" />
            <div className="text-grey">Glückwunsch! Dein Dach ist </div>
            <div className="text-blue">solar-freundlich.</div>
            <div className="text-grey">. </div>
          </div>

          <div className="second-check">
          <img src={tickIcon} className="checked-approved" />
              <div className="text-grey">Du bist zu </div>
              <div className="text-blue">80% unabhangig von Stromanbietern</div>
              <div className="text-grey">!  </div>
          </div>

          <div className="third-check">
          <img src={tickIcon} className="checked-approved" />
              <div className="text-grey">Unser Partner ist in deiner Region verfügbar.</div>
          </div>

          <div className="line-3-copy-2" />
          <div className="get-the-best-deal">Sende uns deine Anfrage jetzt!</div>

          <div className="line-3-copy-3" />

          <p><input type="text" className="submission-input first-name" name="firstName" placeholder="First name*" /></p>
          <p><input type="text" className="submission-input last-name" name="lastName" placeholder="Last name*" /></p>
          <p><input type="text" className="submission-input phone-name" name="phoneName" placeholder="Phone*" /></p>
          <p><input type="text" className="submission-input email-name" name="emailName" placeholder="Email*" /></p>

          <div className="agreement-checkbox">
            <input type="checkbox" className="rectangle-checkbox" />
              Mit der Verarbeitung meiner Daten bin ich einverstanden und akzeptiere die
            <a href="http://www.nachbarstrom.eu"> Allgemeinen Geschäftsbedingungen.</a>
          </div>
          <div className="we-will-find">
              Unser zertifizierter Installationspartner wird sich mit dir in Kontakt setzten und die genaue Ausführung erarbeiten. Deine Anfrage ist komplett kostenlos und unverbindlich.
          </div>
        </div>
        <Link to='/financial'><button className="back-button">Zurück</button></Link>
        <Link to='/done'><button className="next-button">Abschicken</button></Link>
      </div>
    </div>
  )
};
