import React from "react";
import '../../styles/FinancialPlan.css';
import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';
import '../../styles/SliderStyle.css';
import { SliderCapacity } from './SliderCapacity';
import { FaQuestionCircle } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { TiBatteryCharge } from 'react-icons/ti';
import '../../styles/Graphs.css';
import { Line } from 'react-chartjs-2';
import '../../styles/App.css';

import secondStepIcon from "../../images/step2.png";
import numberTwoIcon from "../../images/number2.png";
import checkedApproved from "../../images/tick.png";
import {
  FinancialPlanInput,
  FinancialPlanInputProps,
} from "./FinancialPlanInput";

const financial = props => {
  const data = {
    labels: ['1', '5', '10', '15', '20', '20', '25'],
    datasets: [
      {
        label: 'With Solar',
        fill: false,
        lineTension: 0.4,
        backgroundColor: '#4B53FF',
        borderColor: '#4B53FF',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#4B53FF',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [11, 12, 13, 15, 18, 22, 28]
      },
      {
        label: 'Without Solar',
        fill: false,
        lineTension: 0.4,
        backgroundColor: '#AEAEAE',
        borderColor: '#AEAEAE',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#AEAEAE',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 3, 9, 15, 30, 40, 50]
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Cost (incl. electricity bill)',
        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Year',
        },
        gridLines : {
          display : false,
        },
      }],
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 10,
      },
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      filler: {
        propagate: true,
      },
    },
  };
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
  />);
  return (
    <div>
      <div className="background-map-image blur-bg"/>
      <div className="financial-rectangle">
        {header}
        <div className="Line-3"/>

        <div className="personalize-your-sol">Personalize your solar analysis:</div>
        <img src={checkedApproved} className="oval-2"/>
        <div className="your-financial-est">Your financial plan estimate:</div>

        {financialPlanInput}


        <div className="rectangle-12">
          <button className="graph-pink-box">
            <div className="pink-title">€9,900</div>
            <div className="pink-subtitle">Solar System Cost</div>
          </button>
          <div className="pink-line" />
          <button className="graph-green-box">
            <div className="green-title">€21,000</div>
          </button>
          <div className="green-line"></div>

          <div className="green-subtitle">20 Years Savings</div>

          <button className="graph-orange-box">
            <div className="orange-title">14 years</div>
          </button>
          <div className="orange-line"></div>

          <div className="orange-subtitle">Payback Time</div>

          <button className="graph-blue-box">
            <div className="blue-title">- %</div>
          </button>
          <div className="blue-line"></div>

          <div className="blue-subtitle">Energy Independent</div>

          <div className="chart-separator"></div>
          <div className="your-financial-cost">Your Financial Cost Comparison
          </div>
          <div className="chart-div">

            <Line data={data}
                  options={options}
                  width={485}
                  height={300}
            />

          </div>


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
 
export default financial;