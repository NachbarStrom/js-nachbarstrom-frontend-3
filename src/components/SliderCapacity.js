import React, { Component } from "react";
import '../styles/FinancialPlan.css';
import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';

const sliderCapacity = ( props ) => {  
    return (
        <div>
        <InputRange
        maxValue={7}
        minValue={0}
        value={props.capacity}
        onChange={props.capacityChange} />
        </div>
    )
    };
   
  export default sliderCapacity;