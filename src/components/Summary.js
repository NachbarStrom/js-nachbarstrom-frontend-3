import React from "react";
import '../styles/FinancialPlan.css';
import { Link } from 'react-router-dom';
import { TiBatteryCharge } from 'react-icons/ti';
import '../styles/Summary.css';
import '../styles/App.css';

import fullCircleIcon from "../images/circle-3-thirds.png";
import numberThreeIcon from "../images/number3.png";
import secondStepIcon from "../images/circle-2-thirds.png";
import tickIcon from "../images/tick.png";
import mapMarker from "../images/map-marker.png";
import satelliteScreenshot from "../images/screenshot-satellite.png";
import mapScreenshot from "../images/screenshot-map.png";

export const Summary = props => {
  return (
    <div>
      <div className="summary-rectangle">
        <img src={fullCircleIcon} className="Group-9" />
        <img src={numberThreeIcon} className="number-two" />
        <div className="FINANCIAL-PLAN">
          YOUR SOLAR SUMMARY & CONTACT
        </div>
        <div className="Line-3" />
        <div className="Rectangle-15">
          <div className="Your-Property">
            Your Property
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
            Overall
          </div>
          <div className="Lorem-ipsum">
            iusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim
          </div>
          <div className="System-Size">
            System Size
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
            <div className="summary-tiny-title">Solar System & Installation Cost</div>
            <div className="summary-numbers margin-five">€ 12,900</div>
            <div className="panels-number-average margin-five">Based on avg. €1,140/kWp</div>
          </div>
          <div className="summary-solar-electricity">
            <div className="summary-tiny-title">Solar Electricity</div>
            <div className="summary-numbers margin-five">2500</div>
            <div className="kwp inline-element">kWh/year</div>
          </div>
          <div className="summary-twenty-years">
            <div className="summary-tiny-title">Total 20-year net savings</div>
            <div className="summary-numbers margin-five">€ 21,000</div>
            <div className="panels-number-average margin-five">€ 1,050 per year</div>
          </div>
        </div>

        <div>
          <img src={secondStepIcon} className="ninety-percent-image" />
          <div className="ninety-percent-image">
            <div className="center-element">
              <div className="ninety">90</div>
              <div className="percentage">%</div>
              <div className="energy-inc">Energy ind.</div>
            </div>
          </div>
          <div className="first-check">
            <img src={tickIcon} className="checked-approved" />
            <div className="text-grey">Congrats! Your property is </div>
            <div className="text-blue">solar friendly</div>
            <div className="text-grey">. </div>
          </div>

          <div className="second-check">
          <img src={tickIcon} className="checked-approved" />
              <div className="text-grey">You will be  </div>
              <div className="text-blue">80% energy independent</div>
              <div className="text-grey">!  </div>
          </div>

          <div className="third-check">
          <img src={tickIcon} className="checked-approved" />
              <div className="text-grey">We found</div>
              <div className="text-blue"> 6 certified installers </div>
              <div className="text-grey">in your region.</div>
          </div>

          <div className="line-3-copy-2" />
          <div className="get-the-best-deal">Get the Best Deal</div>

          <div className="line-3-copy-3" />

          <p><input type="text" className="submission-input first-name" name="firstName" placeholder="First name*" /></p>
          <p><input type="text" className="submission-input last-name" name="lastName" placeholder="Last name*" /></p>
          <p><input type="text" className="submission-input phone-name" name="phoneName" placeholder="Phone*" /></p>
          <p><input type="text" className="submission-input email-name" name="emailName" placeholder="Email*" /></p>

          <div className="agreement-checkbox">
            <input type="checkbox" className="rectangle-checkbox" />
            By clicking this button, you agree to the processing of my
            data on this form as described in the NachbarStrom
            <a href="http://google.com">Privacy</a>.
          </div>
          <div className="we-will-find">
            NachbarStrom's AI can find the best retailer's offer for you
            based on the system you just configured.
          </div>
        </div>
        <Link to='/financial'><button className="back-button">Back</button></Link>
        <Link to='/done'><button className="next-button">Submit</button></Link>
      </div>
    </div>
  )
};
