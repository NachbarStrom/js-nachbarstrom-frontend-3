import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom'
import { Home } from "./components/Home";
import { Loading } from './components/Loading';
import { Results } from './components/Results';
import { Financial } from './components/FinancialPlan/FinancialPlan';
import { Summary } from './components/Summary';
import { Done } from './components/Done';
import { Map } from "./components/GoogleMap/Map";
import { AddressSearchBox } from "./components/AddressSearchBox";

export class App extends Component {
  state = {
    userWindowHeight: '100px',
    userWindowWidth: '100px',
    geoJson: null,
    addressObjectOfSearchBox: null,
    currentAddress: "",
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
    energyIndependencePercentage: 90,
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

  withMapBackground = component => (
    <div>
      <div className="map-render-div">
        <Map onMarkerComplete={e => {}} geoJson={null} />
      </div>
      {component}
    </div>
  );

  addressChangedHandler = addressesList => {
    if (addressesList.length > 0) {
      this.setState({
        addressObjectOfSearchBox: addressesList[0],
        currentAddress: addressesList[0].formatted_address,
      });
    }
    console.log("New address:", this.state.currentAddress);
  };

  getAddressSearchBox = () => (
    <AddressSearchBox
      currentAddress={this.state.currentAddress}
      addressChangedHandler={this.addressChangedHandler}
    />
  );

  getResultsPage = () => this.withMapBackground(
      <Results
        addressSearchBox={this.getAddressSearchBox()}
        address={this.state.address}
        capacity={this.state.capacity}
        electricity={this.state.electricity}
        userWindowHeight={this.state.userWindowHeight}
        userWindowWidth={this.state.userWindowWidth}
        roofArea={this.state.roofArea}
        panels={this.state.panels}
      />
  );

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home addressSearchBox={this.getAddressSearchBox()}/>}/>
          <Route path="/loading" render={() => this.withMapBackground(<Loading addressSearchBox={this.getAddressSearchBox()} />)} />
          <Route path="/results" render={this.getResultsPage}/>
          <Route path="/financial" render={(props) => this.withMapBackground(<Financial calculationWithBattery={this.state.calculationWithBattery} data={this.state.data} batteryActivationHandler={this.batteryButtonHandler} noBatteryActivationHandler={this.noBatteryButtonHandler} consumption={this.state.consumption} consumptionChange={consumption => this.setState({ consumption })} capacity={this.state.capacity} panels={this.state.panels} capacityChange={capacity => this.setState({ capacity })} panelsChange={capacity => this.setState({ capacity })} />)}/>
          <Route path="/summary" render={(props) => this.withMapBackground(<Summary address={this.state.address} panels={this.state.panels} batteryPower={this.state.batteryPower} energyIndependencePercentage={this.state.energyIndependencePercentage}/>)} />
          <Route path="/done" render={(props) => this.withMapBackground(<Done />)} />
        </Switch>
      </div>
    );
  }
}
