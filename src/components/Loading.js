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
          <img src={firstStep} className="Group-9" alt="Step 1" />
          <div className="AI-SOLAR-CALCULATION">AUTOMATISCHE BERECHNUNG</div>
        </div>
        <div className="Line" />
        <div className="Your-address">Deine Adresse</div>
        {props.addressSearchBox}
        <div className="Rectangle-11 loading-rec">
          <div className="Analyzing-your-roof">Dein Dach wird analysiert...</div>
          <img src={loadingSun} className="sun one" alt="" />
          <img src={loadingSun} className="sun two" alt="" />
          <img src={loadingSun} className="sun three" alt="" />
          <img src={loadingSun} className="sun four" alt="" />
          <img src={loadingSun} className="sun five" alt="" />
          <img src={solarPanel} className="solar-panel" alt="" />
        </div>
        <Link to='/results'><button className="rectangle-button">Results</button></Link>
      </div>
    </div>
  )
};
