import { FaQuestionCircle } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import InputRange from "react-input-range";
import { DesiredInstallationCapacitySlider } from "./DesiredInstallationCapacitySlider";
import { TiBatteryCharge } from "react-icons/ti";
import React from "react";

import '../../styles/FinancialPlan.css';

export const FinancialPlanLeftPanel = props => {
  const batteryButtonClass = props.isCalculationWithBattery ? "battery-selector-active" : "battery-selector";
  const noBatteryButtonClass = !props.isCalculationWithBattery ? "battery-selector-active" : "battery-selector";

  return (
  <div className="rectangle-11">
    <div className="questions yearly-consumption">
        Wie hoch ist dein jährlicher Stromverbrauch?
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
        value={props.yearlyEnergyConsumption}
        onChange={props.handleChangeInSlider_YearlyEnergyConsumption}
      />
    </div>

    <DesiredInstallationCapacitySlider
      desiredInstallationCapacity={props.desiredInstallationCapacity}
      onChange={props.handleChangeInSlider_DesiredInstallationCapacity}
    />

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
           onClick={props.handleButton_batteryDesired}>
        <div><TiBatteryCharge size={60}/></div>
          Mit Speicher
      </div>
    </div>

    <div className="no-battery">
      <div className={noBatteryButtonClass}
           onClick={props.handleButton_noBatteryDesired}>
        <div><TiBatteryCharge size={60}/></div>
          Ohne Speicher
      </div>
    </div>
  </div>
  )
};