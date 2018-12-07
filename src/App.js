import React, { Component } from 'react';
import './styles/App.css';
import { Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Loading } from './components/Loading';
import { Results } from './components/Results';
import { FinancialPlan } from './components/FinancialPlan/FinancialPlan';
import { Summary } from './components/Summary';
import { Done } from './components/Done';
import { AddressSearchBox, Map } from "./components/Google";
import { backendAPI } from "./BackendAPI";
import { ROUTES } from "./Routes";
import { FinancialCalculator } from "./components/FinancialCalculator";
import { FinancialPlanLeftPanel } from "./components/FinancialPlan/FinancialPlanLeftPanel";
import geojsonArea from "@mapbox/geojson-area";

const MARIENPLATZ = { lat: 48.137273, lng: 11.575367 };

export class App extends Component {
  static DEFAULT_ADDRESS = "";
  static DEFAULT_LATLNG = MARIENPLATZ;
  static DEFAULT_ROOF_AREA = 0;
  static DEFAULT_POTENTIAL_YEARLY_KWH_PRODUCTION = 0;
  static DEFAULT_ROOF_POLYGON_GEOJSON = null;

  static DEFAULT_STATE = {
    roofPolygonGeoJson: App.DEFAULT_ROOF_POLYGON_GEOJSON,
    roofArea: App.DEFAULT_ROOF_AREA,
    potentialYearlyKWhProduction: App.DEFAULT_POTENTIAL_YEARLY_KWH_PRODUCTION,
    houseAddress: App.DEFAULT_ADDRESS,
  };

  state = {
    ...App.DEFAULT_STATE,

    userWindowHeight: '100px',
    userWindowWidth: '100px',

    mapCenterLatLng: App.DEFAULT_LATLNG,

    yearlyEnergyConsumption: 2000,
    desiredInstallationCapacity: FinancialCalculator.getCapacity(App.DEFAULT_ROOF_AREA),

    electricity: '2500',
    consumption: '3500',
    batteryPower: '6',
    battery: true,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    isCalculationWithBattery: true,
    energyIndependencePercentage: 90,
  };

  updatePotentialYearlyKWhProduction = async (lat, lng) => {
    const potentialYearlyKWhProduction =
      Number(await backendAPI.getYearlyKWhProduction(lat, lng, this.state.roofArea));
    this.setState({ potentialYearlyKWhProduction });
  };

  putResultsOnLoading = () => this.setState(App.DEFAULT_STATE);

  mapClickedHandler = async mapClickEvent => {
    this.putResultsOnLoading();
    const { lat, lng } = mapClickEvent.latLng;
    const { address, geoJson } = await backendAPI.getReverseGeocoding(lat(), lng());

    let roofPolygonGeoJson;
    let roofArea;

    if (geoJson.type === "Polygon") {
      roofPolygonGeoJson = geoJson;
      roofArea = geojsonArea.geometry(geoJson);
    } else {
      const { geoJson, areas } = await backendAPI.getRoofPolygonGeoJson(lat(), lng());
      roofArea = areas.length > 0 ? areas[0].area : App.DEFAULT_ROOF_AREA;
      roofPolygonGeoJson = geoJson;
    }

    this.setState({
      roofArea: Math.round(roofArea*10) / 10,
      roofPolygonGeoJson,
      mapCenterLatLng: null,
      houseAddress: address,
    });

    await this.updatePotentialYearlyKWhProduction(lat(), lng());
  };

  componentWillMount() {
    this.setState({
      userWindowHeight: window.innerHeight + 'px',
      userWindowWidth: window.innerWidth + 'px',
    });
  };

  handleButton_batteryDesired = () => {
    this.setState({ isCalculationWithBattery: true });
  };

  handleButton_noBatteryDesired = () => {
    this.setState({ isCalculationWithBattery: false });
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
    const { geoJson, areas } = await backendAPI.getRoofPolygonGeoJson(lat(), lng());
    const roofArea = areas.length > 0 ? areas[0].area : App.DEFAULT_ROOF_AREA;
    this.setState({
      roofPolygonGeoJson: geoJson,
      roofArea: Math.round(roofArea*10) / 10
    });
    this.props.history.push(ROUTES.RESULTS);
    await this.updatePotentialYearlyKWhProduction(lat(), lng());
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
        potentialYearlyKWhProduction={this.state.potentialYearlyKWhProduction}
        roofArea={this.state.roofArea}
      />
  );

  Evaluation = props => (
    <div>
      {this.getMap()}
      <Route path={ROUTES.LOADING} render={() => <Loading addressSearchBox={props.addressSearchBox}/>}/>
      <Route path={ROUTES.RESULTS} render={() => <this.ResultsPage addressSearchBox={props.addressSearchBox}/>}/>
      <Route path={ROUTES.FINANCIAL} render={() => (this.getFinancial())}/>
      <Route path={ROUTES.SUMMARY} render={() => this.getSummary()} />
      <Route path={ROUTES.DONE} component={Done} />
    </div>
  );

  getSummary() {
    return (
      <Summary
        address={this.state.address}
        panels={FinancialCalculator.getNumPanels(this.state.roofArea)}
        batteryPower={this.state.batteryPower}
        energyIndependencePercentage={this.state.energyIndependencePercentage}
      />
    );
  }

  getFinancial() {
    return (
      <FinancialPlan>
        <FinancialPlanLeftPanel
          desiredInstallationCapacity={this.state.desiredInstallationCapacity}
          handleChangeInSlider_DesiredInstallationCapacity={this.handleChangeInSlider_DesiredInstallationCapacity}
          handleChangeInSlider_YearlyEnergyConsumption={this.handleChangeInSlider_YearlyEnergyConsumption}
          yearlyEnergyConsumption={this.state.yearlyEnergyConsumption}
          handleButton_noBatteryDesired={this.handleButton_noBatteryDesired}
          handleButton_batteryDesired={this.handleButton_batteryDesired}
          isCalculationWithBattery={this.state.isCalculationWithBattery}
        />
      </FinancialPlan>
    );
  }

  handleChangeInSlider_DesiredInstallationCapacity = newDesiredInstallationCapacity => {
    this.setState({ desiredInstallationCapacity: Number(newDesiredInstallationCapacity) });
  };

  handleChangeInSlider_YearlyEnergyConsumption = newYearlyConsumption => {
    this.setState({ yearlyEnergyConsumption: Number(newYearlyConsumption) })
  };

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
