import axios from "axios";

export class backendAPI {
  static BACKEND_SERVER_URL = 'http://backend.nbstrm.com:3000';
  static ROOFS_POLYGONS_ENDPOINT = "/roofs-polygons";
  static REVERSE_GEOCODING_ENDPOINT = "/reverse-geocoding";

  static getRoofPolygonGeoJson = async (lat, lng) => {
    const url = backendAPI.BACKEND_SERVER_URL + backendAPI.ROOFS_POLYGONS_ENDPOINT;
    const data = { lat: lat, lon: lng };
    const response = await axios.post(url, data);
    if (response.data.geoJson === undefined) throw `No geoJson in '${backendAPI.ROOFS_POLYGONS_ENDPOINT}' response`;
    if (response.data.areas === undefined) throw `No areas in '${backendAPI.ROOFS_POLYGONS_ENDPOINT}' response`;
    return response.data;
  };

  static getReverseGeocoding = async (lat, lng) => {
    const url = backendAPI.BACKEND_SERVER_URL + backendAPI.REVERSE_GEOCODING_ENDPOINT + `/lat=${lat}&lng=${lng}`;
    const response = await axios.get(url);
    console.log(response);
    const data = response.data;
    if (data.address === undefined) throw `No address in '${backendAPI.REVERSE_GEOCODING_ENDPOINT}' response`;
    if (data.geoJson === undefined) throw `No geoJson in '${backendAPI.REVERSE_GEOCODING_ENDPOINT}' response`;
    return data;
  };
}
