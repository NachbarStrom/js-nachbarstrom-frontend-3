import axios from "axios";

export class API {
  static BACKEND_SERVER = 'http://backend.nbstrm.com.';

  static getRoofPolygonGeoJson = async (lat, lng) => {
    const port = ":3000";
    const url = API.BACKEND_SERVER + port + '/roofs-polygons';
    const data = { lat: lat, lon: lng };
    const response = await axios.post(url, data);
    return response.data.geoJson;
  };
}


