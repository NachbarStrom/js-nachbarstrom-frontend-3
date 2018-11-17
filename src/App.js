import React, { Component } from 'react';
import './styles/App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home } from "./components/Home";
import { Loading } from './components/Loading';
import { Results } from './components/Results';
import { Financial } from './components/FinancialPlan/FinancialPlan';
import { Summary } from './components/Summary';
import { Done } from './components/Done';
import { AddressSearchBox, Map } from "./components/Google";
import { API } from "./API";
import { ROUTES } from "./Routes";

export class App extends Component {
  state = {
    userWindowHeight: '100px',
    userWindowWidth: '100px',
    roofPolygonGeoJson: null,
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

  DEFAULT_LOCATION = {
    lat: 48.18386,
    lng: 11.6111
  };

  getAddressLatLng() {
    const addressObject = this.state.addressObjectOfSearchBox;
    if (!addressObject) {
      return this.DEFAULT_LOCATION;
    }
    const { lat, lng } = addressObject.geometry.location;
    return { lat: lat(), lng: lng() }
  };

  mapClickedHandler = async (mapClickEvent) => {
    const { lat, lng } = mapClickEvent.latLng;
    const roofPolygonGeoJson = await API.getRoofPolygonGeoJson(lat(), lng());
    this.setState({ roofPolygonGeoJson });
  };

  componentWillMount() {
    this.setState({
      userWindowHeight: window.innerHeight + 'px',
      userWindowWidth: window.innerWidth + 'px',
    });
  };

  batteryButtonHandler = () => {
    this.setState({ calculationWithBattery: true });
  };

  noBatteryButtonHandler = () => {
    this.setState({ calculationWithBattery: false });
  };

  getMap = () =>(
    <div className="map-render-div">
      <Map
        centerLatLng={this.getAddressLatLng()}
        onClick={this.mapClickedHandler}
        geoJson={this.state.roofPolygonGeoJson}
      />
    </div>
  );

  addressChangedHandler = addressesList => {
    if (addressesList.length > 0) {
      this.setState({
        addressObjectOfSearchBox: addressesList[0],
        currentAddress: addressesList[0].formatted_address,
      });
    }
  };

  getAddressSearchBox = () => (
    <AddressSearchBox
      currentAddress={this.state.currentAddress}
      addressChangedHandler={this.addressChangedHandler}
    />
  );

  getResultsPage = () => (
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

  Evaluation = () => (
    <div>
      {this.getMap()}
      <Route path={ROUTES.LOADING} render={() => <Loading addressSearchBox={this.getAddressSearchBox()}/>}/>
      <Route path={ROUTES.RESULTS} render={this.getResultsPage}/>
      <Route path={ROUTES.FINANCIAL} render={() => <Financial calculationWithBattery={this.state.calculationWithBattery} data={this.state.data} batteryActivationHandler={this.batteryButtonHandler} noBatteryActivationHandler={this.noBatteryButtonHandler} consumption={this.state.consumption} consumptionChange={consumption => this.setState({ consumption })} capacity={this.state.capacity} panels={this.state.panels} capacityChange={capacity => this.setState({ capacity })} panelsChange={capacity => this.setState({ capacity })} />}/>
      <Route path={ROUTES.SUMMARY} render={() => (<Summary address={this.state.address} panels={this.state.panels} batteryPower={this.state.batteryPower} energyIndependencePercentage={this.state.energyIndependencePercentage}/>)} />
      <Route path={ROUTES.DONE} component={Done} />
    </div>
  );

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path={ROUTES.INDEX} render={() =>
            <Home addressSearchBox={this.getAddressSearchBox()}/>}/>
          <Route path={ROUTES.EVALUATION} component={this.Evaluation}/>
        </div>
      </BrowserRouter>
    );
  }
}
