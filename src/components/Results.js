import React from "react";
import '../styles/Results.css';
import '../styles/App.css';
import '../styles/Loading.css';
import { Link } from 'react-router-dom';
import { Map } from './Map';

import tickIcon from "../images/tick.png";
import stepOneIcon from "../images/step1.png";
import sunIcon from "../images/sun.png";
import solarPanelIcon from "../images/solar-panel.png";
import nachbarstromLogo from "../images/nachbarstrom-logo.png";

export const Results = props => {
  const map = (
    <div className="map-render-div">
      <Map
        onMarkerComplete={e => {}}
        geoJson={null}
      />
    </div>);

  const header = (
    <div className="header">
      <img src={stepOneIcon} className="Group-9" alt="Step one icon" />
      <div className="AI-SOLAR-CALCULATION">AI SOLAR CALCULATION</div>
    </div>);

  return (
    <div>
      <img src={nachbarstromLogo} className="logo" alt="Nachbarstrom"/>
      <div className="rectangle loading results">
        {header}
        <div className="Line"/>
        <div className="Your-address">Your address</div>
        <input type="text" className="rectangle-input" name="name"
               placeholder="Enter your house address" value={props.address}/>
        <div className="approved">
          <img src={tickIcon} className="Group-3"/>
          <div className="Congrats-Your-prope">Congrats! Your property is solar
            friendly.
          </div>
        </div>

        <div className="Rectangle-12 results-rec">

          <div className="left-right">
            <div className="Usable-Roof-Area">Usable Roof Area</div>
            <div className="group-6">
              <img src={solarPanelIcon} className="solar-panel-2"/>
              <div className="group-5">
                <div className="sqm text-style-1">{props.roofArea}</div>
                <div className="sqm text-style"> sqm</div>
                <div className="small-info">= {props.panels} solar panels</div>
                <div className="small-info">= {props.capacity} kWp</div>
              </div>
            </div>
            <div className="edit-roof-area">edit roof area</div>
          </div>

          <div className="Line-2"/>
          <div className="left-right right">
            <div className="Usable-Roof-Area electricity-from-usable">
              Electricity from Usable Sunlight
            </div>
            <img src={sunIcon} className="sun-results"/>
            <div className="sqm-right">
              <div className="sqm text-style-1">{props.electricity}</div>
              <div className="sqm text-style"> kWh/yr</div>
            </div>
          </div>
        </div>

        <div className="great">
          <div className="Great-To-find-out">Great!</div>
          <div className="Great-To-find-out">To find out how much you can save
            please go next the step.
          </div>
        </div>

        <Link to='/financial'>
          <button className="results-button">Start Finance Calculator</button>
        </Link>
      </div>
    </div>
  )
};
