import React, { Component } from "react";
import '../styles/FinancialPlan.css';
import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';
import '../styles/SliderStyle.css';
import SliderCapacity from './SliderCapacity';
import { FaQuestionCircle } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { TiBatteryCharge } from 'react-icons/ti';
import '../styles/Graphs.css';
import {Line} from 'react-chartjs-2';

const financial = ( props ) => {  

  const data = {
    labels: ['1', '5', '10', '15', '20', '20', '25'],
    datasets: [
      {fill: '-2'},
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
          labelString: 'Cost (incl. electricity bill)'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Year'
        },
        gridLines : {
          display : false
      }
      }],
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 10
      }
    },
    tooltips: {
      enabled: false
    },
    plugins: {
      filler: {
          propagate: true
      }
  }
  };
    
    let secondStep = require('../images/step2.png')
    let numberTwo = require('../images/number2.png')
    let checkedApproved = require('../images/group-3.png')
    return (
        <div className="financial-rectangle">
        <img src={secondStep} className="Group-9" />
        <img src={numberTwo} className="number-two" />
        <div className="FINANCIAL-PLAN">FINANCIAL PLAN</div>
        
        <div className="Line-3" />

        <div className="personalize-your-sol">Personalize your solar analysis:</div>
        <img src={checkedApproved} className="oval-2" />
        <div className="your-financial-est">Your financial plan estimate: </div>
        

        <div className="rectangle-11">
        <div className="questions yearly-consumption">What is your yearly electricity consumption? </div>
        <div className="explanation-1" data-tip="Some sort of explanation here"><FaQuestionCircle size={16} color="#757575" /></div>
        <ReactTooltip place="top" type="dark" effect="float" />

        <div className="sliders">
        <InputRange
        maxValue={8000}
        minValue={1000}
        value={props.consumption}
        onChange={props.consumptionChange} />
        </div>

        <div className="questions panel-systems">How much solar panel system you want to install?</div>
        <div className="explanation-2" data-tip="Some sort of explanation here"><FaQuestionCircle size={16} color="#757575" /></div>
        <div className="sliders-2">
        <SliderCapacity capacity={props.capacity} panels={props.panels} capacityChange={props.capacityChange} />
        </div>

        <div className="questions battery">Do you want a storage battery?</div>
        <div className="explanation-3" data-tip="Some sort of explanation here"><FaQuestionCircle size={16} color="#757575" /></div>

        <div className="with-battery"><div className={props.btnClass} onClick={props.batteryActivationHandler}><div><TiBatteryCharge size={60} /></div>With battery</div></div>
        <div className="no-battery"><div className={props.noBtnClass} onClick={props.noBatteryActivationHandler}><div><TiBatteryCharge size={60} /></div>No battery</div></div>
        </div>

        
        <div className="rectangle-12">
        
        <button className="graph-pink-box">
        <div className="pink-title">€9,900</div>
        <div className="pink-subtitle">Solar System Cost</div>
        </button>
        <div className="pink-line"></div>
    
        
        

        <button className="graph-green-box"><div className="green-title">€21,000</div></button>
        <div className="green-line"></div>
        
        <div className="green-subtitle">20 Years Savings</div>

        <button className="graph-orange-box"><div className="orange-title">14 years</div></button>
        <div className="orange-line"></div>
        
        <div className="orange-subtitle">Payback Time</div>

        <button className="graph-blue-box"><div className="blue-title">- %</div></button>
        <div className="blue-line"></div>
        
        <div className="blue-subtitle">Energy Independent</div>

        <div className="chart-separator"></div>
        <div className="your-financial-cost">Your Financial Cost Comparison</div>
        <div className="chart-div">

        <Line data={data} 
        options={options}
        width={485} 
        height={300}
        />

        </div>


        </div>


        <Link to='/results'><button className="back-button">Back</button></Link>
        <Link to='/summary'><button className="next-button">Next</button></Link>
      </div>
    )
  };
 
export default financial;