import React, { Component } from "react";
import '../styles/FinancialPlan.css';
import { Link } from 'react-router-dom';
import '../styles/Thanks.css';
import { MdChat } from 'react-icons/md';
import '../styles/App.css';

const done = ( props ) => {  
    let calculate = require('../images/calculate.png')
    let advice = require('../images/advice.png')
    let onSite = require('../images/on-site.png')
    let installation = require('../images/installation.png')
    let phoneImage = require('../images/phone.png')
    let emailImage = require('../images/email.png')
    return (
      <div>
        <div className="background-map-image blur-bg">
            </div>
        <div className="done-rectangle">
       <div className="awesome">Awesome!</div>
       <div className="awesome">You are on your way to become energy independent.</div>
       <div className="searching">NachbarStrom's AI is searching for the best offer for your house. We will contact you as soon as possible.</div>
      
      <div className="Rectangle-20">
      
      <div className="continue">And so it goes from now:</div>
      
      <div className="up-to">up to 1 day</div>
      <div className="two-weeks">2 weeks</div>
      <div className="by-arrangement">by arrangement</div>
      <img src={calculate} className="calculate" />
      <div className="Line-7"></div>
      <img src={advice} className="advice" />
      <img src={onSite} className="on-site" />
      <img src={installation} className="installation" />
      <div className="Line-6"></div>

      <div className="next-steps-title-blue">Calculate</div>
      <div className="next-steps-blue">recommended price & individual financial plan</div>
      <div className="next-steps-title-advice">Advice</div>
      <div className="next-steps-advice">by telephone for detailed system layout </div>
      <div className="next-steps-title-on-site">On-site</div>
      <div className="next-steps-on-site">expertise appointment</div>
      <div className="next-steps-title-installation">Installation</div>
      <div className="next-steps-installation">of the new solar system</div>

      </div>

      <div className="call-button"><img src={phoneImage} className="phone-image" />Call us</div>
      <div className="email-button"><img src={emailImage} className="email-image" />Email us</div>
      <div className="chat-button"><MdChat size={20} /> Live Chat</div>
      
      <div className="more-questions">
      <div className="more-questions-grey">Still have some questions?</div>
      <div className="more-questions-blue">We are here to help you.</div>
      </div>
      
      </div>
      </div>
    
    )
  };
 
export default done;