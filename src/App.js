import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Loading from './components/Loading';
import { Results } from './components/Results';
import { Financial } from './components/FinancialPlan/FinancialPlan';
import Summary from './components/Summary';
import Done from './components/Thanks';
import { Map } from "./components/Map";

export class App extends Component {
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
    calculationWithBattery: true,
  };

  componentWillMount() {
    this.setState({
      userWindowHeight: window.innerHeight + 'px',
      userWindowWidth: window.innerWidth + 'px',
    });
  };

  batteryButtonHandler = (event) => {
    this.setState({ calculationWithBattery: true });
  };

  noBatteryButtonHandler = (event) => {
    this.setState({ calculationWithBattery: false });
  };

  addressChangerHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  formSubmitHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  withMapBackground = component => (
    <div>
      <div className="map-render-div">
        <Map
          onMarkerComplete={e => {}}
          geoJson={null}
        />
      </div>
      {component}
    </div>
  );

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => ( <Home addressInput={this.addressChangerHandler} /> )}/>
          <Route path="/loading" render={(props) => this.withMapBackground(<Loading address={this.state.address} />)} />
          <Route path="/results" render={(props) => this.withMapBackground(<Results userWindowHeight={this.state.userWindowHeight} userWindowWidth={this.state.userWindowWidth} address={this.state.address} roofArea={this.state.roofArea} panels={this.state.panels} capacity={this.state.capacity} electricity={this.state.electricity} />)}/>
          <Route path="/financial" render={(props) => this.withMapBackground(<Financial calculationWithBattery={this.state.calculationWithBattery} data={this.state.data} batteryActivationHandler={this.batteryButtonHandler} noBatteryActivationHandler={this.noBatteryButtonHandler} consumption={this.state.consumption} consumptionChange={consumption => this.setState({ consumption })} capacity={this.state.capacity} panels={this.state.panels} capacityChange={capacity => this.setState({ capacity })} panelsChange={capacity => this.setState({ capacity })} />)}/>
          <Route path="/summary" render={(props) => this.withMapBackground(<Summary address={this.state.address} panels={this.state.panels} batteryPower={this.state.batteryPower} />)} />
          <Route path="/done" render={(props) => <Done />} />
        </Switch>
      </div>
    );
  }
}

export default App;