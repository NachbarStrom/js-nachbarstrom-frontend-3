import React from "react";
import '../styles/App.css';
import '../styles/Loading.css';
import { Link } from 'react-router-dom'

import firstStep from "../images/circle-1-third.png";
import loadingSun from "../images/sun-gray.png";
import solarPanel from "../images/house-with-panel.png";
import logoImage from "../images/nachbarstrom-logo.png";

export const Loading = props => {
  return (
    <div>
      <header>
        <img src={logoImage} className="logo" alt="Nachbarstrom" />
      </header>
      <div className="rectangle loading">
        <div className="header">
          <img src={firstStep} className="Group-9" />
          <div className="AI-SOLAR-CALCULATION">AI SOLAR CALCULATION</div>
        </div>
        <div className="Line" />
        <div className="Your-address">Your address</div>
        <p>
          <input type="text" className="rectangle-input" value={props.address} />
        </p>
        <div className="Rectangle-11 loading-rec">
          <div className="Analyzing-your-roof">Analyzing your roof...</div>
          <img src={loadingSun} className="sun one" />
          <img src={loadingSun} className="sun two" />
          <img src={loadingSun} className="sun three" />
          <img src={loadingSun} className="sun four" />
          <img src={loadingSun} className="sun five" />
          <img src={solarPanel} className="solar-panel" />
        </div>
        <div className="NachbarStrom-is-doin">NachbarStrom is doing its AI magic…</div>
        <Link to='/results'><button className="rectangle-button">Results</button></Link>
      </div>
    </div>
  )
};
