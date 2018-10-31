import React, { Component } from "react";
import '../styles/App.css';
import { Link } from 'react-router-dom';




//class Home extends Component {
//  render() {
    const home = ( props ) => {  
   

        let logoImage = require('../images/nachbarstrom-logo.png')
return (
        <div>

            <div className="background-map-image">
            </div>

            <header>
          <img src={logoImage} className="logo" alt="Nachbarstrom" />
        </header>

        <div className="starting-wondering">
        <p>Lohnt sich Photovoltaik für mich?</p>
            <p>Ist mein Dach überhaupt geeignet?</p>
        <p className="title-p">Wir sagen es dir. Mit nur einem Klick!</p>
        </div>
        <div className="rectangle welcome">
        <p className="rectangle-find-out">Ermittle dein Energiepotenzial...</p>
        <p><input type="text" className="rectangle-input" name="name" placeholder="Gib hier deine Adresse ein" onChange={props.addressInput} /></p>
        <div>
          <p className="rectangle-agreement"><input type="checkbox" className="rectangle-checkbox" />..mit KI in nur 3 Sekunden</p>
          </div>
          <div className="div-inline">
          <Link to='/loading'><button className="rectangle-button">Go Solar</button></Link>
    
          </div>
      </div>
      </div>
    )
};
 
export default home;