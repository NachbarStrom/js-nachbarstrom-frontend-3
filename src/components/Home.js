import React from "react";
import '../styles/App.css';
import { Link } from 'react-router-dom';
import { ROUTES } from "../Routes";

import nachbarStromLogo from "../images/nachbarstrom-logo.png";

export const Home = props => {

  const leftText = (
    <div className="starting-wondering">
      <p>We love to share progress! </p>
      <p className="title-p"> This is a Alpha to demonstrate how thing will look like. Things might be buggy and not work for your set up, and values displayed may not reflect reality.</p>
      <p className="title-p"> We value your feedback! Drop us a mail with your thoughts, complains, ideas, and critics. </p>
    </div>
  );

  const goSolarButton = (
    <div className="div-inline">
      <Link to={ROUTES.LOADING}>
        <button className="rectangle-button">Go Solar</button>
      </Link>
    </div>
  );

  const agreement = (
    <div>
      <p className="rectangle-agreement">
        ...mit KI in nur 3 Sekunden
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
        {props.addressSearchBox}
        {agreement}
        {goSolarButton}
      </div>

    </div>
  )
};
