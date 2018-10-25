import axios from 'axios';

const BACKEND_URL = 'http://backend.nbstrm.com.';

export function getRoofProperties(data) {
  const serverUrl = BACKEND_URL + '/roof-properties';
  return axios.post(serverUrl, data);
}

export function getRoofPolygons(lat, lng) {
  const port = ':3000';
  const url = BACKEND_URL + port + '/roofs-polygons';
  const data = { lat: lat, lon: lng };
  return axios.post(url, data);
}

export async function getPVSolarBenefits(data) {
  const url = BACKEND_URL + '/pv-solar-benefits';
  return await axios.post(url, data);
}
