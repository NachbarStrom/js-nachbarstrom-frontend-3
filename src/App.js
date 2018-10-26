import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Loading from './components/Loading';
import { Results } from './components/Results';
import Financial from './components/FinancialPlan/FinancialPlan';
import Summary from './components/Summary';
import Done from './components/Thanks';
import { Map } from './components/Map';

class App extends Component {
  state = {
    userWindowHeight: '100px',
    userWindowWidth: '100px',
    geoJson: null,
    address: 'Lichtenbergstraße 6, Garching',
    roofArea: '30',
    panels: '30',
    capacity: '5',
    electricity: '2500',
    consumption: '3500',
    batteryPower: '6',
    battery: true,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    batteryButtonActive: false,
    noBatteryButtonActive: false
      }
  


  componentWillMount() {
    this.setState({
      userWindowHeight: window.innerHeight + 'px',
      userWindowWidth: window.innerWidth + 'px',
    });
    };

  batteryButtonHandler = (event) => {
    this.setState( {
      batteryButtonActive: !this.state.batteryButtonActive
    } )
    this.state.noBatteryButtonActive ? this.setState({noBatteryButtonActive: false}) : this.setState({noBatteryButtonActive: false});
  };

  noBatteryButtonHandler = (event) => {
    this.setState( {
      noBatteryButtonActive: !this.state.noBatteryButtonActive
    } )
    this.state.batteryButtonActive ? this.setState({batteryButtonActive: false}) : this.setState({batteryButtonActive: false});
  };

  addressChangerHandler = (event) => {
    this.setState( {
      address: event.target.value
    } )
  };

  formSubmitHandler = (event) => {
    this.setState( {
      address: event.target.value
    } )
  };

  render() {
    
    let btnClass = this.state.batteryButtonActive ? "battery-selector-active" : "battery-selector"
    let noBtnClass = this.state.noBatteryButtonActive ? "battery-selector-active" : "battery-selector"
    return (
      <div className="App">
          
            
        
        <Switch>
        <Route exact path="/" render={(props) => ( <Home addressInput={this.addressChangerHandler} /> )}/>
        <Route path="/loading" render={(props) => ( <Loading address={this.state.address} /> )} />
        <Route path="/results" render={(props) => ( <Results userWindowHeight={this.state.userWindowHeight} userWindowWidth={this.state.userWindowWidth} address={this.state.address} roofArea={this.state.roofArea} panels={this.state.panels} capacity={this.state.capacity} electricity={this.state.electricity} /> )}/>
        <Route path="/financial" render={(props) => ( <Financial data={this.state.data} btnClass={btnClass} noBtnClass={noBtnClass} batteryActivationHandler={this.batteryButtonHandler} noBatteryActivationHandler={this.noBatteryButtonHandler} consumption={this.state.consumption} consumptionChange={consumption => this.setState({ consumption })} capacity={this.state.capacity} panels={this.state.panels} capacityChange={capacity => this.setState({ capacity })} panelsChange={capacity => this.setState({ capacity })} />)}/>
        <Route path="/summary" render={(props) => ( <Summary address={this.state.address} panels={this.state.panels} batteryPower={this.state.batteryPower} /> )} />
        <Route path="/done" render={(props) => ( <Done /> )} />
        </Switch>
        </div>
        
      

    );
  }
}

export default App;


