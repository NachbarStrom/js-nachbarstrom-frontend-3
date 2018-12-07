import axios from "axios";

export class backendAPI {
  static BACKEND_SERVER_URL = "http://backend.nbstrm.com";
  static ALTERNATE_PORT = ":3000";

  static ROOFS_POLYGONS_ENDPOINT = "/roofs-polygons";
  static REVERSE_GEOCODING_ENDPOINT = "/reverse-geocoding";

  static SOLAR_BENEFITS_ENDPOINT = "/pv-solar-benefits";
  static CORRECTION_TO_YEARLY_KWH_PRODUCTION = 12;
  static DEFAULT_ROOF_TYPE = "Flat";
  static DEFAULT_ROOF_ORIENTATION = "South";

  static getRoofPolygonGeoJson = async (lat, lng) => {
    const url = backendAPI.BACKEND_SERVER_URL + backendAPI.ALTERNATE_PORT + backendAPI.ROOFS_POLYGONS_ENDPOINT;
    const data = { lat: lat, lon: lng };
    const response = await axios.post(url, data);
    if (response.data.geoJson === undefined) throw `No geoJson in '${backendAPI.ROOFS_POLYGONS_ENDPOINT}' response`;
    if (response.data.areas === undefined) throw `No areas in '${backendAPI.ROOFS_POLYGONS_ENDPOINT}' response`;
    return response.data;
  };

  static getReverseGeocoding = async (lat, lng) => {
    const url = backendAPI.BACKEND_SERVER_URL + backendAPI.ALTERNATE_PORT + backendAPI.REVERSE_GEOCODING_ENDPOINT + `/lat=${lat}&lng=${lng}`;
    const response = await axios.get(url);
    const data = response.data;
    if (data.address === undefined) throw `No address in '${backendAPI.REVERSE_GEOCODING_ENDPOINT}' response`;
    if (data.geoJson === undefined) throw `No geoJson in '${backendAPI.REVERSE_GEOCODING_ENDPOINT}' response`;
    return data;
  };

  static getYearlyKWhProduction = async (lat, lng, buildingArea) => {
    const url = backendAPI.BACKEND_SERVER_URL + backendAPI.SOLAR_BENEFITS_ENDPOINT;
    const payload = {
        lat, lon: lng,
        roofType: backendAPI.DEFAULT_ROOF_TYPE,
        orientation: backendAPI.DEFAULT_ROOF_ORIENTATION,
        area: buildingArea,
    };
    const { annualProductionInKWhac } = (await axios.post(url, payload)).data;
    if (annualProductionInKWhac === "no data available") return 0;
    if (annualProductionInKWhac === undefined) throw `No annualProductionInKWhac in 
        ${backendAPI.SOLAR_BENEFITS_ENDPOINT} response`;
    return Math.round(annualProductionInKWhac / backendAPI.CORRECTION_TO_YEARLY_KWH_PRODUCTION);
  };
}
