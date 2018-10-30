import { FaQuestionCircle } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import InputRange from "react-input-range";
import { SliderCapacity } from "./SliderCapacity";
import { TiBatteryCharge } from "react-icons/ti";
import React from "react";

import '../../styles/FinancialPlan.css';

export const FinancialPlanInput = props => {
  const batteryButtonClass = props.calculationWithBattery ? "battery-selector-active" : "battery-selector";
  const noBatteryButtonClass = !props.calculationWithBattery ? "battery-selector-active" : "battery-selector";
  return (
  <div className="rectangle-11">
    <div className="questions yearly-consumption">
      What is your yearly electricity consumption?
    </div>
    <div className="explanation-1"
         data-tip="To recommend the best solar system for your home <br /> we need to understand how much energy you use.">
      <FaQuestionCircle size={16} color="#757575" />
    </div>
    <ReactTooltip place="top" type="dark" effect="float" multiline="true" />

    <div className="sliders">
      <InputRange
        maxValue={8000}
        minValue={1000}
        value={props.consumption}
        onChange={props.consumptionChange}
      />
    </div>

    <div className="questions panel-systems">
      How much solar power do you want to install?
    </div>

    <div className="explanation-2"
         data-tip="You can adjust your solar system size <br /> to estimate the cost and  the savings.">
      <FaQuestionCircle size={16} color="#757575"/>
    </div>
    <div className="sliders-2">
      <SliderCapacity
        capacity={props.capacity}
        panels={props.panels}
        capacityChange={props.capacityChange}
      />
    </div>

    <div className="questions battery">
      Do you want a storage battery?
    </div>
    <div className="explanation-3"
         data-tip="With a battery, you can store electricity produced during the <br />  day and save unused electricity to consume it at night <br /> when your solar system is not generating energy. This will <br /> determine how much the energy independence you will be. ">
      <FaQuestionCircle size={16} color="#757575"/></div>

    <div className="with-battery">
      <div className={batteryButtonClass}
           onClick={props.batteryActivationHandler}>
        <div><TiBatteryCharge size={60}/></div>
        With battery
      </div>
    </div>
    <div className="no-battery">
      <div className={noBatteryButtonClass}
           onClick={props.noBatteryActivationHandler}>
        <div><TiBatteryCharge size={60}/></div>
        No battery
      </div>
    </div>
  </div>
  )
};