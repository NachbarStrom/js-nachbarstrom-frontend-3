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
        Wie hoch ist deine jährlicher Stromverbrauch?
    </div>
    <div className="explanation-1"
         data-tip="Die optimale Größe deiner Photovoltaik Anlage hängt direkt von  <br /> deinem Stromverbrauch ab. Du findest deinen Jahresverbrauch <br /> auf der letzten Rechnung deines Stromanbieters..">
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
        Bestimme die Leistung deiner Photovoltaik Anlage?
    </div>

    <div className="explanation-2"
         data-tip="Wir haben die optimale Größe deiner Solaranlage day and save unused <br />
         electricity to consume it at night bereits errechnet. Trotzdem kannst  <br />
         du hier verschiedene Konfigurationen mit dem Finaz Planer testen.">
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
        Möchtest du zusätzliche einen Stromspeicher installieren?
    </div>
    <div className="explanation-3"
         data-tip="Ein Stromspeicher kann die tagsüber produzierte Energie <br />
         speichern und nachts wieder abgeben. bereits errechnet. <br />
         Dadurch wirst du noch unabhängiger. ">

      <FaQuestionCircle size={16} color="#757575"/></div>

    <div className="with-battery">
      <div className={batteryButtonClass}
           onClick={props.batteryActivationHandler}>
        <div><TiBatteryCharge size={60}/></div>
          Mit Speicher
      </div>
    </div>
    <div className="no-battery">
      <div className={noBatteryButtonClass}
           onClick={props.noBatteryActivationHandler}>
        <div><TiBatteryCharge size={60}/></div>
          Ohne Speicher
      </div>
    </div>
  </div>
  )
};