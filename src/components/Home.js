import React, { Component } from "react";
import '../styles/App.css';
import { Link } from 'react-router-dom';




//class Home extends Component {
//  render() {
    const home = ( props ) => {  
   

        let logoImage = require('../logo.png')
return (
        <div>

            <div className="background-map-image">
            </div>

            <header>
          <img src={logoImage} className="logo" alt="Nachbarstrom" />
        </header>

        <div className="starting-wondering">
        <p>Wondering how many solar panels fit on your roof?</p>
        <p className="title-p">NachbarStrom can tell you!</p>
        </div>
        <div className="rectangle welcome">
        <p className="rectangle-find-out">Find out how much you can save…</p> 
        <p><input type="text" className="rectangle-input" name="name" placeholder="Enter your house address" onChange={props.addressInput} /></p>
        <div>
          <p className="rectangle-agreement"><input type="checkbox" className="rectangle-checkbox" />Lorem ipsum dolor sit amet</p>
          </div>
          <div className="div-inline">
          <Link to='/loading'><button className="rectangle-button">Go Solar</button></Link>
    
          </div>
      </div>
      </div>
    )
};
 
export default home;