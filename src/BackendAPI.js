import axios from "axios";

export class backendAPI {
  static BACKEND_SERVER = 'http://backend.nbstrm.com.';

  static getRoofPolygonGeoJson = async (lat, lng) => {
    const port = ":3000";
    const url = backendAPI.BACKEND_SERVER + port + '/roofs-polygons';
    const data = { lat: lat, lon: lng };
    const response = await axios.post(url, data);
    return response.data.geoJson;
  };
}


