import React from "react";
import '../../styles/FinancialPlan.css';
import InputRange from 'react-input-range';

export const SliderCapacity = props => (
  <div>
    <InputRange
      maxValue={7}
      minValue={0}
      value={props.capacity}
      onChange={props.capacityChange}
    />
  </div>
);