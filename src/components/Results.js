import React from "react";
import '../styles/Results.css';
import '../styles/App.css';
import '../styles/Loading.css';
import { Link } from 'react-router-dom';

import tickIcon from "../images/tick.png";
import stepOneIcon from "../images/circle-1-third.png";
import sunIcon from "../images/sun.png";
import solarPanelIcon from "../images/solar-panel.png";
import nachbarstromLogo from "../images/nachbarstrom-logo.png";

import { ROUTES } from "../Routes";
import { FinancialCalculator } from "./FinancialCalculator";

export const Results = props => {
  const header = (
    <div className="header">
      <img src={stepOneIcon} className="Group-9" alt="Step 1" />
      <div className="AI-SOLAR-CALCULATION">AUTOMATISCHE BERECHNUNG</div>
    </div>);

  const numOfPanels = FinancialCalculator.getNumPanels(props.roofArea);
  const capacity = FinancialCalculator.getCapacity(props.roofArea);

  return (
    <div>
      <img src={nachbarstromLogo} className="logo" alt="Nachbarstrom logo"/>
      <div className="rectangle loading results">
        {header}
        <div className="Line"/>
        <div className="Your-address">Deine Adresse</div>
        {props.addressSearchBox}
        <div className="approved">
          <img src={tickIcon} className="Group-3" alt="tick" />
          <div className="Congrats-Your-prope">Glückwunsch! Dein Dach ist solar-freundlich.
          </div>
        </div>

        <div className="Rectangle-12 results-rec">

          <div className="left-right">
            <div className="Usable-Roof-Area">Nutzbare Dachfläche</div>
            <div className="group-6">
              <img src={solarPanelIcon} className="solar-panel-2" alt="Solar panel" />
              <div className="group-5">
                <div className="sqm text-style-1">{props.roofArea}</div>
                <div className="sqm text-style"> sqm</div>
                <div className="small-info">= {numOfPanels} solar panels</div>
                <div className="small-info">= {capacity} kWp</div>
              </div>
            </div>
            <div className="edit-roof-area">Nutzbare Dachfläche</div>
          </div>

          <div className="Line-2"/>
          <div className="left-right right">
            <div className="Usable-Roof-Area electricity-from-usable">
                Energie aus nutzbarem Sonnenlicht
            </div>
            <img src={sunIcon} className="sun-results" alt="Sun" />
            <div className="sqm-right">
              <div className="sqm text-style-1">{props.electricity}</div>
              <div className="sqm text-style"> kWh/p.a.</div>
            </div>
          </div>
        </div>

        <div className="great">
          <div className="Great-To-find-out">Großartig!</div>
          <div className="Great-To-find-out">Um herauszufinden wie viel Geld du sparst, klicke weiter.
          </div>
        </div>

        <Link to={ROUTES.FINANCIAL}>
          <button className="results-button">Start Finance Calculator</button>
        </Link>
      </div>
    </div>
  )
};
