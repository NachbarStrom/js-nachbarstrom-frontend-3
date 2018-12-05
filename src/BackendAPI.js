import axios from "axios";

export class backendAPI {
  static BACKEND_SERVER_URL = 'http://backend.nbstrm.com:3000';

  static getRoofPolygonGeoJson = async (lat, lng) => {
    const url = backendAPI.BACKEND_SERVER_URL + '/roofs-polygons';
    const data = { lat: lat, lon: lng };
    const response = await axios.post(url, data);
    return response.data.geoJson;
  };

  static getReverseGeocoding = async (lat, lng) => {
    const url = backendAPI.BACKEND_SERVER_URL + "/reverse-geocoding/" + `lat=${lat}&lng=${lng}`;
    const response = await axios.get(url);
    console.log(response);
    const data = response.data;
    if (data.address === undefined) throw "No address in reverse geocoding response";
    if (data.geoJson === undefined) throw "No geoJson in reverse geocoding response";
    return data;
  }
}
