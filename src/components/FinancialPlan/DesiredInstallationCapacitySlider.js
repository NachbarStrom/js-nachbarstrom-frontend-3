import React from "react";
import '../../styles/FinancialPlan.css';
import InputRange from 'react-input-range';
import { FaQuestionCircle } from "react-icons/fa";

export const DesiredInstallationCapacitySlider = props => (
  <div>
    <div className="questions panel-systems">
      Bestimme die Leistung deiner Photovoltaik Anlage.
    </div>

    <div className="explanation-2"
         data-tip="Wir haben die optimale Größe deiner Solaranlage day and save unused <br />
         electricity to consume it at night bereits errechnet. Trotzdem kannst  <br />
         du hier verschiedene Konfigurationen mit dem Finaz Planer testen.">
      <FaQuestionCircle size={16} color="#757575"/>
    </div>

    <div className="sliders-2">
      <InputRange
        maxValue={7}
        minValue={0}
        value={props.desiredInstallationCapacity}
        onChange={props.onChange}
      />
    </div>
  </div>
);