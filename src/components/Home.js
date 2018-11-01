import React from "react";
import '../styles/App.css';
import { Link } from 'react-router-dom';

import nachbarStromLogo from "../images/nachbarstrom-logo.png";
import { AddressSearchBox } from "./SearchBox";

export const Home = props => {

  const leftText = (
    <div className="starting-wondering">
      <p>Lohnt sich Photovoltaik für mich?</p>
      <p>Ist mein Dach überhaupt geeignet?</p>
      <p className="title-p">Wir sagen es dir. Mit nur einem Klick!</p>
    </div>
  );

  const goSolarButton = (
    <div className="div-inline">
      <Link to='/loading'>
        <button className="rectangle-button">Go Solar</button>
      </Link>
    </div>
  );

  const addressSearchBox = (
      <AddressSearchBox
        addressChangedHandler={props.addressChangedHandler}
      />
  );

  const agreement = (
    <div>
      <p className="rectangle-agreement">
        <input type="checkbox" className="rectangle-checkbox"/>
        ..mit KI in nur 3 Sekunden
      </p>
    </div>
  );

  return (
    <div>
      <div className="background-map-image"/>

      <header>
        <img src={nachbarStromLogo} className="logo" alt="Nachbarstrom"/>
      </header>

      {leftText}

      <div className="rectangle welcome">
        <p className="rectangle-find-out">Ermittle dein Energiepotenzial...</p>
        {addressSearchBox}
        {agreement}
        {goSolarButton}
      </div>

    </div>
  )
};
