import React, { Component } from 'react';
import './styles/App.css';
import { Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Loading } from './components/Loading';
import { Results } from './components/Results';
import { Financial } from './components/FinancialPlan/FinancialPlan';
import { Summary } from './components/Summary';
import { Done } from './components/Done';
import { AddressSearchBox, Map } from "./components/Google";
import { backendAPI } from "./BackendAPI";
import { ROUTES } from "./Routes";

export class App extends Component {
  static DEFAULT_ADDRESS = "";
  static DEFAULT_LATLNG = { lat: 48.137273, lng: 11.575367 };

  state = {
    userWindowHeight: '100px',
    userWindowWidth: '100px',
    roofPolygonGeoJson: null,

    mapCenterLatLng: App.DEFAULT_LATLNG,
    houseAddress: App.DEFAULT_ADDRESS,

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


  mapClickedHandler = async mapClickEvent => {
    const { lat, lng } = mapClickEvent.latLng;
    const { address, geoJson } = await backendAPI.getReverseGeocoding(lat(), lng());
    const roofPolygonGeoJson = geoJson.type === "Polygon" ? geoJson :
      await backendAPI.getRoofPolygonGeoJson(lat(), lng());
    this.setState({
      roofPolygonGeoJson,
      mapCenterLatLng: null,
      houseAddress: address,
    });
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

  addressChangedHandler = async addressesList => {
    if (addressesList.length <= 0) {
      return;
    }
    this.setState({
      houseAddress: addressesList[0].formatted_address,
      mapCenterLatLng: this.getAddressLatLngFrom(addressesList[0]),
    });
    this.props.history.push(ROUTES.LOADING);
    const { lat, lng } = addressesList[0].geometry.location;
    const roofPolygonGeoJson = await backendAPI.getRoofPolygonGeoJson(lat(), lng());
    this.setState({ roofPolygonGeoJson });
    this.props.history.push(ROUTES.RESULTS);
  };

  getAddressLatLngFrom = addressObject => {
    const { lat, lng } = addressObject.geometry.location;
    return { lat: lat(), lng: lng() }
  };

  getAddressSearchBox = () => (
    <AddressSearchBox
      currentAddress={this.state.houseAddress}
      addressChangedHandler={this.addressChangedHandler}
    />
  );

  ResultsPage = props => (
      <Results
        addressSearchBox={props.addressSearchBox}
        address={this.state.address}
        capacity={this.state.capacity}
        electricity={this.state.electricity}
        userWindowHeight={this.state.userWindowHeight}
        userWindowWidth={this.state.userWindowWidth}
        roofArea={this.state.roofArea}
        panels={this.state.panels}
      />
  );

  Evaluation = props => (
    <div>
      {this.getMap()}
      <Route path={ROUTES.LOADING} render={() => <Loading addressSearchBox={props.addressSearchBox}/>}/>
      <Route path={ROUTES.RESULTS} render={() => <this.ResultsPage addressSearchBox={props.addressSearchBox}/>}/>
      <Route path={ROUTES.FINANCIAL} render={() => <Financial calculationWithBattery={this.state.calculationWithBattery} data={this.state.data} batteryActivationHandler={this.batteryButtonHandler} noBatteryActivationHandler={this.noBatteryButtonHandler} consumption={this.state.consumption} consumptionChange={consumption => this.setState({ consumption })} capacity={this.state.capacity} panels={this.state.panels} capacityChange={capacity => this.setState({ capacity })} panelsChange={capacity => this.setState({ capacity })} />}/>
      <Route path={ROUTES.SUMMARY} render={() => (<Summary address={this.state.address} panels={this.state.panels} batteryPower={this.state.batteryPower} energyIndependencePercentage={this.state.energyIndependencePercentage}/>)} />
      <Route path={ROUTES.DONE} component={Done} />
    </div>
  );

  getMap = () =>(
    <div className="map-render-div">
      <Map
        centerLatLng={this.state.mapCenterLatLng}
        onClick={this.mapClickedHandler}
        geoJson={this.state.roofPolygonGeoJson}
      />
    </div>
  );

  render() {
    const addressSearchBox = this.getAddressSearchBox();
    return (
      <div className="App">
        <Route exact path={ROUTES.INDEX} render={() =><Home addressSearchBox={addressSearchBox}/>}/>
        <Route path={ROUTES.EVALUATION} render={() => <this.Evaluation addressSearchBox={addressSearchBox}/>}/>
      </div>
    );
  }
}
