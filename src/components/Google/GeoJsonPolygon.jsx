import { Polygon } from "react-google-maps";
import React from "react";

const NACHBARSTROM_COLOR = "#4B53FF";

/** allowed props.geoJson are: valid geoJson, null */
export const GeoJsonPolygon = props => (
  <Polygon options={{
    fillColor: NACHBARSTROM_COLOR,
    paths: getPolygonFromGeoJson(props.geoJson)}}
  />
);

const getPolygonFromGeoJson = geoJson => {
  if (hasGeometricalFeatures(geoJson)) {
    console.log("from geometrical features");
    return parseGeometricalFeatures(geoJson)
  }
  if (hasCoordinates(geoJson)) {
    console.log("from coordinates");
    return parseCoordinates(geoJson)
  }
  console.log("empty polyogn");
  return EMPTY_POLYGON
};

const hasGeometricalFeatures = geoJson => (
  geoJson && geoJson.features && geoJson.features[0]
);

const parseGeometricalFeatures = geoJson => (
  geoJson.features[0].geometry.coordinates.map(
    coord => coord.slice(0, -1).map(parseLatLngPair)
  )
);

const parseLatLngPair = latLngPair => ({ lat: latLngPair[1], lng: latLngPair[0] });

const hasCoordinates = geoJson => geoJson && geoJson.coordinates;

const parseCoordinates = geoJson => geoJson.coordinates[0].map(parseLatLngPair);

const EMPTY_POLYGON = [];
