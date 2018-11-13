import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import React from "react";
import { compose, withProps } from "recompose";
import { GOOGLE_API_URL } from "./apiURL";
import { GeoJsonPolygon } from "./GeoJsonPolygon";

const DEFAULT_CENTER = { lat: 48.18386, lng: 11.6111 };

const supplementProps = compose(
  withProps({
    googleMapURL: GOOGLE_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
);

export const Map = supplementProps(props =>
  <GoogleMap
    defaultCenter={DEFAULT_CENTER}
    defaultZoom={19}
    defaultMapTypeId={window.google.maps.MapTypeId.SATELLITE}
    defaultTilt={0}
    center={props.centerLatLng}
    onClick={props.onClick}
  >
    <GeoJsonPolygon geoJson={props.geoJson} />
  </GoogleMap>
);
