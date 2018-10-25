import React, { Component } from "react";
import '../styles/Results.css';
import '../styles/App.css';
import '../styles/Loading.css';
import { Link } from 'react-router-dom';
import { Map } from './Map';

const results = ( props ) => {  
    const handleOnMarkerComplete = (event) => {
    };

    

    let checkApproved = require('../images/group-3.png')
    let firstStep = require('../images/group-9.png')
    let solarPanel = require('../images/solar-panel-2.png')
    let sun = require('../images/sun.png')
    let logoImage = require('../logo.png')
    return (
        <div>
      

        <div className="map-render-div" style={{height: props.userWindowHeight, width: props.userWindowWidth}}>
          <Map
              onMarkerComplete={handleOnMarkerComplete}
              geoJson={null}
            />
          
    
            </div>

<img src={logoImage} className="logo" alt="Nachbarstrom" />
        <div className="rectangle loading results">
        
        <div className="header">
        <img src={firstStep} className="Group-9" />
        <div className="AI-SOLAR-CALCULATION">AI SOLAR CALCULATION</div>
        </div>

        <div className="Line"></div>

        <div className="Your-address">Your address</div>
        <input type="text" className="rectangle-input" name="name" placeholder="Enter your house address" value={props.address} />

        <div className="approved">
            <img src={checkApproved} className="Group-3" />
            <div className="Congrats-Your-prope">Congrats! Your property is solar friendly.</div>
        </div>


        <div className="Rectangle-12 results-rec">

        <div className="left-right">
        <div className="Usable-Roof-Area">Usable Roof Area</div>
        <div className="group-6">
        <img src={solarPanel} className="solar-panel-2" />
        <div className="group-5">
            <div className="sqm text-style-1">{props.roofArea}</div><div className="sqm text-style"> sqm</div>
            <div className="small-info">= {props.panels} solar panels</div>
            <div className="small-info">= {props.capacity} kWp</div>
        </div>
        </div>
        <div className="edit-roof-area">edit roof area</div>
        </div>

        <div className="Line-2" />

        <div className="left-right right">
        <div className="Usable-Roof-Area electricity-from-usable">Electricity from Usable Sunlight</div>
        <img src={sun} className="sun-results" />
        <div className="sqm-right"><div className="sqm text-style-1">{props.electricity}</div><div className="sqm text-style"> kWh/yr</div></div>
        </div>

        </div>
        
        <div className="great">
        <div className="Great-To-find-out">Great!</div>
        <div className="Great-To-find-out">To find out how much you can save please go next the step.</div>
        </div>

        <Link to='/financial'><button className="results-button">Start Finance Calculator</button></Link>
      </div>
      </div>
    )
  };
 
export default results;