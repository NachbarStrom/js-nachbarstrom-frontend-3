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
  if (isInvalidGeoJson(geoJson)) return EMPTY_POLYGON;
  return geoJson.features[0].geometry.coordinates.map(
    coord => coord.slice(0, -1).map(
      latLngPair => ({ lat: latLngPair[1], lng: latLngPair[0] })
    )
  );
};

const isInvalidGeoJson = geoJson => {
  return !geoJson || !geoJson.features[0];
};

const EMPTY_POLYGON = [];
