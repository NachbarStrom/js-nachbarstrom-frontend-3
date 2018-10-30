import React from "react";
import '../../styles/FinancialPlan.css';
import { Link } from 'react-router-dom';
import '../../styles/SliderStyle.css';
import '../../styles/Graphs.css';
import '../../styles/App.css';

import secondStepIcon from "../../images/step2.png";
import numberTwoIcon from "../../images/number2.png";
import checkedApproved from "../../images/tick.png";
import { FinancialPlanInput } from "./FinancialPlanInput";
import { Diagram } from "./Diagram";
import { Map } from "../Map";

export const Financial = props => {
  const map = (
    <div className="map-render-div">
      <Map
        onMarkerComplete={e => {}}
        geoJson={null}
     />
   </div>
  );

  const header = (
    <div>
      <img src={secondStepIcon} className="Group-9" alt="Second step icon"/>
      <img src={numberTwoIcon} className="number-two" alt="Number two icon"/>
      <div className="FINANCIAL-PLAN">FINANCIAL PLAN</div>
    </div>);

  const financialPlanInput = (
    <FinancialPlanInput
      consumption={props.consumption}
      consumptionChange={props.consumptionChange}
      capacity={props.capacity}
      panels={props.panels}
      capacityChange={props.capacityChange}
      btnClass={props.btnClass}
      noBtnClass={props.noBtnClass}
      noBatteryActivationHandler={props.noBatteryActivationHandler}
    />
  );

  const diagram = <Diagram />;

  const coloredButtons = (
    <div>
      <button className="graph-pink-box">
        <div className="pink-title">€9,900</div>
        <div className="pink-subtitle">Solar System Cost</div>
      </button>
      <div className="pink-line"/>

      <button className="graph-green-box">
        <div className="green-title">€21,000</div>
      </button>
      <div className="green-line"/>
      <div className="green-subtitle">20 Years Savings</div>

      <button className="graph-orange-box">
        <div className="orange-title">14 years</div>
      </button>
      <div className="orange-line"/>
      <div className="orange-subtitle">Payback Time</div>

      <button className="graph-blue-box">
        <div className="blue-title">- %</div>
      </button>
    </div>
  );

  return (
    <div>
      {map}
      <div className="financial-rectangle">
        {header}
        <div className="Line-3"/>

        <div className="personalize-your-sol">Personalize your solar analysis:
        </div>
        <img src={checkedApproved} className="oval-2"/>
        <div className="your-financial-est">Your financial plan estimate:</div>

        {financialPlanInput}

        <div className="rectangle-12">
          {coloredButtons}
          <div className="blue-line"/>
          <div className="blue-subtitle">Energy Independent</div>
          <div className="chart-separator"/>
          {diagram}
        </div>

        <Link to='/results'>
          <button className="back-button">Back</button>
        </Link>

        <Link to='/summary'>
          <button className="next-button">Next</button>
        </Link>

      </div>
    </div>
  )
};